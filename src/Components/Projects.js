import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import HtmlCss from './Projects/Html-css projects/Html-css';
import ReactProjects from './Projects/ReactProjects/react';
import ReactNodeProjects from './Projects/React-Node-projects/reactNode';
import JavaSpringBoot from './Projects/Java-Spring-Boot-projects/javaSpringBoot';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    toggleContents = () => {
        if (this.state.activeTab === 0) {
            return <HtmlCss />    
        } else if (this.state.activeTab === 1) {
            return <ReactProjects />
        } else if (this.state.activeTab === 2) {
            return <ReactNodeProjects />
        } else {
            return <JavaSpringBoot />
        }
    }

    render() {
        return (
            <div className="category-tab">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>HTML/CSS</Tab>
                    <Tab>React</Tab>
                    <Tab>React/NodeJs</Tab>
                    <Tab>Java/Spring Boot</Tab>
                </Tabs>
                <Grid >
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleContents()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Projects;