import React, { FormEvent } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
// import { useAppDispatch } from "@/redux/hooks/hooks";
// import { addTodo, TTodo } from "@/redux/features/todoSlice";

const EditTodoModel = () => {
//   const [task, setTask] = useState("");
//   const [descriptions, setDescriptions] = useState("");
//   const dispatch = useAppDispatch();
  


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const randomString = Math.random().toString(36).substring(2,7);
    // const taskDetails: TTodo = {
    //   id: randomString,
    //   title: task,
    //   description: descriptions
    // }
    // dispatch(addTodo(taskDetails));
    // console.log({ task, description });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-[#5C53FE]">
          <svg
            className="size-5"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            ></path>
          </svg>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>Edit your planed task</DialogDescription>
        </DialogHeader>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Task
              </Label>
              <Input
                // onBlur={(e) => setTask(e.target.value)}
                id="name"
                className="col-span-3"
        
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                // onBlur={(e) => setDescriptions(e.target.value)}
                id="username"
                className="col-span-3"
             
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Edit task</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditTodoModel;
