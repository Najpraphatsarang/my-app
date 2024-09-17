import React from "react";
import InputText from "@/components/InputText";
import Text from "@/components/Text";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Text>นาจ</Text>
      <Text>นาจ</Text>
      <Text>นาจ</Text>
      <Text>นาจ</Text>
      <Text>นาจ</Text>
      <InputText label="Email" />
      <InputText label="Password" type="password" />
      <button>Login</button>
    </div>
  );
}

export default Login;
