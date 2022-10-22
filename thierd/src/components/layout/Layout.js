import React, {Fragment} from "react";
import './layout.scss'
import {AddClass} from '../../hoc/AddClass'
import { Header } from "../header/Header";
import { Home } from "../../pages/home/Home";
import {Sidebar} from '../sidebar/Sidebar'
import {Route, Routes} from 'react-router-dom'
import { Calc } from "../../pages/calc/Calc";
import { Sample } from "../../pages/sample/Sample";
import { Info } from '../../pages/info/Info'

 

 const Layout = () => {

    return(
        <Fragment>
        <Header/>

        <div className = "content">
            <div className = "routes">
               
               <Routes>
                    <Route exact path = "/" element = {<Home />} />
                    <Route path = "/calc" element = {<Calc />} />
                    <Route path = '/sample' element = {<Sample />} />
                    <Route path = '/info' element = {<Info />} />

               </Routes>
               
             </div>
          <Sidebar />
        </div>
        </Fragment>
    )
}

export default AddClass(Layout, 'layout')