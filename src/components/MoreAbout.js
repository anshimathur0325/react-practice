import React, { forwardRef } from "react";

const MoreAbout = forwardRef((props, ref) => {
  return (
    <section id="moreabout" ref={ref}>
      <br></br>
      <br></br>
      <br></br>

      <body className="MoreAbout">
        <h3>About Me</h3>
        <p>Hi! My name is Anshi Mathur and I am currently a Sophomore at the University of Illinois at Urbana-Champaign! I am also currently a Data Science co-op at Bayer!!</p>
        <p>I am always looking for opportunities to grow, so please feel free to reach out with any questions!</p>
      </body>
    </section>
  );
});

export default MoreAbout;