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
const FormSubmit = () => {
  return (
    <Box p={2} my={4} borderRadius="13px" borderColor="red" borderWidth="thick" width="2xl">
      <Box my={4} textAlign="left" >
            <Box display={"flex"} flexDirection="row" width="full" justifyContent="space-between" alignItems="center" alignContent="center" height="full">
                <Box width="270px">
                    <Badge colorScheme='green'>
                        <Text fontSize={15} fontWeight="bold">
                            {TruncateAddress('0x3736a0509285b8246863Dba8E3eD00751D6DE7B4')}
                        </Text>
                    </Badge>
                </Box>
                <Box width="270px">
                    <Button width="full" type="submit">
                        Submit
                    </Button>
                </Box>
            </Box>
      </Box>
    </Box>
  )
}

export default FormSubmit