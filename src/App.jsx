import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "portfolio_lang";
const DEFAULT_LANG = "fr";
const CONTACT_ENDPOINT = "https://formsubmit.co/ajax/darylsaah@icloud.com";

/** Captures dans public/projects/ (AfrikaMarket : afrika-market.png). */
const PROJECT_IMAGES = {
  afrika: "/projects/afrika-market.png",
  bibliotheque: "/projects/bibliotheque.jpg",
  livres: "/projects/livres-gourmands.png"
};

const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/daryl-linkedin/",
  github: "https://github.com/daryl-github"
};

const dictionary = {
  fr: {
    nav_profile: "Profil",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_education: "Formation",
    nav_contact: "Contact",
    badge: "Stage en développement web (frontend ou full stack) dès mai 2026",
    hero_title_1: "Finissant DEC en technologies de l'information",
    hero_title_2: "Développement web et applications",
    hero_text:
      "Passionné par les applications web modernes et performantes, je travaille avec JavaScript, React, Node.js et les bases de données. Rigoureux, autonome et à l’aise en équipe, j’ai livré des projets concrets : interfaces utilisateur, API REST et gestion des données.",
    cta_contact: "Me contacter",
    cta_cv: "Télécharger mon CV",
    role: "Développeur web junior",
    stat_projects: "projets concrets",
    stat_ops: "disponibilité stage",
    stat_ops_value: "Mai 2026",
    langs_label: "Langues : français, anglais",
    profile_eyebrow: "PROFIL",
    profile_title: "Développement web orienté livrable et qualité",
    profile_card1_title: "Approche professionnelle",
    profile_card1_text:
      "Respect des consignes, livraison dans les délais et amélioration continue des fonctionnalités. J’aime structurer le travail (Git, Jira) et clarifier les décisions techniques.",
    profile_card2_title: "Ce que je construis",
    profile_card2_text:
      "Expérience sur le cycle d’un produit web : conception d’interfaces, intégration, API REST sécurisées (JWT), persistance MySQL et collaboration en équipe.",
    skills_eyebrow: "COMPÉTENCES",
    skills_title: "Expertises techniques",
    skills_card1_title: "Langages",
    skills_card1_text: "JavaScript, Python, C++, C#.",
    skills_card2_title: "Développement web",
    skills_card2_text:
      "HTML, CSS, React, Vue.js, Node.js, Express, API REST, authentification JWT.",
    skills_card3_title: "Données, réseaux et outils",
    skills_card3_text:
      "MySQL, UML, TCP/IP, Wi-Fi, VPN, VLAN, Git, GitHub, Jira, Linux et Unix.",
    projects_eyebrow: "PROJETS",
    projects_title: "Expériences pratiques et réalisations",
    projects_hint:
      "Ajoutez vos images dans le dossier public/projects (voir noms de fichiers dans le code).",
    link_linkedin: "LinkedIn",
    link_github: "GitHub",
    projects_list: [
      {
        id: "afrika",
        meta: "Fév. 2026 — aujourd’hui · Institut Grasset",
        title: "AfrikaMarket — application mobile",
        text:
          "Développement frontend et backend d’une application mobile avec API REST, authentification et données utilisateurs.",
        bullets: [
          "API REST avec Node.js et Express",
          "Authentification sécurisée (JWT) et gestion des utilisateurs",
          "Base de données MySQL",
          "Méthodologie agile : Jira, Git, travail d’équipe"
        ]
      },
      {
        id: "bibliotheque",
        meta: "Nov. 2025 — janv. 2026 · Institut Grasset",
        title: "Gestion de bibliothèque",
        text:
          "Application de gestion avec conception de tables et opérations SQL pour suivre les emprunts et le fonds documentaire.",
        bullets: [
          "Modélisation et tables relationnelles",
          "Opérations CRUD et requêtes pour les emprunts",
          "Optimisation et amélioration des fonctionnalités",
          "Livraison conforme aux consignes"
        ]
      },
      {
        id: "livres",
        meta: "Oct. 2025 — janv. 2026 · Institut Grasset",
        title: "Livres Gourmands — site web",
        text:
          "Site dynamique mettant en valeur le contenu avec une navigation claire et une interface orientée expérience utilisateur.",
        bullets: [
          "HTML, CSS et JavaScript",
          "Pages, navigation et intégration du contenu",
          "Itérations selon les besoins du projet",
          "Respect des échéances"
        ]
      }
    ],
    education_eyebrow: "FORMATION",
    education_title: "Parcours académique",
    edu1_title: "DEC en technologies de l’information (en cours)",
    edu1_text: "Spécialité : gestion des technologies de l’information — Institut Grasset, Montréal.",
    edu2_title: "Baccalauréat (DES) scientifique — mathématiques",
    edu2_meta: "2020 — 2021 · Cameroun",
    contact_eyebrow: "CONTACT",
    contact_title: "Parlons de votre prochain projet",
    contact_text:
      "Je suis à la recherche d’un stage en développement web à partir de mai 2026. Ouvert aux échanges avec des équipes qui veulent un profil motivé et formé aux outils modernes.",
    form_name: "Nom",
    form_name_ph: "Votre nom",
    form_email: "Email",
    form_email_ph: "votre@email.com",
    form_message: "Message",
    form_message_ph: "Votre message",
    form_send: "Envoyer",
    form_sending: "Envoi...",
    form_success: "Message envoye avec succes. Merci, je vous repondrai bientot.",
    form_error:
      "Echec de l'envoi automatique. Veuillez reessayer ou m'ecrire directement a darylsaah@icloud.com.",
    form_note: "Envoi direct depuis le site, compatible avec toutes les boites mail (y compris iCloud)."
  },
  en: {
    nav_profile: "Profile",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_contact: "Contact",
    badge: "Web development internship (frontend or full stack) from May 2026",
    hero_title_1: "Graduating student in Information Technology",
    hero_title_2: "Web development and applications",
    hero_text:
      "I enjoy building modern, high-quality web experiences with JavaScript, React, Node.js, and databases. Detail-oriented, autonomous, and collaborative, I have shipped concrete work across UI, REST APIs, and data management.",
    cta_contact: "Contact me",
    cta_cv: "Download my resume",
    role: "Junior web developer",
    stat_projects: "hands-on projects",
    stat_ops: "internship availability",
    stat_ops_value: "May 2026",
    langs_label: "Languages: French, English",
    profile_eyebrow: "PROFILE",
    profile_title: "Web delivery with a quality mindset",
    profile_card1_title: "How I work",
    profile_card1_text:
      "I focus on meeting requirements, shipping on time, and iteratively improving features. I like clear workflows with Git and Jira and communicating decisions effectively.",
    profile_card2_title: "What I build",
    profile_card2_text:
      "Hands-on experience across the web stack: UI implementation, REST APIs secured with JWT, MySQL persistence, and teamwork on real course projects.",
    skills_eyebrow: "SKILLS",
    skills_title: "Technical expertise",
    skills_card1_title: "Languages",
    skills_card1_text: "JavaScript, Python, C++, C#.",
    skills_card2_title: "Web development",
    skills_card2_text:
      "HTML, CSS, React, Vue.js, Node.js, Express, REST APIs, JWT authentication.",
    skills_card3_title: "Data, networking, and tooling",
    skills_card3_text:
      "MySQL, UML, TCP/IP, Wi-Fi, VPN, VLAN, Git, GitHub, Jira, Linux and Unix.",
    projects_eyebrow: "PROJECTS",
    projects_title: "Practical experience and shipped work",
    projects_hint:
      "Add screenshots to public/projects using the filenames referenced in the code.",
    link_linkedin: "LinkedIn",
    link_github: "GitHub",
    projects_list: [
      {
        id: "afrika",
        meta: "Feb 2026 — present · Institut Grasset",
        title: "AfrikaMarket — mobile application",
        text:
          "Full-stack style work on a mobile app: REST integration, authentication, and user data management.",
        bullets: [
          "REST APIs with Node.js and Express",
          "Secure authentication (JWT) and user management",
          "MySQL database integration",
          "Team collaboration with Jira and Git"
        ]
      },
      {
        id: "bibliotheque",
        meta: "Nov 2025 — Jan 2026 · Institut Grasset",
        title: "Library management system",
        text:
          "Database-focused application with relational modeling and SQL operations for loans and catalog management.",
        bullets: [
          "Relational schema design and CRUD operations",
          "SQL queries for borrowing workflows",
          "Feature improvements and optimization",
          "Delivered to project requirements"
        ]
      },
      {
        id: "livres",
        meta: "Oct 2025 — Jan 2026 · Institut Grasset",
        title: "Livres Gourmands — website",
        text:
          "Dynamic website with structured content, clear navigation, and a UX-oriented interface.",
        bullets: [
          "HTML, CSS, and JavaScript",
          "Page structure, navigation, and content integration",
          "Iterated based on project needs",
          "Delivered on schedule"
        ]
      }
    ],
    education_eyebrow: "EDUCATION",
    education_title: "Academic background",
    edu1_title: "DEC in Information Technology (in progress)",
    edu1_text: "Specialization: information technology management — Institut Grasset, Montreal.",
    edu2_title: "Scientific high school diploma (DES) — mathematics",
    edu2_meta: "2020 — 2021 · Cameroon",
    contact_eyebrow: "CONTACT",
    contact_title: "Let’s talk about your next project",
    contact_text:
      "I am looking for a web development internship starting in May 2026. I would love to connect with teams that value curiosity, rigor, and modern tooling.",
    form_name: "Name",
    form_name_ph: "Your name",
    form_email: "Email",
    form_email_ph: "your@email.com",
    form_message: "Message",
    form_message_ph: "Your message",
    form_send: "Send",
    form_sending: "Sending...",
    form_success: "Message sent successfully. Thank you, I will reply soon.",
    form_error:
      "Automatic send failed. Please try again or contact me directly at darylsaah@icloud.com.",
    form_note: "Direct send from the website, compatible with all mail providers (including iCloud)."
  }
};

