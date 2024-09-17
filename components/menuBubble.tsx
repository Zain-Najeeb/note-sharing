import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function MenuBubble() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-900 rounded-3xl shadow-2xl">
      <div className="bg-gray-800 p-6 rounded-2xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Avatar className="w-24 h-24 md:w-32 md:h-32">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Company Logo" />
            <AvatarFallback>CL</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Vision</h1>
            <p className="text-gray-300 text-sm md:text-base">
              Our mission is to revolutionize streaming experiences by creating immersive, low-latency platforms that bring people together, no matter the distance. We strive to make virtual interactions feel as natural and engaging as being in the same room, fostering connections and shared experiences in the digital age.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}