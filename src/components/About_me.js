import me from "../images/me.jpg";
import "../css/About_me.css";
function About_me() {
  return (
    <div id="container">
      <h2>About Me</h2>
      <div id="image">
        <img src={me} alt="i am nature" />
      </div>
      <div id="text">
        <p>
          I am Bhoomika S Bhat , a third year student passionate about Computer
          Science Engineering
        </p>
        <p>
          With the love for Web development, I thrive on combining creativity
          and critical thinking
        </p>
        <p>
          As an fresher I am dedicated confidence,honesty and leadership
          qualities
        </p>
        <p>Let us connect and explore the exciting possibilities ahead</p>
      </div>
    </div>
  );
}
export default About_me;
