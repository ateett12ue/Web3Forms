import React, {useState} from 'react'
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
    Divider,
    Text,
    Container,
    Switch,
    Stat,
    StatLabel,
    StatNumber
  } from '@chakra-ui/react'
import CollectionFormSubmitModal from "./CollectionFormSubmitModal";
const CollectionForm = () => {
  const [showUserInformtation, setShowUserInformation] = useState(true);
  return (
    <Flex width="full" align="center" justifyContent="center" direction={"column"} >
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
              <StatLabel>Total Amount Collected</StatLabel>
              <StatNumber>200</StatNumber>
            </Stat>
            <Alert status='error' borderRadius={13}>
              <AlertIcon />
              <AlertDescription>This form requires you to pay 1 USDT to Submit</AlertDescription>
            </Alert>
        </Box>
            <Divider orientation='horizontal' my={7}/>
            
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
                <FormControl mt={1} isRequired>
                    <FormLabel>Address you want your Merch to get Delivered</FormLabel>
                    <Textarea size="md"/>
                </FormControl>
                <FormControl mt={5} isRequired>
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
    </Flex>
  )
}

export default CollectionForm