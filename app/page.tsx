"use client";

import Button from "@/components/Button";
import Dropdown from "@/components/DropDown";
import InputElement from "@/components/InputElement";
import useQuiz from "@/store";

export default function Home() {
  const quizConfig = useQuiz((state: any) => state.config);
  console.log(quizConfig, "here");
  return (
    <main className="flex flex-col justify-center items-center my-10">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Welcome To Trivizard Quiz.
      </h1>
      <section className="p-10 my-10 rounded-lg shadow-xl w-[65%]">
        <InputElement />

        <Dropdown />
        <div className="flex justify-center items-center">
          <Button />
        </div>
      </section>
    </main>
  );
}
