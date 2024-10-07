import { Link } from 'react-router-dom'

import hero1 from '../assets/hero/hero1.webp'
import hero2 from '../assets/hero/hero2.webp'
import hero3 from '../assets/hero/hero3.webp'
import hero4 from '../assets/hero/hero4.webp'

const carouselImages = [hero1, hero2, hero3, hero4]

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Transform Your Space with Style
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          At Joynest, we provide an exclusive selection of stylish and
          comfortable pieces that elevate your home. Experience exceptional
          quality and design with every choice you make.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Explore Our Collection
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Hero
