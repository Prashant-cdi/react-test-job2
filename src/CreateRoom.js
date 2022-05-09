import vedioCamera from "./images/video-camera.png"
import { Rooms } from "./Rooms"
import arrowRight from "./images/arrow-right.png"

const rooms = [
    {   src : "https://picsum.photos/id/130/200/300" },
    {   src : "https://picsum.photos/id/131/200/300" },
    {   src : "https://picsum.photos/id/132/200/300" },
    {   src : "https://picsum.photos/id/133/200/300" },
    {   src : "https://picsum.photos/id/134/200/300" },
    {   src : "https://picsum.photos/id/135/200/300" },
    {   src : "https://picsum.photos/id/136/200/300" },
    {   src : "https://picsum.photos/id/137/200/300" }

]
export function CreateRoom() {
    return(
        <div className="flex third-inner">
                <div className="unique" id="createRoom">
                    <img src={vedioCamera} alt={vedioCamera} width="15px" /> 
                    <span className="spans">Create Room</span>
                </div>

                <Rooms data={rooms}/>

                <img src ={arrowRight} alt={arrowRight} width="30px" style={{ marginBottom:"4px" }}/>

        </div>
    )
}