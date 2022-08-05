import React from 'react'
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
import {useForm} from "react-hook-form"
const FormUtil = () => {
  const { register, handleSubmit } = useForm();
  return (
    <Box boxShadow='dark-lg' p={8} my={4}  borderRadius="13px" width="2xl" color="#fff">
      <Box my={4} textAlign="left" >
            <Box display={"flex"} flexDirection="row" width="full" justifyContent="space-between">
                <Box width="270px">
                    <FormControl>
                        <FormLabel>Form Name</FormLabel>
                        <Input {...register("formName")} name="formName" type="text" required/>
                        <FormHelperText>Please Make Sure Its Unique</FormHelperText>
                    </FormControl>
                </Box>
                <Box width="270px">
                    <FormControl>
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
  )
}

export default FormUtil