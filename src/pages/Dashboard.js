import React,{useEffect, useState} from 'react'
import CreateFormModal from "./CreateFormModal"
import {Box, Tag} from "@chakra-ui/react"
import {useMoralis} from "react-moralis"
import {Table, Badge, Typography, Button} from "web3uikit"
import * as moment from "moment"
const Dashboard = (props) => {
    const {Moralis, account} = useMoralis();
    const [formList, setFormList] = useState([])
    useEffect(()=>{
        async function fetchMyForms() {
            const formList = await Moralis.Cloud.run("getFormsByUserId", {id: account});
            setFormList(formList);
            // await Moralis.Cloud.run("list_name", {"attributes"})
        }
        fetchMyForms()
    },[account])
    
    const closeModal = () => {
        props.modaltoggle(false)
    }
    const openResponses = (formId) => {
        console.log(formId)
    }
    return (
        <Box>
            <Box h="600px" w="100%" display="flex" justifyContent="center" alignItems={"center"}>
                <Table
                alignCellItems="center"
                columnsConfig="1fr 2fr 1fr 1.5fr 1fr 1fr 0.7fr"
                data={
                    formList.map((formData) => {
                        const dateLeft = moment("11/08/2022, 06:24:00", "DD/MM/YYYY hh:mm:ss").fromNow(); 
                        return(
                            <><div style={{marginLeft: '16px'}}><Typography color="#041836" variant="body16">{formData.name}</Typography></div></>,
                            <Typography color="#68738D" variant="body16">{formData.formId}</Typography>,
                            !formData.formId ? <Badge state="danger" text="Closed" /> : <Badge state="success" text="Active" />,
                            <Typography color="#68738D" variant="body16">{formData.closingDate}</Typography>,
                            <Tag size={'lg'} variant='solid' colorScheme='purple'>{formData.formType}</Tag>,
                            <Tag size={'lg'} variant='solid' colorScheme='teal'>{dateLeft}</Tag>,
                            <><Button color="blue" isTransparent size="small" text="Responses" onClick={()=>openResponses(formData.formId)}/></>
                        )
                    })
                }
                header={[
                    <span>Name</span>,
                    <span>Form Id</span>,
                    <span>Status</span>,
                    <span>Creation Date</span>,
                    <span>Form Type</span>,
                    <span>Day Left</span>,
                    <span>Action</span>
                ]}
                isColumnSortable={[
                    true,
                    true,
                    true,
                    true,
                    true,
                    true
                ]}
                maxPages={3}
                onPageNumberChanged={function noRefCheck(){}}
                onRowClick={function noRefCheck(){}}
                pageSize={5}
                />
            </Box>
        </Box>
    )
}

export default Dashboard;