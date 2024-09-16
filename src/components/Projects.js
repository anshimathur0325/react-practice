import React from "react";
export default function Projects(){
    return(
        <section id="projects">
            <body class='proj'>
                <h3>
                    Personal Projects
                </h3>
                <ul>
                <li>Created a Hugging Face Space that predicts if a student is prone to dropout from university.</li>
                </ul>
                <p><iframe title= 'hugging face website' src="https://anshimathur0325-dropoutprediction.hf.space" frameborder="0"	width="100%"	height="450"></iframe></p>
                <br/>
                <ul>
                <li>Created a machine learning application using Flask to predict a person's risk for diabetes.</li>
                </ul>
                <embed src="https://diabetes-app-flask.herokuapp.com/" width={"100%"} height={450} style={{borderRadius:'1.2em'}}/>
            </body>
        </section>
    )
}