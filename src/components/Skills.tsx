import './Skills.css';
import { skills } from "../constants/skills";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const {
  "Programming Language": programmingLanguages,
  "Development Framework": devFrameworks,
  "J2EE Technologies": j2eeTechnologies,
  "Web Services": webServices,
  "Database Technologies": databases,
  "Web Technologies": webTechnologies,
  "Web/App servers": webAppServers,
  "Version Control": versionControl,
  "Build Tools": buildTools,
  "DevOps": devops,
  "Cloud Platforms": cloudComputing,
  "IDEs": ides,
  "Testing and Logging Tools": testingTools,
  "Soft Skills": softSkills,
  "Operating Systems": operatingSystems,
  "Miscellaneous": misc,
  "Coding Platforms": codingPlatforms,
} = skills;

function Skills() {

    const skillDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const skillContent = skillDiv.current;

        // gsap.set(skillContent, { x: '100%', opacity: 0 });


        const tl = gsap.timeline({
            defaults: {
                duration: 2,
                ease: 'power1.in',
            },
            scrollTrigger: {
                trigger: skillContent as Element,
                start: 'top 70%',
                end: 'top 50%',
                scrub: true
            },
        });

        tl.fromTo(skillContent, { x: '100%', opacity: 0 }, { x: '0%', opacity: 1 });

    }, []);

  return (
    <>
      <div className="skill-div">
        {/* <span id="title">Skills</span> */}
        <div className="skills-container" ref={skillDiv}>
          <div className="programming-languages">
            <span>Programming Languages: </span>
            <div className="programming-languages-skills">
              {
                programmingLanguages.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Development Framework: </span>
            <div className="programming-languages-skills">
              {
                devFrameworks.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>J2EE Technologies: </span>
            <div className="programming-languages-skills">
              {
                j2eeTechnologies.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Web Services: </span>
            <div className="programming-languages-skills">
              {
                webServices.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Database Technologies: </span>
            <div className="programming-languages-skills">
              {
                databases.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Web Technologies: </span>
            <div className="programming-languages-skills">
              {
                webTechnologies.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Web/App servers: </span>
            <div className="programming-languages-skills">
              {
                webAppServers.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Version Control: </span>
            <div className="programming-languages-skills">
              {
                versionControl.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Build Tools: </span>
            <div className="programming-languages-skills">
              {
                buildTools.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>DevOps: </span>
            <div className="programming-languages-skills">
              {
                devops.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Cloud Platforms: </span>
            <div className="programming-languages-skills">
              {
                cloudComputing.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>IDEs: </span>
            <div className="programming-languages-skills">
              {
                ides.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Testing and Logging Tools: </span>
            <div className="programming-languages-skills">
              {
                testingTools.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Soft Skills: </span>
            <div className="programming-languages-skills">
              {
                softSkills.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Operating Systems: </span>
            <div className="programming-languages-skills">
              {
                operatingSystems.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Miscellaneous: </span>
            <div className="programming-languages-skills">
              {
                misc.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Coding Platforms: </span>
            <div className="programming-languages-skills">
              {
                codingPlatforms.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills;


