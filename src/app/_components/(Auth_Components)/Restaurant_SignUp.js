"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { restaurantSignUp_Input } from "@/lib/inputs_Constants";
import { RiLoginCircleLine } from "react-icons/ri";

const formSchema = z.object({
  email: z.string().min(1, "Email is Required").email("Invalid Email"),
  password: z.string().min(6, "Password must have min 6 characters"),
  restaurantName: z
    .string()
    .min(3, "Restaurant Name must have min 3 characters")
    .max(50),
  city: z.string().min(3, "City must have min 3 characters").max(20),
  restaurantAddress: z.string().min(1, "Address is Required"),
  contactNo: z.string().min(6, "Contact number must have min 6 number").max(10),
});

export default function RestaurantSignUp() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      restaurantName: "",
      city: "",
      restaurantAddress: "",
      contactNo: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    console.log(values);
  }
  return (
    <div className="space-y-8  md:w-[60vw] w-[90vw] mx-auto">
      <h3 className="text-2xl text-orange-500">Restaurant SignUp</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          {restaurantSignUp_Input?.map((each_input) => (
            <FormField
              key={each_input?.label}
              control={form.control}
              name={each_input?.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{each_input?.label}</FormLabel>
                  <FormControl>
                    <Input placeholder={each_input?.placeHolder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="submit"
            className="flex items-center gap-3 group rounded-full"
          >
            Sign Up
            <RiLoginCircleLine
              size={20}
              className="group-hover:translate-x-2 transition-all duration-200 delay-75"
            />
          </Button>
        </form>
      </Form>
    </div>
  );
}
