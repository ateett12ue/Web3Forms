import React, {useEffect, useState} from 'react';
import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import {Box, Text} from "@chakra-ui/react"
import NoMatch from './pages/NoMatch'
import CreateFormModal from "./pages/CreateFormModal"
import ViewForm from "./pages/ViewForm"
import SurveyForm from "./pages/SurveyForm";
import CollectionForm from "./pages/CollectionForm";
import SimpleForm from "./pages/SimpleForm";
import UserFormView from "./pages/UserFormView";
import {ConnectButton} from "web3uikit"
import {useMoralis} from "react-moralis";
const App = () => {
  // const [authentication, setAuthentication] = useState(true)
  const {isAuthenticated} = useMoralis();
  return(
    <>
      {
        !isAuthenticated
        ?
        (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        )
        :
        (
          <>
          <Box bg='tomato' w='100%' py={5} color='white' display={'flex'} alignItems="flex-start" justifyContent="space-evenly">
            <Box>
                <Text fontSize={24} fontFamily={"cursive"}>
                    3FORMS
                </Text>
            </Box>
            <Box>
                <Text fontSize={21} fontFamily={"Goudy Bookletter 1911"} onClick={()=>{console.log('aaahhhaaa', isAuthenticated)}}>
                    Create Forms
                </Text>
            </Box>
            <Box>
                <ConnectButton/>
            </Box>
          </Box>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/create-form" element={<CreateFormModal openModal={true}/>} />
            <Route exact path="/show-form-response" element={<ViewForm/>} />
            <Route exact path="/create-form/survey-template" element={<SurveyForm/>} />
            <Route exact path="/create-form/collection-template" element={<CollectionForm/>} />
            <Route exact path="/create-form/simple-template" element={<SimpleForm/>} />
            <Route exact path="/user-view-form" element={<UserFormView/>} />
            <Route path="*" element={<NoMatch/>} />
          </Routes>
          </>
        )
      }
      </>
  )
};

export default App;