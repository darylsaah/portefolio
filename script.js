const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const yearSlot = document.getElementById("year");
const revealBlocks = document.querySelectorAll(".reveal");
const langToggle = document.getElementById("lang-toggle");
const emailForm = document.getElementById("direct-email-form");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const i18nPlaceholderNodes = document.querySelectorAll("[data-i18n-placeholder]");

const STORAGE_KEY = "portfolio_lang";
const DEFAULT_LANG = "fr";

const dictionary = {
  fr: {
    nav_profile: "Profil",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_education: "Formation",
    nav_contact: "Contact",
    badge: "Disponible pour un stage ou emploi junior",
    hero_title_1: "Finissant DEC en technique de l'informatique",
    hero_title_2: "Programmation et nouveaux médias",
    hero_text:
      "Développeur polyvalent orienté résultats, j'allie programmation, réseaux et administration système pour concevoir des solutions robustes et performantes. On apprécie particulièrement mon autonomie, ma rigueur et ma capacité à communiquer clairement.",
    cta_contact: "Me contacter",
    cta_cv: "Télécharger mon CV",
    role: "Développeur Junior TI",
    stat_projects: "projets techniques",
    stat_ops: "vision production",
    profile_eyebrow: "PROFIL",
    profile_title: "Un profil polyvalent en développement et infrastructure",
    profile_card1_title: "Forces professionnelles",
    profile_card1_text:
      "Leadership, forte capacité d'analyse, sens de l'organisation et apprentissage rapide. J'aime transformer des besoins techniques en solutions concrètes et compréhensibles.",
    profile_card2_title: "Valeur ajoutée",
    profile_card2_text:
      "Maîtrise du cycle complet de développement logiciel, de l'identification des besoins jusqu'aux tests, au déploiement et au support post-livraison.",
    skills_eyebrow: "COMPÉTENCES",
    skills_title: "Expertises techniques",
    skills_card1_title: "Programmation",
    skills_card1_text: "Java, PHP, C#, SQL, JSP/Servlet, concepts .NET.",
    skills_card2_title: "Systèmes et réseaux",
    skills_card2_text: "Linux/Unix, TCP/IP, VLAN, VPN, administration serveurs.",
    skills_card3_title: "Données et opérations",
    skills_card3_text:
      "Oracle, MySQL, SQL Server, gestion d'incidents, documentation technique.",
    projects_eyebrow: "PROJETS",
    projects_title: "Réalisations académiques",
    project1_title: "Infrastructure réseau local",
    project1_text:
      "Conception d'un LAN segmenté par VLAN avec adressage IP, connectivité inter-équipements et règles de sécurité.",
    project2_title: "Administration Linux",
    project2_text:
      "Configuration de serveurs Linux, gestion utilisateurs, scripts d'automatisation et supervision d'incidents.",
    project3_title: "Application + base de données",
    project3_text:
      "Développement d'une application connectée à MySQL/Oracle avec scénarios de test et validation fonctionnelle.",
    project4_title: "Environnement virtualisé",
    project4_text:
      "Mise en place d'une architecture serveur-clients sous VirtualBox avec procédures de sauvegarde/restauration.",
    education_eyebrow: "FORMATION",
    education_title: "Parcours académique",
    edu1_title: "DEC en technologies de l'information (en cours)",
    edu1_text: "Spécialité: gestion des technologies de l'information.",
    edu2_title: "Baccalauréat (DES) scientifique de l'information",
    contact_eyebrow: "CONTACT",
    contact_title: "Construisons votre prochain projet",
    contact_text:
      "Je suis ouvert aux opportunités de stage et aux postes juniors en développement logiciel / support applicatif.",
    form_name: "Nom",
    form_name_ph: "Votre nom",
    form_email: "Email",
    form_email_ph: "votre@email.com",
    form_message: "Message",
    form_message_ph: "Votre message",
    form_send: "Envoyer",
    form_note: "Envoi direct vers votre application email."
  },
  en: {
    nav_profile: "Profile",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_contact: "Contact",
    badge: "Open to internships and junior roles",
    hero_title_1: "Graduating student in Computer Technology",
    hero_title_2: "Programming and New Media",
    hero_text:
      "Results-driven and versatile developer, I combine programming, networking, and system administration to deliver robust and high-performing solutions. I am valued for my autonomy, rigor, and clear communication.",
    cta_contact: "Contact me",
    cta_cv: "Download my resume",
    role: "Junior IT Developer",
    stat_projects: "technical projects",
    stat_ops: "operations mindset",
    profile_eyebrow: "PROFILE",
    profile_title: "A versatile profile across development and infrastructure",
    profile_card1_title: "Professional strengths",
    profile_card1_text:
      "Leadership, strong analytical skills, organization, and fast learning. I turn technical needs into concrete and understandable solutions.",
    profile_card2_title: "Added value",
    profile_card2_text:
      "Full software development lifecycle skills, from needs analysis to testing, deployment, and post-delivery support.",
    skills_eyebrow: "SKILLS",
    skills_title: "Technical expertise",
    skills_card1_title: "Programming",
    skills_card1_text: "Java, PHP, C#, SQL, JSP/Servlet, .NET concepts.",
    skills_card2_title: "Systems and networking",
    skills_card2_text: "Linux/Unix, TCP/IP, VLAN, VPN, ACL, server administration.",
    skills_card3_title: "Data and operations",
    skills_card3_text:
      "Oracle, MySQL, SQL Server, Shell scripting, incident management, technical documentation.",
    projects_eyebrow: "PROJECTS",
    projects_title: "Academic achievements",
    project1_title: "Local network infrastructure",
    project1_text:
      "Designed a VLAN-segmented LAN with IP addressing, inter-device connectivity, and baseline security rules.",
    project2_title: "Linux administration",
    project2_text:
      "Configured Linux servers, managed users, automated tasks with scripts, and monitored incidents.",
    project3_title: "Application + database",
    project3_text:
      "Built an application connected to MySQL/Oracle with test scenarios and functional validation.",
    project4_title: "Virtualized environment",
    project4_text:
      "Set up a server-client architecture in VirtualBox with backup and restore procedures.",
    education_eyebrow: "EDUCATION",
    education_title: "Academic background",
    edu1_title: "DEC in Information Technology (in progress)",
    edu1_text: "Specialization: information technology management.",
    edu2_title: "Bachelor (DES) Information Science",
    contact_eyebrow: "CONTACT",
    contact_title: "Let's build your next project",
    contact_text:
      "I am open to internship opportunities and junior positions in software development / application support.",
    form_name: "Name",
    form_name_ph: "Your name",
    form_email: "Email",
    form_email_ph: "your@email.com",
    form_message: "Message",
    form_message_ph: "Your message",
    form_send: "Send",
    form_note: "Direct send through your email application."
  }
};

