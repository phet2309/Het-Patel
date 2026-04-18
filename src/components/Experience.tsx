
import './Experience.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import experiencesData from '../constants/experience.json';

type Experience = {
    position: string;
    company: string;
    bullets: string[];
    hidden?: boolean;
};

const experiences = experiencesData as Experience[];

gsap.registerPlugin(ScrollTrigger);

function Experience() {
    const visible = experiences.filter((exp) => !exp.hidden);

    useEffect(() => {
        gsap.to('.experience-container h1', {
            yPercent: -40,
            ease: 'none',
            scrollTrigger: {
                trigger: '.experience-container',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });

        gsap.to('.element-container', {
            yPercent: -8,
            ease: 'none',
            scrollTrigger: {
                trigger: '.experience-container',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });
    }, []);

    return (
        <>
            <div id="experience" className="experience-container">
                <h1>Experience</h1>
                <div className="element-container">
                    {visible.map((exp, index) => (
                        <div key={`${exp.company}-${index}`} className={`ele${index + 1}`}>
                            <h2>{exp.position}</h2>
                            <h4>{exp.company}</h4>
                            {exp.bullets.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Experience;
