import React, { Component } from 'react'
import { Card, CardTitle, Button, CardActions, CardText, IconButton, CardMenu } from 'react-mdl';

class HtmlCss extends Component {
    render() {
        return (
            <div className="projects-grid">
                <Card shadow={5} style={{ minWidth: "350", margin: "auto" }}>
                    <CardTitle style={{ color: "black", height: "190px", background: "url(https://lh3.googleusercontent.com/proxy/-ZkhCPKNksdNGdgr1IAzDFWBUrnW56oW3ogeiZaB0Pcdp-Ff4LcIQiUAmo3-ZXj44cyu5pVNCr8u42sRFzzuX2pbSIxBm85tvsrmE2H7WqVtj3bkATDt2rIr6hhVoZB_-xI3OMTzKKnEKzLl6CorwA) center/cover" }}>
                    </CardTitle>
                    <CardText>
                        <strong> A responsive website </strong> is one that has been designed to respond, or adapt, based on the technology and type of computing device used by the visitor to display the site.
                       <p>
                            <strong> HTML</strong>
                            &lt;&gt;
                                <strong> CSS</strong>
                            &lt;&gt;
                            <strong> JavaScript</strong>
                        </p>
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/Medasele273/ResponsiveWebSite" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                        <Button colored>CodePen</Button>
                        <Button colored><a href="https://medasele273.github.io/ResponsiveWebSite/" target="_blank" rel="noopener noreferrer" >Live Demo</a></Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* End of project 1 */}

                {/* Start of project 2 HTML and CSS */}
                <Card shadow={5} style={{ minWidth: "350", margin: "auto" }}>
                    <CardTitle style={{ color: "black", height: "190px", background: "url(https://www.higherwiscombe.com/wp-content/uploads/Online-shopping-cart.jpg) center/cover" }}>
                    </CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/Medasele273/backstreetboys" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                        <Button colored>CodePen</Button>
                        <Button colored><a href="https://medasele273.github.io/backstreetboys/" target="_blank" rel="noopener noreferrer" >Live Demo</a></Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* End of project 1 */}

                {/* Start of project 3 HTML and CSS */}
                <Card shadow={5} style={{ minWidth: "350", margin: "auto" }}>
                    <CardTitle style={{ color: "black", height: "190px", background: "url(https://static.websitecreator.eu/var/m_b/b7/b7d/3829/347544-maxresdefault-c51ce.jpg) center/cover" }}>
                    </CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/Medasele273/portofolio" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                        <Button colored>CodePen</Button>
                        <Button colored><a href="https://medasele273.github.io/portofolio/" target="_blank" rel="noopener noreferrer" >Live Demo</a></Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

            </div >

        );
    }
}
export default HtmlCss;