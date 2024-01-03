import React, { useState } from 'react';
import './Education.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import quotes from '../../utils/quotes.json';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import edu from '../../utils/education.json';
// Import Motion
import { motion } from 'framer-motion';
// Import varian
import { fadeIn } from '../../utils/variant';

function Education() {
  return (
    <div className="container">
      <div className="row education">
        <motion.div
          variants={fadeIn('left', 0.9)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.5 }}
          className="col-12 col-sm-12 col-lg-5  px-4 Eleft"
        >
          <h1 className="Activity">
            Latest <br /> Quotes
          </h1>
          <Swiper>
            <SliderButtons />
            {quotes.map((quote, i) => (
              <SwiperSlide key={i}>
                <p className=" judulActivity">{quote.name} ✨</p>
                <p className=" descActivity">{quote.quote}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.9)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.5 }}
          className="col-12 col-sm-12 col-lg-6 Eright"
        >
          <div>
            <h1 className="Education">Work Experience & Education</h1>
            <h5 className="descEducation">For an inside scoop on me, grab my CV download. Enjoy!</h5>
            <a href="./CV.pdf" className="btn mb-3 btnEducation">
              Download My CV
            </a>
          </div>
          <div>
            <Accordion className="downAccordion" allowMultipleExpanded={false} preExpanded={[0]}>
              {edu.map((education, i) => {
                const [className, setClassName] = useState(null);
                return (
                  <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="accordionButton">
                        <AccordionItemState>{({ expanded }) => (expanded ? setClassName('expanded') : setClassName('collapsed'))}</AccordionItemState>

                        <span className="eduTitle">{education.title} </span>
                        <div className=" icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{education.education}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="text-start px-4">
      <button
        className="px-4 py-2 me-2 mt-3  prev"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        &lt;
      </button>
      <button
        className="px-4 py-2 me-2 mt-3  prev"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        &gt;
      </button>
    </div>
  );
};
