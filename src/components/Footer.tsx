// src/components/Footer.tsx
import { Github, Twitter, Linkedin} from 'lucide-react'
import { SiHuggingface } from 'react-icons/si' // For the Hugging Face icon

function Footer() {
    return (
      <footer className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-300">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-300">
              <SiHuggingface className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          
          <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
            © 2023 Ilyas Khiat. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
export default Footer
