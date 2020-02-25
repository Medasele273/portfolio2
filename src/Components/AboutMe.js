import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../about.css';


class About extends Component {
    render() {
        return (
            // <div className="about-body">
            < div className="contact-body" >
                <Grid className="contact-grid">
                    <Cell col={6} className="contact-cell">
                        <h2>Medhanie Weldeab</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar" style={{ height: "200px" }} />
                        <p style={{ width: "80%", margin: "auto", paddingTop: "10px" }}> <p>I am a person love  to be a developer with a great interest in technology.I studied computer Engineering. I am also interested in IT support Technician working on replacing devices such as computers and Mobiles, because to be a developer I need to know how computers, mobiles, networking and internet is working.</p>
                        </p>
                    </Cell>
                    <Cell col={6} className="contact-cell">
                        <p style={{ width: "80%", margin: "auto", paddingTop: "10px" }}><p> I have different certificates regarding different courses.
                            Am a responsible person and problem solver, who always thinks positively in all situations and i love  solving  problems myself  or together with others.
                    At this time  I am working hard on my Portfolio that has some projects hope i will finish soon and attach the URL to you.</p>
                            <p>
                                Hope  you gone give me the chance to be part of your company . we can keep in touch and send you my cv and other documents.</p>
                        </p>
                        <h2> Skills</h2>

                        <div className="carousel-wrapper">

                            <div className="carousel-content">
                                <div style={{ width: "80%", margin: "auto", paddingTop: "10px" }}>

                                    <figure><img src="https://udemy-images.udemy.com/course/480x270/1452304_5215.jpg?width=720" alt="html-css-js" /></figure>
                                    <figure><img src="https://dinesh-ghimire.com.np/wp-content/uploads/2019/02/html5.png" alt="html-pic" /></figure>
                                    <figure><img src="https://www.codespot.org/assets/css.jpg" alt="css-pic" /></figure>
                                    <figure><img src="https://cms-assets.tutsplus.com/uploads/users/71/courses/1261/preview_image/practice-javascript-and-learn-functions-400x277.png" alt="js-pic" /></figure>
                                    <figure><img src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe" alt="react-pic" width="500px" height="500px" /></figure>
                                    <figure><img src="https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2019/11/severless-nodejs-app.jpeg?fit=730%2C486&ssl=1" alt="nodejs-pic" /></figure>
                                    <figure><img src="https://www.hugeserver.com/kb/wp-content/uploads/2017/12/expresslogo.png" alt="expressjs-pic" /></figure>
                                    <figure><img src="https://zdnet3.cbsistatic.com/hub/i/r/2018/02/16/8abdb3e1-47bc-446e-9871-c4e11a46f680/resize/370xauto/8a68280fd20eebfa7789cdaa6fb5eff1/mongo-db-logo.png" alt="mangodb-pic" /></figure>
                                    <figure><img src="https://itsilesia.com/wp-content/uploads/2018/11/mysql-logo.jpg" alt="mysql-pic" /></figure>
                                    <figure><img src="https://www.oracle.com/a/ocom/img/hp11-intl-java-logo.jpg" alt="java-pic" /></figure>
                                    <figure><img src="https://keyholesoftware.com/wp-content/uploads/Spring-Boot.png" alt="spring-boot-pic" /></figure>
                                    <figure><img src="https://miro.medium.com/max/2732/1*qwFrTMnFkcd3U9rFKwwacw.png" alt="git-github-pic" /></figure>
                                    <figure><img src="https://miro.medium.com/max/600/1*yleKkir6nw8MA8pHiZ4vaA.jpeg" alt="postman-pic" /></figure>
                                </div>
                            </div>
                        </div>
                    </Cell>
                </Grid >
            </div >

            //</div >
        );
    }
}
export default About;