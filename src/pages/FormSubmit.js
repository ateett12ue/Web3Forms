import React from 'react'
import {Box} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Flex,
    FormHelperText,
    Input,
    Text,
    Button
  } from '@chakra-ui/react'
import {
    Badge
  } from '@chakra-ui/react'
import {TruncateAddress} from "../addressTruncate"
import {useMoralis} from "react-moralis"
const FormSubmit = (props) => {
  const {user} = useMoralis();
  return (
    <Box boxShadow='dark-lg' p={2} my={4}  borderRadius="13px" width="2xl" color="#fff">
      <Box my={4} textAlign="left" >
            <Box display={"flex"} flexDirection="row" width="full" justifyContent="space-between" alignItems="center" alignContent="center" height="full">
                <Box width="270px">
                    <Badge color="#fff" bg="teal" padding={2} borderRadius="2xl">
                        <Text fontSize={18} fontWeight="medium">
                            {TruncateAddress(user.attributes.ethAddress)}
                        </Text>
                    </Badge>
                </Box>
                <Box width="270px">
                    <Button isLoading={props.submitting} loadingText="Submitting" type="submit" width="full" bg="teal" whiteSpace="normal">
                        SUBMIT
                    </Button>
                </Box>
            </Box>
      </Box>
    </Box>
  )
}

export default FormSubmit