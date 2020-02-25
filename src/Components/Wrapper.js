import React from 'react';
import { Layout, Drawer, Navigation, Content, Header } from 'react-mdl';
import { BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Main from './Main';

class Wrapper extends React.Component {
    render() {
        return (
            <Router>
                <div style={{ height: '100vh', position: 'relative' }}>
                    <Layout fixedHeader>
                        <Header className="header-color" title={<span><span style={{ color: '/ddd' }}></span><strong>Portfolio</strong></span>}>
                            <Navigation>
                                <Link to="/home">Home</Link>
                                <Link to="/aboutMe">About Me</Link>
                                <Link to="/projects">Projects</Link>
                                <Link to="/contact">Contact</Link>
                            </Navigation>
                        </Header>
                        <Drawer >
                            <h1 className="primary-text">MW</h1>
                            <Navigation className="header-colo" >
                                <Link to="/home">Home</Link>
                                <Link to="/aboutMe">About Me</Link>
                                <Link to="/projects">Projects</Link>
                                <Link to="/contact">Contact</Link>
                            </Navigation>
                        </Drawer>
                        <Content>
                            <div className="plan-content" />
                            <Main />
                        </Content>
                    </Layout>
                </div>
            </Router>
        );
    }
}
export default Wrapper;