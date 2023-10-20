"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

export default function StepOne() {
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
        <p className="text-white">page 1 of 3</p>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Full Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            {...register("fullName")}
            className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-500"
            id="inline-full-name"
            type="text"
            defaultValue=""
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-password"
          >
            Password
          </label>
        </div>
        <div className="flex flex-col md:w-2/3">
          <input
            {...register("password")}
            className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-500"
            id="inline-password"
            type="password"
          />
          <p className="text-red-500 text-sm font-light">
            {errors.password?.message}
          </p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>
        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input className="mr-2 leading-tight" type="checkbox" />
          <span className="text-sm">Send me your newsletter!</span>
        </label>
      </div>
      <div className="md:flex md:justify-between">
        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Previous Step
        </button>
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
