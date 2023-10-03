import Button from "@/components/Button";
import Dropdown from "@/components/DropDown";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center my-10">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Welcome To Trivizard Quiz.
      </h1>
      <section className="p-10 my-10 rounded-lg shadow-xl w-[65%]">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Number of Question :
          </label>
          <input
            type="number"
            defaultValue={10}
            id="first_name"
            min={10}
            max={30}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>

        <Dropdown />
        <div className="flex justify-center items-center">
          <Button />
        </div>
      </section>
    </main>
  );
}
