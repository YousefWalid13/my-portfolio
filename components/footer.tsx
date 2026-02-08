export default function Footer() {
  return (
    <footer className="pb-16 text-sm text-muted-foreground lg:pb-0">
      <p className="leading-relaxed">
        © {new Date().getFullYear()}{" "}
        <span className="text-heading font-medium">Yousef Walid Omar</span>. All
        rights reserved.
      </p>
    </footer>
  );
}
