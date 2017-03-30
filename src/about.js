import React from 'react';

const About = (props) => {
  console.log(props);
  return(
    <div>
    About <br/>
    {props.children}
    </div>
  );
}

export default About;
