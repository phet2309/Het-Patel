import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';
import { Pagination } from 'swiper/modules';
import Projects from './Projects';
import { projects } from '../constants/projects';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Slider() {

  useEffect(() => {
    gsap.fromTo(
      '.mySwiper',
      { yPercent: 10 },
      {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.mySwiper',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper">
          {
            projects.map((project, index) => (
              <SwiperSlide key={index}>
                <Projects title = {project.title}
                          description={project.description}
                          tech={project.tech}
                          image={project.image}
                          link={project.link} 
                />
              </SwiperSlide>
            ))
          }
      </Swiper>
      {/* </div> */}
    </>
  );
}
