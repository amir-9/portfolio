import { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { MotionWrap, AppWrap } from "../../wrapper";
import { brandsData, testimonialsData } from "../../constants";
import "./Testimonial.scss";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [brands, setBrands] = useState(brandsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
      {testimonials.length && (
        <>
          <div className="testimonial-item app__flex">
            <img src={testimonial.imgUrl} alt={testimonial.name} />
            <div className="testimonial-content">
              <p className="p-text">{testimonial.feedback}</p>
              <div>
                <h4 className="bold-text">{testimonial.name}</h4>
                <h5 className="p-text">{testimonial.company}</h5>
              </div>
            </div>
          </div>
          <div className="testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand.id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "testimonial"),
  "testimonial",
  "app__primarybg"
);
