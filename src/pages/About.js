import { Fragment } from "react";
import { useParams } from "react-router-dom";
import FakeText from "./FakeText";

const About = (props) => {
  console.log("About...", props);
  const { name } = useParams();
  return (
    <Fragment>
      <h1>About {name}</h1>
      <FakeText />
    </Fragment>
  );
};

export default About;
