import React, { FormEvent, useState } from "react";
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
import { useAppDispatch } from "@/redux/hooks/hooks";
import { addTodo, TTodo } from "@/redux/features/todoSlice";

const AddTodoModel = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();
  


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const randomString = Math.random().toString(36).substring(2,7);
    const taskDetails: TTodo = {
      id: randomString,
      title: task,
      description: description
    }
    dispatch(addTodo(taskDetails));
    // console.log({ task, description });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">
          Add to Do
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>Add task you want to finish.</DialogDescription>
        </DialogHeader>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="username"
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Add task</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModel;
