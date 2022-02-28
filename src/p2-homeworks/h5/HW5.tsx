import React from 'react'
import Header from './Header'
import Routes_ from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <HashRouter>
                <Header/>
                <Routes_/>
            </HashRouter>
        </div>
    )
}

export default HW5
