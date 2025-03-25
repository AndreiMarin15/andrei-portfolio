"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Reveal } from "@/app/framer/animate-on-view";

export function ContactForm() {
  const form = useRef();
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  const sendEmail = (e) => {
    console.log("clicked");
    e.preventDefault();

    try {
      emailjs.sendForm("service_816j5at", "template_475104i", form.current, {
        publicKey: "75B3-vk4q9E9zBau3",
      });

      toast({
        title: "Email Sent",
        description: "I will get back to you as soon as possible.",
        // action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Email Not Sent",
        description: "Please try again.",
      });
    }

    setMessage("");
  };
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1, transition: { duration: 0.5 } }}
      className="w-full max-w-2xl h-full min-h-[50dvh] sm:min-h-[65dvh] my-5 sm:mt-5"
    >
      <Card className="bg-background/20">
        <CardHeader>
          <CardTitle className="text-2xl">
            <Reveal>Contact Me</Reveal>
          </CardTitle>
          <CardDescription>
            <Reveal color={"white"}>
              Enter your email below to to send a message.
            </Reveal>
          </CardDescription>
        </CardHeader>
        <form
          ref={form}
          onSubmit={(e) => {
            sendEmail(e);
          }}
        >
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="from_name">Name</Label>
              <Input
                id="from_name"
                name="from_name"
                type="text"
                placeholder="Your full name"
                required
                className="bg-background/20 text-base [font-size:16px] md:text-sm md:[font-size:14px]"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="from_email">Email</Label>
              <Input
                id="from_email"
                name="from_email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="bg-background/20 text-base [font-size:16px] md:text-sm md:[font-size:14px]"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                name="message"
                placeholder="Please enter your message here. I'll get back to you as soon as possible."
                className="min-h-[20dvh] sm:min-h-[30dvh] bg-background/20 text-base [font-size:16px] md:text-sm md:[font-size:14px]"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </motion.div>
  );
}
