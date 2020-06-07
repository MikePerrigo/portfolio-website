import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends React.Component {
    render() {
        return(
            <div>
                <div className="contact-body">
                    <Grid className="contact-grid">
                        <Cell col={6}>
                            <h2>Michael Perrigo</h2>
                            <img src="https://lh3.google.com/u/0/d/1KucnrxcJE0t_cWNu3N715xhsyvDaoSc1=w1920-h902-iv1"
                            alt="placeholder"
                            style={{height: '400px'}}
                            />
                            <p style={{width:'75%', margin:'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                mollit anim id est laborum.</p>
                        </Cell>
                        <Cell col={6}>
                            <h2>Contact Me</h2>
                            <hr/>
                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                            <i className="fa fa-phone-square" aria-hidden="true"/>
                                            (978) 319-1523</ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                            <i className="fa fa-envelope-square" aria-hidden="true"/>
                                            michael.perrigo@gmail.com</ListItemContent>
                                    </ListItem>
                                </List>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Contact;