import React from 'react'
import {Route, Routes} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import Juniorplus from "./pages/Juniorplus";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior+',
}

function Routes_() {
    return (
        <div>
            {/*<Switch>*/}
         <Routes>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<Juniorplus/>}/>

                <Route element={<Error404/>}/>
         {/*</Switch>*/}
         </Routes>
        </div>
    )
}

export default Routes_
//
// import {Switch, Route} from "react-router-dom";
// to
//
// import {Routes ,Route} from 'react-router-dom';