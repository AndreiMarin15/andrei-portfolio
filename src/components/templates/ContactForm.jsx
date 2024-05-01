"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { useToast } from "@/components/ui/use-toast";

export function ContactForm() {
	const form = useRef();
	const [message, setMessage] = useState("");
	const { toast } = useToast();
	const sendEmail = (e) => {
		console.log("clicked");
		e.preventDefault();

		emailjs.sendForm("service_816j5at", "template_475104i", form.current, {
			publicKey: "75B3-vk4q9E9zBau3",
		});

		setMessage("");
	};
	return (
		<Card className="w-full max-w-2xl h-full min-h-[42rem] my-5 sm:mt-5">
			<CardHeader>
				<CardTitle className="text-2xl">Contact Me</CardTitle>
				<CardDescription>Enter your email below to to send a message.</CardDescription>
			</CardHeader>
			<form
				ref={form}
				onSubmit={(e) => {
					sendEmail(e);
					toast({
						title: "Email Sent",
						description: "I will get back to you as soon as possible.",
						// action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
					});
				}}
			>
				<CardContent className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="from_name">Name</Label>
						<Input id="from_name" name="from_name" type="text" placeholder="John Doe" required />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="from_email">Email</Label>
						<Input id="from_email" name="from_email" type="email" placeholder="m@example.com" required />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="message">Message</Label>
						<Textarea
							name="message"
							placeholder="Type your message here."
							className="min-h-[20rem]"
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
	);
}
