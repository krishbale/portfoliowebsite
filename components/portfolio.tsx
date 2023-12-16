import React from "react";

const portfolio = () => {
  return (
    <div>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="mb-10 lg:mb-0">
            <h1 className="font-medium text-gray-700  dark:text-white text-3xl md:text-4xl mb-5">
              Portfolio
            </h1>

            {/* <p className="font-normal text-gray-500 text-xs md:text-base">I have brought here my  favorite works <br/> as a side hustlers.</p> */}
          </div>
          <div className="flex flex-col lg:flex-row m-4 justify-between">
            <div className="space-y-24">
              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 dark:text-white  text-3xl md:text-4xl">
                  01
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 dark:text-teal-500 text-3xl md:text-4xl mb-5">
                    E-com Apps/Recom. System
                  </h1>

                  <p className="font-normal text-gray-500 dark:text-white text-sm md:text-base">
                    An online retails shop. 
                   <br /> It recommends
                    similar products.
                    .
                  </p>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 dark:text-white text-3xl md:text-4xl">
                  02
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 dark:text-teal-400 text-3xl md:text-4xl mb-5">
                    Music Player{" "}
                  </h1>

                  <p className="font-normal text-gray-500 dark:text-white text-sm md:text-base">
                   An Elegant Music Player.  
                    <br />  Play,Pause,Search.
                  </p>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 dark:text-white text-3xl md:text-4xl">
                  03
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 dark:text-teal-500 text-3xl md:text-4xl mb-5">
                    Netflix Clone
                  </h1>

                  <p className="font-normal text-gray-500 dark:text-white text-sm md:text-base">
                    {" "}
                    Reflective to original with Authoriza
                    <br /> Built-in video player 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default portfolio;
