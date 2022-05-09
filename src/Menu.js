
import { MenuItem } from "./MenuItem";
import home from "./images/home.png"
import youtube from "./images/youtube.png"
import castle from "./images/castle.png"
import maze from "./images/maze.png"
import people from "./images/people.png"

// const menu = [

//     {
//         link :"#",
//         src :{}    
//     },
//     {
//         link :"#",
//         src:{youtube} 
//     },
//     {
//         link :"#",
//         src :{castle}    
//     },
//     {
//         link :"#",
//         src :{people}    
//     },
//     {
//         link :"#",
//         src :{maze}    
//     },
// ]


export function Menu() {
    return (
        <>
            <MenuItem src={home} link={"#"}/>  
            <MenuItem src={youtube} link={"#"}/>  
            <MenuItem src={castle} link={"#"}/>  
            <MenuItem src={people} link={"#"}/>  
            <MenuItem src={maze} link={"#"}/>  
        </>
        )
    
}