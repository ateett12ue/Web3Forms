import React from 'react'
import {Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, FormControl, Input,FormLabel, useDisclosure, Alert, AlertIcon, AlertDescription} from "@chakra-ui/react"

const SimpleFormSubmitModal = (props) => {
    return (
      <>
        <Modal
          onClose={props.onClose}
          isOpen={props.submitForm}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Please Confirm Before Submitting</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Alert status='error' borderRadius={13}>
                <AlertIcon />
                <AlertDescription>Disclaimer — Please note, Once Submitted you can't do any changes.</AlertDescription>
            </Alert>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={props.onSubmit}>
                Submit
              </Button>
              <Button onClick={props.onClose}>Go Back</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default SimpleFormSubmitModal