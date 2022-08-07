import React, {useState} from "react";
import {useForm} from "react-hook-form"
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
} from "@chakra-ui/react";
import SimpleFormSubmitModal from "./SimpleFormSubmitModal";
import { useMoralis } from "react-moralis";
import { getNanoid } from "../getNanoid";
import { useNotification } from "web3uikit";
import Loader from "./Loader";
import * as moment from 'moment'
import { useNavigate } from 'react-router-dom'
const SimpleForm = () => {
  const [submitModal, setSubmitModal] = useState(false)
  const [value, setValue] = useState(null)
  const { Moralis, account } = useMoralis();
  const [loading, setLoading] = useState(false);
  const dispatch = useNotification();
  let navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (value) => {
    setSubmitModal(true);
    setValue(value);
    console.log("event", value);
  }

  const handleNewNotification = (type, message, title) => {
    dispatch({
      type,
      message: message,
      title: title,
      position: "topR",
    });
  };


  const submitForms= async() =>{
    setSubmitModal(false);
    const formId = getNanoid();
    const formCreationData = {
      ethAddress: account,
      formId: formId,
      name: value.formName,
      formType: "General",
      status: true,
      closingDate: moment(value.endDate).format("DD/MM/YYYY hh:mm:ss"),
      description: value.description,
      metaData: {
        CompanyName: value.companyName,
        Twitter: value.twitter,
        Website: value.website,
        Discord: value.discord
      }
    };
    setLoading(true);
    await Moralis.Cloud.run("addUpdateForms", formCreationData)
      .then(async(result) => {
        await Moralis.Cloud.run("addGeneralFormsData", {formId: formId, ethAddress: account}).then((result) => {
        console.log("addGeneralFormsData", result);
        setLoading(false);
        handleNewNotification("success", "Form Created", formId);
        navigate('/');
        })
      .catch((ex) => {
        console.log("addGeneralFormsData", ex);
        setLoading(false);
        handleNewNotification("error", "Failed", ex);
      });
      })
      .catch((ex) => {
        console.log("addUpdateFormsError", ex);
        setLoading(false);
        handleNewNotification("error", "Failed", ex);
      });
  }
  const closeModal = () => {
    setSubmitModal(false);
  }
  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      direction={"column"}
      color="#fff"
    >
      <Box color="teal" fontSize="2xl" fontWeight="bold" letterSpacing="wider">
        General Template
      </Box>
        <Loader isLoading={loading} />
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormSubmit submitting={isSubmitting}/>
        {/* <FormUtil /> */}
        <Box boxShadow='dark-lg' p={8} my={4}  borderRadius="13px" width="2xl" color="#fff">
          <Box my={4} textAlign="left" >
                <Box display={"flex"} flexDirection="row" width="full" justifyContent="space-between">
                    <Box width="270px">
                        <FormControl isRequired>
                            <FormLabel>Form Name</FormLabel>
                            <Input {...register("formName")} name="formName" type="text" required/>
                            <FormHelperText>Please Make Sure Its Unique</FormHelperText>
                        </FormControl>
                    </Box>
                    <Box width="270px">
                        <FormControl isRequired>
                            <FormLabel>End Date</FormLabel>
                            <Input {...register("endDate")} name="endDate" type="datetime-local" required/>
                            <FormHelperText>After this Date, your form will be disabled for inputs </FormHelperText>
                        </FormControl>
                    </Box>
                </Box>
                </Box>
                <Box>
                      <Alert boxShadow='dark-lg' status='error' borderRadius={13} color='gray' fontWeight="medium">
                          <AlertIcon />
                          <AlertDescription>Disclaimer — Please note, once submitted you can't change this.</AlertDescription>
                      </Alert>
                  </Box>
          </Box>
        <Box
          boxShadow="dark-lg"
          p={8}
          my={4}
          borderRadius="13px"
          width="2xl"
          color="#fff"
        >
          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea {...register("description")} name="description" size="md" required/>
            <FormHelperText>
              Write anything that u want to convey
            </FormHelperText>
          </FormControl>
        </Box>
        <Box
          boxShadow="dark-lg"
          p={8}
          my={4}
          borderRadius="13px"
          width="2xl"
          color="#fff"
        >
          <Box
            display={"flex"}
            flexDirection="row"
            width="full"
            justifyContent="space-between"
            height="full"
          >
            <Box width="270px">
              <FormControl isRequired>
                <FormLabel>Your Company Name</FormLabel>
                <Input {...register("companyName")} name="companyName" type="text" required/>
              </FormControl>
            </Box>
            <Box width="270px">
              <FormControl isRequired>
                <FormLabel>Your Twitter</FormLabel>
                <Input {...register("twitter")} name="twitter" type="text" required/>
              </FormControl>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection="row"
            width="full"
            justifyContent="space-between"
            height="full"
          >
            <Box width="270px">
              <FormControl isRequired>
                <FormLabel>Your Website</FormLabel>
                <Input {...register("website")} name="website" type="text" required/>
              </FormControl>
            </Box>
            <Box width="270px">
              <FormControl isRequired>
                <FormLabel>Your Discord</FormLabel>
                <Input {...register("discord")} name="discord" type="text" required/>
              </FormControl>
            </Box>
          </Box>
          <Box  my={4}>
            <Alert
              boxShadow="dark-lg"
              status="error"
              borderRadius={13}
              color="gray"
              fontWeight="medium"
            >
              <AlertIcon />
              <AlertDescription>
                Disclaimer — This information will be shown with the total
                application submitted.
              </AlertDescription>
            </Alert>
          </Box>
        </Box>
        <Divider orientation="horizontal" my={7} />
        <Box  my={4}>
          <Alert
            status="info"
            borderRadius={13}
            boxShadow="dark-lg"
            color="gray"
            fontWeight="medium"
          >
            <AlertIcon />
            <AlertDescription>
              Everything below this will be filled by your users
            </AlertDescription>
          </Alert>
        </Box>
        <Box  my={4}>
          <FormCommon />
        </Box>
        <Box
          boxShadow="dark-lg"
          p={8}
          my={4}
          borderRadius="13px"
          width="2xl"
          color="#fff"
        >
          <FormControl mt={1} isDisabled>
            <FormLabel>Job ID</FormLabel>
            <Input size="md" />
          </FormControl>
          <FormControl mt={5} isDisabled>
            <FormLabel>Why do u like to work for ReForm</FormLabel>
            <Textarea size="md" />
          </FormControl>
          <FormControl mt={5} isDisabled>
            <FormLabel>!!Roast Us!!</FormLabel>
            <Textarea size="md" />
          </FormControl>
        </Box>
      </form>
      <SimpleFormSubmitModal onClose={closeModal} submitForm={submitModal} onSubmit={submitForms}/>
    </Flex>
  );
};

export default SimpleForm;
