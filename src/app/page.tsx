"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="flex flex-col w-1/2 p-2 rounded-sm border-2 bg-white border-black">
        <div className="flex justify-between">
          <label htmlFor="first-name">First Name</label>
          <input name="first-name" type="text" placeholder="first name" />
        </div>
        <div className="flex justify-between">
          <label htmlFor="surname">Surname</label>
          <input name="surname" type="text" placeholder="surname" />
        </div>
        <div className="flex justify-between">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white p-2 mt-5 rounded-md">
            submit
          </button>
        </div>
      </form>
    </main>
  );
}
