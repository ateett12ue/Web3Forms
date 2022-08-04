import React from 'react'
import {Loading} from "web3uikit"
const Loader = (props) => {
    if(props.isLoading)
    {
        return (
            <div
            style={{
                backgroundColor: '#ECECFE',
                borderRadius: '8px',
                padding: '20px'
            }}
            >
                <Loading
                    size={40}
                    spinnerColor="#2E7DAF"
                />
            </div>
          )
    }
    else
    {
        return(
            <></>
        )
    }
}

export default Loader