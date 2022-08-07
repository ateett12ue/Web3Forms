import React,{useEffect, useState} from 'react'
import CreateFormModal from "./CreateFormModal"

import {Box, Tag, useClipboard} from "@chakra-ui/react"
import {useMoralis} from "react-moralis"
import {Table, Badge, Typography, Button} from "web3uikit"
import * as moment from "moment"
const Dashboard = (props) => {
    const {Moralis, account} = useMoralis();
    const [formList, setFormList] = useState([])
    const [formId, setFormId] = useState("")
    const { hasCopied, onCopy } = useClipboard(formId)
    useEffect(()=>{
        async function fetchAllForms() {
            try
            {
                const allFormsResults = await Moralis.Cloud.run("getFormsByUserId", {id: account});
                const result = formMappedData(allFormsResults)
                setFormList(result)
            }
            catch(ex)
            {
                console.log("error from dash", ex)
            }
           
        }
        // async function UploadIpfs(ethAdd, data){
        
        //     const metaData = {
        //         "name": ethAdd,
        //         "description": data
        //     }
        //     const file = new Moralis.File("file.json", {base64: btoa(JSON.stringify(metaData ))})
        //     await file.saveIPFS();
        
        //     console.log(file.ipfs(), file.hash())
        
        //     return file.ipfs();
        // } 
        
        // UploadIpfs("asassasaas", {name:"atee", class:"assaas"})
        
        fetchAllForms()
    },[])
    const formMappedData = (data) => {
        const dataArray = []
        const result= data.forEach((formData) => {
            const dateLeft = moment(formData.closingDate, "DD/MM/YYYY hh:mm:ss").fromNow(); 
            let data = []
            async function copyFormId(){
                let formId = formData.formId;
                await navigator.clipboard.writeText(`/user-view-form?formId=${formId}`);
            }
            data.push(<><div style={{marginLeft: '16px'}}><Typography color="#041836" variant="body16">{formData.name}</Typography></div></>)
            data.push(<Typography color="#68738D" variant="body16">{formData.formId}</Typography>,)
            data.push(!formData.formId ? <Badge state="danger" text="Closed" /> : <Badge state="success" text="Active" />)
            data.push(<Typography color="#68738D" variant="body16">{formData.closingDate}</Typography>)
            data.push(<Tag size={'lg'} variant='solid' colorScheme='purple'>{formData.formType}</Tag>)
            data.push(<Tag size={'lg'} variant='solid' colorScheme='teal'>{dateLeft}</Tag>)
            data.push(<><Button color="blue" isTransparent size="small" text="CopyFormId" onClick={copyFormId()}/></>)
            dataArray.push(data)
        })
        return dataArray;
    }
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
                columnsConfig="1.5fr 2fr 1fr 1.5fr 1fr 1fr 0.7fr"
                data={formList}
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