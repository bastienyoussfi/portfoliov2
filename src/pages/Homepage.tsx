import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from '../components/Body'
import { Toaster } from "@/components/ui/sonner"

export default function Homepage() {

  return (
    <div className="bg-white dark:bg-black">
      <Header />
      <Body />
      <Toaster />
      <Footer />
    </div>
  )
}