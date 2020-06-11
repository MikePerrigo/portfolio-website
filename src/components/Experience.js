import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends React.Component {
    render() {
        return(
            <Grid>
                <Cell col={3}>{this.props.startDate} - {this.props.endDate}</Cell>
                <Cell col={9}>
                    <Grid>
                        <Cell col={4}>{this.props.companyName}</Cell>
                        <Cell col={8}>{this.props.jobDescription}</Cell>
                    </Grid>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;