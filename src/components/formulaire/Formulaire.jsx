/*POUR CE COMPOSANT NE PAS OUBLIER D'IMPORTER :
react-hook-form.........................pour la validation du formulaire
react-datepicker........................pour le calendrier date de naissance
*/


import React from 'react';
import {useState} from "react"
import ModalMerci from "./ModalMerci"
import "./Formulaire.css"
import {useForm, Controller} from "react-hook-form"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


//permet de simuler un temps d'attente entre la soumission du formulaire et l'arrivée de la modale merci
const wait = function (duration = 1000) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, duration)
    })
}




function Formulaire ({closeFormulaire}) {
    
    const {register, handleSubmit, formState: {errors}, control} = useForm({
        mode: "onTouched"       //permet que le message d'erreur apparaisse dés que l'on change de champ
    })

    const onSubmit = async data => {
        console.log(data)

        await wait(1500)
        let form = document.querySelector(".content");
        form.style.display= "none";
        document.getElementById("formulaire").reset()
        setModalMerci(true);
        console.log(data)
    }
    console.log(errors);
    const [modalMerci, setModalMerci] = useState(false);
    const [startDate, setStartDate] = useState();

    return (
        <>
            <div className="content">
                <span className="close" onClick={() => closeFormulaire(false)}>X</span>
                <div className="formBody">
                    <form  id="formulaire" onSubmit={handleSubmit(onSubmit)} >

                        <div className="formData">
                            <label htmlFor="first">Prénom</label>
                            <input type="text" className="form-control"  id="first" name="first" {...register("first", { pattern: /^[a-zA-Z-s]+$/i, required: true, minLength: 2}
                            )} />
                            {errors.first && <p>Veuillez entrer 2 caractères ou plus pour le champ du prénom.</p>}
                        </div>

                        <div className="formData">
                            <label htmlFor="last">Nom</label><br/>
                            <input type="text" className="form-control"  id="last" name="last"  {...register("last", { pattern: /^[a-zA-Z-s]+$/i, required: true, minLength: 2}
                            )} />
                            {errors.last && <p>Veuillez entrer 2 caractères ou plus pour le champ du nom.</p>}
                        </div>

                        <div className="formData">
                            <label htmlFor="ddn">Date de naissance</label><br/>
                            <Controller
                                control={control}
                                name="birthday"
                                render={({ onChange, onBlur, value }) => (
                                    <DatePicker
                                    selected={startDate}
                                    onBlur={onBlur}
                                    onChange={(date) => setStartDate(date)}
                                    />
                                )}
                            /> 
                        </div>

                        <div className="formData">
                            <label htmlFor="email">Email</label><br/>
                            <input type="text" className="form-control"  id="email" name="email"  {...register("email", { pattern: /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/i, required: true}
                            )} />
                            {errors.email && <p>Veuillez vérifier votre adresse éléctronique.</p>}
                        </div>
                        
                        <div className="formData">
                            <label htmlFor="password">Password</label><br/>
                            <input type="password" className="form-control"  id="password" name="password" {...register("password", {required: true, minLength: 5}
                            )} />
                            {errors.password && <p>Veuillez entrer 5 caractères ou plus pour le champ du nom.</p>}
                        </div>
                        
                        <button   
                            type="submit" 
                            id="inscrire" >
                            S'inscrire
                        </button> 
                        
                    </form>
                </div>
            </div>
            {modalMerci && <ModalMerci />} 
        </>
    );
};

export default Formulaire;


