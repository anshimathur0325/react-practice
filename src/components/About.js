import React from "react";
import image from "./images/4312866.jpg"; 
export default function About(){
    
    return(
        <section id="about">
            <body>
            <div className="background-container" style={{ backgroundImage: `url(${image})` }}>
                <div className="text-container">
                    <h1>Hi, I'm Anshi.</h1>
                    <img className="pic" alt="Anshi Mathur" src={require("./images/ans.JPG")} />
                    <p><i>Statistics and Computer Science Student at UIUC</i></p>
                </div>
            </div>
               

                
            </body>
            
        </section>
    )



}