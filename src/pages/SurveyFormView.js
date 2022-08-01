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
    Switch
  } from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Divider,
    Text,
    Container,
    Stat,
    StatLabel,
    StatNumber
  } from '@chakra-ui/react'
import SurveyFormSubmitModal from "./CollectionFormSubmitModal";

const SurveyFormView = () => {
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
                <FormLabel>What do u think about 3foRmd</FormLabel>
                <Textarea size="md"/>
            </FormControl>
            <FormControl mt={5}>
                <FormLabel>Which medium do u use to fill this form</FormLabel>
                <Stack direction='row'>
                    <Radio value='1'>Webapp</Radio>
                    <Radio value='2'>Mobile</Radio>
                    <Radio value='3'>Telegram</Radio>
                </Stack>
            </FormControl>
            <FormControl my={5}>
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
    </Flex>
  )
}

export default SurveyFormView