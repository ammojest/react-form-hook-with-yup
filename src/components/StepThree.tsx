"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

export default function StepThree() {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    password: yup.string().required("the password is a required field"),
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: Inputs) => {
    console.log(data);
    console.log("you may pass!!!");
    reset();
  };

  type Inputs = {
    fullName: string;
    password: string;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm bg-white p-5 rounded-lg border-4 border-purple-500 shadow-sm shadow-purple-700"
    >
      <div className="md:flex md:items-center p-1 mb-6 bg-purple-500 rounded-sm justify-center">
        <p className="text-white">page 3 of 3</p>
      </div>
    </form>
  );
}
