"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/(Auth_Components)/Restaurant_Login";
import RestaurantSignUp from "../_components/(Auth_Components)/Restaurant_SignUp";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Restaurant() {
  const [login, setLogin] = useState(true);

  const onHandleLogin = () => {
    setLogin((prev) => !prev);
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen space-y-8"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-[#E13E09] text-4xl md:text-6xl tracking-widest font-semibold">
        FeastFast {login ? "Login" : "Sign Up"}
      </h1>
      <div>{login ? <RestaurantLogin /> : <RestaurantSignUp />}</div>
      <div>
        <Button
          onClick={onHandleLogin}
          className="bg-transparent text-black hover:bg-transparent hover:underline hover:text-blue-600 transition-all duration-300 delay-50"
        >
          {login
            ? `Don't have an account? SignUp`
            : `Already have an account? Login`}
        </Button>
      </div>
    </motion.div>
  );
}
