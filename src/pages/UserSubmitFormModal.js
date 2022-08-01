import React from 'react'
import {Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, FormControl, Input,FormLabel, useDisclosure, Alert, AlertIcon, AlertDescription
} from "@chakra-ui/react"
const UserSubmitFormModal = (props) => {
    const { onClose } = useDisclosure()
  
    return (
      <>
        <Modal
          onClose={onClose}
          isOpen={props.submitForm}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign the popup for siging your response</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Alert status='error' borderRadius={13}>
                <AlertIcon />
                <AlertDescription>Once Submitted, You can't renter details</AlertDescription>
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

export default UserSubmitFormModal