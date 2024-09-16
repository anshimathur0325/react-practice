import React from 'react';

const skill = () => {
  return (
    <section id="skill">
      <hr></hr>
      <h2>My Skills</h2>
      <div className="container skill__container">
        
        <div className="left">
          <h3>Front-end Development</h3>
          <div className="skill__content">
          <article className="skill__details">
              <h4>HTML</h4>
            </article>
            <article className="skill__details">
              <h4>CSS</h4>
            </article>
            <article className="skill__details">
              <h4>JavaScript</h4>
            </article>
            <article className="skill__details">
              <h4>React</h4>
            </article>
            <article className="skill__details">
              <h4>Figma</h4>
            </article>
            </div>
            
      
        </div>
        <br></br>
        <div className="right">
          <h3>Back-end Development</h3>
          <div className="skill__content">
          <article className="skill__details">
              <h4>Python</h4>
            </article>
            <article className="skill__details">
              <h4>Java</h4>
            </article>
            <article className="skill__details">
              <h4>Git/GitHub</h4>
            </article>
            <article className="skill__details">
              <h4>SQL</h4>
            </article>
            <article className="skill__details">
              <h4>R</h4>
            </article>
          </div>
        </div>
      </div>
      <hr></hr>
    </section>
  )
}

export default skill
