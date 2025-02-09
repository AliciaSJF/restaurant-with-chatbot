"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ReviewForm, type Review } from "@/components/review-form"
import { DishGallery } from "@/components/dish-gallery"
import { Footer } from "@/components/footer"
import { MobileMenu } from "@/components/mobile-menu"
import { Chatbot } from "@/components/chatbot"

export default function Home() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "Dianne Russell",
      rating: 5,
      text: "¡Increíble experiencia! El sushi estaba delicioso, el pescado súper fresco y el servicio impecable. Sin duda, el mejor sushi que he probado en mucho tiempo. ¡Muy recomendable!",
    },
    {
      name: "Eleanor Pena",
      rating: 5,
      text: "La fusión de sabores tradicionales japoneses con toques modernos es simplemente espectacular. Cada plato es una obra de arte culinaria. El ambiente es acogedor y el personal muy atento.",
    },
    {
      name: "Theresa Webb",
      rating: 5,
      text: "Hotaru Madrid ha elevado el listón de la cocina japonesa en la ciudad. La presentación de los platos es impresionante y los sabores son auténticos. Una experiencia gastronómica que no te puedes perder.",
    },
  ])

  const addReview = (newReview: Review) => {
    setReviews([...reviews, newReview])
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 text-sm border-b border-gray-800">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span>●</span>
            <span>Calle de Alcalá 85, Madrid</span>
          </div>
          <div className="hidden sm:block">+34 911171709</div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:opacity-75">
            <Instagram className="w-4 h-4" />
          </Link>
          <Link href="#" className="hover:opacity-75">
            <Facebook className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4">
        <Button variant="outline" size="sm" className="text-gray-300 border-gray-300">
          RESERVAR MESA
        </Button>
        <Link href="/" className="flex flex-col items-center">
          <div className="text-2xl font-bold tracking-wider">Hotaru</div>
          <div className="text-lg tracking-wide">Madrid</div>
        </Link>
        <MobileMenu />
      </header>

      {/* Hero Section */}
      <div
        id="home"
        className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${process.env.NEXT_PUBLIC_VERCEL_URL ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-02-07%20132712-jCazpweEJzY0f0AVV1TOMSEzyFNJXP.png" : "/placeholder.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-6">
            <div className="text-sm tracking-widest">BIENVENIDO A HOTARU MADRID</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide">íntimo, provocativo, único</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hotaru llega a Madrid para ofrecer una experiencia gastronómica única en la que la tradición y la estética
              japonesa juegan un importante papel.
            </p>
          </div>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
            RESERVAR MESA
          </Button>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="grid md:grid-cols-2 gap-8 px-4 py-20">
        <div className="space-y-6">
          <div className="text-sm tracking-widest text-blue-400">SOBRE NOSOTROS</div>
          <h2 className="text-3xl font-light">descubre una experiencia única</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Capitaneado por el conocedor chef Alejandro Pérez, la propuesta gastronómica de Hotaru destaca por la
              exquisita fusión de sabores de la cocina japonesa e ingredientes de otras partes del mundo.
            </p>
            <p>
              Hotaru Madrid propone un espacio sublime en donde la cultura y la tradición, presentes y únicas en cada
              plato. Aquí, los verdaderos festejantes de la alta cocina y del sushi, podrán disfrutar de una exquisita
              selección de sabores basada en explorar las cualidades y virtudes del sushi contemporáneo.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="text-xl">Nueva apertura en Madrid</div>
          <div className="space-y-2">
            <div className="text-sm text-gray-300">Horarios</div>
            <div className="flex justify-between items-center border-b border-gray-800 py-2">
              <div>Lunes - Domingo</div>
              <div>01:00 PM - 11:00 PM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div id="reviews" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="bg-zinc-900/50 border-zinc-800">
                    <CardContent className="p-6 text-center space-y-4">
                      <h3 className="font-medium">{review.name}</h3>
                      <div className="flex justify-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-zinc-700 text-zinc-700"}`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-400">{review.text}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center w-full gap-2 pt-4">
              <CarouselPrevious className="static translate-y-0 hover:bg-white/10" />
              <CarouselNext className="static translate-y-0 hover:bg-white/10" />
            </div>
          </Carousel>
          <ReviewForm onAddReview={addReview} />
        </div>
      </div>

      {/* Reservation Section */}
      <div
        className="relative py-32 px-4 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${process.env.NEXT_PUBLIC_VERCEL_URL ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YvIV9eTRSaDr6TyQXtT4RFB12AavcD.png" : "/placeholder.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-light">Tu mesa te espera, reserva con nosotros</h2>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
            RESERVAR AHORA
          </Button>
        </div>
      </div>

      {/* Menu Section */}
      <div id="menu" className="grid md:grid-cols-2 gap-8 py-20 px-4">
        <div className="relative h-[400px]">
          <Image src="/placeholder.svg" alt="Sushi rolls" fill className="object-cover rounded-lg" />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <div className="text-sm tracking-widest text-blue-400">NUESTRO MENÚ</div>
            <h2 className="text-3xl font-light">Menú</h2>
          </div>
          <p className="text-gray-400">
            Sumérgete en una carta donde cada plato es una obra maestra. Descubre nuestro sushi hecho a mano, rolls de
            autor y sashimi, de la más alta calidad. Déjate sorprender por nuestras opciones premium y las
            recomendaciones de nuestro sushi chef.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              DESCARGAR MENÚ
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              ENGLISH MENU
            </Button>
          </div>
        </div>
      </div>

      {/* Galería de Platos Destacados */}
      <section id="featured-dishes" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light mb-8 text-center">Nuestros Platos Destacados</h2>
          <DishGallery />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Chatbot */}
      <Chatbot />
    </div>
  )
}

