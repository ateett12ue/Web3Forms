import React from 'react'
import { Box, Text,Button, ButtonGroup } from '@chakra-ui/react'
import {ConnectButton} from "web3uikit"
import {FaGithub} from "react-icons/fa"
import {useMoralis} from "react-moralis"
const Home = () => {
    const {authenticate} = useMoralis()
  return (
    <Box marginTop={2}>
        <Box bg='#1E1E1E' w='100%' py={13} px={9} color='white' display={'flex'} alignItems="flex-start" justifyContent="space-between">
            <Box display="flex" fontWeight="bold">
                <Text fontSize={24} boxShadow='inner'>
                    📜3
                </Text>
                <Text fontSize={20} boxShadow='inner'>
                    fo
                </Text>
                <Text fontSize={28} fontFamily={"cursive"} boxShadow='inner' color="teal">
                    R
                </Text>
                <Text fontSize={20} boxShadow='inner'>
                    md
                </Text>
            </Box>
            <Box>
                <ConnectButton/>
            </Box>
        </Box>
        <Box mt="200px" w='100%' height='100%' color='white' display={'flex'} flexDirection="column" alignContent={"center"} alignItems="center" >
            <Box display={'flex'} flexDirection="column" alignContent={"center"} alignItems="center">
                <Text fontSize={50} fontWeight="800" letterSpacing={"-0.05em"} lineHeight="1.2">
                    Create Awesome Affordable
                </Text>
                <Text fontSize={50} fontWeight="800" letterSpacing={"-0.05em"} lineHeight="1.2">
                    <span style={{color: "#008080"}}>Web3</span> forms
                </Text>
            </Box>
            <Box display={'flex'} flexDirection="column" alignContent={"center"} alignItems="center">
                <Text marginInline="auto" fontSize={22} marginTop={"0.6em"} color="gray.400">
                    An affordable on-chain form builder with powers of web3.
                </Text>
            </Box>
            <Box display={"flex"} flexDir="row" justifyContent="space-between" marginTop={30}>
                <ButtonGroup spacing='6' >
                    <Button colorScheme='teal' padding={7} fontSize="22" width={200} onClick={()=>authenticate()}>Create Form ➡️</Button>
                    <Button colorScheme='pink' padding={7} fontSize="22" width={200} leftIcon={<FaGithub />}>Github</Button>
                </ButtonGroup>
            </Box>
        </Box>
    </Box>
  )
}

export default Home