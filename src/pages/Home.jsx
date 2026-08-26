import { useEffect } from 'react';
import { Link } from "react-router-dom";

const Home = ()=> {
    useEffect(()=>{
        // Mobile menu
      const burger = document.getElementById('burger');
      const menu = document.getElementById('mobileMenu');
      burger.addEventListener('click', () => menu.classList.toggle('open'));
      document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

  // Boot sequence typing effect
  const lines = [
    { text: '&gt; init carrière.log', delay: 0 },
    { text: '&gt; 1981–1995 :: Basic, 6502, 68000 — démos Atari ST', delay: 550 },
    { text: '&gt; 1987 :: 16 ans, prof d\'info bénévole (Domont)', delay: 1050 },
    { text: '&gt; 1992–2022 :: 30 ans de précision artisanale', delay: 1650 },
    { text: '&gt; 2023 :: reconversion développeur web', delay: 2250 },
    { text: '&gt; 2026 :: <span style="color:var(--text)">prêt pour vos projets</span>', delay: 2850 }
  ];
  const termLines = document.getElementById('termLines');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function renderTerminal(){
    if(reduceMotion){
      termLines.innerHTML = lines.map(l => `<div class="terminal-line" style="opacity:1">${l.text}</div>`).join('') + '<span class="cursor"></span>';
      return;
    }
    lines.forEach(l => {
      const div = document.createElement('div');
      div.className = 'terminal-line';
      div.innerHTML = l.text;
      div.style.animationDelay = l.delay + 'ms';
      termLines.appendChild(div);
    });
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.style.opacity = '0';
    cursor.style.animationDelay = (lines[lines.length-1].delay + 400) + 'ms';
    setTimeout(() => cursor.style.opacity = '1', lines[lines.length-1].delay + 400);
    termLines.appendChild(cursor);
  }
  renderTerminal();

  // Scroll reveal for cards
  const revealTargets = document.querySelectorAll('.project-card, .translate-row, .skill-card, .t-item');
  revealTargets.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(14px)'; el.style.transition = 'opacity .5s ease, transform .5s ease'; });
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealTargets.forEach(el => io.observe(el));
    },[]);

    return(
        <>
            <div className="scanlines"></div>

            <header>
            <div className="nav-inner">
                <a href="#top" className="logo">sylvain<span>.</span>crouzier</a>
                <nav>
                <ul>
                    <li><a href="#about">à propos</a></li>
                    <li><a href="#skills">stack</a></li>
                    <li><a href="#projects">projets</a></li>
                    <li><a href="#path">parcours</a></li>
                    <li><a href="#contact" className="nav-cta">contact</a></li>
                </ul>
                </nav>
                <button className="burger" id="burger" aria-label="Ouvrir le menu"><span></span><span></span><span></span></button>
            </div>
            <div className="mobile-menu" id="mobileMenu">
                <a href="#about">à propos</a>
                <a href="#skills">stack</a>
                <a href="#projects">projets</a>
                <a href="#path">parcours</a>
                <a href="#contact">contact</a>
            </div>
            </header>

            <main id="top">

            {/*-- HERO --*/}
            <section className="hero">
                <div className="wrap">
                <div className="terminal" id="terminal">
                    <div className="bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
                    <div id="termLines"></div>
                </div>
                <p className="role">// développeur web fullstack — bordeaux, france</p>
                <h1>Sylvain Crouzier</h1>
                <p className="lede">30 ans à régler des précisions au micron sur des prothèses dentaires.
                    Aujourd'hui, la même exigence appliquée au code — JavaScript, React, Node.js.
                    Disponible pour vos projets freelance.</p>
                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">Voir mes projets</a>
                    <a href="#contact" className="btn btn-ghost">Me contacter</a>
                </div>
                </div>
            </section>

            {/*-- ABOUT --*/}
            <section className="section" id="about">
                <div className="wrap">
                <div className="section-head">
                    <p className="eyebrow">// à propos</p>
                    <h2>Une reconversion, pas un virage à 90°</h2>
                </div>
                <div className="about-grid">
                    <div className="about-text">
                    <p>Entre 10 et 24 ans, je programmais déjà — <strong>Basic, assembleurs 6502 et 68000</strong>,
                        spécialisé dans les scrollings différentiels en couleurs étendues, avec des démos sur Atari ST.
                        Puis la vie a pris un autre chemin : <strong>30 ans dans la prothèse dentaire</strong>, dont 12 ans
                        à mon compte, au Laboratoire Crouzier.</p>
                    <p>La prothèse dentaire, c'est de l'artisanat de précision : chaque pièce doit s'ajuster au dixième
                        de millimètre, chaque client a un besoin différent, chaque erreur se voit. En 2023, j'ai repris
                        le code sérieusement — formation RNCP5 « Développeur Web/Web Mobile » à La Piscine (Bordeaux),
                        puis un Bachelor Fullstack à l'EPSI. Depuis, je construis des sites et des applications avec la
                        même rigueur : <strong>je ne livre rien que je n'ajusterais pas moi-même au micron près.</strong></p>
                    </div>
                    <div className="translate-card">
                    <div className="translate-row">
                        <div className="from">ce que la prothèse dentaire m'a appris</div>
                        <div className="to">Ajuster une pièce au dixième de mm, sans seconde chance</div>
                    </div>
                    <div className="translate-row">
                        <div className="from">ce que ça change pour vos projets</div>
                        <div className="to"><b>Un code testé, propre, et un œil pour le détail qui casse un site</b></div>
                    </div>
                    <div className="translate-row">
                        <div className="from">12 ans à gérer mon propre labo</div>
                        <div className="to"><b>Autonomie complète : cahier des charges, dev, livraison</b></div>
                    </div>
                    <div className="translate-row">
                        <div className="from">démos Atari ST à 15 ans</div>
                        <div className="to"><b>Une passion pour la technique qui ne date pas d'hier</b></div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/*-- SKILLS --*/}
            <section className="section" id="skills">
                <div className="wrap">
                <div className="section-head">
                    <p className="eyebrow">// stack</p>
                    <h2>Ce que j'utilise, aujourd'hui</h2>
                </div>
                <div className="skills-grid">
                    <div className="skill-card">
                    <h3>front-end</h3>
                    <div className="tag-list">
                        <span className="tag">HTML</span><span className="tag">CSS / SCSS</span><span className="tag">JavaScript</span>
                        <span className="tag">React</span><span className="tag">CreateJS</span>
                    </div>
                    </div>
                    <div className="skill-card">
                    <h3>back-end &amp; data</h3>
                    <div className="tag-list">
                        <span className="tag">Node.js</span><span className="tag">Express.js</span><span className="tag">MySQL</span>
                        <span className="tag">API REST + token</span><span className="tag">DBeaver</span>
                    </div>
                    </div>
                    <div className="skill-card">
                    <h3>outils &amp; design</h3>
                    <div className="tag-list">
                        <span className="tag">Git / GitHub</span><span className="tag">Postman</span><span className="tag">Figma</span>
                        <span className="tag">Adobe XD</span>
                    </div>
                    </div>
                    <div className="skill-card">
                    <h3>en cours d'approfondissement</h3>
                    <div className="tag-list">
                        <span className="tag">TypeScript</span><span className="tag">Angular</span><span className="tag">Java</span>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/*-- PROJECTS --*/}
            <section className="section" id="projects">
                <div className="wrap">
                <div className="section-head">
                    <p className="eyebrow">// projets</p>
                    <h2>Projets réalisés</h2>
                </div>
                <div className="project-grid">

                    <div className="project-card featured">
                    <div className="p-tag">Projet principal · 2023 – 2026</div>
                    <h3>Site web d'un club de course à pied</h3>
                    <p>Site responsive web/mobile développé et maintenu sur trois ans : gestion admin des adhérents,
                        publications de photos, commentaires et réactions, API REST sécurisée par token, système de
                        paiement et gestion de publications croisées ajoutés en 2026.</p>
                    <div className="project-links">
                        {/*<a href="#" target="_blank" rel="noreferrer">Voir le site ↗</a>
                        <a href="https://github.com/sylvainh2" target="_blank" rel="noreferrer">Code source ↗</a>*/}
                    </div>
                    </div>

                    <div className="project-card">
                    <div className="p-tag">Jeu web · 2023</div>
                    <h3>Space Invaders</h3>
                    <p>Clone du classique en JavaScript, gestion des sprites, collisions et animations en front pur.</p>
                    <div className="project-links">
                        <Link to="/Space" rel="noreferrer">Démo ↗</Link>
                        <a href="https://github.com/sylvainh2/portfolio/tree/main/src/pages/Space.jsx" target="_blank" rel="noreferrer">Code ↗</a>
                    </div>
                    </div>

                    <div className="project-card">
                    <div className="p-tag">Jeu web · 2023</div>
                    <h3>Memory</h3>
                    <p>Jeu de mémoire avec gestion d'état, animations et objets en front, en JavaScript/React.</p>
                    <div className="project-links">
                        <Link to="Memory" rel="noreferrer">Démo ↗</Link>
                        <a href="https://github.com/sylvainh2/portfolio/tree/main/src/pages/Memory.jsx" target="_blank" rel="noreferrer">Code ↗</a>
                    </div>
                    </div>

                    <div className="project-card">
                    <div className="p-tag">Jeu web · 2023</div>
                    <h3>Morpion</h3>
                    <p>Tic-tac-toe interactif, logique de jeu et détection de victoire codées en JavaScript.</p>
                    <div className="project-links">
                        <Link to="Morpion" rel="noreferrer">Démo ↗</Link>
                        <a href="https://github.com/sylvainh2/portfolio/tree/main/src/pages/Morpion.jsx" target="_blank" rel="noreferrer">Code ↗</a>
                    </div>
                    </div>

                    <div className="project-card">
                    <div className="p-tag">Entraînement · 2025</div>
                    <h3>100 katas d'algorithmique</h3>
                    <p>Une centaine de problèmes d'algorithmique résolus en JavaScript sur Coddy.</p>
                    <div className="project-links">
                        <a href="https://github.com/sylvainh2/kata" target="_blank" rel="noreferrer">Code ↗</a>
                    </div>
                    </div>

                    <div className="project-card">
                    <div className="p-tag">CV · 2025</div>
                    <h3>CV ancien & nouveau</h3>
                    <p>Un ancien CV entièrement en HTML-CSS, et mon dernier CV en PDF, téléchargeable directement.</p>
                    <div className="project-links">
                        <Link to="/Cv" rel="noreferrer">Ancien CV ↗</Link>
                        <a href="CV_Sylvain_Crouzier.pdf" target="_blank" rel="noreferrer">Télécharger le CV ↗</a>
                    </div>
                    </div>

                    <div className="project-card">
                    <div className="p-tag">Portfolio</div>
                    <h3>Ce site</h3>
                    <p>Le portfolio que vous consultez.</p>
                    <div className="project-links">
                        <a href="https://github.com/sylvainh2/siteportfolio" target="_blank" rel="noreferrer">Portfolio ↗</a>
                    </div>
                    </div>

                </div>
                </div>
            </section>

            {/*-- TIMELINE --*/}
            <section className="section" id="path">
                <div className="wrap">
                <div className="section-head">
                    <p className="eyebrow">// parcours</p>
                    <h2>Le chemin jusqu'ici</h2>
                </div>
                <div className="timeline">
                    <div className="t-item">
                    <div className="t-date">2026</div>
                    <div className="t-body"><h3>Amélioration d'un site en JS/React</h3>
                        <p>Système de paiement et gestion de publications croisées.</p></div>
                    </div>
                    <div className="t-item">
                    <div className="t-date">2025</div>
                    <div className="t-body"><h3>Bachelor+3 Développeur Fullstack — EPSI Bordeaux</h3>
                        <p>Formation interrompue faute d'alternance. En parallèle : 100 katas d'algorithmique (Coddy) et exercices front-end (Frontend Mentor).</p></div>
                    </div>
                    <div className="t-item">
                    <div className="t-date">2024–2025</div>
                    <div className="t-body"><h3>Préparateur de commande — Decathlon</h3>
                        <p>Activité alimentaire pendant la reconversion.</p></div>
                    </div>
                    <div className="t-item">
                    <div className="t-date">2023</div>
                    <div className="t-body"><h3>Dev Web/Web Mobile RNCP5 — La Piscine, Bordeaux</h3>
                        <p>Certification Opquast. Premiers jeux web (Space Invaders, Memory, Morpion) et lancement du site du club de course à pied.</p></div>
                    </div>
                    <div className="t-item">
                    <div className="t-date">2010–2022</div>
                    <div className="t-body"><h3>Prothésiste dentaire indépendant — Laboratoire Crouzier</h3>
                        <p>12 ans à mon compte : gestion complète du laboratoire, de la commande à la livraison.</p></div>
                    </div>
                    <div className="t-item">
                    <div className="t-date">1997–2010</div>
                    <div className="t-body"><h3>Prothésiste dentaire — Techni-Dental / Prothesia</h3>
                        <p>13 ans en laboratoire, perfectionnement technique.</p></div>
                    </div>
                    <div className="t-item">
                    <div className="t-date">1994–1997</div>
                    <div className="t-body"><h3>CAP / BP Prothèse Dentaire — ENSPO 95</h3></div>
                    </div>
                    <div className="t-item">
                    <div className="t-date">1987–1988</div>
                    <div className="t-body"><h3>Professeur d'informatique — Club informatique de Domont (95)</h3>
                        <p>À 16 ans, initiation d'autres jeunes au Basic et à l'assembleur.</p></div>
                    </div>
                </div>
                </div>
            </section>

            {/*-- CONTACT --*/}
            <section className="section" id="contact" style={{borderBottom:"none"}}>
                <div className="wrap">
                <div className="contact-grid">
                    <div>
                    <p className="eyebrow">// contact</p>
                    <h2 style={{fontSize:"clamp(28px,4vw,40px)", marginBottom:"20px"}}>Discutons de votre projet</h2>
                    <div className="avail"><span className="pulse"></span> disponible pour missions freelance</div>
                    <p style={{color:"var(--text-dim)", maxWidth:"440px"}}>Basé à Bordeaux, je travaille aussi bien en full remote
                        que sur place. Écrivez-moi ou appelez directement — je réponds rapidement.</p>
                    </div>
                    <div className="contact-card">
                    <div className="contact-row"><span>email</span><Link to="/Mail">sylvain.crouzier@free.fr</Link></div>
                    <div className="contact-row"><span>téléphone</span><span>06 08 73 22 96</span></div>
                    <div className="contact-row"><span>localisation</span><span>Bordeaux, France</span></div>
                    <div className="contact-row"><span>linkedin</span><a href="https://www.linkedin.com/in/sylvain-crouzier-64017780/" target="_blank" rel="noreferrer">sylvain-crouzier</a></div>
                    <div className="contact-row"><span>github</span><a href="https://github.com/sylvainh2" target="_blank" rel="noreferrer">sylvainh2</a></div>
                    <div className="contact-row"><span>cv</span><a href="CV_Sylvain_Crouzier.pdf" target="_blank" rel="noreferrer">télécharger (pdf)</a></div>
                    </div>
                </div>
                </div>
            </section>

            </main>

            <footer>
            <p>$ echo "merci de votre visite" — © 2026 Sylvain Crouzier</p>
            </footer>
        </>
    )
}

export default Home;
