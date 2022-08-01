import React from 'react'
import {Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, FormControl, Input,FormLabel, useDisclosure, FormErrorMessage} from "@chakra-ui/react"
const CollectionFormSubmitModal = (props) => {
    const { onClose } = useDisclosure()
  
    return (
      <>
        <Modal
          onClose={onClose}
          isOpen={props.submitForm}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Please Confirm the wallet Address in which you will receive money</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Amount to pool for survey</FormLabel>
                <Input />
                <FormErrorMessage>Can't submit without funds.</FormErrorMessage>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Submit
              </Button>
              <Button onClick={onClose}>Go Back</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default CollectionFormSubmitModal