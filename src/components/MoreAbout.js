import React, { forwardRef } from "react";

const MoreAbout = forwardRef((props, ref) => {
  return (
    <section id="moreabout" ref={ref}>
      <br></br>
      <br></br>
      <br></br>

      <body className="proj4">
        <h3>About Me</h3>
        <p>Hi! My name is Anshi Mathur and I am currently a Sophomore at the University of Illinois at Urbana-Champaign! I made this website in its entirety with React, which I am currently learning.</p>
        <p>I am currently looking for internships, so please feel free to reach out with any questions!</p>
      </body>
    </section>
  );
});

export default MoreAbout;