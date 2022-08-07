import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import FormUtil from "./FormUtil";
import FormCommon from "./FormCommon";
import FormSubmit from "./FormSubmit";
import { FormControl, FormLabel, Textarea, Input } from "@chakra-ui/react";
import { Switch, Container, Text } from "@chakra-ui/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  Divider,
  StatArrow,
  AlertIcon,
  StatGroup,
  AlertDescription,
  Alert,
} from "@chakra-ui/react";
import Loader from "./Loader";
import { useForm } from "react-hook-form";
import * as moment from "moment";
const SimpleFormView = (props) => {
  const [showUserInformtation, setShowUserInformation] = useState(true);
  const [loading, setLoading] = useState(false);
  const { data } = props;
  const { metaData } = data;
  console.log(data);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (value) => {
    console.log("assaas");
  };
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
              <Container>{data.description} </Container>
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
                <StatNumber color="teal">
                  {metaData ? metaData.CompanyName : "-"}
                </StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Follow Us</StatLabel>
                <StatNumber color="teal">
                  {metaData ? metaData.Twitter : "-"}
                </StatNumber>
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
                <StatNumber color="teal">
                  {metaData ? metaData.Website : "-"}
                </StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Join Us</StatLabel>
                <StatNumber color="teal">
                  {metaData ? metaData.Discord : "-"}
                </StatNumber>
              </Stat>
            </Box>
          </Box>
          {/* <Box
          boxShadow="dark-lg"
          p={8}
          my={4}
          borderRadius="13px"
          width="2xl"
          color="#fff"
          bgColor="#1E1E1E"
        >
          <Stat>
            <StatLabel>Total Applications Field Till Now</StatLabel>
            <StatNumber>200</StatNumber>
          </Stat>
        </Box> */}
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
            {showUserInformtation ? (
              <>
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
                          <Input type="text" />
                        </FormControl>
                      </Box>
                      <Box width="270px">
                        <FormControl>
                          <FormLabel>Wallet Address</FormLabel>
                          <Input type="text" />
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
                          <FormLabel>Discord Id</FormLabel>
                          <Input type="text" />
                        </FormControl>
                      </Box>
                      <Box width="270px">
                        <FormControl>
                          <FormLabel>Gmail</FormLabel>
                          <Input type="text" />
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
                          <FormLabel>LinkedIn</FormLabel>
                          <Input type="text" />
                        </FormControl>
                      </Box>
                      <Box width="270px">
                        <FormControl>
                          <FormLabel>Github Link</FormLabel>
                          <Input type="text" />
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
              </>
            ) : (
              <></>
            )}
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
            <FormControl mt={1}>
              <FormLabel>Job ID</FormLabel>
              <Input size="md" />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Why do u like to work for 3foRmd</FormLabel>
              <Textarea size="md" />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>!!Roast Us!!</FormLabel>
              <Textarea size="md" />
            </FormControl>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};

export default SimpleFormView;
