import React from "react";
import Text from "./Text";

type InputTextProps = {
  label: string;
  type?: "text" | "password";
  value: string;
  onChange: (value: string) => void;
};

function InputText({ label, type = "text", value, onChange }: InputTextProps) {
  return (
    <div className="flex flex-col">
      <Text className="text-sm">{label}</Text>
      <input
        className="font-noto-sans-thai border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition duration-300 ease-in-out"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
}

export default InputText;
