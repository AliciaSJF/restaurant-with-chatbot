import Image from "next/image"

type Dish = {
  name: string
  description: string
  image: string
}

const dishes: Dish[] = [
  {
    name: "Sushi Variado",
    description: "Selección de nigiri y maki con pescado fresco del día",
    image: "/placeholder.svg",
  },
  {
    name: "Ramen Tonkotsu",
    description: "Fideos en caldo de cerdo cremoso con chashu y huevo marinado",
    image: "/placeholder.svg",
  },
  {
    name: "Tempura Moriawase",
    description: "Surtido de verduras y mariscos en tempura crujiente",
    image: "/placeholder.svg",
  },
  {
    name: "Tataki de Atún",
    description: "Atún ligeramente sellado con salsa ponzu y cebolleta",
    image: "/placeholder.svg",
  },
  {
    name: "Gyoza de Pollo",
    description: "Empanadillas japonesas a la plancha rellenas de pollo y verduras",
    image: "/placeholder.svg",
  },
  {
    name: "Sashimi Deluxe",
    description: "Selección premium de pescado crudo cortado finamente",
    image: "/placeholder.svg",
  },
]

export function DishGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {dishes.map((dish, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg">
          <Image
            src={dish.image || "/placeholder.svg"}
            alt={dish.name}
            width={400}
            height={300}
            className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-semibold mb-2">{dish.name}</h3>
            <p className="text-gray-200 text-sm">{dish.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

