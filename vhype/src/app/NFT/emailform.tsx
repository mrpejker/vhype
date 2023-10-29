"use client";
import { useState } from "react";

function EmailComponent() {
  const [email, setEmail] = useState(""); // to capture the email input

  const handleEmailSend = () => {
    fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="mt-20 flex flex-col items-center">
      <p className="mt-4 text-gray-600">
        or leave it for later and we'll send you instructions
      </p>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-md border bg-pink-100 p-2 placeholder-gray-700"
      />
      <button
        onClick={handleEmailSend}
        className="mt-4 rounded bg-blue-500 p-2 text-white"
      >
        Send Email
      </button>
    </div>
  );
}

export default EmailComponent;
