import ReturnB from "../components/ReturnB"

function Cv() {
    return(
        <>
            {/* <Header/> */}
            <section className="page">
                <div className="profileColumn">
                    <img src="logo.jpg" alt="identity" width="60%" className="photoid"/>
                    <h2 className="title profile">profil</h2>
                    <article className="articleP">
                        <p>
                        Après 30 ans en prothèse dentaire, je reviens dans l'informatique que j'ai côtoyé de mes 10 ans à mes 24 ans avec une énorme motivation pour cette deuxième partie de carrière professionnelle.
                        </p>
                    </article>                  
                    <h2 className="title profile">contact</h2>
                    <article className="articleP articleC">
                        <p><i className="fa-solid fa-location-dot"></i> Lieu : 33127 Saint jean d'illac</p>
                        <p><i className="fa-solid fa-phone"></i> Téléphone : 06 08 73 22 96</p>
                        <p><i className="fa-regular fa-envelope"></i> Email : sylvain.crouzier@free.fr</p>
                    </article>   
                    <h2 className="title profile">softskills</h2>
                    <article className="articleP articleS">Organisation, Persévérance, Logique, Altruisme</article>
                    <h2 className="title profile">diplômes</h2>
                    <article className="articleP articleD">
                        <div className='box'>
                            <div className='yearBox'>2023</div>
                            <div className='diplomeBox'>
                                <p>Titre de développeur Web/Web mobile (niveau5/bac+2)</p>
                                <p>Certification Opquast</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="yearBox">1997</div>
                            <div className="diplomeBox">BP prothèse dentaire</div>
                        </div>
                        <div className="box">
                            <div className="yearBox">1994</div>
                            <div className="diplomeBox">CAP prothèse dentaire</div>
                        </div>
                        <div className="box">
                            <div className="yearBox">1991</div>
                            <div className="diplomeBox">BAC C</div>
                        </div>
                        <div className="box">
                            <div className="yearBox">1990</div>
                            <div className="diplomeBox">BAC D</div>
                        </div>
                    </article>
                    <h2 className="title profile">centres d'intérêts</h2>
                    <article className="articleP">Course à pied, Tennis, Bricolage, Electronique, Informatique, Mécanique, Moto, Aviation</article>
                </div>
                <div className="workColumn">
                    <div className="nameContainer">
                        <h1 className="name">sylvain crouzier</h1>
                        <p className="titleName">developpeur web/web mobile</p>
                    </div>
                    <div className="workContainer">
                        <h2 className="title work">expériences</h2>
                        <article className='articleExp'>
                            <div className="boxExperience exp">
                                <div className="yearBox ybEffect">
                                    <p className='ybPara'>2023</p>
                                    <p>Aujourd'hui</p>
                                    <p>(Saint jean d'illac)</p>
                                </div>
                                <div className="diplomeBox">
                                    <h2 className="titleExp">ASSOCIATION SPORTIVE ILLACAISE</h2>
                                    <p className='expTitle'>Développeur Web</p>
                                    <ul className='list'>
                                        <li className='expList'>Détermination des besoins client, utilisateurs, et techniques, maquettage, création de la BDD (Adobe XD, JMerise, MySQL Workbench, DBeaver)</li>
                                        <li className='expList'>Développement d'un site Web dynamique et responsive (HTML, CSS, Bootstrap, JS, React, Git)</li>
                                        <li className='expList'>Développement de l'API. (Node JS, Express, MySQL)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="boxExperience exp">
                                <div className="yearBox ybEffect">
                                    <p className='ybPara'>2023</p>
                                    <p>(Mérignac)</p>
                                </div>
                                <div className="diplomeBox">
                                    <h2 className="titleExp">ECOLE La Piscine</h2>
                                    <p className="expTitle">Développeur Web</p>
                                    <ul className='list'>
                                        <li className="expList">Développement de sites Web responsives, de mini jeux:  morpion, memory, calcul mental, jeu de tir (HTML, CSS, JS, Create JS)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="boxExperience exp">
                                <div className="yearBox ybEffect">
                                    <p className='ybPara'>1997 à 2022</p>
                                    <p>(Paris / Saint Médard en jalles / Mérignac / Martignas sur jalle)</p>
                                </div>
                                <div className="diplomeBox">
                                    <h2 className="titleExp">LABORATOIRE CROUZIER</h2>
                                    <p className="expTitle">Associé unique/Gérant, prothésiste polyvalent</p>
                                    <ul className='list'>
                                        <li className="expList">Gestion de laboratoire (facturation, gestion clientèle, achats, livraison et expédition, gestion de personnel)</li>
                                        <li className="expList">Fabrication de modèles en plâtre, armatures métalliques, céramiques et implantaires</li>
                                        <li className="expList">Fabrication d'appareils métalliques et résines</li>
                                        <li className="expList">Contrôle qualité</li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                        <h2 className="title workAdd">langues</h2>
                        <article className='articleL'>Français: Langue maternelle <span></span> Anglais: scolaire <span></span> Espagnol: scolaire</article>
                        <h2 className="title workAdd">autres connaissances</h2>
                        <article className='articleL'>
                            <p>JAVA, Angular et Typescript (En cours d'apprentissage)</p>
                            <p>BASIC, Assembleurs 6502, 68HC11, 68000</p>
                        </article>
                    </div>
                </div>
            </section>
            <ReturnB />
        </>
    )
}
export default Cv;