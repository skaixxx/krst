import { motion } from 'framer-motion';
import styles from "./header.module.css"
export default function ActiveIndicator({ style }) {
  return (
    <motion.div
      className={styles.activeIndicator}
      animate={{
        width: style.width,
        left: style.left,
        opacity: 1,
      }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 38,
        opacity: { duration: 0.3 }, // отдельно контролируем плавность появления/исчезновения
      }}
    />
  );
}
