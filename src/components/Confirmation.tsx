"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import ProgressBar from "./ProgressBar";

export default function Confirmation({
  restartForm,
}: {
  restartForm: () => void;
}) {
  return (
    <form
      onSubmit={restartForm}
      className="w-full max-w-sm bg-white p-5 rounded-lg border-4 border-purple-500 shadow-sm shadow-purple-700"
    >
      <ProgressBar progress={100} />
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="font-bold text-lg">Thank you for completing the form</h2>
        <p>
          This is an example of multi-step form that uses React-Form-Hooks and
          uses Yup as a validator
        </p>
        <button
          type="submit"
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          Restart Form
        </button>
      </div>
    </form>
  );
}
