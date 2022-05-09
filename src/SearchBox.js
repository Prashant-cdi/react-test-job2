import './Search.css';

export function SearchBox(props) {

    return (
        <input type="text" placeholder={props.placeholderText} className="search"/>
    )
}