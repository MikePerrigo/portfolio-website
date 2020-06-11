import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
 
class ExperienceTimeline extends React.Component{
    render() {
        return(
            <Timeline lineColor={'#ddd'} width="100%">
                <TimelineItem
                key="003"
                dateText="04/2018 – Current"
                dateInnerStyle={{ background: '#76bb7f' }}
                bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
            >
                <h3>VMWare Carbon Black</h3>
                <h4>Software Quality Engineer III/MTS III</h4>
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
            </TimelineItem>
            <TimelineItem
                key="002"
                dateText="12/2015 – 04/2018"
                dateInnerStyle={{ background: '#76bb7f' }}
                bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
            >
                <h3>VMWare Carbon Black</h3>
                <h4>Software Quality Engineer II</h4>
                <ul>
                    <li>Lone QA engineer for a team bringing our Response product from on-prem 
                        to cloud. End-to-end testing:</li>
                        <ul>
                            <li>Instance creatino and management in AWS CloudFormation/CloudWatch</li>
                            <li>Performance/load testing with sensor simulator tool</li>
                            <li>Define, develop and execute smoke tests for every new instance</li>
                            <li>Work with developers to define edge cases and ensure the
                                boundaries of performance were covered.</li>
                            <li>Create suite of regression test cases from the ground up.</li>
                            <li>Create QA onboarding documentation and train new members as team ws built out.</li>
                        </ul>
                    <li>Lone QA engineer for team dedicated to UI/UX rebranding and
                        development</li>
                        <ul>
                            <li>Test Track admin for bugs and test executions</li>
                            <li>Develop Ghost Inspector tests to verify and assert that changes
                                took place between the environments</li>
                            <li>Development of comparative smoke test (manual) to map old 
                                environment to new environment</li>
                        </ul>
                </ul>
            </TimelineItem>
            <TimelineItem
                key="003"
                dateText="02/2012 – 03/2014"
                dateInnerStyle={{ background: '#a3c2c2', color: '#000' }}
                bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <h3 style={{ color: 'black' }}>Loadspring Solutions</h3>
                <h4 style={{ color: 'black' }}>Solutions Architect</h4>

            </TimelineItem>
            <TimelineItem
                key="002"
                dateText="04/2009 – 11/2010"
                dateInnerStyle={{ background: '#a3c2c2', color: '#000' }}
                bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <h3 style={{ color: 'black' }}>Rapid Micro Biosystems</h3>
                <h4 style={{ color: 'black' }}>SQA Engineer</h4>
                <ul>
                    <li>Help grow UI from wireframe documents to production software.</li>
                    
                </ul>
            </TimelineItem>
        </Timeline>
        )
    }
}

export default ExperienceTimeline;
