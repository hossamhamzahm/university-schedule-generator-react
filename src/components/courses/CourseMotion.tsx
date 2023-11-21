import { AnimatePresence, motion } from "framer-motion";


const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};

const CourseMotion = (props: { children: (JSX.Element[] | JSX.Element)}) => {
    return (
        <motion.div style={{ width: '100%' }}
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            {props.children}
        </motion.div>
    );
};

export default CourseMotion;