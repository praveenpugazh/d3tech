import landingImage from "../../assets/landing.svg"
const Landing = () => {
  return (
    <>
    <div className="h-[900px] w-[88%] m-auto flex flex-col md:flex-row justify-between ">
        <div className="flex items-center justify-center sm:w-96 md:w-[700px]">
            <img src={landingImage} alt="coding person" width='700px' />
        </div>
        <div className="mr-20 mt-60 ">
            <h1 className='text-4xl lg:text-6xl xl:text-7xl font-bold mb-5 text-center'> Unlock Your <span className="text-[#E5BE7F]">Full Potential</span></h1>
            <h1 className='text-3xl lg:text-5xl font-bold my-3 text-center md:text-right'>Get The Right Job<span className="text-[#E5BE7F]">.</span></h1>
            <h3 className='text-3xl my-5 text-gray-700 mt-10 text-center md:text-right'>Join us to learn more about it</h3>
            <div className="mt-20 text-center md:text-right">
                <button className='px-12 py-6 bg-[#E5BE7F] text-3xl rounded-lg font-bold'><a  href="#contactForm">Join Now</a></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Landing