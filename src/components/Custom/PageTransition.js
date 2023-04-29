import { motion } from "framer-motion";
import { useRef } from "react";


const ScrollScalingYComponent = ({ children }) => {
    const scrollRef = useRef(null)


    return (
        <motion.div initial={{ scaleY: 0.7 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ root: scrollRef }} >
            {children}
        </motion.div>
    );
};

export default ScrollScalingYComponent;
