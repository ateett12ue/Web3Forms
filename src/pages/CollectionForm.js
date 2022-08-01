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
import CollectionFormSubmitModal from "./CollectionFormSubmitModal";
const CollectionForm = () => {
  return (
    <Flex width="full" align="center" justifyContent="center" direction={"column"} >
        <form>
        <FormSubmit/>
        <FormUtil/>
        <Box p={2} mb={3} borderRadius="13px" borderColor="red" borderWidth="thick" width="2xl">
                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea size="md"/>
                    <FormHelperText>Writing anything that u want to convey</FormHelperText>
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
                    <AlertDescription>Disclaimer — Please note, This will be shown with the total amount you collected.</AlertDescription>
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
                    <FormLabel>Address you want your Merch to get Delivered</FormLabel>
                    <Textarea size="md"/>
                </FormControl>
                <FormControl mt={5} isDisabled>
                    <FormLabel>What's your t-shirt Size</FormLabel>
                    <Stack direction='row'>
                        <Radio value='1'>s</Radio>
                        <Radio value='2'>m</Radio>
                        <Radio value='3'>l</Radio>
                        <Radio value='4'>xl</Radio>
                        <Radio value='5'>xxl</Radio>
                        <Radio value='5'>xxxl</Radio>
                    </Stack>
                </FormControl>
            </Box>
        </form>
        <CollectionFormSubmitModal submitForm={true}/>
    </Flex>
  )
}

export default CollectionForm