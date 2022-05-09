import { Icons } from "./Icons"
import { Logo } from "./Logo"
import { SearchBox } from "./SearchBox"
import { User } from "./User"
import { Menu } from "./Menu"
import "./Header.css"

export function Header() {
    return (
        <div className="header">
            <div className="firstDiv">
                <Logo />
                <SearchBox placeholderText={"Search Facebook"}/>
            </div>

            <div className="middleDiv">
                <Menu/>
            </div>

            <div className="lastDiv">
                <User name={"Pankaj"}/>
                <Icons />
            </div>
        </div>
    )
}