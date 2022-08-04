import React from 'react'
import {Box, Flex} from '@chakra-ui/react';
import FormUtil from "./FormUtil"
import FormCommon from "./FormCommon"
import FormSubmit from "./FormSubmit"
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Textarea,
    Stack,
    Radio,
    Select
  } from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Divider
  } from '@chakra-ui/react'
import SurveyFormSubmitModal from "./CollectionFormSubmitModal";
const SurveyForm = () => {
  return (
    <Flex width="full"
    align="center"
    justifyContent="center"
    direction={"column"}
    color="#fff" >
        <Box color="teal" fontSize="2xl" fontWeight="bold" letterSpacing="wider">
            Survey Template
        </Box>
        <form>
        <FormSubmit/>
        <FormUtil/>
            <Box boxShadow="dark-lg"
          p={8}
          my={4}
          borderRadius="13px"
          width="2xl"
          color="#fff">
                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea size="md"/>
                    <FormHelperText>Writing anything that u want to convey</FormHelperText>
                </FormControl>
            </Box>
            <Divider orientation='horizontal' my={7}/>
            <Box my={4}>
                <Alert status='info' borderRadius={13}>
                    <AlertIcon />
                    <AlertDescription>Everything Below this will be filled by ur Users</AlertDescription>
                </Alert>
            </Box>
            <Box my={4}>
                <FormCommon/>
            </Box>
            <Box boxShadow="dark-lg"
                p={8}
                my={4}
                borderRadius="13px"
                width="2xl"
                color="#fff"
            >
                <FormControl mt={1} isDisabled>
                    <FormLabel>What do u think about 3foRmd</FormLabel>
                    <Textarea size="md"/>
                </FormControl>
                <FormControl mt={5} isDisabled>
                    <FormLabel>Which medium do u use to fill this form</FormLabel>
                    <Stack direction='row'>
                        <Radio value='1'>Webapp</Radio>
                        <Radio value='2'>Mobile</Radio>
                        <Radio value='3'>Telegram</Radio>
                    </Stack>
                </FormControl>
                <FormControl my={5} isDisabled>
                    <FormLabel>Where did u heard about us</FormLabel>
                    <Select>
                        <option value='option1'>Facebook</option>
                        <option value='option2'>Telegram</option>
                        <option value='option3'>Discord</option>
                        <option value='option3'>Hackathon</option>
                    </Select>
                </FormControl>
            </Box>
        </form>
        <SurveyFormSubmitModal submitForm={true}/>
    </Flex>
  )
}

export default SurveyForm