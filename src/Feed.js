import world from "./images/world.png"
import more from "./images/more.png"
export function Feed() {    
    return(
        <>
            <div className="firstline flex pos-rel">
                <img src="https://picsum.photos/id/180/200/300" alt="profile_pic" id="feedGroupImage"/>
                <img src="https://picsum.photos/id/250/200/300" alt="profile_pic" id="feedImage"/>
                <img src={more} alt="toggle" id="toggle"/>

                <div className="voiceDiv flex flex-dir-col">
                    <h4 className="no-mar">Voice of Kharar</h4>
                    <p className="no-mar font-small mar-top-5">Something * 2 hours . <img src={world} id="world" alt="world"/></p>
                </div>
            </div>
         
                <h5 className="firstline">Fun Sale 2016 Wii</h5>
            
            <div >
                <img className="feedImage" src="https://picsum.photos/id/250/200/300" alt="feedImage"></img>
            </div>

        </>
    )
}