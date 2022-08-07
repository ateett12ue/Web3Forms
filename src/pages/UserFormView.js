import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import NoMatch from "./NoMatch";
import SimpleFormView from "./SimpleFormView";
import CollectionFormView from "./CollectionFormView";
import SurveyFormView from "./SurveyFormView";
import { useMoralis } from "react-moralis";
import { ConnectButton } from "web3uikit";
import Loader from "./Loader";
const UserFormView = () => {
  const { isAuthenticated, Moralis, account, isInitialized } = useMoralis();
  const [searchParams, setSearchParams] = useSearchParams();
  const [formType, setFormType] = useState("");
  const [formData, setFormData] = useState("");
  const [loading, setLoading] = useState(false);
  let formId = searchParams.get("formId");
  useEffect(() => {
    setLoading(true)
    async function fetchFormByFormId() {
        try
        {
            const allFormsResults = await Moralis.Cloud.run("getFormsByFormId", {formId: formId});
            console.log("allFormsResults", allFormsResults)
            setFormType(allFormsResults.formType)
            setFormData(allFormsResults)
        }
        catch(ex)
        {
            console.log("error from user Forms", ex)
        }
       
    }
    if(isInitialized)
    {
      console.log("isInitialized", isInitialized)
        fetchFormByFormId()
        setLoading(false)
    }
  }, [account]);

  const getForm = () => {
    switch (formType) {
      case "Survey": {
        return <SurveyFormView data={formData}/>;
      }
      case "Collection": {
        return <CollectionFormView data={formData}/>;
      }
      case "General": {
        return <SimpleFormView data={formData}/>;
      }
      default: {
        return <NoMatch />;
      }
    }
  };
  if (!formId || !formType) {
    return <NoMatch />;
  }
  return (
    <Box>
      {!isAuthenticated ? (
        <Box width="100%" height="700px" display="flex" flexDir="column" justifyContent="center" alignContent="center" alignItems="center" color="#fff" fontWeight="semibold" fontSize="4xl">
            <Text>Please connect your wallet to fill this form</Text>
            <ConnectButton />
        </Box>
      ) : (
        <>
        <Loader isLoading={loading} />
        {getForm()}
        </>
      )}
    </Box>
  );
};

export default UserFormView;
