"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const menuItems = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre Nosotros", href: "#about" },
  { name: "Menú", href: "#menu" },
  { name: "Reseñas", href: "#reviews" },
  { name: "Platos Destacados", href: "#featured-dishes" },
  { name: "Contacto", href: "#footer" },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = (href: string) => {
    setOpen(false)
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white">
          <Menu className="w-6 h-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-zinc-900 text-white">
        <nav className="flex flex-col gap-4 mt-8">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleLinkClick(item.href)}
              className="text-lg hover:text-blue-400 transition-colors text-left"
            >
              {item.name}
            </button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

