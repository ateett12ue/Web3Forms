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
const CollectionForm = () => {
  const [showUserInformtation, setShowUserInformation] = useState(true);
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (value) => {
    console.log("assaas");
  };
  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      direction={"column"}
      color="#fff"
    >
      <Box color="teal" fontSize="3xl" fontWeight="bold" letterSpacing="wider">
        Form Title
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
                Description Comes Here Description Comes Here Description Comes
                Here Description Comes Here Description Comes Here Description
                Comes Here Description Comes Here Description Comes Here
                Description Comes Here Description Comes Here{" "}
              </Container>
            </Box>
            <Box flex="0.5" fontSize="l">
              <Stat>
                <StatLabel>Days Left </StatLabel>
                <StatNumber>3</StatNumber>
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
                <StatNumber color="teal">Company Name</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Follow Us</StatLabel>
                <StatNumber color="teal">@Twitter_Handel</StatNumber>
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
                <StatNumber color="teal">www.company.com</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Join Us</StatLabel>
                <StatNumber color="teal">@Discord_Id</StatNumber>
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
            <Stat>
              <StatLabel>Total Amount Collected Till Now</StatLabel>
              <StatNumber>200 USD</StatNumber>
            </Stat>
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
            {showUserInformtation ? <FormCommon type="users" /> : <></>}
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
              <Textarea size="md" />
            </FormControl>
            <FormControl mt={5} isRequired>
              <FormLabel>What's your t-shirt Size</FormLabel>
              <Stack direction="row">
                <Radio value="1">s</Radio>
                <Radio value="2">m</Radio>
                <Radio value="3">l</Radio>
                <Radio value="4">xl</Radio>
                <Radio value="5">xxl</Radio>
                <Radio value="5">xxxl</Radio>
              </Stack>
            </FormControl>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};

export default CollectionForm;
