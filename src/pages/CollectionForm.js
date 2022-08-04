import React, { useState } from 'react'
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
    const [openModal, toggleModalOpen]=useState(false)
    const submitForm = () => {
        toggleModalOpen(true)
    }
  return (
    <Flex width="full" align="center" justifyContent="center" direction={"column"} color="#fff">
        <Box color="teal" fontSize="2xl" fontWeight="bold" letterSpacing="wider">
            Collection Template
        </Box>
        <form>
        <FormSubmit onSubmit={()=>submitForm()}/>
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
            <Box boxShadow="dark-lg"
          p={8}
          my={4}
          borderRadius="13px"
          width="2xl"
          color="#fff">
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
                <Alert boxShadow="dark-lg"
              status="error"
              borderRadius={13}
              color="gray"
              fontWeight="medium">
                    <AlertIcon />
                    <AlertDescription>Disclaimer — This will be shown with the total amount you collected.</AlertDescription>
                </Alert>
            </Box>
            </Box>
            <Divider orientation='horizontal' my={7}/>
            <Box>
                <Alert status="info"
            borderRadius={13}
            boxShadow="dark-lg"
            color="gray"
            fontWeight="medium">
                    <AlertIcon />
                    <AlertDescription>Everything below this will be filled by your users</AlertDescription>
                </Alert>
            </Box>
            <Box my={4}>
                <FormCommon/>
            </Box>
            <Box  boxShadow="dark-lg"
          p={8}
          my={4}
          borderRadius="13px"
          width="2xl"
          color="#fff">
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
        <CollectionFormSubmitModal openModal={openModal} onClose={()=>toggleModalOpen(false)}/>
    </Flex>
  )
}

export default CollectionForm