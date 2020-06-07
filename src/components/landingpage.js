import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends React.Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://i.ya-webdesign.com/images/avatar-png-icon-6.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Sr. Software Quality Engineer/SDET</h1>

                            <hr/>
                            <p>Cypress Automation | Python Automation Scripting | Api Testing - Postman | Regression Testing | </p>
                            <div className="social-links">
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/michael-perrigo-681b2620/" rel="noopener norefferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/MikePerrigo" rel="noopener norefferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;