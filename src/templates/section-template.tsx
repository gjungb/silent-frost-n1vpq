import React from "react";

const Section: React.FC<any> = ({ pageContext: { section } }) => {
  return <section>I am a {section.title}</section>;
};

export default Section;
