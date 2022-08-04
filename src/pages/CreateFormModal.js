import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Box,Image, useDisclosure} from "@chakra-ui/react"
import{
Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalBody,
ModalCloseButton,
} from '@chakra-ui/react'
import FormsCard from "./FormsCard";
const CreateFormModal = (props) => {
  const formTemplates = [
    {
      title: 'General',
      description: 'Click Here To Create General Form',
      toolTip: 'General Forms are just simple forms with sign capabilities',
      logo:'servers',
      link: '/create-form/general-template'
    },
    {
      title: 'Survey',
      description: 'Click Here To Create Survey Form',
      toolTip: 'Survey Forms needs you to pool ERC20 tokens, which will be paid to form users',
      logo:'chest',
      link: '/create-form/survey-template'
    },
    {
      title: 'Collection',
      description: 'Click Here To Create Collection Form',
      toolTip: 'Collection Forms let you get paid by your form user',
      logo:'token',
      link: '/create-form/collection-template'
    }
  ]
  const closeModal = (formType) => {
    props.closeModal()
  }
  return (
    <Modal motionPreset="slideInBottom" isOpen={props.openModal} onClose={props.closeModal} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display={"flex"} justifyContent="space-evenly" alignItems={"center"} padding={15} marginBottom={18}>
              {
                formTemplates.map((temp)=>{
                  return(
                      <Box key={temp.title} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <FormsCard data={temp} onClick={()=>closeModal()}/>
                      </Box>
                  )
                })
              }
              {/* <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <FormsCard data={temp[0]}/>
              </Box> */}
            </Box>
          </ModalBody>
        </ModalContent>

    </Modal>
  )

}

export default CreateFormModal