import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">Contact</h2>
      </div>
      <div className="flex flex-col gap-6">
        <p className="leading-relaxed">
          I{"'"}m currently looking for new opportunities. Whether you have a question or just want to say
          hi, feel free to reach out and I{"'"}ll get back to you as soon as possible.
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="mailto:yousefwalid950@gmail.com"
            className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span className="group-hover:underline">yousefwalid950@gmail.com</span>
          </a>
          <a
            href="tel:+201006208930"
            className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span className="group-hover:underline">01006208930</span>
          </a>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>Cairo, Egypt</span>
          </div>
        </div>
      </div>
    </section>
  )
}
