import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

toggleCategories() {

    if(this.state.activeTab ===0) {
        return(
            <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}}>Sprint Drink Generator</CardTitle>
                    <CardText>Sprint Drink generator</CardText>
                    <CardActions border>
                        <a href='https://github.com/MikePerrigo/drink-generator' target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* Project 2 */}
                <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}}>Portfolio Website</CardTitle>
                    <CardText>Portfolio website build via React</CardText>
                    <CardActions border>
                        <a href='https://github.com/MikePerrigo/portfolio-website' target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        )
    }else if(this.state.activeTab ===1) {
        return(
            <div><h1>This is Python</h1></div>
        )
    }
}
    render() {
        return(
            <div className="category-tabs">
                <Tabs style={{paddingTop: "5px", paddingBottom: "5px"}} activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab style={{fontSize: "30px"}}>React</Tab>
                    <Tab style={{fontSize: "30px"}}>Python</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;