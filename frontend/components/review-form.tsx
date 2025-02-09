"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export type Review = {
  name: string
  rating: number
  text: string
}

type ReviewFormProps = {
  onAddReview: (review: Review) => void
}

export function ReviewForm({ onAddReview }: ReviewFormProps) {
  const [name, setName] = useState("")
  const [rating, setRating] = useState(5)
  const [text, setText] = useState("")
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddReview({ name, rating, text })
    setName("")
    setText("")
    setRating(5)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mx-auto mt-8 block text-white border-white hover:bg-white/10">
          AÑADIR RESEÑA
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-white">
        <DialogHeader>
          <DialogTitle>Añadir reseña</DialogTitle>
          <DialogDescription className="text-gray-400">Comparte tu experiencia en Hotaru Madrid</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-zinc-800 border-zinc-700"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label>Valoración</Label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="p-0 hover:scale-110 transition-transform"
                  onClick={() => setRating(star)}
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-zinc-700 text-zinc-700"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="review">Tu experiencia</Label>
            <Textarea
              id="review"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="bg-zinc-800 border-zinc-700 min-h-[100px]"
              placeholder="Cuéntanos sobre tu experiencia en Hotaru Madrid..."
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Enviar reseña
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

