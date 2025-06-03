import { motion } from 'framer-motion';

export default function ActiveIndicator({ style }) {
  return (
    <motion.div
      className="active-indicator"
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
