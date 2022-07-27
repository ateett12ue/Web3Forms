import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from 'web3uikit';
// import { ConfigProvider } from "antd";
// import enUS from "antd/lib/locale-provider/en_US";
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="xxxxx" serverUrl="xxxxx">
      <NotificationProvider>
        {/* <ConfigProvider locale={enUS}> */}
        {/* <ChakraProvider> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        {/* </ChakraProvider> */}
        {/* </ConfigProvider> */}
      </NotificationProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();