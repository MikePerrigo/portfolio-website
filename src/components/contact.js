import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

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
                            <p>This is sample text</p>
                        </Cell>
                        <Cell col={6}>
                            Half Page
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Contact;