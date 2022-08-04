import React from "react";
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
const SimpleForm = () => {
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
      <form>
        <FormSubmit />
        <FormUtil />
        <Box
          boxShadow="dark-lg"
          p={8}
          my={4}
          borderRadius="13px"
          width="2xl"
          color="#fff"
        >
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea size="md" />
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
              <FormControl>
                <FormLabel>Your Company Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box width="270px">
              <FormControl>
                <FormLabel>Your Twitter</FormLabel>
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
          >
            <Box width="270px">
              <FormControl>
                <FormLabel>Your Website</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box width="270px">
              <FormControl>
                <FormLabel>Your Discord</FormLabel>
                <Input type="text" />
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
            <FormLabel>Why do u like to work for 3foRmd</FormLabel>
            <Textarea size="md" />
          </FormControl>
          <FormControl mt={5} isDisabled>
            <FormLabel>!!Roast Us!!</FormLabel>
            <Textarea size="md" />
          </FormControl>
        </Box>
      </form>
      <SimpleFormSubmitModal submitForm={false} />
    </Flex>
  );
};

export default SimpleForm;
