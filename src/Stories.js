export function Stories(props) {
    
    return (
        <div className="story" id="story">
            <img src={props.src} alt={props.text} id="imagesStory" />  
            <h5>{props.text}</h5>      
        </div>
        
    )

    

}