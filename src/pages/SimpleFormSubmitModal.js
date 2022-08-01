import React from 'react'
import {Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, FormControl, Input,FormLabel, useDisclosure, Alert, AlertIcon, AlertDescription} from "@chakra-ui/react"

const SimpleFormSubmitModal = (props) => {
    const { onClose } = useDisclosure()
  
    return (
      <>
        <Modal
          onClose={onClose}
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

export default SimpleFormSubmitModal