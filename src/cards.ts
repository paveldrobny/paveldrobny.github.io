import Images from "./images";
import ICard from "./interfaces";

const cards: ICard[] = [
  {
    id: 5,
    image: Images.spaceShooterJS,
    title: "Space shooter on JS v1.1",
    using: "Canvas",
    language: "JavaScript",
    update: "19.04.2023",
    urlDemo: "https://paveldrobny.github.io/JS-Game_SpaceShooter/",
    urlCode: "https://github.com/paveldrobny/JS-Game_SpaceShooter",
    publishData: 1681945200,
  },
  {
    id: 4,
    image: Images.unityQuestSystem,
    title: "Unity Quest System v2.1",
    using: "Unity 2022",
    language: "C#",
    update: "24.12.2022",
    urlDemo: "",
    urlCode: "https://github.com/paveldrobny/Unity_QuestSystem",
    publishData: 1671922800,
  },
  {
    id: 3,
    image: Images.platformerJS,
    title: "Platformer on JS with EDITOR",
    using: "SVG, Canvas",
    language: "JavaScript",
    update: "01.08.2023",
    urlDemo: "https://paveldrobny.github.io/PlatformerJS/",
    urlCode: "https://github.com/paveldrobny/PlatformerJS",
    publishData: 1690930800,
  },
  {
    id: 2,
    image: Images.hudInformation,
    title: "HUD information",
    using: "Unreal Engine 4.26",
    language: "C++, Blueprints",
    update: "04.09.2022",
    urlDemo: "",
    urlCode: "https://github.com/paveldrobny/UE4_HUDInformation",
    publishData: 1662332400,
  },
  {
    id: 1,
    image: Images.pingPongJS,
    title: "Ping Pong on JS",
    using: "Canvas",
    language: "JavaScript",
    update: "10.03.2022",
    urlDemo: "https://paveldrobny.github.io/JS-Game_PingPong/",
    urlCode: "https://github.com/paveldrobny/JS-Game_PingPong",
    publishData: 1646953200,
  },
];

export default cards;
