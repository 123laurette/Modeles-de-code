import React from 'react';
import "./CoeurDegrade.css"

const CoeurDegrade = () => {
    return (
        <div className="coeur">
            <i className="far coeurvide fa-heart"></i>
            <i className="fas coeurrempli fa-heart"></i>
        </div>
    );
};

export default CoeurDegrade;