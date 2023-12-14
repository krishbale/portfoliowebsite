import React from 'react'

const portfolio = () => {
  return (
    <div>
         <section className="py-10 md:py-16">

<div className="container max-w-screen-xl mx-auto px-4">
<div className="mb-10 lg:mb-0">
            <h1 className="font-medium text-gray-700  dark:text-teal-700 text-3xl md:text-4xl mb-5">Portfolio</h1>

            {/* <p className="font-normal text-gray-500 text-xs md:text-base">I have brought here my  favorite works <br/> as a side hustlers.</p> */}
        </div>
    <div className="flex flex-col lg:flex-row m-4 justify-between">
      

        <div className="space-y-24">
            <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 dark:text-teal-700  text-3xl md:text-4xl">01</h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                    <h1 className="font-normal text-gray-700 dark:text-teal-700 text-3xl md:text-4xl mb-5">Ecommerce Application with Recommendation System</h1>

                    <p className="font-normal text-gray-500 dark:text-teal-700 text-sm md:text-base">A product based online retails shop with authentication and authorization and Cart Features. <br/> It recommends similar products based on user interaction with application .</p>
                </div>
            </div>
            
            <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 dark:text-teal-700 text-3xl md:text-4xl">02</h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                    <h1 className="font-normal text-gray-700 dark:text-teal-700 text-3xl md:text-4xl mb-5">Music Player Application</h1>

                    <p className="font-normal text-gray-500 dark:text-teal-700 text-sm md:text-base">Simple and Elegant Music World Application from songs and tracklist generated using Rapid API. <br/>  Feature to search music tracks, playlists and TrackList.</p>
                </div>
            </div>
            
            <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 dark:text-teal-700 text-3xl md:text-4xl">03</h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                    <h1 className="font-normal text-gray-700 dark:text-teal-700 text-3xl md:text-4xl mb-5">Netflix Clone</h1>

                    <p className="font-normal text-gray-500 dark:text-teal-700 text-sm md:text-base"> Reflective applicatons similar to original developed using MERN stack. <br/> with build-in video player and Authentication/OAuth for Google and Github </p>
                </div>
            </div>
        </div>
    </div>

</div>

</section>
    </div>
  )
}

export default portfolio