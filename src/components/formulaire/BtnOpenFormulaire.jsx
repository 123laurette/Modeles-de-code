import React from 'react';
import {useState} from "react"
import Formulaire from "./Formulaire"
import "./BtnOpenFormulaire.css"

function Button() {
    const [formulaire, setFormulaire] = useState(false);
    return (
        <>
            <button className="openFormulaire" 
                onClick= {() => {
                    setFormulaire(true);
                }}> 
                Ouvrir le formulaire
            </button>
            {formulaire && <Formulaire closeFormulaire={setFormulaire} />}
        </>
    )
}

export default Button