function normalizeLang(lang) {
  return lang === "en" ? "en" : "fr";
}

function getInitialLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return normalizeLang(stored);
  const navLang = (navigator.language || "").toLowerCase();
  return navLang.startsWith("en") ? "en" : DEFAULT_LANG;
}

let currentLang = getInitialLang();

function applyTranslations(lang) {
  const active = dictionary[normalizeLang(lang)] || dictionary.fr;
  i18nNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key && active[key]) {
      node.textContent = active[key];
    }
  });

  i18nPlaceholderNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    if (key && active[key]) {
      node.setAttribute("placeholder", active[key]);
    }
  });

  document.documentElement.lang = lang === "en" ? "en-CA" : "fr-CA";
  document.title =
    lang === "en"
      ? "Daryl Saah | Junior IT Developer"
      : "Daryl Saah | Developpeur Junior TI";
  if (langToggle) {
    langToggle.textContent = lang === "fr" ? "EN" : "FR";
    langToggle.setAttribute(
      "aria-label",
      lang === "fr" ? "Switch to English" : "Passer en français"
    );
  }
}

function setMenuOpen(isOpen) {
  if (!navLinks || !menuButton) return;
  navLinks.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    setMenuOpen(!navLinks.classList.contains("open"));
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.classList.contains("open")) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    const clickedInsideNav = navLinks.contains(target) || menuButton.contains(target);
    if (!clickedInsideNav) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setMenuOpen(false));
  });
}

if (yearSlot) {
  yearSlot.textContent = new Date().getFullYear().toString();
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    applyTranslations(currentLang);
    localStorage.setItem(STORAGE_KEY, currentLang);
  });
}

if (emailForm) {
  emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const name = nameInput && "value" in nameInput ? nameInput.value.trim() : "";
    const email = emailInput && "value" in emailInput ? emailInput.value.trim() : "";
    const message = messageInput && "value" in messageInput ? messageInput.value.trim() : "";
    const subject =
      currentLang === "en"
        ? `Portfolio contact - ${name || "Visitor"}`
        : `Contact portfolio - ${name || "Visiteur"}`;
    const bodyText = `${currentLang === "en" ? "Name" : "Nom"}: ${name || "-"}\n${
      currentLang === "en" ? "Email" : "Courriel"
    }: ${email || "-"}\n\n${currentLang === "en" ? "Message" : "Message"}:\n${
      message || "-"
    }`;
    window.location.href = `mailto:darylsaah@icloud.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyText)}`;
  });
}

if ("IntersectionObserver" in window && revealBlocks.length > 0) {
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

  revealBlocks.forEach((block) => observer.observe(block));
} else {
  revealBlocks.forEach((block) => block.classList.add("visible"));
}

applyTranslations(currentLang);
