import { motion } from "framer-motion";
import { useRef } from "react";


const ScrollFadingComponent = ({ children }) => {
    const scrollRef = useRef(null)


    return (
        <motion.div initial={{ margin: "0px -20px 0px 100px" }}
            whileInView={{ margin: "0px" }}
            viewport={{ root: scrollRef }} >
            {children}
        </motion.div>
    );
};

export default ScrollFadingComponent;
