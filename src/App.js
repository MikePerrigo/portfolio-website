import React from 'react';
import './App.css';
import { Header, Navigation, Content, Layout, Drawer } from 'react-mdl';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header title="Title" scroll>
                <Navigation>
                    <a href="#">Resume</a>
                    <a href="#">Projects</a>
                    <a href="#">About Me</a>
                    <a href="#">Contact</a>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="#">Resume</a>
                    <a href="#">Projects</a>
                    <a href="#">About Me</a>
                    <a href="#">Contact</a>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
            </Content>
        </Layout>
    </div>
  );
}

export default App;
