import { FaCode } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
const SkillData = [
  {
    title: "Frontend",
    icon: <FaCode />,
    skills: [
      { skill: "HTML5", percentage: "90%" },
      { skill: "CSS3 (Tailwindcss)", percentage: "85%" },
      { skill: "JavaScript", percentage: "75%" },
      { skill: "React.js", percentage: "80%" },
    ],
  },

  {
    title: "Tools",
    icon: <FaTools />,
    skills: [
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "Visual Studio Code", percentage: "80%" },
      { skill: "Webpack", percentage: "60%" },
      { skill: "Responsive Design", percentage: "70%" },
    ],
  },

  {
    title: "Soft Skills",
    icon: <FaHandshakeSimple />,
    skills: [
      { skill: "Problem-solving", percentage: "65%" },
      { skill: "Collaboration", percentage: "75%" },
      { skill: "Attention to Detail", percentage: "70%" },
    ],
  },
];

export default SkillData;