function ProjectCard({ id, meta, title, text, bullets, imageSrc, imageAlt }) {
  const [imageBroken, setImageBroken] = useState(false);
  const showPhoto = Boolean(imageSrc) && !imageBroken;

  return (
    <article className={`project-card${id ? ` project-card--${id}` : ""}`}>
      <div className={`project-thumb${showPhoto ? "" : " project-thumb--placeholder"}`}>
        {showPhoto ? (
          <img src={imageSrc} alt={imageAlt} onError={() => setImageBroken(true)} loading="lazy" />
        ) : null}
      </div>
      <div className="project-body">
        <p className="project-meta">{meta}</p>
        <h3>{title}</h3>
        <p>{text}</p>
        <ul>
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function normalizeLang(lang) {
  return lang === "en" ? "en" : "fr";
}

function getInitialLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return normalizeLang(stored);
  const navLang = (navigator.language || "").toLowerCase();
  return navLang.startsWith("en") ? "en" : DEFAULT_LANG;
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang);
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState("idle");
  const [submitFeedback, setSubmitFeedback] = useState("");

  const t = useMemo(() => dictionary[normalizeLang(lang)] || dictionary.fr, [lang]);
  const year = new Date().getFullYear();

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "en" ? "en-CA" : "fr-CA";
    document.title =
      lang === "en" ? "Daryl Saah | Junior Web Developer" : "Daryl Saah | Développeur web junior";
  }, [lang]);

  useEffect(() => {
    const blocks = Array.from(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window) || blocks.length === 0) {
      blocks.forEach((block) => block.classList.add("visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    blocks.forEach((block) => observer.observe(block));
    return () => observer.disconnect();
  }, []);

  function toggleLanguage() {
    setLang((prev) => (prev === "fr" ? "en" : "fr"));
  }

  async function submitContact(event) {
    event.preventDefault();
    setSubmitState("loading");
    setSubmitFeedback("");

    const cleanedName = name.trim();
    const cleanedEmail = email.trim();
    const cleanedMessage = message.trim();
    const subject =
      lang === "en"
        ? `Portfolio contact - ${cleanedName || "Visitor"}`
        : `Contact portfolio - ${cleanedName || "Visiteur"}`;

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: cleanedName || "-",
          email: cleanedEmail || "-",
          message: cleanedMessage || "-",
          _subject: subject,
          _captcha: "false"
        })
      });

      if (!response.ok) {
        throw new Error("Contact form submission failed");
      }

      setSubmitState("success");
      setSubmitFeedback(t.form_success);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setSubmitState("error");
      setSubmitFeedback(t.form_error);
    }
  }

  return (
    <>
      <div className="bg-decoration" />
      <a className="skip-link" href="#accueil">
        Aller au contenu
      </a>

      <header className="header">
        <nav className="container nav">
          <a href="#accueil" className="logo">
            Daryl<span>Saah</span>
          </a>
          <button
            className="lang-toggle"
            type="button"
            aria-label={lang === "fr" ? "Switch to English" : "Passer en francais"}
            onClick={toggleLanguage}
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            ☰
          </button>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#profil" onClick={() => setMenuOpen(false)}>
                {t.nav_profile}
              </a>
            </li>
            <li>
              <a href="#competences" onClick={() => setMenuOpen(false)}>
                {t.nav_skills}
              </a>
            </li>
            <li>
              <a href="#projets" onClick={() => setMenuOpen(false)}>
                {t.nav_projects}
              </a>
            </li>
            <li>
              <a href="#formation" onClick={() => setMenuOpen(false)}>
                {t.nav_education}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                {t.nav_contact}
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="accueil">
        <section className="hero container">
          <div className="hero-main">
            <p className="badge">{t.badge}</p>
            <h1>
              <span>{t.hero_title_1}</span>
              <br />
              <span>{t.hero_title_2}</span>
            </h1>
            <p className="hero-text">{t.hero_text}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#contact">
                {t.cta_contact}
              </a>
              <a className="btn ghost" href="/Daryl-Saah-CV.pdf" download>
                {t.cta_cv}
              </a>
            </div>
          </div>
          <aside className="hero-card">
            <h2>Daryl Saah</h2>
            <p className="role">{t.role}</p>
            <ul className="quick-info">
              <li>Montréal, Québec</li>
              <li>
                <a href="tel:+15144485556">514 448-5556</a>
              </li>
              <li>
                <a href="mailto:darylsaah@icloud.com">darylsaah@icloud.com</a>
              </li>
              <li>{t.langs_label}</li>
            </ul>
            <div className="hero-socials">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
                {t.link_linkedin}
              </a>
              <span className="muted" aria-hidden="true">
                ·
              </span>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
                {t.link_github}
              </a>
            </div>
            <div className="hero-stats">
              <article>
                <strong>3</strong>
                <span>{t.stat_projects}</span>
              </article>
              <article>
                <strong>{t.stat_ops_value}</strong>
                <span>{t.stat_ops}</span>
              </article>
            </div>
          </aside>
        </section>

        <section id="profil" className="section container reveal">
          <div className="section-head">
            <p className="eyebrow">{t.profile_eyebrow}</p>
            <h2>{t.profile_title}</h2>
          </div>
          <div className="grid two">
            <article className="card">
              <h3>{t.profile_card1_title}</h3>
              <p>{t.profile_card1_text}</p>
            </article>
            <article className="card">
              <h3>{t.profile_card2_title}</h3>
              <p>{t.profile_card2_text}</p>
            </article>
          </div>
        </section>

        <section id="competences" className="section container reveal">
          <div className="section-head">
            <p className="eyebrow">{t.skills_eyebrow}</p>
            <h2>{t.skills_title}</h2>
          </div>
          <div className="grid three">
            <article className="card feature-card">
              <h3>{t.skills_card1_title}</h3>
              <p>{t.skills_card1_text}</p>
            </article>
            <article className="card feature-card">
              <h3>{t.skills_card2_title}</h3>
              <p>{t.skills_card2_text}</p>
            </article>
            <article className="card feature-card">
              <h3>{t.skills_card3_title}</h3>
              <p>{t.skills_card3_text}</p>
            </article>
          </div>
          <div className="tag-list">
            <span>React</span>
            <span>Vue.js</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>REST</span>
            <span>JWT</span>
            <span>MySQL</span>
            <span>Git</span>
            <span>Jira</span>
            <span>UML</span>
          </div>
        </section>

        <section id="projets" className="section container reveal">
          <div className="section-head">
            <p className="eyebrow">{t.projects_eyebrow}</p>
            <h2>{t.projects_title}</h2>
            <p className="muted projects-hint">{t.projects_hint}</p>
          </div>
          <div className="projects-grid">
            {t.projects_list.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                meta={project.meta}
                title={project.title}
                text={project.text}
                bullets={project.bullets}
                imageSrc={PROJECT_IMAGES[project.id]}
                imageAlt={project.title}
              />
            ))}
          </div>
        </section>

        <section id="formation" className="section container reveal">
          <div className="section-head">
            <p className="eyebrow">{t.education_eyebrow}</p>
            <h2>{t.education_title}</h2>
          </div>
          <div className="education-list">
            <article className="edu-item">
              <h3>{t.edu1_title}</h3>
              <p>{t.edu1_text}</p>
            </article>
            <article className="edu-item">
              <h3>{t.edu2_title}</h3>
              <p>{t.edu2_meta}</p>
            </article>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer reveal">
        <div className="container footer-grid">
          <div>
            <p className="eyebrow">{t.contact_eyebrow}</p>
            <h2>{t.contact_title}</h2>
            <p className="muted">{t.contact_text}</p>
            <p>
              <a href="mailto:darylsaah@icloud.com">darylsaah@icloud.com</a>
            </p>
            <p>
              <a href="tel:+15144485556">514 448-5556</a>
            </p>
          </div>
          <form className="contact-form" onSubmit={submitContact}>
            <label htmlFor="name">{t.form_name}</label>
            <input
              id="name"
              type="text"
              placeholder={t.form_name_ph}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="email">{t.form_email}</label>
            <input
              id="email"
              type="email"
              placeholder={t.form_email_ph}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="message">{t.form_message}</label>
            <textarea
              id="message"
              rows="4"
              placeholder={t.form_message_ph}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <button className="btn primary" type="submit" disabled={submitState === "loading"}>
              {submitState === "loading" ? t.form_sending : t.form_send}
            </button>
            {submitFeedback ? (
              <p className={`form-status ${submitState === "error" ? "form-status--error" : ""}`}>
                {submitFeedback}
              </p>
            ) : null}
            <small>{t.form_note}</small>
          </form>
        </div>
        <p className="copyright">© {year} Daryl Saah</p>
      </footer>
    </>
  );
}
