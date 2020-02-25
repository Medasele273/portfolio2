import React, { Component } from 'react'
import { Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText } from 'react-mdl';

class ReactProjects extends Component {
    render() {
        return (
            <div className="projects-grid">
                <Card shadow={5} style={{ minWidth: "350", margin: "auto" }}>
                    <CardTitle style={{ color: "black", height: "190px", background: "url(https://robohash.org/test?Size=10*10) center/cover" }}>
                    </CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/Medasele273/javafriends" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                        <Button colored>CodePen</Button>
                        <Button colored><a href="https://medasele273.github.io/javafriends/" target="_blank" rel="noopener noreferrer" >Live Demo</a></Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{ minWidth: "350", margin: "auto" }}>
                    <CardTitle style={{ color: "black", height: "190px", background: "url(https://www.seekpng.com/png/detail/222-2224788_reactjs-component-lifecycle-hooks-with-examples-react-logo.png) center/cover" }}>
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
                <Card shadow={5} style={{ minWidth: "350", margin: "auto" }}>
                    <CardTitle style={{ color: "black", height: "190px", background: "url(https://www.seekpng.com/png/detail/222-2224788_reactjs-component-lifecycle-hooks-with-examples-react-logo.png) center/cover" }}>
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

            </div>

        );
    }
}
export default ReactProjects;