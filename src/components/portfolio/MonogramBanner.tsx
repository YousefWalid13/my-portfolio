export function MonogramBanner({ monogram }: { monogram: string }) {
  return (
    <div className="dot-grid relative flex h-56 items-center justify-center border-b border-border sm:h-72">
      <span className="font-pixel select-none text-6xl leading-none tracking-tight text-foreground sm:text-8xl">
        {monogram}
      </span>
    </div>
  );
}