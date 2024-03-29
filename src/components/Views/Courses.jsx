import devOps from '../../assets/devops.png'
import mern from '../../assets/node.png'
import salesForce from '../../assets/Salesforce.png'
import Modal from "./Modal"
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'

const Courses = () => {
  const [showModal, setShowModal] = useState(false)
  const [syllabus, setSyllabus] = useState('')
  return (
    <>
    {showModal && createPortal(<Modal syllabus={syllabus} setShowModal={setShowModal}/>, document.getElementById('modal'))}
    <div className='w-[90%] md:w-[65%] m-auto'>
      <h2 className='text-6xl font-bold my-20 text-center md:text-left'>Our Courses</h2>
      <div className='flex flex-col md:flex-row justify-between items-center flex: 1 1 auto basis-auto flex-wrap'>
      <div className='w-96 flex flex-col items-center my-20 p-4 rounded-md shadow-sm hover:shadow-md cursor-pointer'>
        <div className='w-[95%]'>
          <img src={devOps} alt='course logo' width='350px' />
        </div>
        <div className='h-84'>
          <h2 className='text-3xl font-bold my-10'>Devops</h2>
          <h4 className='text-gray-700'>
            Learn the latest technologies and best practices from industry
            professionals and gain hands-on experience
          </h4>
          <p>
            <span className='font-bold'> Duration:</span> 3 Months
          </p>
          <p>
            <span className='font-bold'> Mode:</span> Online
          </p>
            <button className='my-4 px-2 py-4 bg-[#E5BE7F] hover:bg-[#d3ac6e] rounded-md' onClick={() => {
              setShowModal(true)
              setSyllabus('DevOps-Syllabus')
              }}>Download Syllabus</button>
            <Link to="/courses/devops">
            <button className='ml-16 border border-black/25 px-4 py-4 rounded-md hover:border-black/75 '>Know more</button>
            </Link>
        </div>
      </div>
      <div className='w-96 flex flex-col items-center my-20 p-4 rounded-md shadow-sm hover:shadow-md cursor-pointer'>
        <div className='w-[95%]'>
          <img src={mern} alt='course logo' width='280px' />
        </div>
        <div className='h-84'>
          <h2 className='text-3xl font-bold my-10'>FullStack Development (MERN) </h2>
          <h4 className='text-gray-700'>
            We offer comprehensive courses on full stack development to help you
            advance your career
          </h4>
          <p>
            <span className='font-bold'> Duration:</span> 3 Months
          </p>
          <p>
            <span className='font-bold'> Mode:</span> Online
          </p>
            <button className='my-4 px-2 py-4 bg-[#E5BE7F] hover:bg-[#d3ac6e] rounded-md' onClick={() => {
              setSyllabus('MERN-Syllabus')
              setShowModal(true)
              }}>Download Syllabus</button>
           <Link to="/courses/fullstack">
            <button className='ml-16 border border-black/25 px-4 py-4 rounded-md  hover:border-black/75'>Know more</button>
            </Link>
        </div>
      </div>
      <div className='w-96 flex flex-col items-center my-20 p-4 rounded-md shadow-sm hover:shadow-md cursor-pointer'>
        <div className='w-[95%]'>
          <img src={salesForce} alt='course logo' width='280px' />
        </div>
        <div className='h-84'>
          <h2 className='text-3xl font-bold my-10'>Salesforce Admin</h2>
          <h4 className='text-gray-700'>
            We offer comprehensive courses on Salesforce admin to help you
            advance your career
          </h4>
          <p>
            <span className='font-bold'> Duration:</span> 3 Months
          </p>
          <p>
            <span className='font-bold'> Mode:</span> Online
          </p>
            <button className='my-4 px-2 py-4 bg-[#E5BE7F] hover:bg-[#d3ac6e] rounded-md' onClick={() => {
              setSyllabus('Salesforce-Syllabus')
              setShowModal(true)
              }}>Download Syllabus</button>
           <Link to="/courses/salesforce">
            <button className='ml-16 border border-black/25 px-4 py-4 rounded-md hover:border-black/75'>Know more</button>
            </Link>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Courses

