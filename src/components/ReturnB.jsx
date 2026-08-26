import { Link } from "react-router-dom";

const ReturnB = ()=>{
    return(
        <>
            <section className="retour">
            <Link to={"/"} className='retourButton' href="#">Retour</Link>
            </section>
        </>
    )

}
export default ReturnB;