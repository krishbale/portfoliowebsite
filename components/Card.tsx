import React from 'react'

const Card = ({}) => {
  return (
    <div>
         <section className="py-10 md:py-16">

<div className="container max-w-screen-xl mx-auto px-4">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-50  dark:bg-gray-900 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center  dark:bg-gray-900 bg-gray-100 rounded-md mb-4">
                <i data-feather="activity"></i>
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">Designing</h4>

            <p className="font-normal text-gray-500 text-md">User Interface/Experience<br/> System Architecture/Base  <br/> Database Model </p>
        </div>
        
        <div className="bg-gray-50  dark:bg-gray-900 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center  dark:bg-gray-900 bg-gray-100 rounded-md mb-4">
                <i data-feather="codesandbox"></i>
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">Development</h4>

            <p className="font-normal text-gray-500 text-md">Breaking Buisness requirement into coding <br/> Used Debugging and Code Optimizatin <br/> Unit Testing and System Testing </p>
        </div>
        
        <div className="bg-gray-50  dark:bg-gray-900 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center  dark:bg-gray-900 bg-gray-100 rounded-md mb-4">
                <i data-feather="coffee"></i>
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">Deployment</h4>

            <p className="font-normal text-gray-500 text-md"> Infrastructure as a Service <br/> Software As a Services   <br/> with AWS,Azure,Docker,etc. </p>
        </div>
    </div>

</div>

</section>

    </div>
  )
}

export default Card