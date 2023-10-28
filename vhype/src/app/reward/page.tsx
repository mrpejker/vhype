"use client";
import Image from "next/image";
import { useState } from "react";

// On the client side, we can use the fetch API to send a request to our API route.

function EmailComponent() {
  const [email, setEmail] = useState(""); // to capture the email input

  const handleEmailSend = async () => {
    try {
      const result = await fetch("/api/send");
      console.log("Email sent successfully!");
    } catch (err) {
      console.error("Failed to send email:", err);
    }
  };

  return (
    <div className="flex flex-col items-center pt-10">
      <p className="p-4 text-gray-600">
        Or leave it for later and we'll send you instructions over email
      </p>
      <div className="flex flex-row justify-between">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-10 rounded-md border bg-pink-100 p-2 pr-10 placeholder-gray-700"
        />
        <button
          onClick={handleEmailSend}
          className="h-10 rounded bg-blue-500 p-2 text-white"
        >
          Get Instructions
        </button>
      </div>
    </div>
  );
}

function RewardInfo() {
  // obtain random number between 0 and 2 (lottery)
  const random = Math.floor(Math.random() * 3);
  console.log(random);

  return (
    <div className="relative h-[440px] w-[440px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 translate-y-[15%] scale-110 transform">
        <Image
          src="/back2.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
      </div>
      {/* GIF */}
      <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center">
        {random === 0 && (
          <Image src="/gif.gif" alt="GIF" width={400} height={400} />
        )}
        {random === 1 && (
          <Image src="/gif2.gif" alt="GIF" width={400} height={400} />
        )}
        {random === 2 && (
          <Image src="/gif3.gif" alt="GIF" width={400} height={400} />
        )}
      </div>
    </div>
  );
}

const Page = () => {
  const [address, setAddress] = useState(""); // to capture the address input

  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Header */}
      <h1 className=" p-2 text-2xl font-bold">
        Amazing! You're so lucky today!
      </h1>

      {/* Image and GIF */}
      <RewardInfo />
      <div className="z-10 flex items-center justify-center">
        <input
          type="text"
          placeholder="Enter your ETH address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="rounded-md border bg-pink-100 p-2 placeholder-gray-700"
        ></input>
        <button
          className="ml-4 rounded bg-blue-500 p-2 text-white"
          onClick={async () => {
            const result = await fetch("brands.vself.app"); // send a request to our API route);
            console.log(result);
          }}
        >
          Claim Prize
        </button>
      </div>
      {/* Email Input */}
      <EmailComponent />
    </div>
  );
};

export default Page;
