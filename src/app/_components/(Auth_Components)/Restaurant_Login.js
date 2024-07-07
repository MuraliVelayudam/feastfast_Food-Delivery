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

import { restaurantLogin_Input } from "@/lib/inputs_Constants";
import { RiLoginCircleLine } from "react-icons/ri";

const formSchema = z.object({
  email: z.string().min(1, "Email is Required").email("Invalid Email"),
  password: z.string().min(6, "Password must have min 6 characters"),
});

export default function RestaurantLogin() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    console.log(values);
  }
  return (
    <div className="space-y-6  md:w-[60vw] w-[90vw]">
      <h3 className="text-2xl text-orange-500">Restaurant Login</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {restaurantLogin_Input?.map((each_input) => (
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
            Login
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
