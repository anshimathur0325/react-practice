import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <hr></hr>
      <div className="container experience__container">
        <div className="left">
          <h3>Front-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <h4>React</h4>
            </article>
            </div>
      
        </div>
        <br></br>
        <div className="right">
          <h3>Back-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <h4>Java</h4>
            </article>
            <article className="experience__details">
              <h4>Git/GitHub</h4>
            </article>
            <article className="experience__details">
              <h4>SQL</h4>
            </article>
          </div>
        </div>
      </div>
      <hr></hr>
    </section>
  )
}

export default Experience
