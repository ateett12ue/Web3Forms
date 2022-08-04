import React,{useState} from 'react'
import {Box, Flex} from '@chakra-ui/react';
import FormUtil from "./FormUtil"
import FormCommon from "./FormCommon"
import FormSubmit from "./FormSubmit"
import {
    FormControl,
    FormLabel,
    Textarea,
    Input
  } from '@chakra-ui/react'
import {
    Switch,
    Container,
    Text
} from '@chakra-ui/react'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from '@chakra-ui/react'
const SimpleFormView = () => {
  const [showUserInformtation, setShowUserInformation] = useState(true);
  return (
    <Flex width="full" align="center" justifyContent="center" direction={"column"} color="white" >
        <form>
        <FormSubmit/>
        <Box p={2} mb={3} borderRadius="13px" borderColor="red" borderWidth="thick" width="2xl" display="flex" justifyContent="space-between">
              <Box>
                <Text>Form Title</Text>
                <Container>Description Comes Here</Container>
              </Box>
              <Box>
                <Stat>
                  <StatLabel>Days Left </StatLabel>
                  <StatNumber>3</StatNumber>
                </Stat>
              </Box>
        </Box>
        <Box p={2} mb={3} borderRadius="13px" borderColor="red" borderWidth="thick" width="2xl">
          <Box display={"flex"} flexDirection="row" width="full" justifyContent="space-between" height="full">
            <Stat>
              <StatLabel>Company's Name</StatLabel>
              <StatNumber>Company Name</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Follow Us</StatLabel>
              <StatNumber>@Twitter_Handel</StatNumber>
            </Stat>
          </Box>
          <Box display={"flex"} flexDirection="row" width="full" justifyContent="space-between" height="full">
            <Stat>
              <StatLabel>Visit Us</StatLabel>
              <StatNumber>www.company.com</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Join Us</StatLabel>
              <StatNumber>@Discord_Id</StatNumber>
            </Stat>
          </Box>
        </Box>
        <Box p={2} mb={3} borderRadius="13px" borderColor="red" borderWidth="thick" width="2xl">
            <Stat>
              <StatLabel>Total Applications Field Till Now</StatLabel>
              <StatNumber>200</StatNumber>
            </Stat>
        </Box>
        <Box>
            <FormControl display={"flex"} flexDir={"row"} mt={10}>
              <Box>
                <FormLabel>Do you want to share this information</FormLabel>
              </Box>
              <Box>
                <Switch colorScheme='teal' defaultChecked onChange={()=>setShowUserInformation(!showUserInformtation)}/>
              </Box>
            </FormControl>
            {
              showUserInformtation
              ?
              <FormCommon type="users"/>
              :
              <></>
            }
        </Box>
        <Box p={2} mb={2} borderRadius="13px" borderColor="red" borderWidth="thick" width="2xl">
            <FormControl mt={1}>
                <FormLabel>Job ID</FormLabel>
                <Input size="md"/>
            </FormControl>
            <FormControl mt={5}>
                <FormLabel>Why do u like to work for 3foRmd</FormLabel>
                <Textarea size="md"/>
            </FormControl>
            <FormControl mt={5}>
                <FormLabel>!!Roast Us!!</FormLabel>
                <Textarea size="md"/>
            </FormControl>
        </Box>
        </form>
    </Flex>
  )
}

export default SimpleFormView