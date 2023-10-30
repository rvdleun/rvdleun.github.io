export const Data = {
    "aboutMe": {
      "birthDate": "1983-02-24",
      "birthPlace": "Dordrecht",
      "email": "ruben@leunix.nl",
      "name": "Ruben van der Leun",
      "nationality": {
        "en": "Dutch",
        "nl": "Nederlandse"
      },
      "maritalStatus": {
        "en": "Married",
        "nl": "Gehuwd"
      },
      "socials": {
        "GitHub": "https://github.com/rvdleun",
        "LinkedIn": "https://www.linkedin.com/in/rvdleun/",
        "Mastadon": "https://mas.to/@rvdleun"
      },
      "recentUsedSkillsAndExpertise": [
        "Angular",
        "NestJS",
        "React",
        "React-Three",
        "React-XR",
        "Three.JS",
        "Unity",
        "Vuforia"
      ],
      "description": [
        "When I join your team, you will get a fairly geeky developer. I have an innate enthusiasm about software engineering that comes with my upbringing and I bring that with me into my work. One key word that you will find me repeating a lot is 'Responsibility', meaning that I prefer to write scripts, functions and components who generally have a single focus. Allow me to add unit tests and stories to make sure that they do their tasks well(now, and in the future), and I will be ending my day on a very satisfied note.",
        "I prefer to be a team player. If I have an opinion about a topic, I will voice it and try to bring in my arguments for what I prefer. However, if someone brings up counter-arguments that change my view on something(which happens more often with junior developers than I care to admit) or would be too time-consuming with a deadline in mind, I'm more than willing to compromise or go for a different approach.",
        "One other topic that I will also bring up a lot is Augmented and Virtual Reality. It's a topic that I'm incredibly passionate about. I was psyched when I first got to try a headset at a HCC conference in 1997, 'W'hen the VR hype began with the Oculus Quest, I've been developing for it ever since."
      ]
    },
    "experiences": [
      {
        "organisationTitle": "KLM, Schiphol",
        "workTitle": "Full-Stack Developer (with focus on front-end)",
        "dateRange": {
          "end": "2023-12-31",
          "start": "2021-09-01"
        },
        "description": [
          "I was asked to come back to help out with the development for the next phase of the Align project. The application was rebuilt to a new React project, using NextJS. The focus was on building a frontend for the employees to use which would let them create new scenarios, add resources and see the end results with numerous graphs. Next to this, I provided the team with my experience on how to split up parts of the code in standalone components and kept a keen eye on the directory structure with future expansions in mind.",
          "D3 was used to generate graphs. We created a number of generic React, standalone components that would allow us to create many different graphs without having to copy-paste code. For some more advanced graph that required more input, we used Konva to render and implement interaction. Data was retrieved via SWR and split up into several hooks. When the application grew over time, Redux was used to manage all user selected options into a single point of truth.",
          "If the backend team was backed up with tasks, I would help out with adding endpoints to the Python backend to retrieve any data that I needed for the task I was working on.",
          "Finally, as an experienced Angular developer, I was tasked with helping out other teams whenever any additional help was required."
        ],
        "usedSkillsAndExpertise": [
          "React",
          "NextJS",
          "D3",
          "Redux",
          "Konva",
          "Python",
          "Angular"
        ]
      },
      {
        "organisationTitle": "360Fabriek, Rotterdam",
        "workTitle": "Lead WebXR Developer",
        "dateRange": {
          "end": "2023-12-31",
          "start": "2020-12-01"
        },
        "description": [
          "At 360Fabriek, I was tasked with developing a number of XR-related projects like product configurators, custom client projects and additional features to the internal Mozilla Hubs build. As my responsibilities grew, I pushed for the company to adopt tools to better maintain and host projects, like Github to store projects and CapRover for deploying projects.",
          "One of the first main projects I was responsible for was XR Academy, an webapp where users can learn about several different topics. This was built using AFrame to create an innovative 3D environment. All items within are stored in JSON files with the idea that this can eventually be moved to a custom backend with API. After some initial success, the project was expanded to also be compiled to a standalone Android and iOS application, using Capacitor.",
          "For two projects, I was the lead developer for two large 'metaverse' projects for Sam Media: Holozonia and SingSpace. My role was to define the architecture, communicate with the project owners on how to proceed, and work alongside the developers to deliver the requested features on time. For these projects, we built a React-powered user interface overlaid on top of the internal Mozilla Hubs instance. For the latter project, there was also a focus on broadcasting audio to other users via WebRTC. We used MediaSoup to accomplish this.",
          "Next to my Web-related projects, I also played a part with building a number of AR projects with Vuforia. Here, I researched a proper pipeline to go from using their tools to analyze our models and setup tracking in Unity. I was part of two projects where an overlay was displayed on top of an object(a refrigerator for one client, an F1 engine for the other)."
        ],
        "usedSkillsAndExpertise": [
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
          "Github Actions"
        ]
      },
      {
        "organisationTitle": "VirBELA, Washington US (Remote)",
        "workTitle": "WebVR Developer (Part-time)",
        "dateRange": {
          "end": "2021-09-31",
          "start": "2019-10-01"
        },
        "description": [
          "I was invited to help out with the first steps of the Frame project. Frame is an online 3D environment where users can come togeher to chat and present. The focus is on empowering the users to build and manage their own scenes instead of prebuilt environments.",
          "The project owner wanted to have an option for users to be able to broadcast their webcam and desktop into the environment. Due to my previous experience with building WebRTC for an open-source project called On/Office, I was invited to implement this feature. After delivering this(using Janus), I continued adding new features when time was available. Examples here include letting the user import models from Sketchfab, implementing movement controls for mobile, and ensuring that certain models remained in front of the user."
        ],
        "usedSkillsAndExpertise": [
          "AFrame",
          "Javascript",
          "Janus",
          "Node",
          "Three.js",
          "Vue.JS"
        ]
      },
      {
        "organisationTitle": "FedEx, Eindhoven (Remote)",
        "workTitle": "Angular Developer",
        "dateRange": {
          "end": "2021-08-30",
          "start": "2021-01-01"
        },
        "description": [
          "My job at FedEx was to assist with developing the MyTNT2 project. This application is being used by small companies to arrange shipment for their orders.",
          "My role was to adding new features as requested by the customers, and fix bugs as soon as possible. Furthermore, there were large parts of the code written in AngularJS that need to be upgraded to the latest Angular version. Of note, I was able to fix an onbscure bug that only occurred in Internet Explorer 10 that a few clients were still using."
        ],
        "usedSkillsAndExpertise": [
          "Angular",
          "AngularJS"
        ]
      },
      {
        "organisationTitle": "Therapieland, Amsterdam (Remote)",
        "workTitle": "WebRTC Consultant",
        "dateRange": {
          "end": "2020-12-31",
          "start": "2020-05-01"
        },
        "description": [
          "At Therapieland, there was a project to expand their internal video call service due to increased demand due to the Corona lockdown. I was tasked with building a custom client around their Jitsi-powered architecture. With the help of the backend team, we built a completely new setup where therapists would be able to invite users, moderate the sessions(including when users would be able to enter the room).",
          "Next to that, some additional features were added, like being able to share your desktop while still being able to see the participants, a picture-in-picture mode where you could see the other users, and a canvas to draw on."
        ],
        "usedSkillsAndExpertise": [
          "Vue.JS",
          "Jitsi",
          "Websockets",
          "Python"
        ]
      },
      {
        "organisationTitle": "KLM, Schiphol",
        "workTitle": "(Lead) Frontend Developer",
        "dateRange": {
          "end": "2020-03-31",
          "start": "2017-09-01"
        },
        "description": [
          "At the KLM, I participated in three different projects.",
          "The first one I joined was for an existing team to develop iMech, an iPad app to help the engineers keep track of the tasks linked to aircraft maintenance. My daily work consisted of adding new features and bugfixes.",
          "For the second project, I joined the KLM Digitals Studios as the Lead Developer for a new app called ‘CrewNotify’ from April 2018 to March 2019. The goal is the app is to let the crew know whenever there would be a change in their schedule(delay, new flights, etc), and for them to be able to confirm that they had seen these messages. My role here was in setting up the project, guide the developers on where to take the project and setup a pipeline to build and deploy an Android and iOS version.",
          "From April 2019 onwards, I joined ODS where I was tasked with developing the frontend for the Align project. My role was to develop a tool that would show the results of several simulations for the schedule planners. Next to this, I helped the front-end chapter with several guidelines on how to split up a project into modules and components, as well as how to perform test-driven development."
        ],
        "usedSkillsAndExpertise": [
          "Angular",
          "Ionic",
          "D3",
          "NGRX",
          "Bamboo"
        ]
      }
    ],
    "moreExperience": "Next to the experiences listed above, I've also worked for numerous different companies and projects since 2005. Please refer to my LinkedIn page for more information.",
    "education": [
      {
        "title": "Rotterdam University of Applied Sciences, Rotterdam",
        "subTitle": "HIO, Software Development",
        "dateRange": {
          "end": "2007-03",
          "start": "2002-08"
        }
      },
      {
        "title": "Da Vinci College, Dordrecht",
        "subTitle": "MBO, System Management",
        "dateRange": {
          "end": "2002",
          "start": "1999"
        },
      }
    ],
    "personalProjects": [
      {
        title: "RogueSaber",
        href: "https://roguesaber.rvdleun.com/",
        description: [
          "To experiment with the Rogue Engine tool, I built a simple game where the player wields a lightsaber and has to block lasers fired from robots around him.",
          "This project got a surprising amount of attention, being featured in the Oculus Browser and even getting a nomation for WebXR Game of the Year."
        ]
      },
      {
        title: "Don't leave 'em hanging",
        href: "https://heyvr.io/game/dont-leave-em-hanging",
        description: [
          "In an attempt to elevate some tension during the early days of the lockdown, I built this game where the goal is to give as many high fives and fist bumps to the people around you."
        ]
      },
      {
        title: "ViRTC",
        href: "https://virtc.app/",
        description: [
          "When I used to live in a smaller apartment with no spare room to work in, I dabbled with multiple approach to stream my desktop to a VR headset to allow me to work isolated from my environment",
          "The end result is virtc.app, a webapp that makes connecting your desktop to an Oculus Quest easy without having to install anything."
        ]
      },
      {
        title: "Numerous talks about WebXR",
        href: "https://fronteers.nl/congres/2017/speakers",
        description: [
          "In the past, I have given a number of talks to promote WebXR at several conferences and meetups. It's a way for me to have an output for my enthusiasm about the topic and I always enjoy letting people see what we can do with the technology.",
          "Due to the easy access provided by the browser, I would often develop an experience live which users could see and follow on their own devices."
        ]
      }
    ],
    "spareTime": [
      {
        "title": "Coding",
        "description": "Whenever I'm not working, I can often be found still coding in my spare time. In general, these are on projects that interest me(WebXR, small games), or to learn a new framework or way of working. A number of the results are listed above."
      },
      {
        "title": "Pets",
        "description": "With two dogs and two cats at home, a lot of time needs to be invested to make sure that their lives are the best that we can offer them. This includes going on long walks and play time."
      },
      {
        "title": "Gaming",
        "description": "A lot of my spare time is taken up with gaming. General focus is on RPG, strategy and some action games, as well as cooperative games with my wife. Recently, I've also joined a monthly tabletop Pathfinder campaign."
      },
      {
        "title": "AI Tools",
        "description": "I find myself spending a large amount of time to playing around with creating images in Midjourney or having conversations with ChatGPT while on walks. Next to that, I've also been experimenting with using the ChatGPT AI."
      },
      {
        "title": "3D Printer",
        "description": "After moving a FlashForge Adventurer 4 into my office, I've been tinkering with printing numerous things to help out around the house or small models. Also been experimenting with printing my own designs, created with either Blender or THREE.js."
      }
    ]
  }
  