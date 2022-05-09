import "./Body.css"
import {Sidebar} from './Sidebar.js'
import { Middle } from "./Middle"
import { Right } from "./Right"

export function Body() {
    return (     
        <div className="margin-top flex justify-space-around mainContent">
            <Sidebar/> 
            <Middle />
            <Right />
        </div> 
    )
}