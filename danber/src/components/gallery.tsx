"use client"
import Image from "next/image"
export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      image: "/Image.jpg",
      size: "large",
    },
    {
      id: 2,
      image: "/Image2.jpg",
      size: "small",
    },
    {
      id: 3,
      image: "/Image3.jpg",
      size: "small",
    },
    {
      id: 4,
      image: "/Image4.jpg",
      size: "small",
    },
    {
      id: 5,
      image: "/Image5.jpg",
      size: "small",
    },
    {
      id: 6,
      image: "/Image6.jpg",
      size: "small",
    },
    {
      id: 7,
      image: "/Image7.jpg",
      size: "small",
    },
    {
      id: 8,
      image: "/Image8.jpg",
      size: "small",
    },
    {
      id: 9,
      image: "/Image9.jpg",
      size: "small",
    },
    {
      id: 10,
      image: "/Image10.jpg",
      size: "small",
    },
    {
      id: 11,
      image: "/Image11.jpg",
      size: "small",
    },
    {
      id: 12,
      image: "/Image12.jpg",
      size: "small",
    },
        {
      id: 13,
      image: "/Image13.jpg",
      size: "small",
    },
        {
      id: 14,
      image: "/Image14.jpg",
      size: "small",
    },    {
      id: 15,
      image: "/Image15.jpg",
      size: "small",
    },    {
      id: 16,
      image: "/Image16.jpg",
      size: "small",
    },  {
      id: 17,
      image: "/Image17.jpg",
      size: "small",
    },
      {
      id: 18,
      image: "/Image18.jpeg",
      size: "small",
    },
      {
      id: 19,
      image: "/Image19.jpeg",
      size: "small",
    },
      {
      id: 20,
      image: "/Image20.jpeg",
      size: "small",
    },
      {
      id: 21,
      image: "/Image21.jpeg",
      size: "small",
    },
      {
      id: 22,
      image: "/Image22.jpg",
      size: "small",
    },{
      id: 23,
      image: "/Image23.jpeg",
      size: "small",
    },
    {
      id: 24,
      image: "/Image24.jpg",
      size: "small",
    },
    
  ]

  return (
    <section className="mt-15 py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Danber&apos;s Gallery</h2>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer group hover:opacity-90 transition-opacity"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={`Gallery item ${item.id}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
