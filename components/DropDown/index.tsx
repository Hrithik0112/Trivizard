"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useQuiz from "@/store";

type CategoryType = {
  id: number;
  name: string;
};

const Dropdown = () => {
  const [categories, setcategories] = useState<CategoryType[]>([]);

  const config = useQuiz((state: any) => state.config);
  const addCategory = useQuiz((state: any) => state.addCategory);
  const addLevel = useQuiz((state: any) => state.addLevel);
  const addType = useQuiz((state: any) => state.addType);

  useEffect(() => {
    async function fetchCategory() {
      const { trivia_categories } = await (
        await fetch("https://opentdb.com/api_category.php")
      ).json();

      setcategories([...trivia_categories]);
    }
    fetchCategory();
  }, []);
  return (
    <section className="flex justify-evenly items-center py-5">
      <div className="px-7 py-4 border-gray-100 border-2 rounded-xl w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex outline-none justify-between w-full">
            {config.category.name ? config.category.name : "SELECT CATEGORY"} <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              {config.category.name ? config.category.name : "SELECT CATEGORY"}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categories.map((category) => (
              <DropdownMenuItem
                key={category.name}
                onClick={() => addCategory(category.id, category.name)}
              >
                {category.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-7 py-4 border-gray-100 border-2 rounded-xl w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex outline-none justify-between w-full">
            {config.level ? config.level : "SELECT LEVEL"} <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{config.level ? config.level : "SELECT LEVEL"}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {["easy", "medium", "hard"].map((e) => (
              <DropdownMenuItem key={e} onClick={() => addLevel(e)}>
                {e}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-7 py-4 border-gray-100 border-2 rounded-xl w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex outline-none justify-between w-full">
            {config.type ? config.type : "SELECT TYPE"} <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{config.type ? config.type : "SELECT TYPE"}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {["boolean", "multiple"].map((e) => (
              <DropdownMenuItem key={e} onClick={() => addType(e)}>
                {e}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};

export default Dropdown;
