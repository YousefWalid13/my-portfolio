import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Spotlight from "@/components/spotlight"
import { MobileNav } from "@/components/navigation"

export default function Page() {
  return (
    <div className="relative">
      <Spotlight />
      <MobileNav />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          {/* Left column - sticky on desktop */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[420px] lg:shrink-0 lg:flex-col lg:justify-between lg:py-24">
            <Hero />
          </header>

          {/* Right column - scrollable content */}
          <main className="flex flex-col gap-24 pt-16 lg:w-full lg:max-w-xl lg:py-24">
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}
