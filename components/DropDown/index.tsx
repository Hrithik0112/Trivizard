import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Dropdown = () => {
  return (
    <section className="flex justify-evenly items-center py-5">
      <div className="px-7 py-4 border-gray-100 border-2 rounded-xl w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex outline-none justify-between w-full">
            SELECT CATEGORY
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>SELECT CATEGORY</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-7 py-4 border-gray-100 border-2 rounded-xl w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex outline-none justify-between w-full">
            SELECT LEVEL
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>SELECT LEVEL</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-7 py-4 border-gray-100 border-2 rounded-xl w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex outline-none justify-between w-full">
            SELECT TYPE
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>SELECT TYPE</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};

export default Dropdown;
