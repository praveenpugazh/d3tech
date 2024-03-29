import FootBar from "../Views/FootBar"
import Header from "../Views/Header"
import fullstackImage from "../../assets/fullstack.jpg"
import { useState } from "react"
import { createPortal } from "react-dom"
import Modal from "../Views/Modal"
import D3Support from "../Views/Common/D3Support"

const Fullstack = () => {
  const [showModal, setShowModal] = useState(false)
  const [syllabus, setSyllabus] = useState("")
  const [showContent, setShowContent] = useState({ showing: "frontend" })
  return (
    <>
      {showModal &&
        createPortal(
          <Modal syllabus={syllabus} setShowModal={setShowModal} />,
          document.getElementById("modal")
        )}
      <div>
        <Header />
        <div className='w-[90%] md:w-[45%] m-auto my-16'>
          {/* first segment */}
          <div className='flex justify-between flex-wrap sm:items-center md:items-center mb-20 '>
            <div className='flex-3'>
              <h2 className='text-xl'>FULL-STACK DEVELOPMENT BOOTCAMP</h2>
              <h2 className='text-xl'>The most trusted way to become an</h2>
              <h1 className='text-3xl font-bold'>
                Expert Full-Stack Developer
              </h1>
              <ul className='my-20 list-disc list-inside'>
                <li className='text-gray-700'>
                  Mock interviews, hackathons and more
                </li>
                <li className='text-gray-700'>
                  Multilingual training options (English and Tamil)
                </li>
                <li className='text-gray-700'>
                  Job-ready portfolio of rich, functional apps
                </li>
                <li className='text-gray-700'>
                  Reserve a Seat for INR 5,000/-
                </li>
              </ul>
              <div className='flex flex-col md:flex-row mb-10'>
                <button
                  className='px-6 py-4 my-2 mr-5 font-bold rounded-md bg-[#E5BE7F] hover:bg-[#d3ac6e] cursor-pointer'
                  onClick={() => {
                    setShowModal(true)
                  }}
                >
                  Apply Now
                </button>
                <button
                  className='px-6 py-4 my-2 mr-5 font-bold rounded-md border border-black/20 hover:border-black/70 cursor-pointer'
                  onClick={() => {
                    setSyllabus("MERN-Syllabus")
                    setShowModal(true)
                  }}
                >
                  Download Syllabus
                </button>
              </div>
            </div>
            <div>
              <img
                src={fullstackImage}
                alt='course image'
                width={"400px"}
                className='rounded-tr-lg rounded-br-lg'
              />
            </div>
          </div>
        </div>
        {/* second segment */}
        <div className='w-[90%] md:w-[45%] h-40 m-auto mb-20 border-[2px] border-black/45 rounded-xl flex justify-around flex-wrap sm:items-center md:items-center'>
          <div className='text-center'>
            <h1 className='text-2xl font-bold'>₹12LPA</h1>
            <h3 className='text-xl font-bold'>Average Salary</h3>
          </div>
          <div className='border-r-[2px] border-black/55 h-16'></div>
          <div className='text-center'>
            <h1 className='text-2xl font-bold'>44%</h1>
            <h3 className='text-xl font-bold'>Average Hike</h3>
          </div>
          <div className='border-r-[2px] border-black/55 h-16'></div>
          <div className='text-center'>
            <h1 className='text-2xl font-bold'>302%</h1>
            <h3 className='text-xl font-bold'>Highest Salary Hike</h3>
          </div>
          <div className='border-r-[2px] border-black/55 h-16'></div>
          <div className='text-center'>
            <h1 className='text-2xl font-bold'>4,500+</h1>
            <h3 className='text-xl font-bold'>Hiring Partners</h3>
          </div>
        </div>
        {/* thrid segment */}
        <div className='w-[90%] md:w-[45%] m-auto mb-20'>
          <p>FULL-STACK DEVELOPMENT BOOTCAMP CURRICULUM</p>
          <h2 className='text-3xl font-semibold'>
            Learn with a World-Class Curriculum
          </h2>
          <div className='mt-10 flex justify-between flex-wrap sm:items-center space-x-1 space-y-2'>
            <div
              className='px-8 py-5 border border-black/45 rounded-xl cursor-pointer hover:border-black/95'
              onClick={() => setShowContent({ showing: "frontend" })}
            >
              <p>Module 1</p>
              <h1 className='text-[#0C3948] font-bold'>Frontend</h1>
            </div>
            <div
              className='px-8 py-5  border border-black/45 rounded-xl cursor-pointer hover:border-black/95'
              onClick={() => setShowContent({ showing: "backend" })}
            >
              <p>Module 2</p>
              <h1 className='text-[#0C3948] font-bold'>Backend</h1>
            </div>
            <div
              className='px-8 py-5  border border-black/45 rounded-xl cursor-pointer hover:border-black/95'
              onClick={() =>
                setShowContent({ showing: "Testing & Deployment" })
              }
            >
              <p>Module 3</p>
              <h1 className='text-[#0C3948] font-bold'>T & D</h1>
            </div>
            <div
              className='px-8 py-5  border border-black/45 rounded-xl cursor-pointer hover:border-black/95'
              onClick={() => setShowContent({ showing: "projects" })}
            >
              <p>Module 4</p>
              <h1 className='text-[#0C3948] font-bold'>Projects</h1>
            </div>
          </div>
        </div>
        {/* third segment optional portion */}
        {showContent.showing == "frontend" && (
          <div className='w-[90%] md:w-[50%] lg:w-[45%] m-auto bg-slate-100/60 px-20 py-10 mb-20 lg:h-[560px]'>
            <h1 className='text-2xl font-bold mb-5'>Frontend Development</h1>
            <p>
              The frontend represents the user-facing application, which aims to
              provide a stellar user experience. This module will begin with an
              introduction to source code management using Git and GitHub. HTML5
              and CSS3 will help you build user interfaces and web pages. To
              build such user-facing applications, you will learn React, an
              immensely popular JavaScript library by Meta and loved by some of
              the biggest product companies worldwide.
            </p>
            <p className='font-bold mt-5'>Topics Covered</p>
            <ul className='mb-5 list-disc list-inside'>
              <li>Source and Version Control using Git and GitHub</li>
              <li>Mastering HTML5 and CSS3</li>
              <li>Mastering JavaScript (ECMAScript 2020+)</li>
              <li>Working with Remote Data and Writing Modular Code</li>
              <li>Modern JavaScript using Babel</li>
              <li>Working with Parcel and Webpack module bundlers</li>
              <li>Building Single Page Applications using React</li>
              <li>Work with the incredible Hooks API</li>
            </ul>
          </div>
        )}
        {showContent.showing == "backend" && (
          <div className='w-[90%] md:w-[45%] m-auto bg-slate-100/60 px-20 py-10 mb-20 md:h-[460px]'>
            <h1 className='text-2xl font-bold mb-5'>Backend Development</h1>
            <p>
              Discover Node.js, the incredibly popular JavaScript runtime that
              enables you to build everything from command-line tools to web
              servers and APIs. You will then work with Express, a popular
              framework that simplifies building Node.js applications. Work with
              the MongoDB database engine to learn about operations, data
              aggregation pipelines, and more. Go deeper into RESTful API design
              as you learn more about the OpenAPI Spec and the use of Swagger
              for API documentation.
            </p>
            <p className='font-bold mt-5'>Topics Covered</p>
            <ul className='mb-5 list-disc list-inside'>
              <li>Learning Node.js</li>
              <li>Mastering the Express framework</li>
              <li>Learning MongoDb</li>
            </ul>
          </div>
        )}
        {showContent.showing == "Testing & Deployment" && (
          <div className='w-[90%] md:w-[45%] m-auto bg-slate-100/60 px-20 py-10 mb-20 md:h-[460px]'>
            <h1 className='text-2xl font-bold mb-5'>Testing & Deployment</h1>
            <p>
              Learn about software testing which enables you to write code that
              tests and validates your application code to ensure it behaves as
              expected under various scenarios. Learn to deploy your Fullstack
              applications on the cloud with major providers such as AWS Elastic
              Beanstalk, Azure, Netlify, and Heroku.
            </p>
            <p className='font-bold mt-5'>Topics Covered</p>
            <ul className='mb-5 list-disc list-inside'>
              <li>Designing and Building RESTful APIs</li>
              <li>
                Test-Driven Development using Jest, Puppeteer and Cypress.io
              </li>
              <li>Deploying the app on the cloud</li>
            </ul>
          </div>
        )}
        {showContent.showing == "projects" && (
          <div className='w-[90%] md:w-[45%] m-auto bg-slate-100/60 px-20 py-10 mb-20 md:h-[460px]'>
            <h1 className='text-2xl font-bold mb-5'>Projects</h1>
            <p>
              Gear up to build a robust portfolio of cloud-deployed
              applications, ready to impress leading tech recruiters and secure
              the job you desire.
            </p>
            <p className='font-bold mt-5'>Project you will be doing</p>
            <ul className='mb-5 list-disc list-inside'>
              <li>
                Bookshelf - A social networking application, like Facebook, that
                allows users to create a curated virtual bookshelf with reviews.
              </li>
              <li>
                Flixxit - A video streaming service like Netflix, Prime Video or
                Apple TV+.
              </li>
              <li>
                ShopPlusPlus - An Amazon clone that allows users to create
                accounts, wish lists, browse and purchase products.
              </li>
              <li>
                Chord - An Apple Music or Spotify Clone featuring playlists,
                song player and other exciting features.
              </li>
            </ul>
          </div>
        )}
        <div className='w-[90%] md:w-[45%] m-auto mb-20'>
          <h1 className='text-2xl font-bold'>
            Tools and Technologies You’ll Master
          </h1>
        </div>
        <D3Support />
        <FootBar />
      </div>
    </>
  )
}

export default Fullstack
