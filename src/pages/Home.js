import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import {ConnectButton} from "web3uikit"
const Home = () => {
    
  return (
    <Box>
        <Box bg='tomato' w='100%' py={13} color='white' display={'flex'} alignItems="flex-start" justifyContent="space-evenly">
            <Box>
                <Text fontSize={24} fontFamily={"cursive"}>
                    3FORMS
                </Text>
            </Box>
            <Box>
                <Text fontSize={21} fontFamily={"Goudy Bookletter 1911"}>
                    Options
                </Text>
            </Box>
            <Box>
                <ConnectButton/>
            </Box>
        </Box>
        <Box bg='tomato' w='100%' height='676px' color='white' display={'flex'} alignItems="flex-start" justifyContent="space-evenly">
            <Box>
                <Text fontSize={24} fontFamily={"cursive"}>
                    3FORMS
                </Text>
            </Box>
            <Box>
                <Text fontSize={21} fontFamily={"Goudy Bookletter 1911"}>
                    Images
                </Text>
            </Box>
        </Box>
    </Box>
  )
}

export default Home