export function Rooms({data}) {
    return(
        data.map(( item, index )=>(
                
            <div key={index} >
                <img src={item.src} alt="profile_pic" className="profile noAbsolute" />
            </div>

        )
        )
    )
}