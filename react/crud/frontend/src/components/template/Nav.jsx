import "./Nav.css"
import React from "react"
import NavItem from './NavItem'
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem href="/" awesome="home" label="Início"/>
            <NavItem href="/users" awesome="users" label="Início"/>
            {/* <a href="#/">
                <i className="fa fa-home"></i> Início
            </a> */}
            {/* <a href="#/Users">
                <i className="fa fa-users"></i> Usuários
            </a> */}
        </nav>
    </aside>