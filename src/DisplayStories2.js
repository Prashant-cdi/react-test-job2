// var i=0
export function DisplayStories2({ data }) {


    return (
        <div className="story" id="story" >
              <img src={data.src}  id="imagesStory" />  
              <img src={data.profile_pic} width="40px" className="profile"/>
                <h6 className="textOnImage">{data.text}</h6>
         </div> 
    )
}
        

             