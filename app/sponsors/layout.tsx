export default function SponsorsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="obsidian" className="min-h-screen bg-obsidian-bg font-sans text-obsidian-ivory antialiased">
      {children}
    </div>
  );
}
