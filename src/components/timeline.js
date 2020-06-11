import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
 
class ExperienceTimeline extends React.Component{
    render() {
        return(
            <Timeline lineColor={'#ddd'} width="100%">
                <TimelineItem
                key="003"
                dateText="12/2015 – Current"
                dateInnerStyle={{ background: '#76bb7f' }}
            >
                <h3>VMWare Carbon Black</h3>
                <h4>Member of Technical Staff III</h4>
                <ul>
                    <li>Backend/API driven Test Automation through Python</li>
                    <li>Front End and Full Stack Test Automation written with Cypress.io</li>
                    <li>Led effort to automate one of our regression buckets and cut 4 hours of
                        manual testing to 3 minutes of automation</li>
                    <li>Front end automation POC of Ghost Inspector</li>
                    <li>Create, manage and execute new feature test cases, functional and
                        negative</li>
                    <li>Manage regression test execution per release and hotfix and deliver
                        go/no go decision</li>
                    <li>Act as rotating SCRUM Master for 10 person SCRUM Team</li>
                    <li>Track automation tasks, regression suite, new feature test cases and
                        bug tickets through Jira and X-Ray plugin.</li>
                    <li>Documentation of onboarding process, Development Virtual Machine
                        Setup and Cypress.io readme/getting started in Confluence.</li>
                </ul>
                <h4>Software Quality Engineer II</h4>
                <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
                </p>
            </TimelineItem>
            <TimelineItem
                key="001"
                dateText="04/2009 – 11/2010"
                dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
                <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
                <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
                </p>
                <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
                </p>
            </TimelineItem>
            <TimelineItem
                key="002"
                dateText="04/2009 – 11/2010"
                dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
                <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
                <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
                </p>
                <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
                </p>
            </TimelineItem>
        </Timeline>
        )
    }
}

export default ExperienceTimeline;
