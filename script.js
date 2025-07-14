document.addEventListener('DOMContentLoaded', function() {
  // Nastavitev letnice v footerju
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Večjezična podpora - prevodi
  const translations = {
    sl: {
      title: "Aljaž Gornik",
      subtitle: "Informatik • Tehnična podpora • Programer",
      tagline: "Rešujem probleme, ustvarjam rešitve",
      contact: "Kontakt",
      about: "O meni",
      skills: "Kompetence",
      experience: "Delovne izkušnje",
      education: "Izobrazba",
      location: "Ljubljana, Slovenija",
      rights: "Vse pravice pridržane.",
      prog_lang: "Programski jeziki",
      web_dev: "Spletni razvoj",
    databases: "Podatkovne baze",
    tools: "Orodja in platforme",
    soft_skills: "Ostale veščine",
    about1: "Sem motiviran in tehnično podkovan študent informatike z bogatimi izkušnjami na področju upravljanja informacijskih sistemov in IT podpore.",
    about2: "Specializiran sem za razvoj spletnih aplikacij in vzdrževanje spletnih strani, z močnimi veščinami reševanja problemov in strastjo za učenje novih tehnologij.",
    about3: "Odlikujejo me odlične analitične in komunikacijske veščine, kar mi omogoča učinkovito reševanje problemov in optimizacijo informacijskih sistemov. Vedno sem pripravljen na nove izzive in željan nadaljnjega izpopolnjevanja v hitro spreminjajočem se IT okolju.",
    job1_title: "Ministrstvo za digitalno preobrazbo",
    job1_1: "Razvoj in vzdrževanje portala SPOT",
    job1_2: "Sodelovanje pri prenovi uporabniškega vmesnika",
    job1_3: "Reševanje tehničnih težav uporabnikov",
    job1_4: "Analiza obstoječih e-postopkov na portalu SPOT – pregled elektronske oddaje vlog, strukture vsebin, doslednosti prikaza ter identifikacija možnosti za izboljšanje uporabniške izkušnje.",
    job1_5: "Testiranje umetne inteligence (AI) kot podpornega asistenta za portal eUprava – priprava uporabniških scenarijev, validacija odgovorov ter ocena primernosti integracije v javne e-storitve.",
    job2_title: "Pošta Slovenije",
    job2_1: "Administrativna opravila",
    job2_2: "Reševanje težav",
    job3_title: "Geberit",
    job3_1: "Pregledovanje in vodenje evidence zalog v skladišču",
    job3_2: "Kontrola stanja in količin materialov",
    job3_3: "Sodelovanje pri inventuri",
    job3_4: "Vnos podatkov v informacijski sistem",
    job3_5: "Komunikacija z drugimi oddelki glede stanja zalog",
    job3_6: "Reševanje težav v povezavi z zalogami",
    edu1_title: "Univerza v Mariboru",
    edu1_desc: "FOV – DIPLOMIRANI ORGANIZATOR INFORMATIK UN<br>Specializacija: Razvoj informacijskih sistemov<br>Poudarki: Java, JavaScript, podatkovne baze, spletni razvoj",
    edu2_title: "Srednja šola Domžale",
    edu2_desc: "Tehnik računalništva<br>Simulacija parkirišča (replika) – razvoj osnovnega modela delovanja parkirišča z uporabo logike za nadzor dostopa in upravljanje zasedenosti parkirnih mest. Projekt je bil izveden v sklopu predmeta programske logike in strukturiranega razmišljanja."
  },
    en: {
      title: "Aljaž Gornik",
      subtitle: "Computer Scientist • Technical Support • Programmer",
      tagline: "Solving problems, creating solutions",
      contact: "Contact",
      about: "About Me",
      skills: "Skills",
      experience: "Work Experience",
      education: "Education",
      projects: "Projects",
      location: "Ljubljana, Slovenia",
      rights: "All rights reserved.",
      prog_lang: "Programming Languages",
      web_dev: "Web Development",
    databases: "Databases",
    tools: "Tools and Platforms",
    soft_skills: "Other Skills",
    about1: "I am a motivated and technically skilled computer science student with extensive experience in information systems management and IT support.",
    about2: "I specialize in web application development and website maintenance, with strong problem-solving skills and a passion for learning new technologies.",
    about3: "I excel in analytical and communication skills, which enables me to effectively solve problems and optimize information systems. I am always ready for new challenges and eager to further improve in the rapidly changing IT environment.",
    job1_title: "Ministry of Digital Transformation",
    job1_1: "Development and maintenance of the SPOT portal",
    job1_2: "Participation in user interface redesign",
    job1_3: "Resolving technical issues for users",
    job1_4: "Analysis of existing e-procedures on the SPOT portal - review of electronic application submission, content structure, display consistency and identification of opportunities to improve user experience.",
    job1_5: "Testing artificial intelligence (AI) as a support assistant for the eUprava portal - preparing user scenarios, validating responses and assessing the suitability of integration into public e-services.",
    job2_title: "Post of Slovenia",
    job2_1: "Administrative tasks",
    job2_2: "Problem solving",
    job3_title: "Geberit",
    job3_1: "Reviewing and maintaining inventory records in the warehouse",
    job3_2: "Monitoring the condition and quantities of materials",
    job3_3: "Participation in inventory",
    job3_4: "Data entry into the information system",
    job3_5: "Communication with other departments regarding inventory status",
    job3_6: "Solving inventory-related problems",
    edu1_title: "University of Maribor",
    edu1_desc: "FOV - GRADUATE ORGANIZER OF COMPUTER SCIENCE<br>Specialization: Information Systems Development<br>Focus: Java, JavaScript, databases, web development",
    edu2_title: "Domžale High School",
    edu2_desc: "Computer Technician<br>Parking lot simulation (replica) - development of a basic model of parking lot operation using logic for access control and parking space occupancy management. The project was carried out as part of the subject of program logic and structured thinking."
  },
    de: {
      title: "Aljaž Gornik",
      subtitle: "Informatiker • Technischer Support • Programmierer",
      tagline: "Probleme lösen, Lösungen schaffen",
      contact: "Kontakt",
      about: "Über mich",
      skills: "Fähigkeiten",
      experience: "Berufserfahrung",
      education: "Bildung",
      projects: "Projekte",
      location: "Ljubljana, Slowenien",
      rights: "Alle Rechte vorbehalten.",
      prog_lang: "Programmiersprachen",
      web_dev: "Webentwicklung",
      databases: "Datenbanken",
      tools: "Werkzeuge und Plattformen",
      other_skills: "Andere Fähigkeiten",
      about1: "Ich bin ein motivierter und technisch versierter Informatikstudent mit umfangreichen Erfahrungen im Bereich Informationssystemmanagement und IT-Support.",
      about2: "Ich spezialisiere mich auf die Entwicklung von Webanwendungen und die Wartung von Websites, mit starken Problemlösungsfähigkeiten und einer Leidenschaft für das Lernen neuer Technologien.",
      about3: "Ich zeichne mich durch analytische und kommunikative Fähigkeiten aus, die es mir ermöglichen, Probleme effektiv zu lösen und Informationssysteme zu optimieren. Ich bin immer bereit für neue Herausforderungen und bestrebt, mich in der sich schnell verändernden IT-Umgebung weiter zu verbessern.",
      job1_title: "Ministerium für digitale Transformation",
      job1_1: "Entwicklung und Wartung des SPOT-Portals",
      job1_2: "Mitwirkung an der Neugestaltung der Benutzeroberfläche",
      job1_3: "Behebung technischer Probleme für Benutzer",
      job1_4: "Analyse bestehender E-Verfahren auf dem SPOT-Portal - Überprüfung der elektronischen Antragstellung, Inhaltsstruktur, Anzeigekonsistenz und Identifizierung von Möglichkeiten zur Verbesserung der Benutzererfahrung.",
      job1_5: "Testen von künstlicher Intelligenz (KI) als Unterstützungsassistent für das eUprava-Portal - Vorbereitung von Benutzerszenarien, Validierung von Antworten und Bewertung der Eignung für die Integration in öffentliche E-Dienste.",
      
      job2_title: "Slowenische Post",
      job2_1: "Verwaltungsaufgaben",
      job2_2: "Problemlösung",
      
      job3_title: "Geberit",
      job3_1: "Überprüfung und Führung von Lagerbestandsaufzeichnungen",
      job3_2: "Kontrolle des Zustands und der Mengen der Materialien",
      job3_3: "Mitwirkung bei der Inventur",
      job3_4: "Dateneingabe in das Informationssystem",
      job3_5: "Kommunikation mit anderen Abteilungen über den Lagerbestand",
      job3_6: "Lösung von Lagerproblemen",
      
      edu1_title: "Universität Maribor",
      edu1_desc: "FOV – DIPLOMIERTER INFORMATIKORGANISATOR<br>Spezialisierung: Entwicklung von Informationssystemen<br>Schwerpunkte: Java, JavaScript, Datenbanken, Webentwicklung",
      
      edu2_title: "Gymnasium Domžale",
      edu2_desc: "Computertechniker<br>Parkplatzsimulation (Replik) - Entwicklung eines Grundmodells des Parkplatzbetriebs mit Logik für Zugangskontrolle und Parkplatzbelegungsmanagement. Das Projekt wurde im Rahmen des Fachs Programmlogik und strukturiertes Denken durchgeführt."
    }
  };

  // Funkcija za spreminjanje jezika
  function changeLanguage(lang) {
    // Posodobi gumbe za jezik
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      }
    });
  
    // Posodobi vse elemente s data-translate atributom
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.value = translations[lang][key];
        } else {
          element.innerHTML = translations[lang][key];
        }
      }
    });
  
    // Posodobi elemente v seznamih (li elementi)
    document.querySelectorAll('li[data-translate]').forEach(li => {
      const key = li.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        li.innerHTML = translations[lang][key];
      }
    });
  
    // Shrani izbran jezik v localStorage
    localStorage.setItem('selectedLanguage', lang);
  }

  // Inicializacija jezika
  function initLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'sl';
    changeLanguage(savedLanguage);
  }

  // Dogodki za jezikovna stikala
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      changeLanguage(this.dataset.lang);
    });
  });

  // Inicializacija jezika ob nalaganju strani
  initLanguage();

  // Animacija progress barov
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target.querySelector('.skill-level-bar');
        const targetWidth = entry.target.getAttribute('data-width') || '70%';
        bar.style.width = targetWidth;
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.skill-level').forEach(skill => {
    skillObserver.observe(skill);
    skill.setAttribute('data-width', skill.querySelector('.skill-level-bar').style.width);
    skill.querySelector('.skill-level-bar').style.width = '0';
  });

  // Temni/svetli način
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
      document.documentElement.style.setProperty('--bg', '#f5f5f5');
      document.documentElement.style.setProperty('--card', '#ffffff');
      document.documentElement.style.setProperty('--text', '#333333');
      document.documentElement.style.setProperty('--text-light', '#666666');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.style.setProperty('--bg', '#0f0f0f');
      document.documentElement.style.setProperty('--card', '#181818');
      document.documentElement.style.setProperty('--text', '#e0e0e0');
      document.documentElement.style.setProperty('--text-light', '#a0a0a0');
      localStorage.setItem('theme', 'dark');
    }
  });

  // Inicializacija teme
  function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
      document.documentElement.style.setProperty('--bg', '#f5f5f5');
      document.documentElement.style.setProperty('--card', '#ffffff');
      document.documentElement.style.setProperty('--text', '#333333');
      document.documentElement.style.setProperty('--text-light', '#666666');
    }
  }

  initTheme();

  // Animacija ob prikazu elementov
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section, footer').forEach(section => {
    observer.observe(section);
  });
});
