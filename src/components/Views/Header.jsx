import imgUrl from './logo.png'

const Header = () => {
  return (
    <div className='bg-[#0C3948]'>
      <div className='w-full md:w-[90%] flex flex-col md:flex-row justify-between items-center m-auto py-3'>
        <div className='logo w-96 flex flex-row items-center'>
          <img src={imgUrl} alt='logo' width='128px' />
          <h1 className='text-slate-100 font-bold'>
            Docent Disciple Dream Technologies
          </h1>
        </div>
        <ul className='flex flex-col md:flex-row text-slate-100 w-80 justify-between items-center font-bold cursor-pointer'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Courses</li>
        </ul>
        <div>
          <button className='px-4 py-2 my-2 font-bold rounded bg-[#E5BE7F] cursor-pointer'>
          <a  href="#contactForm">Join Now</a></button>
        </div>
      </div>
    </div>
  )
}

export default Header

