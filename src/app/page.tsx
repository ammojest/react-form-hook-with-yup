"use client";
import Confirmation from "@/components/Confirmation";
import StepOne from "@/components/StepOne";
import UserDetails from "@/components/UserDetails";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((step) => step + 1);
  };

  const handlePreviousStep = () => {
    setStep((step) => step - 1);
  };

  const restartForm = () => {
    setStep(1);
  };

  console.log(step);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {step === 1 && <StepOne handleNextStep={handleNextStep} />}
      {step === 2 && (
        <UserDetails
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      )}
      {step === 3 && <Confirmation restartForm={restartForm} />}
    </main>
  );
}
