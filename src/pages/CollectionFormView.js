import React, { useState,useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import FormUtil from "./FormUtil";
import FormCommon from "./FormCommon";
import FormSubmit from "./FormSubmit";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  Stack,
  Radio,
  Select,
  Input,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Divider,
  Text,
  Container,
  Switch,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import Loader from "./Loader";
import { useMoralis } from "react-moralis";
import { useForm } from "react-hook-form";
import { getNanoid } from "../getNanoid";
import { useNotification } from "web3uikit";
import * as moment from "moment"

const CollectionForm = (props) => {
  const {account, Moralis}= useMoralis()
  const [showUserInformtation, setShowUserInformation] = useState(true);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [discordId, setDiscordId] = useState("");
  const [twitter, setTwitter] = useState("");
  const [github, setGithub] = useState("");
  const {data} = props;
  const {metaData} = data;
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const dispatch = useNotification();
  useEffect(()=>{
    async function getCustomData() {
      await Moralis.Cloud.run("getCustomAnswersByEthId", {id: account}).then((result)=>{
        if(result.length>0)
        {
          setGithub(result[0].githubId)
          setDiscordId(result[0].discordId)
          setUserName(result[0].name)
          setTwitter(result[0].twitterHandle)
        }
      }).catch((error)=>{
        console.log("error", error)
      })
    }
    getCustomData()
  },[account])
  const handleNewNotification = (type, message, title) => {
    dispatch({
      type,
      message: message,
      title: title,
      position: "topR",
    });
  };
  const onSubmit = async (value) => {
    console.log("value", value);
    const responseData = {
      formId: data.formId,
      submittedBy: account,
      response: 
        [
          {
            question:"Address you want your Merch to get Delivered",
            answer:value.collection_question1
          },
          {
            question:"What's your t-shirt Size",
            answer:value.collection_question2
          }
        ]
      }
      setLoading(true);
      await Moralis.Cloud.run("addUpdateFormsResponses", responseData)
      .then(async (result) => {
        if(showUserInformtation)
        {
          const customAnswer = {
            name: userName,
            ethAddress: account,
            twitterHandle: twitter,
            githubId: github,
            discordId: discordId,
            formId: data.formId,
          }
          await Moralis.Cloud.run("addUpdateCustomAnswers", customAnswer).then((result)=> {
            setLoading(false);
            handleNewNotification("success", "Response Submitted", data.formId);
          }).catch((ex) => {
            console.log("addUpdateCustomAnswers", ex);
            setLoading(false);
            handleNewNotification("error", "Failed", ex);
          });
        }
      })
      .catch((ex) => {
        console.log("addUpdateFormsResponses", ex);
        setLoading(false);
        handleNewNotification("error", "Failed", ex);
      });
  }
  const dateLeft = moment(data.closingDate, "DD/MM/YYYY hh:mm:ss").fromNow(); 
  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      direction={"column"}
      color="#fff"
    >
      <Box color="teal" fontSize="3xl" fontWeight="bold" letterSpacing="wider">
        {data.name}
      </Box>
      <Loader isLoading={loading} />
      <Box borderRadius="13px" p={5} mb={5} bgColor="whiteAlpha.500">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormSubmit submitting={isSubmitting} />
          <Box
            boxShadow="dark-lg"
            p={5}
            my={4}
            bgColor="#1E1E1E"
            borderRadius="13px"
            width="2xl"
            color="#fff"
            display="flex"
            direction={"row"}
            justifyContent="space-between"
          >
            <Box flex="4" fontSize="xl">
              <Container>
                {data.description}{" "}
              </Container>
            </Box>
            <Box flex="0.8" fontSize="l">
              <Stat>
                <StatLabel>Form Ends In</StatLabel>
                <StatNumber color="teal">{dateLeft}</StatNumber>
              </Stat>
            </Box>
          </Box>
          <Box
            boxShadow="dark-lg"
            p={8}
            my={4}
            borderRadius="13px"
            width="2xl"
            color="#fff"
            bgColor="#1E1E1E"
          >
            <Box
              display={"flex"}
              flexDirection="row"
              width="full"
              justifyContent="space-between"
              height="full"
            >
              <Stat>
                <StatLabel>Company's Name</StatLabel>
                <StatNumber color="teal">{metaData ? metaData.CompanyName : "-"}</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Follow Us</StatLabel>
                <StatNumber color="teal">{metaData ? metaData.Twitter : "-"}</StatNumber>
              </Stat>
            </Box>
            <Box
              display={"flex"}
              flexDirection="row"
              width="full"
              justifyContent="space-between"
              height="full"
            >
              <Stat>
                <StatLabel>Visit Us</StatLabel>
                <StatNumber color="teal">{metaData ? metaData.Website : "-"}</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Join Us</StatLabel>
                <StatNumber color="teal">{metaData ? metaData.Discord : "-"}</StatNumber>
              </Stat>
            </Box>
          </Box>
          <Box
            boxShadow="dark-lg"
            p={8}
            my={4}
            borderRadius="13px"
            width="2xl"
            color="#fff"
            bgColor="#1E1E1E"
          >
            <Alert
              boxShadow="dark-lg"
              status="error"
              borderRadius={13}
              color="gray"
              fontWeight="medium"
            >
              <AlertIcon />
              <AlertDescription>
                This form requires you to pay 1 USDT to Submit
              </AlertDescription>
            </Alert>
          </Box>

          <Divider color="#1E1E1E" orientation="horizontal" my={7} />

          <Box
            boxShadow="dark-lg"
            px={4}
            pt={2.5}
            pb={3}
            my={4}
            borderRadius="13px"
            width="2xl"
            color="#fff"
            bgColor="#1E1E1E"
          >
            <FormControl display={"flex"} flexDir={"row"}>
              <Box>
                <FormLabel>Do you want to share this information</FormLabel>
              </Box>
              <Box>
                <Switch
                  colorScheme="teal"
                  defaultChecked
                  onChange={() => setShowUserInformation(!showUserInformtation)}
                />
              </Box>
            </FormControl>
            {showUserInformtation ? <>
                <Box
                  boxShadow="dark-lg"
                  py={8}
                  px={8}
                  my={1}
                  borderRadius="13px"
                  width={"1.5xl"}
                  color="#fff"
                >
                  <Box my={4} textAlign="left">
                  <Box
                      display={"flex"}
                      flexDirection="row"
                      width="full"
                      justifyContent="space-between"
                      height="full"
                    >
                      <Box width="270px">
                        <FormControl>
                          <FormLabel>Name</FormLabel>
                          <Input onChange={(event)=>setUserName(event.target.value)} value={userName} type="text" />
                        </FormControl>
                      </Box>
                      <Box width="270px">
                        <FormControl>
                          <FormLabel>Discord Id</FormLabel>
                          <Input onChange={(event)=>setDiscordId(event.target.value)} value={discordId} type="text" />
                        </FormControl>
                      </Box>
                    </Box>
                    <Box
                      display={"flex"}
                      flexDirection="row"
                      width="full"
                      justifyContent="space-between"
                      height="full"
                      mt={1}
                    >
                      <Box width="270px">
                        <FormControl>
                          <FormLabel>Twitter</FormLabel>
                          <Input onChange={(event)=>setTwitter(event.target.value)} value={twitter} type="text" />
                        </FormControl>
                      </Box>
                      <Box width="270px">
                        <FormControl>
                          <FormLabel>Github Link</FormLabel>
                          <Input value={github} onChange={(event)=>setGithub(event.target.value)} type="text" />
                        </FormControl>
                      </Box>
                    </Box>
                  </Box>

                  <Box>
                    <Alert
                      status="error"
                      borderRadius={13}
                      boxShadow="dark-lg"
                      color="gray"
                      fontWeight="medium"
                    >
                      <AlertIcon />
                      <AlertDescription>
                        Please Note, this information is quite confidential. You
                        can opt out of sharing this.
                      </AlertDescription>
                    </Alert>
                  </Box>
                </Box>
              </> : <></>}
          </Box>
          <Box
            boxShadow="dark-lg"
            p={8}
            my={4}
            borderRadius="13px"
            width="2xl"
            color="#fff"
            bgColor="#1E1E1E"
          >
            <FormControl mt={1} isRequired>
              <FormLabel>
                Address you want your Merch to get Delivered
              </FormLabel>
              <Textarea {...register("collection_question1")} name="collection_question1" size="md" />
            </FormControl>
            <FormControl mt={5} isRequired>
              <FormLabel>What's your t-shirt Size</FormLabel>
              <Select {...register("collection_question2")} name="collection_question2">
                <option value="Webapp">s</option>
                <option value="Mobile">m</option>
                <option value="Telegram">l</option>
                <option value="Telegram">xl</option>
                <option value="Telegram">xxl</option>
                <option value="Telegram">xxxl</option>
              </Select>
            </FormControl>
          </Box>
        </form>
      </Box>
    </Flex>
  )
};

export default CollectionForm;
