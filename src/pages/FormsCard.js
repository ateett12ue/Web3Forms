import React from 'react'
import {Card, Illustration} from "web3uikit"
import {Link} from 'react-router-dom'
const FormsCard = (props) => {
    let formDis= props.data
    return (
        <>
            <Link to={formDis.link}>
                <div
                    style={{
                        width: '250px',
                        height: '250px'
                    }}
                    >
                    <Card
                        description={formDis.description}
                        onClick={()=>{props.onClick(formDis.title)}}
                        setIsSelected={function noRefCheck(){}}
                        title={formDis.title}
                        tooltipText={<span style={{width: "100%"}}>{formDis.toolTip}</span>}
                    >
                        <div>
                        <Illustration
                            height="180px"
                            logo={formDis.logo}
                            width="100%"
                        />
                        </div>
                    </Card>
                </div>
            </Link>
        </>
    )
}

export default FormsCard