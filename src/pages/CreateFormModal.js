import React, {useState} from 'react'
import {Box,Image, useDisclosure} from "@chakra-ui/react"
import{
Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalFooter,
ModalBody,
ModalCloseButton,
} from '@chakra-ui/react'
const CreateFormModal = (props) => {
  return (
    <Modal isOpen={props.openModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new 3Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display={"flex"} justifyContent="space-evenly" alignItems={"center"}>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    {/* <Image src={"https://bit.ly/2Z4KKcF"} alt={"property.imageAlt"} /> */}
                </Box>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={"https://bit.ly/2Z4KKcF"} alt={"property.imageAlt"} />
                </Box>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    {/* <Image src={"https://bit.ly/2Z4KKcF"} alt={"property.imageAlt"} /> */}
                </Box>
            </Box>
          </ModalBody>
        </ModalContent>

    </Modal>
  )

}

export default CreateFormModal