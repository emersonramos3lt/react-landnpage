import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto pt-20 px-6">
        <div className='flex flex-col items-center mt-6 lg:mt-20'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-bold'>Empowering your data with <span className='text-blue-600'>secure, scalable, and reliable</span> cloud solutions.               
            </h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
                With our cloud storage services, you can store, manage, and access your files anytime, anywhere. We provide a seamless, secure, and scalable solution tailored to meet the needs of individuals and businesses alike. Trust us to keep your data safe and accessible, so you can focus on what truly matters.
            </p>
            <div className='flex justify-center my-10'>
                <a href="/" className='bg-blue-600 py-4 px-4 rounded-md border border-blue-600 transition-colors hover:bg-transparent hover:text-white hover:border-white'>Start for free!</a>
                <a href="/" className='px-4 py-4 mx-3 rounded-md border transition-colors  hover:bg-blue-600 hover:border-blue-600'>Documentation</a>
            </div>
        </div>
        <div className='flex flex-col mt-10 sm:justify-center sm:flex-row'>

          <video 
            autoPlay
            loop
            muted
            className='rounded-lg sm:w-1/2 border border-blue-600 shadow-blue-400 mx-2 my-4'
          >
            <source src={video1} type='video/mp4'/>
            Your browser does not support the video tag.
          </video>

          <video 
            autoPlay
            loop
            muted
            className='rounded-lg sm:w-1/2 border border-blue-600 shadow-blue-400 mx-2 my-4'
          >
            <source src={video2} type='video/mp4'/>
            Your browser does not support the video tag.
          </video>
        </div>
    </section>
  )
}

export default HeroSection