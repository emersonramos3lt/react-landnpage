import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto pt-20 px-6">

        <div className="mt-20 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 font-bold">Testimonials</h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-neutral-800 rounded-md p-6 text-md border border-neutral-300 font-normal sm:h-[400px]">
                            <p>"{testimonial.text}"</p>
                            <div className="flex mt-8 items-start">
                                <img src={testimonial.image} alt={testimonial.user} className="w-14 h-14 mr-6 rounded-full border border-blue-500 object-cover object-center"/>
                            </div>
                            <h6>{testimonial.user}</h6>
                            <span className="text-sm font-normal italic text-neutral-500">{testimonial.company}</span>
                        </div>
                    </div>
                ))}
            </div>  
        </div>

    </section>
  )
}

export default Testimonials