import React from 'react'
import {Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, FormControl, Input,FormLabel, useDisclosure, FormErrorMessage} from "@chakra-ui/react"

import {useForm} from "react-hook-form"
import { useMoralis } from "react-moralis";
const CollectionFormSubmitModal = (props) => {
    const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
    } = useForm()
    const {Moralis, account} = useMoralis();
    const onSubmitModal = async(value) => {
      console.log(value);
      props.onSubmit(value)
    }
    return (
      <>
        <Modal
          onClose={props.onClose}
          isOpen={props.submitForm}
          motionPreset="slideInBottom"
          size="2xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Please Confirm the wallet Address in which you will receive money</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit(onSubmitModal)}>
            <ModalBody pb={10}>
              
                <FormControl isRequired>
                  <FormLabel>Wallet Address</FormLabel>
                  <Input {...register("walletAddress")} name="walletAddress" value={account}/>
                  <FormErrorMessage>Can't submit without funds.</FormErrorMessage>
                </FormControl>
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

export default CollectionFormSubmitModal