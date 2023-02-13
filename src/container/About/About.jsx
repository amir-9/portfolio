import { motion } from "framer-motion";

import "./About.scss";
import { aboutItems } from "../../constants";
import { AppWrap } from "../../wrapper";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know that
        <span> Good Design</span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="profiles">
        {aboutItems.map((item, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="profile-item"
            key={item.title + index}
          >
            <img src={item.imgUrl} alt={item.title} />
            <h2 className="bold-text" style={{ marginTop: 10 }}>
              {item.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {item.description}{" "}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
