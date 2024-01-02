import React from "react";
export default function Certificates(){
    return(
        <section id='certificates'>
            <div class='certificates'>
                <h2 >Certifications</h2>
                <iframe class = 'ifr'src = {require("/Users/anshimathur/Desktop/react/my-app/src/components/certificates/Cert751145612758.pdf")  } title="Embedded post"
                ></iframe>
                <iframe class = 'ifr'src = {require("/Users/anshimathur/Desktop/react/my-app/src/components/certificates/Coursera CVUF6UURTH9H (1).pdf") } title="Embedded post"></iframe>
                <iframe class = 'ifr' src = {require("/Users/anshimathur/Desktop/react/my-app/src/components/certificates/Coursera QW5WTPWAP78Z (1).pdf") } title="Embedded post"></iframe>
                <iframe class = 'ifr' src = {require("/Users/anshimathur/Desktop/react/my-app/src/components/certificates/png2pdf.pdf") } title="Embedded post"></iframe>
            </div>
        </section>
    )
}