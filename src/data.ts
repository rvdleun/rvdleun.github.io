export const Data = {
  aboutMe: {
    birthDate: "1983-02-24",
    birthPlace: "Dordrecht",
    email: "ruben@leunix.nl",
    name: "Ruben van der Leun",
    nationality: {
      en: "Dutch",
      nl: "Nederlandse",
    },
    maritalStatus: {
      en: "Married",
      nl: "Gehuwd",
    },
    socials: {
      GitHub: "https://github.com/rvdleun",
      LinkedIn: "https://www.linkedin.com/in/rvdleun/",
      Mastadon: "https://mas.to/@rvdleun",
    },
    recentUsedSkillsAndExpertise: [
      "Angular",
      "NestJS",
      "React",
      "React-Three",
      "React-XR",
      "Three.JS",
      "Unity",
      "Vuforia",
    ],
    description: {
      en: [
        "When I join your team, you will get a fairly geeky developer. I have an innate enthusiasm about software engineering that comes with my upbringing and I bring that with me into my work. One key word that you will find me repeating a lot is 'Responsibility', meaning that I prefer to write scripts, functions and components who generally have a single focus. Allow me to add unit tests and stories to make sure that they do their tasks well(now, and in the future), and I will be ending my day on a very satisfied note.",
        "I prefer to be a team player. If I have an opinion about a topic, I will voice it and try to bring in my arguments for what I prefer. However, if someone brings up counter-arguments that change my view on something(which happens more often with junior developers than I care to admit) or would be too time-consuming with a deadline in mind, I'm more than willing to compromise or go for a different approach.",
        "One other topic that I will also bring up a lot is Augmented and Virtual Reality. It's a topic that I'm incredibly passionate about. I was psyched when I first got to try a headset at a HCC conference in 1997, When the VR hype began with the Oculus Quest, I've been developing for it ever since.",
      ],
      nl: [
        "Als ik mijzelf zou omschrijven met twee woorden, zou dat 'geeky ontwikkelaar' zijn. Ik ben van nature enthousiast over software engineering, dat ik heb meegekregen van huis uit, en dat neem ik mee in mijn werk. Eén sleutelwoord dat je me vaak zult horen zeggen, is 'Verantwoordelijkheid'(of responsibility). Dat betekent dat ik het liefst scripts, functies en componenten schrijf die meestal één specifiek doel hebben. Sta me toe unit tests en Storybook stories toe te voegen om ervoor te zorgen dat ze hun taken goed uitvoeren, en dan sluit ik mijn dag af met een heel tevreden gevoel.",
        "Ik werk graag als onderdeel van een team. Als ik een mening heb over iets, zal ik die delen en proberen mijn argumenten te geven voor wat ik denk dat het beste is. Maar als iemand met tegenargumenten komt die mijn kijk op iets veranderen (wat bij junior ontwikkelaars vaker gebeurt dan ik wil toegeven), of als iets te tijdrovend zou zijn met een deadline in zicht, ben ik meer dan bereid om compromissen te sluiten of een andere aanpak te overwegen.",
        "Nog een ander onderwerp waar ik vaak over praat, is Augmented en Virtual Reality. Daar ben ik echt gepassioneerd over. Ik was razend enthousiast toen ik voor het eerst een VR-bril mocht uitproberen op een HCC-Beurs in 1997. En sinds de hele VR-hype begon met de Oculus Quest, ontwikkel ik er met veel plezier voor.",
      ],
    },
  },
  experiences: [
    {
      organisationTitle: "KLM, Schiphol",
      workTitle: {
        en: "Full-Stack Developer (with focus on front-end)",
        nl: "Full-Stack Developer (met focus op front-end)",
      },
      dateRange: {
        end: "2023-12-31",
        start: "2021-09-01",
      },
      description: {
        en: [
          "I was asked to come back to help out with the development for the next phase of the Align project. The application was rebuilt to a new React project, using NextJS. The focus was on building a frontend for the employees to use which would let them create new scenarios, add resources and see the end results with numerous graphs. Next to this, I provided the team with my experience on how to split up parts of the code in standalone components and kept a keen eye on the directory structure with future expansions in mind.",
          "D3 was used to generate graphs. We created a number of generic React, standalone components that would allow us to create many different graphs without having to copy-paste code. For some more advanced graph that required more input, we used Konva to render and implement interaction. Data was retrieved via SWR and split up into several hooks. When the application grew over time, Redux was used to manage all user selected options into a single point of truth.",
          "If the backend team was backed up with tasks, I would help out with adding endpoints to the Python backend to retrieve any data that I needed for the task I was working on.",
          "Finally, as an experienced Angular developer, I was tasked with helping out other teams whenever any additional help was required.",
        ],
        nl: [
          "Ik werd gevraagd om terug te komen om te helpen bij de ontwikkeling van de volgende fase van het Align-project. De applicatie is opnieuw opgebouwd als een nieuw React-project, met gebruik van NextJS. De focus lag op het bouwen van een frontend voor de medewerkers, waarmee ze nieuwe scenario's konden creëren, middelen konden toevoegen en de eindresultaten konden bekijken met talloze grafieken. Daarnaast heb ik het team voorzien van mijn ervaring in het opdelen van delen van de code in op zichzelf staande componenten en heb ik scherp gelet op de directorystructuur met het oog op toekomstige uitbreidingen.",
          "D3 werd gebruikt om grafieken te genereren. We hebben een aantal generieke React-componenten ontwikkeld die het mogelijk maakten om veel verschillende grafieken te maken zonder code te hoeven kopiëren en plakken. Voor meer geavanceerde grafieken die meer input vereisten, gebruikten we Konva om te renderen en interactie te implementeren. Gegevens werden opgehaald via SWR en opgesplitst in verschillende hooks. Naarmate de applicatie in de loop der tijd groeide, werd Redux gebruikt om alle door de gebruiker geselecteerde opties te beheren in één centraal punt van waarheid.",
          "Als het backendteam overbelast was met taken, hielp ik bij het toevoegen van endpoints aan de Python-backend om de gegevens op te halen die ik nodig had voor de taak waaraan ik werkte.",
          "Ten slotte, als ervaren Angular-ontwikkelaar, kreeg ik de taak om andere teams te ondersteunen wanneer extra hulp nodig was.",
        ],
      },
      usedSkillsAndExpertise: [
        "React",
        "NextJS",
        "D3",
        "Redux",
        "Konva",
        "Python",
        "Angular",
      ],
    },
    {
      organisationTitle: "360Fabriek, Rotterdam",
      workTitle: "Lead WebXR Developer",
      dateRange: {
        end: "2023-12-31",
        start: "2020-12-01",
      },
      description: {
        en: [
          "At 360Fabriek, I was tasked with developing a number of XR-related projects like product configurators, custom client projects and additional features to the internal Mozilla Hubs build. As my responsibilities grew, I pushed for the company to adopt tools to better maintain and host projects, like Github to store projects and CapRover for deploying projects.",
          "One of the first main projects I was responsible for was XR Academy, an webapp where users can learn about several different topics. This was built using AFrame to create an innovative 3D environment. All items within are stored in JSON files with the idea that this can eventually be moved to a custom backend with API. After some initial success, the project was expanded to also be compiled to a standalone Android and iOS application, using Capacitor.",
          "For two projects, I was the lead developer for two large 'metaverse' projects for Sam Media: Holozonia and SingSpace. My role was to define the architecture, communicate with the project owners on how to proceed, and work alongside the developers to deliver the requested features on time. For these projects, we built a React-powered user interface overlaid on top of the internal Mozilla Hubs instance. For the latter project, there was also a focus on broadcasting audio to other users via WebRTC. We used MediaSoup to accomplish this.",
          "Next to my Web-related projects, I also played a part with building a number of AR projects with Vuforia. Here, I researched a proper pipeline to go from using their tools to analyze our models and setup tracking in Unity. I was part of two projects where an overlay was displayed on top of an object(a refrigerator for one client, an F1 engine for the other).",
        ],
        nl: [
          "Bij 360Fabriek kreeg ik de opdracht om verschillende XR-gerelateerde projecten te ontwikkelen, zoals productconfigurators, op maat gemaakte klantprojecten en extra functies voor de interne Mozilla Hubs-build. Naarmate mijn verantwoordelijkheden groeiden, drong ik er bij het bedrijf op aan om tools te gebruiken voor een beter onderhoud en hosting van projecten, zoals Github voor het opslaan van projecten en CapRover voor het implementeren van projecten.",
          "Een van de eerste belangrijke projecten waarvoor ik verantwoordelijk was, was XR Academy, een webapp waar gebruikers verschillende onderwerpen kunnen leren. Dit werd gebouwd met behulp van AFrame om een innovatieve 3D-omgeving te creëren. Alle items binnenin worden opgeslagen in JSON-bestanden, met het idee dat dit uiteindelijk naar een aangepaste backend met API kan worden verplaatst. Na enig succes werd het project uitgebreid naar een zelfstandige Android- en iOS-toepassing met behulp van Capacitor.",
          "Voor twee projecten was ik de hoofdontwikkelaar voor twee grote 'metaverse'-projecten voor Sam Media: Holozonia en SingSpace. Mijn rol was om de architectuur te definiëren, te communiceren met de projecteigenaren over hoe verder te gaan, en samen te werken met de ontwikkelaars om de gevraagde functies op tijd te leveren. Voor deze projecten hebben we een door React aangedreven gebruikersinterface gebouwd die bovenop de interne Mozilla Hubs-instantie is geplaatst. Voor het laatste project lag de focus ook op het uitzenden van audio naar andere gebruikers via WebRTC. Hiervoor hebben we MediaSoup gebruikt.",
          "Naast mijn webgerelateerde projecten speelde ik ook een rol bij het bouwen van een aantal AR-projecten met Vuforia. Hier heb ik onderzocht hoe we van hun tools naar een juiste werkwijze konden gaan om onze modellen te analyseren en tracking in Unity op te zetten. Ik maakte deel uit van twee projecten waarbij een overlay werd weergegeven bovenop een object (een koelkast voor een klant, een F1-motor voor de andere).",
        ],
      },
      usedSkillsAndExpertise: [
        "React",
        "React-Three-Fiber",
        "Three.js",
        "Unity",
        "Vuforia",
        "Capacitor",
        "NestJS",
        "Socket.IO",
        "WebRTC",
        "MediaSoup",
        "Github Actions",
      ],
    },
    {
      organisationTitle: "VirBELA, Washington US (Remote)",
      workTitle: "WebVR Developer (Part-time)",
      dateRange: {
        end: "2021-09-31",
        start: "2019-10-01",
      },
      description: {
        en: [
          "I was invited to help out with the first steps of the Frame project. Frame is an online 3D environment where users can come togeher to chat and present. The focus is on empowering the users to build and manage their own scenes instead of prebuilt environments.",
          "The project owner wanted to have an option for users to be able to broadcast their webcam and desktop into the environment. Due to my previous experience with building WebRTC for an open-source project called On/Office, I was invited to implement this feature. After delivering this(using Janus), I continued adding new features when time was available. Examples here include letting the user import models from Sketchfab, implementing movement controls for mobile, and ensuring that certain models remained in front of the user.",
        ],
        nl: [
          "Ik werd uitgenodigd om te helpen bij de eerste stappen van het Frame-project. Frame is een online 3D-omgeving waar gebruikers kunnen samenkomen om te chatten en te presenteren. De focus ligt op het in staat stellen van de gebruikers om hun eigen scènes te bouwen en beheren in plaats van vooraf gebouwde omgevingen.",
          "De projecteigenaar wilde dat gebruikers de optie hadden om hun webcam en bureaublad in de omgeving te kunnen uitzenden. Vanwege mijn eerdere ervaring met het bouwen van WebRTC voor een open-source project genaamd On/Office, werd ik uitgenodigd om deze functie te implementeren. Nadat ik dit had geleverd (met behulp van Janus), bleef ik nieuwe functies toevoegen wanneer er tijd beschikbaar was. Voorbeelden hiervan zijn het toestaan van het importeren van modellen vanuit Sketchfab door de gebruiker, het implementeren van bewegingsbesturing voor mobiele apparaten en ervoor zorgen dat bepaalde modellen voor de gebruiker blijven staan.",
        ],
      },
      usedSkillsAndExpertise: [
        "AFrame",
        "Javascript",
        "Janus",
        "Node",
        "Three.js",
        "Vue.JS",
      ],
    },
    {
      organisationTitle: "FedEx, Eindhoven (Remote)",
      workTitle: "Angular Developer",
      dateRange: {
        end: "2021-08-30",
        start: "2021-01-01",
      },
      description: {
        en: [
          "My job at FedEx was to assist with developing the MyTNT2 project. This application is being used by small companies to arrange shipment for their orders.",
          "My role was to adding new features as requested by the customers, and fix bugs as soon as possible. Furthermore, there were large parts of the code written in AngularJS that need to be upgraded to the latest Angular version. Of note, I was able to fix an onbscure bug that only occurred in Internet Explorer 10 that a few clients were still using.",
        ],
        nl: [
          "Mijn functie bij FedEx was om te helpen bij de ontwikkeling van het MyTNT2-project. Deze applicatie wordt gebruikt door kleine bedrijven om zendingen voor hun bestellingen te regelen.",
          "Mijn rol was om nieuwe functies toe te voegen zoals gevraagd door de klanten, en bugs zo snel mogelijk op te lossen. Bovendien waren er grote delen van de code geschreven in AngularJS die moesten worden bijgewerkt naar de nieuwste versie van Angular. Opmerkelijk is dat ik in staat was om een obscure bug op te lossen die alleen optrad in Internet Explorer 10, dat nog door enkele klanten werd gebruikt.",
        ],
      },
      usedSkillsAndExpertise: ["Angular", "AngularJS"],
    },
    {
      organisationTitle: "Therapieland, Amsterdam (Remote)",
      workTitle: "WebRTC Consultant",
      dateRange: {
        end: "2020-12-31",
        start: "2020-05-01",
      },
      description: {
        en: [
          "At Therapieland, there was a project to expand their internal video call service due to increased demand due to the Corona lockdown. I was tasked with building a custom client around their Jitsi-powered architecture. With the help of the backend team, we built a completely new setup where therapists would be able to invite users, moderate the sessions (including when users would be able to enter the room).",
          "Next to that, some additional features were added, like being able to share your desktop while still being able to see the participants, a picture-in-picture mode where you could see the other users, and a canvas to draw on.",
        ],
        nl: [
          "Bij Therapieland was er een project om hun interne videoservice uit te breiden vanwege de toenemende vraag als gevolg van de Corona-lockdown. Ik kreeg de taak om een aangepaste client te bouwen rond hun door Jitsi aangedreven architectuur. Met hulp van het backendteam hebben we een volledig nieuwe opstelling gebouwd waar therapeuten gebruikers konden uitnodigen, de sessies konden modereren (inclusief wanneer gebruikers de ruimte konden betreden).",
          "Daarnaast werden enkele extra functies toegevoegd, zoals de mogelijkheid om je bureaublad te delen terwijl je nog steeds de deelnemers kon zien, een beeld-in-beeld modus waarin je de andere gebruikers kon zien, en een canvas om op te tekenen.",
        ],
      },
      usedSkillsAndExpertise: ["Vue.JS", "Jitsi", "Websockets", "Python"],
    },
    {
      organisationTitle: "KLM, Schiphol",
      workTitle: "(Lead) Frontend Developer",
      dateRange: {
        end: "2020-03-31",
        start: "2017-09-01",
      },
      description: {
        en: [
          "At the KLM, I participated in three different projects.",
          "The first one I joined was for an existing team to develop iMech, an iPad app to help the engineers keep track of the tasks linked to aircraft maintenance. My daily work consisted of adding new features and bugfixes.",
          "For the second project, I joined the KLM Digitals Studios as the Lead Developer for a new app called ‘CrewNotify’ from April 2018 to March 2019. The goal is the app is to let the crew know whenever there would be a change in their schedule (delay, new flights, etc), and for them to be able to confirm that they had seen these messages. My role here was in setting up the project, guide the developers on where to take the project and setup a pipeline to build and deploy an Android and iOS version.",
          "From April 2019 onwards, I joined ODS where I was tasked with developing the frontend for the Align project. My role was to develop a tool that would show the results of several simulations for the schedule planners. Next to this, I helped the front-end chapter with several guidelines on how to split up a project into modules and components, as well as how to perform test-driven development.",
        ],
        nl: [
          "Bij KLM heb ik deelgenomen aan drie verschillende projecten.",
          "Het eerste project waar ik aan deelnam was voor een bestaand team om iMech te ontwikkelen, een iPad-app om de ingenieurs te helpen bij het bijhouden van de taken die verband houden met vliegtuigonderhoud. Mijn dagelijkse werkzaamheden bestonden uit het toevoegen van nieuwe functies en bugfixes.",
          "Voor het tweede project ben ik toegetreden tot KLM Digital Studios als Lead Developer voor een nieuwe app genaamd 'CrewNotify' van april 2018 tot maart 2019. Het doel van de app is om de bemanning op de hoogte te stellen wanneer er wijzigingen zijn in hun planning (vertraging, nieuwe vluchten, etc.), en voor hen om te kunnen bevestigen dat ze deze berichten hebben gezien. Mijn rol hier was het opzetten van het project, het begeleiden van de ontwikkelaars over de koers van het project en het opzetten van een pipeline om een Android- en iOS-versie te bouwen en implementeren.",
          "Vanaf april 2019 ben ik toegetreden tot ODS, waar ik belast was met het ontwikkelen van de frontend voor het Align-project. Mijn rol was het ontwikkelen van een tool die de resultaten van verschillende simulaties voor de roosterplanners zou tonen. Daarnaast heb ik het front-end team geholpen met richtlijnen over hoe een project in modules en componenten op te delen, evenals hoe test-driven development uit te voeren.",
        ],
      },
      usedSkillsAndExpertise: ["Angular", "Ionic", "D3", "NGRX", "Bamboo"],
    },
  ],
  moreExperience: {
    en: "Next to the experiences listed above, I've also worked for numerous different companies and projects since 2005. Please refer to my LinkedIn page for more information.",
    nl: "Naast de hierboven vermelde ervaringen heb ik ook voor tal van verschillende bedrijven en projecten gewerkt sinds 2005. Raadpleeg mijn LinkedIn-pagina voor meer informatie.",
  },
  education: [
    {
      title: "Rotterdam University of Applied Sciences, Rotterdam",
      subTitle: "HIO, Software Development",
      dateRange: {
        end: "2007",
        start: "2002",
      },
    },
    {
      title: "Da Vinci College, Dordrecht",
      subTitle: "MBO, System Management",
      dateRange: {
        end: "2002",
        start: "1999",
      },
    },
  ],
  personalProjects: [
    {
      title: "RogueSaber",
      href: "https://roguesaber.rvdleun.com/",
      description: {
        en: [
          "To experiment with the Rogue Engine tool, I built a simple game where the player wields a lightsaber and has to block lasers fired from robots around him.",
          "This project got a surprising amount of attention, being featured in the Oculus Browser and even getting a nomination for WebXR Game of the Year.",
        ],
        nl: [
          "Om te experimenteren met de Rogue Engine-tool, heb ik een eenvoudig spel gebouwd waarin de speler een lightsaber hanteert en laserstralen moet blokkeren die worden afgevuurd door robots om hem heen.",
          "Dit project trok verrassend veel aandacht en werd zelfs in de Oculus Browser gepresenteerd, en kreeg een nominatie voor WebXR Game van het Jaar.",
        ],
      },
    },
    {
      title: "Don't leave 'em hanging",
      href: "https://heyvr.io/game/dont-leave-em-hanging",
      description: {
        en: [
          "In an attempt to elevate some tension during the early days of the lockdown, I built this game where the goal is to give as many high fives and fist bumps to the people around you.",
        ],
        nl: [
          "In een poging om de spanning in de beginfase van de lockdown wat te verlichten, heb ik dit spel gebouwd waarbij het doel is om zoveel mogelijk high fives en vuiststoten aan de mensen om je heen te geven.",
        ],
      },
    },
    {
      title: "ViRTC",
      href: "https://virtc.app/",
      description: {
        en: [
          "When I used to live in a smaller apartment with no spare room to work in, I dabbled with multiple approaches to stream my desktop to a VR headset to allow me to work isolated from my environment.",
          "The end result is virtc.app, a webapp that makes connecting your desktop to an Oculus Quest easy without having to install anything.",
        ],
        nl: [
          "Toen ik in een kleiner appartement woonde zonder extra ruimte om in te werken, heb ik geëxperimenteerd met meerdere benaderingen om mijn bureaublad naar een VR-headset te streamen, zodat ik geïsoleerd van mijn omgeving kon werken.",
          "Het eindresultaat is virtc.app, een webapplicatie die het eenvoudig maakt om je bureaublad met een Oculus Quest te verbinden zonder dat je iets hoeft te installeren.",
        ],
      },
    },
    {
      title: {
        en: "Numerous talks about WebXR",
        nl: "Diverse talks over WebXR",
      },
      href: "https://fronteers.nl/congres/2017/speakers",
      description: {
        en: [
          "In the past, I have given a number of talks to promote WebXR at several conferences and meetups. It's a way for me to have an outlet for my enthusiasm about the topic, and I always enjoy showing people what we can do with the technology.",
          "Due to the easy access provided by the browser, I would often develop an experience live, which users could see and follow on their own devices.",
        ],
        nl: [
          "In het verleden heb ik een aantal presentaties gegeven om WebXR te promoten op verschillende conferenties en bijeenkomsten. Het is voor mij een manier om mijn enthousiasme over het onderwerp te uiten, en ik geniet er altijd van om mensen te laten zien wat we met de technologie kunnen doen.",
          "Vanwege de gemakkelijke toegang die de browser biedt, ontwikkelde ik vaak live een ervaring die gebruikers op hun eigen apparaten konden zien en volgen.",
        ],
      },
    },
  ],
  spareTime: [
    {
      title: "Coding",
      description: {
        en: "Whenever I'm not working, I can often be found still coding in my spare time. In general, these are on projects that interest me (WebXR, small games), or to learn a new framework or way of working. A number of the results are listed above.",
        nl: "Wanneer ik niet aan het werk ben, ben ik vaak nog steeds aan het programmeren in mijn vrije tijd. Over het algemeen zijn dit projecten die me interesseren (WebXR, kleine games), of om een nieuw framework of manier van werken te leren. Een aantal van de resultaten staan hierboven vermeld.",
      },
    },
    {
      title: {
        en: "Pets",
        nl: "Huisdieren",
      },
      description: {
        en: "With two dogs and two cats at home, a lot of time needs to be invested to make sure that their lives are the best that we can offer them. This includes going on long walks and playtime.",
        nl: "Met twee honden en twee katten thuis moet er veel tijd worden geïnvesteerd om ervoor te zorgen dat hun levens zo goed mogelijk zijn. Dit omvat lange wandelingen maken en speeltijd.",
      },
    },
    {
      title: "Gaming",
      description: {
        en: "A lot of my spare time is taken up with gaming. General focus is on RPG, strategy and some action games, as well as cooperative games with my wife. Recently, I've also joined a monthly tabletop Pathfinder campaign.",
        nl: "Een groot deel van mijn vrije tijd wordt in beslag genomen door gamen. Over het algemeen richt ik me op RPG's, strategie- en actiespellen, evenals coöperatieve spellen met mijn vrouw. Onlangs ben ik ook lid geworden van een maandelijkse tabletop Pathfinder-campaign.",
      },
    },
    {
      title: "AI Tools",
      description: {
        en: "I find myself spending a large amount of time playing around with creating images in Midjourney or having conversations with ChatGPT while on walks. Next to that, I've also been experimenting with using the ChatGPT AI.",
        nl: "Ik merk dat ik een groot deel van mijn tijd besteed aan het spelen met het maken van afbeeldingen in Midjourney of aan het converseren met ChatGPT tijdens wandelingen. Daarnaast heb ik ook geëxperimenteerd met het gebruik van de ChatGPT AI.",
      },
    },
    {
      title: "3D Printer",
      description: {
        en: "After moving a FlashForge Adventurer 4 into my office, I've been tinkering with printing numerous things to help out around the house or small models. Also been experimenting with printing my own designs, created with either Blender or THREE.js.",
        nl: "Nadat ik een FlashForge Adventurer 4 naar mijn kantoor heb verhuisd, ben ik aan het experimenteren met het 3D-printen van tal van dingen om te helpen in huis of kleine modellen. Ik heb ook geëxperimenteerd met het 3D-printen van mijn eigen ontwerpen, gemaakt met behulp van Blender of THREE.js.",
      },
    },
  ],
};
