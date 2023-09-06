import React from "react";
export default function Navbar(){
    return(
        <section id="navbar">
            <body class='nav'>
                <nav>
                    <a href="mailto:anshimathur0325@gmail.com"><img src = {require("./images/mail.png")}/></a>
                    <a href="https://www.linkedin.com/in/anshi-mathur-770688236/"><img src = {require("./images/linkedin.png")}/></a>
                    <a href="https://github.com/anshimathur0325"><img src = {require("./images/github.png")}/></a>    
                    
                </nav>
            </body>
        </section>
    )
}