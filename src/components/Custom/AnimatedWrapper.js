import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const ScrollScalingComponent = ({ children }) => {
    const scrollRef = useRef(null)


    return (
        <motion.div initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            viewport={{ root: scrollRef }} >
            {children}
        </motion.div>
    );
};

export default ScrollScalingComponent;
