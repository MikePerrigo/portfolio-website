import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Cell } from 'react-mdl';

class Resume extends React.Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src="https://i.ya-webdesign.com/images/avatar-png-icon-6.png"
                            alt="Mike"
                            style={{height: '200px'}} 
                            />
                        </div>

                        <h2 style={{paddingTop: '1em'}}>Michael Perrigo</h2>
                        <h4>Sr. Software Quality Engineer/SDET</h4>
                        <hr style={{borderTop: '3px solid gray', width: '75%'}}/>
                        <p style={{width: '75%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essenti</p>
                        <hr style={{borderTop: '3px solid gray', width: '75%'}}/>
                        <h5>Address</h5>
                        <p>4303 Princeton Way, Westford, MA  01886</p>
                        <h5>Phone</h5>
                        <p>(978) 319-1523</p>
                        <h5>Email</h5>
                        <p>michael.perrigo@gmail.com</p>
                        <hr style={{borderTop: '3px solid gray', width: '75%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Experience</h2>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;