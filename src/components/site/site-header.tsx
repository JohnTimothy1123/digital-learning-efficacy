import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { navItems } from '@/content/research'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { LogoMark } from './logo'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Digital Learning Aids — home">
          <LogoMark className="size-8 transition-transform duration-300 group-hover:rotate-90 motion-reduce:transition-none" />
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-bold tracking-tight">Digital Learning Aids</span>
            <span className="block font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
              CpE · BatStateU Alangilan
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: true }}
                  className="relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground motion-reduce:transition-none"
                >
                  {({ isActive }) => (
                    <>
                      {item.short === 'Intro' ? 'Introduction' : item.short}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-primary transition-transform duration-300 motion-reduce:transition-none ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                      />
                    </>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm">
            <SheetHeader>
              <SheetTitle className="font-display">Explore the study</SheetTitle>
              <SheetDescription>Jump to any section of the research website.</SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile" className="px-4">
              <ol className="space-y-1">
                {navItems.map((item, i) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      activeOptions={{ exact: true }}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-3 rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted data-[status=active]:bg-primary/10 data-[status=active]:text-primary"
                    >
                      <span className="font-mono text-xs text-muted-foreground">0{i}</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
