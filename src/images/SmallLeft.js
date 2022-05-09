function SmallLeft(props) {
    return(
        <div className="flex">
            <div><img src={props.icon} alt={props.icon} width="30px"/></div>
            <div className="flex-column name">
                <h4 className="margin-10px">{props.text}</h4>
            </div>
        </div>
    )
}

export {SmallLeft}