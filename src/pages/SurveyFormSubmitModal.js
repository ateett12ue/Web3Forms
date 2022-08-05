import React from 'react'
import {Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, FormControl, Input,FormLabel, Alert, AlertIcon, AlertDescription
} from "@chakra-ui/react"
import {useForm} from "react-hook-form"
const SurveyFormSubmitModal = (props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmitModal = async(value) => {
    console.log(value);
    props.onSubmit(value)
  }
  
    return (
      <>
        <Modal
          onClose={props.onClose}
          isOpen={props.submitForm}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Please Deposit Survey Amount</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit(onSubmitModal)}>
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Amount</FormLabel>
                <Input {...register("depositAmount")} name="depositAmount"/>
              </FormControl>
              <Alert status='error' borderRadius={13} mt={5}>
                <AlertIcon />
                <AlertDescription>Disclaimer — Please note, Once Submitted you can't withdraw your funds.</AlertDescription>
            </Alert>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} type="submit">
                Submit
              </Button>
              <Button onClick={props.onClose}>Go Back</Button>
            </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </>
    )
}

export default SurveyFormSubmitModal