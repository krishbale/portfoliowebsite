import React from 'react'

const Experience = () => {
  return (
    <div>
           <section className="py-10 md:py-16 ">

<div className="container max-w-screen-xl mx-auto px-4">

    <h1 className="font-medium text-gray-700 dark:text-teal-500 text-3xl md:text-4xl mb-5">Experience</h1>

    {/* <p className="font-normal text-gray-500 dark:text-teal-800 text-xs md:text-base mb-20">Below is a summary of the places I worked</p> */}

    <div className="flex flex-col lg:flex-row justify-between">
        <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
            <h6 className="font-medium text-gray-400 dark:text-teal-400  text-base uppercase">Company</h6>

            <p className="font-semibold text-gray-600 dark:text-white text-base">LanceMe Up <span className="font-normal text-gray-300 dark:text-white">/ Lalitpur Nepal</span></p>

            
        </div>

        <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
            <h6 className="font-medium text-gray-400 dark:text-teal-400 text-base uppercase">Position</h6>

            <p className="font-normal text-gray-400 dark:text-white text-base"> Back-End Developer Intern</p>

        </div>

        <div className="space-y-8 md:space-y-16">
            <h6 className="font-medium text-gray-400 dark:text-teal-400 text-base uppercase">Year</h6>

            <p className="font-normal text-gray-400 dark:text-white text-base">2023</p>

            
        </div>
    </div>
    
</div>

</section>
    </div>
  )
}

export default Experience