"use client";
import StepOne from "@/components/StepOne";
import StepThree from "@/components/StepThree";
import StepTwo from "@/components/StepTwo";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [step, useStep] = useState(2);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
    </main>
  );
}
