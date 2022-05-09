

export function MenuItem(props) {
    return (
        <div className="MenuItem">
            <a href={props.link}> 
                <img src={props.src} alt={props.src} width="30px"/>
            </a>
        </div>
     

       
    )
} 