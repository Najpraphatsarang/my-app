"use client";

import React, { useState } from "react";
import InputText from "@/components/InputText";
import Text from "@/components/Text";
import { login } from "@/app/apis/office";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await login(username, password);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-2">
      <Text className="text-3xl">นาจ</Text>
      <InputText
        label="Username"
        value={username}
        onChange={setUsername} // Directly passing the state setter
      />
      <InputText
        label="Password"
        type="password"
        value={password}
        onChange={setPassword} // Directly passing the state setter
      />
      <button
        className="border rounded-md px-3 py-1"
        type="button"
        onClick={handleLogin}
      >
        <Text className="text-2xl">Login</Text>
      </button>
    </div>
  );
}

export default Login;
