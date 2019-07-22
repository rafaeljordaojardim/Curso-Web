import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from "react"
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
//componentes
import Logo from '../components/template/Logo'
import Nav from "../components/template/Nav"
// import Home from "../components/home/Home"
import Fotter from "../components/template/Footer"


export default props => 
    <BrowserRouter>
        <div className="app">
            <Logo/>
            <Nav/>
            <Routes/>
            <Fotter/>
        </div>
    </BrowserRouter>
