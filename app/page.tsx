"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Form from "../components/Form";
import PasswordField from "../components/PasswordField";
import DarkModeSwitch from "../components/DarkModeSwitch";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const handleGenerate = (length: number, characterTypes: string) => {
    // Generate password here and set it using setPassword
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-${
        darkMode ? "gray-900" : "gray-100"
      }`}
    >
      <Form onGenerate={handleGenerate} />
      <PasswordField password={password} />
      <DarkModeSwitch onToggle={setDarkMode} />
    </div>
  );
}
