
import './Experience.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
function Experience() {
    return (
        <>
            <div id="experience" className="experience-container">
                <h1>Experience</h1>
                <div className="element-container">
                    <div className="ele1">
                        <h2>Full Stack Developer</h2>
                        <h4>Freelance(Airline Client)</h4>
                        <li>Developed and maintained a robust RESTful API using Node.js, facilitating seamless communication between frontend and backend systems in accordance with a microservice architecture.</li>
                        <li>Designed and implemented user interface features using React.js and TypeScript, ensuring a smooth and interactive user experience while maintaining code quality and scalability within a microservices environment.</li>
                        <li>Worked on MongoDb integration, aggregation and troubleshooting.</li>
                        <li>Database processing and management with a PostgreSql database.</li>
                        <li>Leveraged Azure Service Bus for efficient communication between various microservices, enabling asynchronous messaging and improving system decoupling and resilience in alignment with microservice principles.</li>
                        <li>Managed data storage and retrieval using Azure Blob Storage and performed CRUD operations in Azure Cosmos DB, ensuring efficient data management and retrieval within the application's microservice architecture.</li>
                        <li>Implemented unit tests using Jest, ensuring the reliability and stability of the application codebase.</li>
                        <li>Led deployment processes and change requests, meticulously validating deployments to ensure successful implementation of new features and updates.</li>
                        <li>Actively participated in Scrum meetings within the context of a microservices architecture, following agile methodologies, and maintained JIRA tickets for efficient tracking of project tasks and issues across microservices.</li>
                    </div>
                    <div className="ele2">
                        <h2>Software Engineer</h2>
                        <h4>Blueoptima</h4>
                        <li>Developed new features and enhancements in Nodejs and Spring Boot, contributing to the overall functionality and performance of the application.</li>
                        <li>Developed UI components and resolved bugs in Reactjs and Typescript.</li>
                        <li>Conducted thorough analysis for new features and bugs, collaborating with cross-functional teams to ensure requirements were met and issues were resolved in a timely manner.</li>
                        <li>Implemented comprehensive unit tests using JUnit and Mockito, ensuring the reliability and robustness of the codebase.</li>
                        <li>Worked on MongoDB database design, optimization, replication, sharding, security, migration, and monitoring</li>
                        <li>Optimized SQL queries to improve database performance and reduce query execution time, enhancing the application's responsiveness and scalability.</li>
                        <li>Utilized agile tools like Jira for project management, tracking tasks, user stories, and issues throughout the development lifecycle. Implemented version control using Bitbucket, ensuring proper versioning and collaboration among team members.</li>
                        <li>Enhanced Jenkins pipeline by modifying the CI/CD script, streamlining the build, test, and deployment processes for increased efficiency and reliability. Utilized AWS S3 bucket for storing and managing application data, ensuring data availability, durability, and security in a cloud environment.</li>
                        <li>Managed server maintenance tasks and configurations, ensuring the availability and stability of production systems.</li>
                        <li>Utilized Elastic Kibana and Grafana for monitoring and analyzing application performance metrics, identifying areas for optimization and improvement.</li>
                        <li>Leveraged Docker for containerization, facilitating easy deployment and scalability of applications across different environments.</li>
                    </div>
                    <div className="ele3">
                        <h2>Teaching Assistant</h2>
                        <h4>New Jersey Institute of Technology</h4>

                        <li>Teaching assistant for CS631-Data Management System Design and CS331-Database System Design and Management.</li>
                        <li>Helping students in resolving their doubts and evaluating assignments and exam submissions.</li>

                    </div>
                    <div className="ele4">
                        <h2>Freelance Project</h2>
                        <h4>Khelo 5050 Fundraiser</h4>

                        <li>Backend api development using Python Django framework. Email sending cron job configuration.</li>
                        <li>Built payment gateway and influencer referral system.</li>

                    </div>
                    <div className="ele5">
                        <h2>Research Intern</h2>
                        <h4>SPIRE Lab, IISC Bangalore</h4>

                        <li>Apply deep learning techniques and neural networks to improve acoustic and language models</li>
                        <li>Data collection, web scraping and building a language model</li>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Experience;

