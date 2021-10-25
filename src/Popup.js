import React from "react";
import "./Popup.css"

function Popup(props) {
    return (
       <div
           className={props.visible ? "popup__wrapper active" : "popup__wrapper"}
           onClick={() => props.setVisible(false)}
       >
           <div
               className={props.visible ? "popup__container active" : "popup__container"}
               onClick={e => e.stopPropagation()}
           >
               {props.children}
           </div>
       </div>
    )
}

export default Popup;
