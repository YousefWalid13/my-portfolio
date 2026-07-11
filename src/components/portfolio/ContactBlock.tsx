import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

export function Contact({ email, phone }: { email: string; phone: string }) {
  return (
    <section id="contact" className="scroll-mt-8">
      <div className="flex items-center gap-3">
        <Mail className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Contact</h2>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-gradient-to-br from-card to-secondary/30 p-6 sm:p-8">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          I'm currently looking for new opportunities. Whether you have a question or just want to
          say hi, feel free to reach out and I'll get back to you as soon as possible.
        </p>

        {/* Contact Info */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href="mailto:yousefwalid950@gmail.com"
            className="flex items-center gap-3 rounded-lg border border-border bg-background/50 p-3 transition-all hover:bg-accent"
          >
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium">yousefwalid950@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+201006208930"
            className="flex items-center gap-3 rounded-lg border border-border bg-background/50 p-3 transition-all hover:bg-accent"
          >
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-medium">+20 100 620 8930</p>
            </div>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="mailto:yousefwalid950@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:opacity-90"
          >
            <Send className="h-4 w-4" />
            Get in touch
          </a>

          <a
            href="https://github.com/YousefWalid13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background/50 px-5 py-2.5 text-sm font-medium transition-all hover:bg-accent"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/yousefwalidsoftware"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background/50 px-5 py-2.5 text-sm font-medium transition-all hover:bg-accent"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>

      <footer className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Yousef Walid Omar. All rights reserved.</p>
        <p className="mt-1">Built with Next.js, Tailwind CSS & shadcn/ui.</p>
      </footer>
    </section>
  );
}
