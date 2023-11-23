import Card from "./Card";
import "../css/Skills.css";
import html from "../images/html.jpg";
import css from "../images/css.jpg";
import javascript from "../images/javascript.jpg";
function Skills() {
  const SkillsP = [
    {
      id: 1,
      p:html
    },
    {
      id: 2,
      p: css
    },
    {
      id: 3,
      p: javascript
    }
  ];
  return (
  <>   
  <h2>Skills</h2>
      <div className="skills">
        {
        SkillsP.map((item)=>(
            <Card skill={item} />
        ))
      }
    </div>
</>
  );

    }
export default Skills;
