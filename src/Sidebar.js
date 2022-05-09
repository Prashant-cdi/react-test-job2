import { User } from "./User";

import people from "./images/people.png"
import castle from "./images/castle.png"
import youtube from "./images/youtube.png"
import clock from "./images/clock.png"
import friends from "./images/friends.png"
import { SmallLeft } from "./images/SmallLeft";

function Sidebar() {
    return (
        <div>
        <User name={"Pankaj Sharma"} />
        <SmallLeft icon={friends} text={"Friends"} />
        <SmallLeft icon={people} text={"Groups"} />
        <SmallLeft icon={castle} text={"Marketplace"} />
        <SmallLeft icon={youtube} text={"Watch"} />
        <SmallLeft icon={clock} text={"Memories"} />
        </div>
    )
}
export {Sidebar};

