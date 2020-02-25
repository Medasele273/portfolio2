import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img className="avatar" src="https://comps.gograph.com/man-programmer-working_gg101918494.jpg"
                            alt="Avatar"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr />
                            <p>HTML/CSS<span><strong>|</strong></span>
                                JAVASCRIPT<span><strong>|</strong></span>
                                REACTJS<span><strong>|</strong></span>
                                NODEJS<span><strong>|</strong></span>
                                EXPRESSJS<span><strong>|</strong></span>
                                JAVA<span><strong>|</strong></span>SPRING BOOT</p>

                            <div className="social-links">
                                <a href="https://www.linkedin.com">
                                    <i class="fab fa-linkedin-square"></i>
                                </a>

                                <a href="https://www.youtube.com">
                                    <i class="fab fa-youtube-square"></i>
                                </a>

                                <a href="https://www.facebook.com">
                                    <i class="fab fa-facebook-square"></i>
                                </a>

                                <a href="https://github.com/Medasele273">
                                    <i class="fab fa-github-square"></i>
                                </a>
                            </div>
                        </div>

                    </Cell>
                </Grid>

            </div>

        );
    }
}
export default Landing;