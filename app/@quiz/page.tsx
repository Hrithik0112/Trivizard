import React from "react";

function Quiz() {
  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Question no #1
      </h1>
      <p className="text-2xl">Score :0</p>
      <section className="flex flex-col justify-center items-center shadow-2xl my-10 p-10 rounded-lg shadow-blue-200">
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          What is the Question of the universe is asking?
        </h1>
        <div className="flex flex-wrap justify-evenly items-center my-10 w-[90%]">
          <button
            type="button"
            className="w-[33%] my-4 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-blue-600 hover:text-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
          <button
            type="button"
            className="w-[33%] my-4 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-blue-600 hover:text-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
          <button
            type="button"
            className="w-[33%] my-4 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-blue-600 hover:text-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
          <button
            type="button"
            className="w-[33%] my-4 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-blue-600 hover:text-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
        </div>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-10 border border-gray-400 rounded shadow">
          Next
        </button>
      </section>
    </section>
  );
}

export default Quiz;
