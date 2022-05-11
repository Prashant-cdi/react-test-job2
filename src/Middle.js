import React, { useState } from "react";
import ReactDOM from "react-dom";
// import ReactDOM from "react-dom/";
import { CreateRoom } from "./CreateRoom"
import { CreateStory } from "./CreateStory"
// import { DisplayStories } from "./DisplayStories"
import { DisplayStories2 } from "./DisplayStories2"
import { Feed } from "./Feed"
import backButton from "./images/back-button.png"
import right from "./images/right.png"
import { WhatsOnMind } from "./WhatsOnMind"


const images = [

   {
        src : "https://picsum.photos/id/182/200/300",
        text: "Neha Sharma",
        profile_pic:"https://picsum.photos/id/242/200/300"
    },

    {
        src : "https://picsum.photos/id/238/200/300",
        text: "Sharma Chetan",
        profile_pic:"https://picsum.photos/id/183/200/300"
    },

   {
        src : "https://picsum.photos/id/180/200/300",
        text: "Be like bro",
        profile_pic:"https://picsum.photos/id/182/200/300"
    },

    {
        src : "https://picsum.photos/id/240/200/300",
        text: "Rahul Verma",
        profile_pic:"https://picsum.photos/id/181/200/300"
    },

    {
        src : "https://picsum.photos/id/241/200/300",
        text: "Vikas Sharma",
        profile_pic :"https://picsum.photos/id/180/200/300"
    },

    {
        src : "https://picsum.photos/id/242/200/300",
        text: "somedata1",
        profile_pic :"https://picsum.photos/id/181/200/300"
    },

    {
        src : "https://picsum.photos/id/243/200/300",
        text: "somedata2",
        profile_pic :"https://picsum.photos/id/182/200/300"
    },

    {
        src : "https://picsum.photos/id/244/200/300",
        text: "somedata3",
        profile_pic :"https://picsum.photos/id/183/200/300"
    },

    {
        src : "https://picsum.photos/id/290/200/300",
        text: "somedata4",
        profile_pic :"https://picsum.photos/id/184/200/300"
    },

    {
        src : "https://picsum.photos/id/291/200/300",
        text: "somedata5",
        profile_pic :"https://picsum.photos/id/185/200/300"
    },

    {
        src : "https://picsum.photos/id/292/200/300",
        text: "somedata6",
        profile_pic :"https://picsum.photos/id/186/200/300"
    }
  
];

export function Middle() {
    return (
        <div className="flex middle">

            <div className="top-div">

                <CreateStory src={"https://picsum.photos/id/237/200/300"} text={"Create Story"} className="createStory" />
                <div id="carousal">

                    <App/>
               
                </div>

            </div>

            <div className="second-middle-div">
                <WhatsOnMind/>
            </div>

            <div className="third-middle-div">
                <CreateRoom/>
            </div>

            <div className="fourth-middle-div">
                <Feed/>
            </div>
                      
        </div>
    )
}





    const App = () => {
       
        var [counter, setCounter] = useState(0);
        var i=counter;

        if(i>=1){

            console.log("left arrow is displayed")
            document.getElementById("leftarrow").style.display = "block";
        }
        
        if(i===1){
            document.getElementById("rightarrow").style.display = "block";
        }

        if(i===images.length-5){
            console.log("hiding right arrow")
            document.getElementById("rightarrow").style.display = "none";
        }   

        if(counter==0) {
            if(document.getElementById("leftarrow") ){
                document.getElementById("leftarrow").style.display = "none"
            }
        }
      
       
        return (
       <>
            <img src={backButton} alt="arrowleft" width="30px" className="arrows" id="leftarrow" onClick={() => setCounter(counter - 1) }/> 
              
                <DisplayStories2 data={images[i]} classname ="firstStory" />
                <DisplayStories2 data={images[++i]} classname ="secondStory"  />
                <DisplayStories2 data={images[++i]} classname ="thirdStory" />
                <DisplayStories2 data={images[++i]} classname ="fourthStory" />
                <DisplayStories2 data={images[++i]} classname ="fifthStory" />

            <img src={right} alt="arrowright" width="30px" className="arrows" id="rightarrow" onClick={() => setCounter(counter + 1)}/>  
       
         
        </>
        );
       
      };

    

