import profile from './images/profile.png'

export function User(props) {
    return (
        <div className='flex'>
            <div>
                <img src={profile} alt={profile} width="30px"/>
            </div>
            <div className='name'>
                <h4 className='margin-10px'>{props.name}</h4>
            </div>
        </div>
    )
}