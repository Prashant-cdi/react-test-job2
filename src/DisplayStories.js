export function DisplayStories({ data }) {
    return (
       data.map((item, index)=>(
        <div className="story" id="story" key={index} >
              <img src={item.src}  id="imagesStory" />  
              <img src={item.profile_pic} width="40px" className="profile"/>
                <h6 className="textOnImage">{item.text}</h6>
         </div> 
        ))
    )
}
             