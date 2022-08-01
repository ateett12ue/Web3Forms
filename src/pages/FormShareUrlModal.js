import React, {useEffect, useState} from 'react'
import {Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, FormControl, Input,FormLabel, useDisclosure, FormErrorMessage,
    useClipboard
} from "@chakra-ui/react"

const FormShareUrlModal = (props) => {
    const { onClose } = useDisclosure()
    const [value, setValue] = useState('')

    useEffect(()=>{
        setValue(props.linkGenerated)
    },[])

    const { hasCopied, onCopy } = useClipboard(value)
    return (
      <>
        <Modal
          onClose={onClose}
          isOpen={props.submitForm}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Form Created, Share this link to get it filled</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Copy this link</FormLabel>
                <Input value={value} isReadOnly placeholder='Link Created' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
                <Button onClick={onCopy} ml={2}>
                    {hasCopied ? 'Copied' : 'Copy'}
                </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default FormShareUrlModal