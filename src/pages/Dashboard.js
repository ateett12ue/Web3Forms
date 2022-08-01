import React from 'react'
import CreateFormModal from "./CreateFormModal"
import {Box, Text} from "@chakra-ui/react"
import { Routes, Route } from 'react-router-dom'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
const Dashboard = () => {
  return (
    <Box>
        <CreateFormModal openModal={false}/>
        <Box h="500px" w="100%" bgColor={"red"} display="flex" justifyContent="space-evenly" alignItems={"flex-start"}>
            <TableContainer>
                <Table variant='simple' w={'1000px'}>
                    <Thead bg={"green"}>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Form Id</Th>
                        <Th>Status</Th>
                        <Th>Creation Date</Th>
                        <Th>Responses</Th>
                    </Tr>
                    </Thead>
                    <Tbody bg={"pink"}>
                    <Tr justifyContent="space-evenly" alignItems={"flex-start"} onClick={()=>console.log("aaaa")}>
                        <Td>Survey Form</Td>
                        <Td>xxx-xxx-xxx</Td>
                        <Td>4 days left</Td>
                        <Td>22/24/32</Td>
                        <Td>0 Responses</Td>
                    </Tr>
                    <Tr justifyContent="space-evenly" alignItems={"flex-start"}>
                        <Td>Survey Form</Td>
                        <Td>xxx-xxx-xxx</Td>
                        <Td>4 days left</Td>
                        <Td>22/24/32</Td>
                        <Td>0 Responses</Td>
                    </Tr>
                    <Tr justifyContent="space-evenly" alignItems={"flex-start"}>
                        <Td>Survey Form</Td>
                        <Td>xxx-xxx-xxx</Td>
                        <Td>4 days left</Td>
                        <Td>22/24/32</Td>
                        <Td>0 Responses</Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    </Box>
  )
}

export default Dashboard;