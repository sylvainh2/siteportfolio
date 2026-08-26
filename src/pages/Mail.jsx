import ReturnB from '../components/ReturnB';
import emailjs from "@emailjs/browser";
import { useRef, useState } from 'react';

function Mail(){
    const form = useRef();
    const [ wSent, setWSent ] = useState (false);
    const [ wSentError, setWSentError] = useState ("");
    const handleSubmitJoin = (event)=>{
        event.preventDefault();
        const serviceID = 'default_service';
        const templateID = 'template_9qcgitk';
        const publicKEY = 'I8Ndgl3Khqs3TUvCL';
        let email= event.target.email.value;
        let message = event.target.message.value;
        let sujet = event.target.sujet.value;
        if (email && message && sujet){
            //traitement envoi email//
            emailjs
            .sendForm(
                serviceID,
                templateID,
                form.current,
                publicKEY
            )
            .then(
                () => {
                    setWSent (true);
                    document.querySelector(".mailForm").reset();
                    setTimeout(()=>{
                        setWSent (false);
                    },3000);
                },
                (error) => {
                    setWSentError (error.text);
                    setTimeout(()=>{
                        setWSentError ("")
                    },5000);
                console.log(error.text);
                }
            );
        }
    };

    return(
    <>
        {/* <Header /> */}
        <main className="mail">
            {wSent && <div className="sendWindow absCont">Message Envoyé</div>}
            {wSentError && <div className="sendWindow absCont">Erreur d'envoi:{wSentError}</div>}
            <form ref={form} className="mailForm" onSubmit={handleSubmitJoin}>
                <label className="inputMail">email:</label>
                <input className="inputMail mailEffect email" type="email" name="email" placeholder="Entrez votre Email svp"/>
                <label className="inputMail">sujet</label>
                <input className="inputMail mailEffect sujet" type="text" name="sujet"/>
                <label className="inputMail">message:</label>
                <textarea className="inputMail mailEffect areaEffect message" type="text" cols="50" rows="10" name="message" />
                <button className="mailBtn inputMail">Envoyer</button>
            </form>
        </main>
        <ReturnB />
    </>)
}
export default Mail;