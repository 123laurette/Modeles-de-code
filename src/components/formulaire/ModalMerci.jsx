import React from 'react';
import "./ModalMerci.css"

const ModalMerci = () => {
    return (
        <div className="modalBody">
            <p className="merci">
                Merci pour votre inscription
            </p>
            <button 
                id="fermer" 
                type="button">
                Fermer
            </button>
        </div>  
    );
};

export default ModalMerci;


//il faudra prévoir une redirection au click sur le bouton fermer