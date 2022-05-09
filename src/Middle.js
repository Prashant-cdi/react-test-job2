import { ReactDOM } from "react"
import { CreateRoom } from "./CreateRoom"
import { CreateStory } from "./CreateStory"
import { DisplayStories } from "./DisplayStories"
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
        src : "https://picsum.photos/id/241/200/300",
        text: "Vikas Sharma",
        profile_pic :"https://picsum.photos/id/180/200/300"
    },

    {
        src : "https://picsum.photos/id/241/200/300",
        text: "Vikas Sharma",
        profile_pic :"https://picsum.photos/id/180/200/300"
    }
  



];

var i=0
export function Middle() {
    return (
        <div className="flex middle">

            <div className="top-div">

                <CreateStory src={"https://picsum.photos/id/237/200/300"} text={"Create Story"} className="createStory" />
                <div className="carousal">
                    <img src={backButton} alt="arrowleft" width="30px" className="arrows" id="leftarrow"/>  

                    {/* <DisplayStories2 data={images}/> */}

                 
                    <DisplayStories2 data={images[i]} classname ="firstStory" />
                    <DisplayStories2 data={images[++i]} classname ="secondStory"  />
                    <DisplayStories2 data={images[++i]} classname ="thirdStory" />
                    <DisplayStories2 data={images[++i]} classname ="fourthStory" />
                    <DisplayStories2 data={images[++i]} classname ="fifthStory" />
                    
                    <img src={right} alt="arrowright" width="30px" className="arrows" id="rightarrow" onClick={funCarousal}/>  
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

// var temp = "";
function funCarousal() {
    document.getElementById("leftarrow").style.display = "block"
    i++;
    const root = ReactDOM.createRoot(document.getElementsByClassName('carausal'));
  
    function tick() {
    const element = (
    <div>
                    {/* <DisplayStories2 data={images[i]} classname ="firstStory" />
                    <DisplayStories2 data={images[++i]} classname ="secondStory"  />
                    <DisplayStories2 data={images[++i]} classname ="thirdStory" />
                    <DisplayStories2 data={images[++i]} classname ="fourthStory" />
                    <DisplayStories2 data={images[++i]} classname ="fifthStory" /> */}
    </div>
    );
    root.render(element);
    tick();
}
}