import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"

const PricingSection = () => {
  return (
    <section className="max-w-7xl mx-auto pt-20 px-6">

        <div className="mt-20">
            <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Pricing</h2>
            <div className="flex flex-wrap">

              {pricingOptions.map((option, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                  <div className="p-10 border border-neutral-700 rounded-xl cursor-pointer" title="See pricing details">
                    <p className="text-4xl mb-8">
                      {option.title}
                      {option.title === "Pro" && <span className="ml-2 text-sm text-blue-600 underline underline-offset-2">Most Popular</span>
                      }
                    </p>
                    <p className="mb-8">
                      <span className="text-5xl mt-6 mr-2">{option.price}</span>
                      <span className="text-neutral-400 tracking-tight">/Month</span>
                    </p>
                    <ul>
                      {option.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-lg mt-8 mb-4">
                          <CheckCircle2 size={24} className="mr-2 text-green-500" />
                          <span className="text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="inline-flex justify-center text-center items-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-blue-600 border border-blue-600 rounded-lg transition-colors">Start</a>
                  </div>
                </div>  
                ))}
            </div>
        </div>

    </section>
  )
}

export default PricingSection