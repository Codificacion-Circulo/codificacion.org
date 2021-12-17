import React from 'react'

function Footer(props) {
    return (
        <footer className="bg-light text-center text-white">

            <div className="container p-4 pb-0">

                <section className="mb-4">


                    <a className="mx-3" style={{color: "#dd2a7b"}}
                       href="https://www.instagram.com/codificacion_circulo/" role="button"
                    ><i class="fab fa-instagram fa-lg fa-2x"></i
                    ></a>


                    <a className="mx-3" style={{color: "#0077b5"}}
                       href="https://www.linkedin.com/company/codificacion-circulo/" role="button"
                    ><i class="fab fa-linkedin fa-lg fa-2x"></i
                    ></a>

                    <a className="mx-3" style={{color: "#5865f2"}} href="https://discord.gg/jHtmC44TBH" role="button"
                    ><i class="fab fa-discord fa-lg fa-2x"></i
                    ></a>


                    <a className="mx-3" style={{color: "#6e5494"}} href="https://github.com/Codificacion-Circulo"
                       role="button"
                    ><i class="fab fa-github fa-lg fa-2x"></i
                    ></a>


                </section>

            </div>


            <div className="text-center p-3 text-dark" style={{backgroundColor: "#e3f2fd"}}>
                © 2021 Copyright:
                <a style={{textDecoration: "none"}} className="text-dark mx-2"
                   href="https://codificacion.org/">Codificacion.org</a>
            </div>

        </footer>
    )
}

export default Footer

