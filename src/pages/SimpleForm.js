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
    Select,
    Input
  } from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Divider
  } from '@chakra-ui/react'
import SimpleFormSubmitModal from "./SimpleFormSubmitModal";
const SimpleForm = () => {
  return (
    <Flex width="full" align="center" justifyContent="center" direction={"column"} >
        <form>
        <FormSubmit/>
        <FormUtil/>
        <Box p={2} mb={3} borderRadius="13px" borderColor="red" borderWidth="thick" width="2xl">
                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea size="md"/>
                    <FormHelperText>Write anything that u want to convey</FormHelperText>
                </FormControl>
        </Box>
            <Box p={2} mb={3} borderRadius="13px" borderColor="red" borderWidth="thick" width="2xl">
                <Box display={"flex"} flexDirection="row" width="full" justifyContent="space-between" height="full">
                    <Box width="270px">
                        <FormControl>
                            <FormLabel>Your Company Name</FormLabel>
                            <Input type="text"/>
                        </FormControl>
                    </Box>
                    <Box width="270px">
                        <FormControl>
                            <FormLabel>Your Twitter</FormLabel>
                            <Input type="text"/>
                        </FormControl>
                    </Box>
                </Box>
                <Box display={"flex"} flexDirection="row" width="full" justifyContent="space-between" height="full">
                <Box width="270px">
                    <FormControl>
                        <FormLabel>Your Website</FormLabel>
                        <Input type="text"/>
                    </FormControl>
                </Box>
                <Box width="270px">
                    <FormControl>
                        <FormLabel>Your Discord</FormLabel>
                        <Input type="text"/>
                    </FormControl>
                </Box>
            </Box>
            <Box mt={4}>
                <Alert status='error' borderRadius={13}>
                    <AlertIcon />
                    <AlertDescription>Disclaimer — Please note, This will be shown with the total application submitted.</AlertDescription>
                </Alert>
            </Box>
            </Box>
            <Divider orientation='horizontal' my={7}/>
            <Box>
                <Alert status='info' borderRadius={13}>
                    <AlertIcon />
                    <AlertDescription>Everything Below this will be filled by ur Users</AlertDescription>
                </Alert>
            </Box>
            <Box>
                <FormCommon/>
            </Box>
            <Box p={2} mb={2} borderRadius="13px" borderColor="red" borderWidth="thick" width="2xl">
                <FormControl mt={1} isDisabled>
                    <FormLabel>Job ID</FormLabel>
                    <Input size="md"/>
                </FormControl>
                <FormControl mt={5} isDisabled>
                    <FormLabel>Why do u like to work for 3foRmd</FormLabel>
                    <Textarea size="md"/>
                </FormControl>
                <FormControl mt={5} isDisabled>
                    <FormLabel>!!Roast Us!!</FormLabel>
                    <Textarea size="md"/>
                </FormControl>
            </Box>
        </form>
        <SimpleFormSubmitModal submitForm={false}/>
    </Flex>
  )
}

export default SimpleForm