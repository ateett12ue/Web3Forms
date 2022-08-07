import React, {useEffect, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import {Box, Text, Button} from "@chakra-ui/react"
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
  const {isAuthenticated, Moralis, account} = useMoralis();
  const [openModal, toggleModalOpen] = useState(false)
  const openToggle=(toggle)=>{
    toggleModalOpen(toggle)
  }
  return(
    <div>
      {
        !isAuthenticated
        ?
        (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/user-view-form" element={<UserFormView/>} />
          </Routes>
        )
        :
        (
          <>
          <Box w='100%' px={5} py={5} color='gray.400' display={'flex'} alignItems="flex-start" justifyContent="space-between">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Box display="flex" fontWeight="bold">
                    <Text fontSize={28} fontFamily={"cursive"} boxShadow='inner' color="teal" letterSpacing="wider">
                        Re
                    </Text>
                    <Text fontSize={20} fontFamily={"cursive"} boxShadow='inner'>
                        Form
                    </Text>
                </Box>
              </Link>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
              <Box>
                  <Button onClick={()=>openToggle(true)} color="teal">
                      Create Forms
                  </Button>
              </Box>
              <ConnectButton/>
            </Box>
          </Box>
          <CreateFormModal openModal={openModal} closeModal={()=>toggleModalOpen(false)}/>
          <Routes>
            <Route exact path="/" element={<Dashboard/>} />
            <Route exact path="/create-form" element={<CreateFormModal openModal={true}/>} />
            <Route exact path="/show-form-response" element={<ViewForm/>} />
            <Route exact path="/create-form/survey-template" element={<SurveyForm/>} />
            <Route exact path="/create-form/collection-template" element={<CollectionForm/>} />
            <Route exact path="/create-form/general-template" element={<SimpleForm/>} />
            <Route exact path="/user-view-form" element={<UserFormView/>} />
            <Route path="*" element={<NoMatch/>} />
            
          </Routes>
          </>
        )
      }
      </div>
  )
};

export default App;