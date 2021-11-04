import React, { Fragment } from 'react'
import HeaderImg from '../../assets/home/web-designer.png'
import AboutImg from '../../assets/home/developers-doing-discussion-about-wireframe.jpg'
import WhyImg from '../../assets/home/people-standing-together.png'
import OneImg from '../../assets/home/business-goal.png'
import TwoImg from '../../assets/home/ideas.png'
import ThreeImg from '../../assets/home/equality.png'






function Home(props) {
    return (
        <Fragment>
           
            <section id="learn" className="p-sm-5 pb-5 pt-sm-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md p-5">
                        <h1>The <span className="text-danger">headstart </span>you need in the<span className="text-warning"> world of coding.</span></h1>
                            <p className="lead my-4">
                                From your most trivial query to the most mammoth task, we have all the answers. With us, you’re unstoppable.
                            </p>
                            <button
                                className="btn btn-primary btn-lg"
                                data-bs-toggle="modal"
                                data-bs-target="#enroll"
                            >
                                Join our Community
                            </button>
                        </div>
                        <div className="col-md">
                             <img
                            className="img-fluid d-sm-block"
                            src={HeaderImg}
                            alt=""
                        />
                        </div>
                    </div>
                </div>
            </section>




            




            <section className="bg-primary text-light p-5">
                <div className="container">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>

                        <div className="input-group news-input">
                            <input type="text" className="form-control" placeholder="Enter Email"/>
                            <button className="btn btn-dark btn-lg" type="button">Submit</button>
                        </div>
                    </div>
                </div>
            </section>





            <section id="learn" className="p-sm-5 py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md">
                            <img src={AboutImg} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md p-5">
                            <h2>Get down to the nitty-gritty of Codificacion.</h2>
                            <p className="lead">
                                Codificacion Circulo is a technical community that is the brainchild of a passionate group of college students who took up the responsibility to prepare young tech enthusiasts for the protean world of computing.
                            </p>
                            <p>
                                We came together to create a community where no one feels left out, and everyone gets the proper resources and guidance necessary at the start of college life.
                            </p>
                            <a href="www.google.com" className="btn btn-light mt-3">
                                <i className="bi bi-chevron-right"></i> Read More
                            </a>
                        </div>
                    </div>
                </div>
            </section>




            <section class="p-sm-5 py-5">
                <div class="container">
                    <div class="row justify-content-center text-center g-2">



                        <div class="col-md">
                        
                            <div class="mx-auto my-2" style={{ width: "20rem" }}>
                                <img
                                    src={OneImg}
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body text-center">

                                    <h3 class="card-title mb-3">Vision</h3>
                                    <p class="card-text">
                                        A buzzing tech hub to promote coding and technology among amateurs, professionals, and enthusiasts for a better future. We recognize the potential in you.
                                    </p>
                                    <a href="www.google.com" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>




                        <div class="col-md">
                            <div class="mx-auto my-2" style={{ width: "20rem" }}>
                                <img
                                    src={TwoImg}
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body text-center">

                                    <h3 class="card-title mb-3">
Mission</h3>
                                    <p class="card-text">
                                    Providing an inclusive and progressive environment for people with a knack for coding and computing with ample quality resources and guidance. Together, we can create wonders.
                                    </p>
                                    <a href="www.google.com" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>





                        <div class="col-md">
                            <div class="mx-auto my-2" style={{ width: "20rem" }}>
                                <img
                                    src={ThreeImg}
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body text-center">

                                    <h3 class="card-title mb-3">Value</h3>
                                    <p class="card-text">
                                    Innovation: With great minds at work and millions of ideas brewing, we give wings to your epic ideas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam!
                                    </p>
                                    <a href="www.google.com" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </section>






            <section id="learn" className="p-sm-5 py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md p-5">
                            <h2>Step into the world of exciting change and chase your dreams.</h2>
                            <p className="lead">
                                Tired of working for an organization under the pretext of 'learning' new skills? Unlike other groups or clubs, we solely aim to provide you with resources, guidance, equip you with skills, help you in your projects and competitions and build a strong portfolio. Welcome to an authentic place of learning and growing.
                            </p>
                            <a href="www.google.com" className="btn btn-light mt-3">
                                <i className="bi bi-chevron-right"></i> Read More
                            </a>
                        </div>
                        <div className="col-md">
                            <img src={WhyImg} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>







        </Fragment>
    )
}

export default Home

