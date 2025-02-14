"use client";

import { useState } from "react";

type Username = {
  name: string;
};

export default function Login() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<Username>({ name: "" });

  return (
    <div className="h-screen flex flex-col w-full items-center justify-center">
      <span className="font-bold">{user.name}</span>
      <form className="flex flex-col items-center gap-[1rem] mt-[1rem]">
        <input
          className="border border-gray-700 px-2 py-1 rounded-md focus:outline-none"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border border-gray-700 px-2 py-1 rounded-md focus:outline-none"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-amber-500 w-[100%] py-2 rounded-md text-gray-50 font-bold hover:cursor-pointer hover:bg-amber-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!username || !password}
        >
          {loading ? "please wait" : "Login"}
        </button>
        <span
          data-testid="error"
          className="text-red-600 font-bold"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Something went wrong!
        </span>
      </form>
    </div>
  );
}
