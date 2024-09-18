import { infoWords } from "@/constants"
import { Navbar, CenterText, MenuBubble, Divider, Footer } from "@/components/index"
import { ChevronDown } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col justify-center items-center">
        <div className="flex-grow flex flex-col justify-center items-center " style={{ height: '82.5vh' }} >
          <CenterText words={infoWords} />
          <ChevronDown className="animate-bounce mt-8 text-white" size={32} />
        </div>
        <div className="flex-grow flex flex-col justify-end">
          <div className="w-full">
            <Divider />
          </div>
          <div className="flex justify-center items-center py-16">
            <MenuBubble />
          </div>
          <div className="w-full">
            <Divider />
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
