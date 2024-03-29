"use client";

import { cn } from "@/lib/utils";
import useQuiz from "@/store";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Player } from "@lottiefiles/react-lottie-player";

type questionT = {
  answers: string[];
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  difficulty: string;
  type: string;
};

function Quiz() {
  const [questions, setQuestions] = useState<any>([]);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const changeStatus = useQuiz((state: any) => state.changeStatus);
  const config = useQuiz((state: any) => state.config);
  const addLevel = useQuiz((state: any) => state.addLevel);
  const addCategory = useQuiz((state: any) => state.addCategory);
  const addType = useQuiz((state: any) => state.addType);
  const addNumberOfQuestion = useQuiz((state: any) => state.addNumberOfQuestion);
  const setScore = useQuiz((state: any) => state.setScore);

  useEffect(() => {
    async function getQuestions() {
      setLoading(true);
      const { results } = await (
        await fetch(
          `https://opentdb.com/api.php?amount=${config.numberOfQuestion}&category=${config.category.id}&difficulty=${config.level}&type=${config.type}`
        )
      ).json();
      // console.log(results);
      let shuffledResults = results.map((e: questionT) => {
        let value = [...e.incorrect_answers, e.correct_answer]
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);
        e.answers = [...value];
        return e;
      });
      console.log(shuffledResults, "shuffeled");
      setQuestions([...shuffledResults]);
      setLoading(false);
    }
    getQuestions();
  }, [config.category.id, config.level, config.numberOfQuestion, config.type]);

  const answerCheck = (ans: string) => {
    if (ans === questions[0].correct_answer) {
      setScore();
    }
    setAnswer(questions[0].correct_answer);
  };

  const handleNext = () => {
    let remainingQuestions = [...questions];
    remainingQuestions.shift();
    setQuestions([...remainingQuestions]);
    setAnswer("");
  };
  return (
    <section className="flex flex-col justify-center items-center mt-10">
      {questions?.length ? (
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Question No{" "}
          <span className="text-blue-600 dark:text-blue-500">
            #{config.numberOfQuestion - questions.length + 1}
          </span>
          .
        </h1>
      ) : null}

      {!loading && !!questions?.length && <p className="text-2xl">Score :{config.score}</p>}

      <section className="flex flex-col justify-center items-center shadow-2xl my-10 p-10 rounded-lg shadow-blue-200">
        <h4 className="mb-4 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {questions?.length ? questions[0].question : null}
        </h4>
        {loading && (
          <div className="flex flex-col">
            <Skeleton className="w-[600px] h-[60px] my-10 rounded-sm" />

            <Skeleton className="w-[600px] h-[500px] rounded-sm" />
          </div>
        )}

        {!questions?.length && !loading && (
          <div className="flex flex-col justify-center items-center">
            <Player
              src="https://assets6.lottiefiles.com/packages/lf20_touohxv0.json"
              className="player"
              loop
              autoplay
              style={{ height: "400px", width: "400px" }}
            />
            <h1 className="mt-10 text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              YOUR SCORE :{" "}
              <span className="font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {config.score}
              </span>
            </h1>
            <button
              onClick={() => {
                window.location.reload();
              }}
              className="bg-white hover:bg-gray-100 my-10 text-gray-800 font-semibold py-2 px-10 border border-gray-400 rounded shadow"
            >
              Start Over
            </button>
          </div>
        )}
        <div className="flex flex-wrap justify-evenly items-center my-10 w-[90%]">
          {questions?.length
            ? questions[0]?.answers.map((ans: any) => (
                <button
                  key={ans}
                  onClick={() => answerCheck(ans)}
                  type="button"
                  className={cn(
                    "w-[40%] my-4 bg-white hover:bg-blue-600 hover:text-gray-100  text-gray-800 font-semibold py-4 px-4 shadow-blue-200   rounded-lg shadow-2xl",
                    {
                      "bg-blue-600": !!answer && ans === answer,
                      "bg-red-600": !!answer && ans !== answer,
                      "hover:bg-blue-600": !!answer && ans === answer,
                      "hover:bg-red-600": !!answer && ans !== answer,
                      "text-gray-200": !!answer,
                    }
                  )}
                >
                  {ans}
                </button>
              ))
            : null}
        </div>
        {questions?.length ? (
          <button
            onClick={handleNext}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-10 border border-gray-400 rounded shadow"
          >
            Next
          </button>
        ) : null}
      </section>
    </section>
  );
}

export default Quiz;
