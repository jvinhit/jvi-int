import { GoBrowser } from "react-icons/go";
import { SiGit, SiDotnet } from "react-icons/si";
import { RiGamepadFill, RiGamepadLine } from "react-icons/ri";
import { BsPhone, BsMusicNote } from "react-icons/bs";
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FaMotorcycle } from 'react-icons/fa';

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

export const INTRO_INFO = {
  title: `Hi 👋 I'm jvi,`,
  subtitle: `I'm Front-end Engineer base in Ho Chi Minh, Viet Nam 🇻🇳`,
  desc: `Positive 🚀 Passion 🎉 Honest 🥰`
};

export const Skills = [
  {
    slug: "web",
    Component: GoBrowser,
    title: "Web Dev",
    Description: () => <>React, Redux, NextJS, Angular...</>,
  },
  {
    slug: "csharp",
    Component: SiDotnet,
    title: "C#",
    Description: () => (
      <>I have worked on .NET using Entity Framework, ASP, Xamarin</>
    ),
  },
  {
    slug: "game",
    Component: RiGamepadFill,
    title: "Game",
    Description: () => (
      <>I have worked on Phaser Engine and Corona SDK(Solar 2D).</>
    ),
  },
  {
    slug: "mobile",
    Component: BsPhone,
    title: "Mobile App",
    Description: () => <>I have used Swift, Xamarin, React Native.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>I use Gitlab, Azure for push and pull my code</>,
  },
];

export const EXPERIENCES_DATA = [
  { year: 2015, text: "Software Developer at FPT Software" },
  { year: 2019, text: "Front-end Engineer at VinID (One Mount Group)." },
  { year: 2021, text: "Front-end Engineer at HomeCredit VietNam" },
  { year: 2022, text: "Front-end Engineer at Naver VietNam." },
];

export const MY_CONTACTS = [
  {
    url: "https://github.com/jvinhit",
    icon: <AiFillGithub size="3rem" />,
    key: `github_${Math.random()}`,
  },
  {
    url: "https://www.linkedin.com/in/jvinhit",
    icon: <AiFillLinkedin size="3rem" />,
    key: `linkedin_${Math.random()}`,
  },
  {
    url: "https://www.instagram.com/jvinhit",
    icon: <AiFillInstagram size="3rem" />,
    key: `instagram_${Math.random()}`,
  },
  {
    url: "https://www.twitter.com/jvinhitt",
    icon: <AiFillTwitterCircle size="3rem" />,
    key: `twitter_${Math.random()}`,
  },
];

export const LBLS = {
  LBL_FIND_ME_ON: "Find me on 👋",
  LBL_EXPERIENCE: "Experiences",
  LBL_HOBBIES: "Hobbies",
  LBL_SKILL: "Skills",
};

export const HobbiesData = [
  {
    Icon: <MdOutlineTravelExplore size="3rem"/>,
    text: 'Travel',
  },
  {
    Icon: <RiGamepadLine size="3rem"/>,
    text: 'Video Game',
  },
  {
    Icon: <BsMusicNote size="3rem"/>,
    text: 'Play Music',
  },
  {
    Icon: <FaMotorcycle size="3rem"/>,
    text: 'MotoBike',
  }
];