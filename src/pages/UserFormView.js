import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import {Box, Text} from "@chakra-ui/react"
import NoMatch from "./NoMatch"
import SimpleFormView from "./SimpleFormView"
import CollectionFormView from "./CollectionFormView"
import SurveyFormView from "./SurveyFormView"
const UserFormView = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [formType, setFormType] = useState('CollectionForm');
    const [formData, setFormData] = useState('');
    const [ethAddress, setEthAddress] = useState('ss');
    let formId = searchParams.get("formId");
    const getForm = () => {
        switch(formType)
        {
            case "SurveyForm": {
                return(<SurveyFormView/>)
            }
            case "CollectionForm": {
                return(<CollectionFormView/>)
            }
            case "SimpleForm": {
                return(<SimpleFormView/>)
            }
            default: {
                return(
                    <NoMatch/>
                )
            }
        }
    }
    if(!formId || !formType)
    {
        return(
            <NoMatch/>
        )
    }
    return(
        <Box>
            <Box bg='tomato' w='100%' mb={4} py={5} color='white' display={'flex'} alignItems="flex-start" justifyContent="space-between">
                <Box>
                    <Text fontSize={24} fontFamily={"cursive"}>
                        3FORMS
                    </Text>
                </Box>
                <Box>
                    <Text fontSize={21} fontFamily={"cursive"}>
                        Connect Button
                    </Text>
                </Box>
          </Box>
            {
                !ethAddress
                ?
                (<Box>Please connect ur wallet</Box>)
                :
                (getForm())
            }
        </Box>
    )
}

export default UserFormView