import React from 'react'
import {Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, FormControl, Input,FormLabel, useDisclosure, Alert, AlertIcon, AlertDescription
} from "@chakra-ui/react"
const SurveyFormSubmitModal = (props) => {
    const { onClose } = useDisclosure()
  
    return (
      <>
        <Modal
          onClose={onClose}
          isOpen={props.submitForm}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Please Deposit Survey Amount</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Amount</FormLabel>
                <Input />
              </FormControl>
              <Alert status='error' borderRadius={13}>
                <AlertIcon />
                <AlertDescription>Disclaimer — Please note, Once Submitted you can't withdraw your funds.</AlertDescription>
            </Alert>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} isDisabled>
                Submit
              </Button>
              <Button onClick={onClose}>Go Back</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default SurveyFormSubmitModal