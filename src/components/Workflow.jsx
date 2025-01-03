import { CheckCircle2 } from "lucide-react"
import codeImg from '../assets/code.jpg';
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
        <div className="mt-20">
            <h2 className="text-3xl font-bold sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">Increase your <span className="text-blue-500">productivity</span></h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2">
                <img src={codeImg} alt="Code" className="rounded-lg"/>
            </div>
            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12">
                        <div className="text-green-500 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center rounded-full">
                            <CheckCircle2 />
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                            <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Workflow