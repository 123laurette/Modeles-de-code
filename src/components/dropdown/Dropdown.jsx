import React from "react"
import arrowclose from "./arrow_close.png"
import arrowopen from "./arrow_open.png"
import "./Dropdown.css"
import { useState } from "react"


//FUNCTION GENERIQUE, QUI PERMET D'AVOIR UN COMPOSANT DE BASE PLUS COURT

function Dropdown({ title, text1, text2, text3, text4}) {
    const [dropdownOuvert, setDropdown] = useState(false)

    return dropdownOuvert ? (
        <div className="dropdown">
            <div className="titre-dropdown">
                <h3>{title}</h3>
                <img src={arrowclose} alt="Rendre le contenu invisible" onClick={() => setDropdown(false)}/>
            </div>
            <p>{text1}<br/>{text2}<br/>{text3}<br/>{text4}</p>
        </div>
    ) : (
        <div className="dropdown">
            <div className="titre-dropdown">
                <h3>{title}</h3>
                <img src={arrowopen} alt="Rendre le contenu visible" onClick={() => setDropdown(true)}/>
            </div>
        </div>
    )
}

/*A METTRE DANS LE COMPOSANT APPELE DANS APP.JSX
<Dropdown className="necessaire" title="Pourquoi est il nécessaire d'être vue sur le web ?" text1= "- La technologie évolue et les clients potentiels aussi." text2=" - Quand le client a un besoin, son premier réflexe est le web"
>
*/

export default Dropdown


/*function Dropdown() {
    const [dropdownOuvert, setDropdown] = useState(false)

    return dropdownOuvert ? (
        <div className="dropdown">
            <div className="titre-dropdown">
                <h3>Le développement</h3>
                <img src={arrowclose} alt="Rendre le contenu invisible" onClick={() => setDropdown(false)}/>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, eaque.<br/>Lorem ipsum dolor sit amet.<br/>Lorem, ipsum.<br/>Lorem ipsum dolor sit amet.</p>
        </div>
    ) : (
        <div className="dropdown">
            <div className="titre-dropdown">
                <h3>Le développement</h3>
                <img src={arrowopen} alt="Rendre le contenu visible" onClick={() => setDropdown(true)}/>
            </div>
        </div>
    )
}*/