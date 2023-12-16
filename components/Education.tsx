import React from 'react'

const Education = () => {
  return (
    <div>
          <section className="py-10 md:py-16">

<div className="container max-w-screen-xl mx-auto px-4">

    <h1 className="font-medium text-gray-900  dark:text-teal-500 text-3xl md:text-4xl mb-5">Education</h1>

    {/* <p className="font-normal text-gray-900  dark:text-teal-900 text-xs md:text-base mb-20">Below is a summary of the places I studied</p> */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-90 dark:bg-gray-900 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-900  dark:text-white text-lg mb-4">2022</h4>

            <p className="font-normal text-gray-900  dark:text-white text-md mb-4">Full Stack MERN Application Developement Course <br/> Deer-Walk Training Center <br/> 4-months</p>

            <div className="relative">
                {/* <h6 className="font-semibold text-gray-900  dark:text-teal-900 text-md relative z-10">See the place here</h6> */}
                <span className="w-32 h-1 bg-blue-200  absolute bottom-1 left-0 z-0"></span>
            </div>
        </div>

        <div className="bg-gray-90 dark:bg-gray-900 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-900   dark:text-white text-lg mb-4">2019 – 2023</h4>

            <p className="font-normal text-gray-900   dark:text-white text-md mb-4">Bachlors Degree of CS / IT <br/> Patan Multiple Campus <br/> Tribhuwan University</p>

            <div className="relative">
                {/* <h6 className="font-semibold text-gray-900  dark:text-teal-900 text-md relative z-10">See the place here</h6> */}
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
            </div>
        </div>

         <div className="bg-gray-90 dark:bg-gray-900 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-900   dark:text-white text-lg mb-4">2016 – 2018</h4>

            <p className="font-normal text-gray-900   dark:text-white text-md mb-4">+2 Science <br/> Liverpool International College <br/> Kathmandu Nepal </p>

            <div className="relative">
                {/* <h6 className="font-semibold text-gray-900  dark:text-teal-900 text-md relative z-10">See the place here</h6> */}
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
            </div>
        </div>

          
    </div>

</div>

</section>
    </div>
  )
}

export default Education