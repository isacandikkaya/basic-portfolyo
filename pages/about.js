import Layout from '../components/layout'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <motion.div
        key="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4"
      >
        <div className="mb-6 text-center text-gray-800 dark:text-white">
          Hi, I'm İsacan! I am a Front-End Developer at GitHub with a passion for developing web
          applications that make a positive impact on peoples lives.
        </div>
        <div className="text-center text-gray-800 dark:text-white">
        In addition to coding and learning new tech, I enjoy play basketball, drinking coffee,
          reading books, and ride a bike  If any of these things interest you too,
          I'd love to chat!
        </div>
      </motion.div>
    </Layout>
  )
}
