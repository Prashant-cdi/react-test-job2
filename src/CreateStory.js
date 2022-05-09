import plus from "./images/plus.png"

export function CreateStory(props) {

    return (

        <div className="createStory" id="story">
             <img src={props.src} alt={props.text} id="createStory" />  
             <img src= {plus} alt="plus-image" className="width30" id="plus" />
             <h6 className="textOnImage font-color-black" >{props.text}</h6>
                
        </div>
    )
}