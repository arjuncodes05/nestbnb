import {testimonials } from "../assets/assets"
import TestimonialCard from "./TestimonialCard"
import Title from "./Title"

const Testimonial = () => {

    const title = "What Our Guests Say"
    const subtitle = "Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."

  return (
    <div className="w-full flex bg-slate-50 flex-col items-center pt-8 lg:pt-20 pb-20 lg:pb-30 text-black space-y-10 md:space-y-15 sm:space-y-9 px-4 sm:px-8 md:px-10 lg:px-24 xl:px-32">

        <Title title={title} subtitle={subtitle} align="center" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 xl:gap-8">
            {
                testimonials.map((item) => <TestimonialCard key={item.id} item={item}/>)
            }
        </div>
    </div>
  )
}

export default Testimonial;