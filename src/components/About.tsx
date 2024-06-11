
import { useEffect, useRef } from 'react';
import './About.css';
import myImage from './assets/images/self2.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const textContentRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const textContent = textContentRef.current;
        const img = imgRef.current;

        gsap.set(textContent, { x: '-70%', opacity: 0 });
        gsap.set(img, { x: '100%', opacity: 0 });


        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: 'power1.in',
            },
            scrollTrigger: {
                trigger: textContent as Element,
                start: 'top 80%',
                end: 'top 60%',
                scrub: true
            },
        });

        tl.fromTo(textContent, { x: '-70%', opacity: 0 }, { x: '0%', opacity: 1 });
        tl.fromTo(img, { x: '100%', opacity: 0 }, { x: '0%', opacity: 1 }, '-=1');

    }, []);

    return (
        <>
            <div id="about" className="container">
                <div className="text-content" ref={textContentRef}>
                    <p>
                        Software Developer with 3+ year of experience in software development including project management, leading team, and agile development of software. Ability to build user-centric web applications, full stack applications, and more designed to scale leveraging my problem-solving skills. A fast learner with strong time management, multi-tasking, and troubleshooting skills with an analytical mindset.
                    </p>
                    {/* <ul>
                        <li>3+ years of programming improvement involvement in requirements Analysis, Design, Coding, Testing, and generation support of versatile, multi-tier circulated undertaking applications utilizing Java/J2EE advances.</li>
                        <li>Hands-on experience with Agile Methodology and SCRUM meetings.</li>
                        <li>Proficient in the implementation of frameworks like Struts, Spring, JSF, AJAX, and ORM frameworks like Hibernate, JPA, and Spring Data.</li>
                        <li>Extensive Experience in Micro Services based on RESTful API utilizing Spring Boot with Spring MVC application and SOA (Service Oriented Architecture) development patterns.</li>
                        <li>Professional experience in Java/J2EE Technologies (JDBC, Servlets, JSP, XML, Spring IoC, Spring Core, Spring AOP for Code Modularity, Spring Web MVC, Spring DAO, Spring context, Spring Web flow, Spring Security, JUNIT and Hibernate).</li>
                        <li>Good knowledge of implementing ReactJS and working with Redux and Flux architecture.</li>
                        <li>Hands-on experience in core AWS (Amazon Web Services) services like (S3, EC2, ELB, EBS, Route53, VPC, Auto scaling, etc.) and deployment service (Elastic Beanstalk, DevOps Works and cloud Formation) and security practices (IAM, Cloud Watch and Cloud trail).</li>
                        <li>Excellent experience with Relational databases like MySQL, Oracle, Microsoft SQL Server, PostgreSQL, IBM DB2, and No SQL databases like Cassandra, MongoDB, CouchDB, HBase, etc.</li>
                        <li>Good knowledge of Docker components like Docker Engine, Hub, Machine, Compose, and Docker Registry.</li>
                        <li>Experienced in MEAN stack advancement (MongoDB, Express.JS, AngularJS & NodeJS).</li>
                        <li>Good command in writing TDD (Test Driven Development) by using test cases such as JUnit, Jasmine, and Karma for performing end-to-end Integration and Unit testing.</li>
                    </ul> */}
                    <div className="about-links">
                        <div className="link-card">
                            <a href="https://drive.google.com/file/d/1azyE6pOyAmqjJdxbyrpQRncPULEmJcqd/view?usp=sharing">
                                Resume
                            </a>
                        </div>
                        <div className="link-card">
                            <a href="https://github.com/phet2309/">
                                GitHub Profile
                            </a>
                        </div>
                        <div className="link-card">
                            <a href="https://leetcode.com/phet2309/">
                                LeetCode Profile
                            </a>
                        </div>
                    </div>
                </div>
                <img src={myImage} alt="My Image" ref={imgRef} />
            </div>
        </>
    );
}

export default About;
