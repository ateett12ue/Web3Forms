import React, {useEffect, useState} from 'react'
import {Box} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Flex,
    FormHelperText,
    Input
  } from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
const FormCommon = (props) => {
    const [isDisable, setDisablity] = useState(true);
    useEffect(()=>{
        if(props.type == "users"){
            setDisablity(false) 
        }
        else
        {
            setDisablity(true) 
        }
    },[])
  return (
    <Box p={2} my={4} borderRadius="13px" borderColor="red" borderWidth="thick" width="2xl">
      <Box my={4} textAlign="left" >
            <Box display={"flex"} flexDirection="row" width="full" justifyContent="space-between" height="full">
                <Box width="270px">
                    <FormControl isDisabled={isDisable}>
                        <FormLabel>Name</FormLabel>
                        <Input type="text"/>
                    </FormControl>
                </Box>
                <Box width="270px">
                    <FormControl isDisabled={isDisable}>
                        <FormLabel>Wallet Address</FormLabel>
                        <Input type="text"/>
                    </FormControl>
                </Box>
            </Box>
            <Box display={"flex"} flexDirection="row" width="full" justifyContent="space-between" height="full" mt={1}>
                <Box width="270px">
                    <FormControl isDisabled={isDisable}>
                        <FormLabel>Discord Id</FormLabel>
                        <Input type="text"/>
                    </FormControl>
                </Box>
                <Box width="270px">
                    <FormControl isDisabled={isDisable}>
                        <FormLabel>Gmail</FormLabel>
                        <Input type="text"/>
                    </FormControl>
                </Box>
            </Box>
            <Box display={"flex"} flexDirection="row" width="full" justifyContent="space-between" height="full" mt={1}>
                <Box width="270px">
                    <FormControl isDisabled={isDisable}>
                        <FormLabel>LinkedIn</FormLabel>
                        <Input type="text"/>
                    </FormControl>
                </Box>
                <Box width="270px">
                    <FormControl isDisabled={isDisable}>
                        <FormLabel>Github Link</FormLabel>
                        <Input type="text"/>
                    </FormControl>
                </Box>
            </Box>
      </Box>
      
      <Box>
          {
              isDisable
              ?
              (
                <Alert status='error' borderRadius={13}>
                    <AlertIcon />
                    <AlertDescription>Disclaimer — Please note, These are auto genereated answers and users can opt out of sharing this information.</AlertDescription>
                </Alert>
              )
              :
              (
                <Alert status="info" borderRadius={13}>
                    <AlertIcon />
                    <AlertDescription>Please Note, this information is quite confidential. You can opt out of sharing this.</AlertDescription>
                </Alert>
              )
          }
        </Box>
    </Box>
  )
}

export default FormCommon