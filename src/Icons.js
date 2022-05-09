import keypad from "./images/keypad.png";
import messenger from "./images/messenger.png";
import bell from "./images/bell-ring.png";
import down from "./images/downward-arrow.png";

export function Icons() {
    return (
        <>
            <div className="icons">
                <img src={keypad} alt={keypad} width="30px" className="image"/>
            </div>
            <div className="icons">
                <img src={messenger} alt={messenger} width="30px" className="image"/>
            </div>

            <div className="icons">
                <img src={bell } alt={bell} width="30px" className="image"/>
            </div>

            <div className="icons">
                <img src={down} alt={down} width="30px" className="image"/>       
            </div>
            
         </>
        )
}