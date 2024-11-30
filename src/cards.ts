import Images from "./images";
import ICard from "./interfaces";

const cards: ICard[] = [
  {
    id: 5,
    image: Images.spaceShooterJS,
    title: "Space shooter on JS v1.1",
    using: "Canvas",
    language: "JavaScript",
    updateData: "19.04.2023",
    urlDemo: "https://paveldrobny.github.io/JS-Game_SpaceShooter/",
    urlCode: "https://github.com/paveldrobny/JS-Game_SpaceShooter",
    publishData: 1675544213316,
  },
  {
    id: 4,
    image: Images.unityQuestSystem,
    title: "Unity Quest System v2.1",
    using: "Unity 2022",
    language: "C#",
    updateData: "24.12.2022",
    urlDemo: "",
    urlCode: "https://github.com/paveldrobny/Unity_QuestSystem",
    publishData: 0,
  },
  {
    id: 3,
    image: Images.platformerJS,
    title: "Platformer on JS with EDITOR",
    using: "SVG, Canvas",
    language: "JavaScript",
    updateData: "01.08.2023",
    urlDemo: "https://paveldrobny.github.io/PlatformerJS/",
    urlCode: "https://github.com/paveldrobny/PlatformerJS",
    publishData: 0,
  },
  {
    id: 2,
    image: Images.hudInformation,
    title: "HUD information",
    using: "Unreal Engine 4.26",
    language: "C++, Blueprints",
    updateData: "04.09.2022",
    urlDemo: "",
    urlCode: "https://github.com/paveldrobny/UE4_HUDInformation",
    publishData: 0,
  },
  {
    id: 1,
    image: Images.pingPongJS,
    title: "Ping Pong on JS",
    using: "Canvas",
    language: "JavaScript",
    updateData: "10.03.2022",
    urlDemo: "https://paveldrobny.github.io/JS-Game_PingPong/",
    urlCode: "https://github.com/paveldrobny/JS-Game_PingPong",
    publishData: 0,
  },
];

export default cards;
