import React from "react";

export default function About(){
    return(
        <section id="about">
            <body>
                <h1>
                    Hi, I'm Anshi.
                </h1>
                <img class="pic" alt ="Anshi Mathur" src={require("./images/ans.JPG") }/>

                <p><i>Statistics and Computer Science Student at UIUC</i></p>
            </body>
            
        </section>
    )



}