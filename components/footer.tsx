import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from 'lucide-react'

export default function DarkFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Zain Najeeb</h2>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L1 21h22L12 2zm0 4l7.53 13H4.47L12 6z" />
            </svg>
            <span className="font-semibold text-xl">StealthStudy</span>
          </div>
          <Button className="bg-white text-black hover:bg-white/90">
            Open StealthStudy
          </Button>
        </div>
      </div>
    </footer>
  )
}