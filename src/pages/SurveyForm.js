import React, { useState } from "react";
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
import SurveyFormSubmitModal from "./SurveyFormSubmitModal";
import { useMoralis } from "react-moralis";
import { useForm } from "react-hook-form";
import { getNanoid } from "../getNanoid";
import { useNotification } from "web3uikit";
import Loader from "./Loader";
import * as moment from "moment";
import { useNavigate } from "react-router-dom";
const SurveyForm = () => {
  const [submitModal, setSubmitModal] = useState(false);
  const [value, setValue] = useState(null);
  const { Moralis, account } = useMoralis();
  const [loading, setLoading] = useState(false);
  const dispatch = useNotification();
  let navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (value) => {
    setSubmitModal(true);
    setValue(value);
    console.log("event", value);
  };
  const handleNewNotification = (type, message, title) => {
    dispatch({
      type,
      message: message,
      title: title,
      position: "topR",
    });
  };
  const submitForms = async (data) => {
    setSubmitModal(false);
    console.log("data", data);
    const formId = getNanoid();
    const formCreationData = {
      ethAddress: account,
      formId: formId,
      name: value.formName,
      formType: "Survey",
      status: true,
      closingDate: moment(value.endDate).format("DD/MM/YYYY hh:mm:ss"),
      description: value.description,
      metaData: {}
    };
    setLoading(true);
    await Moralis.Cloud.run("addUpdateForms", formCreationData)
      .then(async (result) => {
        const dataSent = {
          formId: formId,
          tokenAlloted: data.depositAmount,
          timeOfRelease: moment(value.endDate).format("DD/MM/YYYY hh:mm:ss"),
          transactionID:
            "0xcd969959893c13e270bab7cc7eec788e374f51fea99881708292492ef7538f2a",
          currentStatus: "created",
        };
        await Moralis.Cloud.run("addSurveyFormData", dataSent)
          .then((result) => {
            console.log("addSurveyFormData", result);
            setLoading(false);
            handleNewNotification("success", "Form Created", formId);
            navigate("/");
          })
          .catch((ex) => {
            console.log("addSurveyFormData", ex);
            setLoading(false);
            handleNewNotification("error", "Failed", ex);
          });
      })
      .catch((ex) => {
        console.log("addUpdateFormsError", ex);
        setLoading(false);
        handleNewNotification("error", "Failed", ex);
      });
  };

  const closeModal = () => {
    setSubmitModal(false);
  };
  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      direction={"column"}
      color="#fff"
    >
      <Box color="teal" fontSize="2xl" fontWeight="bold" letterSpacing="wider">
        Survey Template
      </Box>
      <Loader isLoading={loading} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormSubmit submitting={isSubmitting} />
        {/* <FormUtil /> */}
        <Box
          boxShadow="dark-lg"
          p={8}
          my={4}
          borderRadius="13px"
          width="2xl"
          color="#fff"
        >
          <Box my={4} textAlign="left">
            <Box
              display={"flex"}
              flexDirection="row"
              width="full"
              justifyContent="space-between"
            >
              <Box width="270px">
                <FormControl isRequired>
                  <FormLabel>Form Name</FormLabel>
                  <Input
                    {...register("formName")}
                    name="formName"
                    type="text"
                    required
                  />
                  <FormHelperText>Please Make Sure Its Unique</FormHelperText>
                </FormControl>
              </Box>
              <Box width="270px">
                <FormControl isRequired>
                  <FormLabel>End Date</FormLabel>
                  <Input
                    {...register("endDate")}
                    name="endDate"
                    type="datetime-local"
                    required
                  />
                  <FormHelperText>
                    After this Date, your form will be disabled for inputs{" "}
                  </FormHelperText>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box>
            <Alert
              boxShadow="dark-lg"
              status="error"
              borderRadius={13}
              color="gray"
              fontWeight="medium"
            >
              <AlertIcon />
              <AlertDescription>
                Disclaimer — Please note, once submitted you can't change this.
              </AlertDescription>
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
            <Textarea {...register("description")} size="md" />
            <FormHelperText>
              Writing anything that u want to convey
            </FormHelperText>
          </FormControl>
        </Box>
        <Divider orientation="horizontal" my={7} />
        <Box my={4}>
          <Alert status="info" borderRadius={13}>
            <AlertIcon />
            <AlertDescription>
              Everything Below this will be filled by ur Users
            </AlertDescription>
          </Alert>
        </Box>
        <Box my={4}>
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
            <FormLabel>What do u think about 3foRmd</FormLabel>
            <Textarea size="md" />
          </FormControl>
          <FormControl mt={5} isDisabled>
            <FormLabel>Which medium do u use to fill this form</FormLabel>
            <Stack direction="row">
              <Radio value="1">Webapp</Radio>
              <Radio value="2">Mobile</Radio>
              <Radio value="3">Telegram</Radio>
            </Stack>
          </FormControl>
          <FormControl my={5} isDisabled>
            <FormLabel>Where did u heard about us</FormLabel>
            <Select>
              <option value="option1">Facebook</option>
              <option value="option2">Telegram</option>
              <option value="option3">Discord</option>
              <option value="option3">Hackathon</option>
            </Select>
          </FormControl>
        </Box>
      </form>
      <SurveyFormSubmitModal
        onClose={closeModal}
        submitForm={submitModal}
        onSubmit={submitForms}
      />
    </Flex>
  );
};

export default SurveyForm;
