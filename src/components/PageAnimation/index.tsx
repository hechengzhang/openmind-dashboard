import { AnimatePresence, motion } from 'framer-motion';

const PageAnimation = ({ name, children } : { name: string, children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={name}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageAnimation