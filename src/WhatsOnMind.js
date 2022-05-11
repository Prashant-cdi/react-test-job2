import vedioPlayer from "./images/video-player.png";

import smile from "./images/smile.png";
import picture from "./images/picture.png";

import profile from './images/profile.png'
export function WhatsOnMind() {
    return(
        <div>
            <div className="firstline flex">
                <img src={profile} alt="profile_pic" id="whatsProfile" />
                <input type="text" placeholder="What's on your mind, Pankaj?" className="inputText"/>
            </div>
            <div className="secondLine">
                <div className="unique">
                    <img src={vedioPlayer} alt={vedioPlayer} width="20px" /> 
                    <span className="spans">Live vedio</span>
                </div>

                <div className="unique">
                    <img src={picture} alt={picture} width="20px" /> 
                    <span className="spans">Photo/vedio</span>
                </div>

                <div className="unique">
                    <img src={smile} alt={smile} width="20px" /> 
                    <span className="spans">Feeling/Activity</span>
                </div>
             
            
            </div>
        </div>
    )
}