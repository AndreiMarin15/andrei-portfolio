"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SocialIcon } from "react-social-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { GradientBackground } from "@/components/GradientBackground";
import { personalInfo } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ContactPage() {
  const formRef = useRef(null);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_816j5at",
        "template_475104i",
        formRef.current,
        { publicKey: "75B3-vk4q9E9zBau3" }
      );

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setMessage("");
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Try emailing me directly instead.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="relative isolate min-h-screen flex items-center justify-center px-6 pt-28 pb-20 lg:px-8">
      <GradientBackground />

      <div className="w-full max-w-xl">
        {/* Header */}
        <motion.div
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Let&apos;s Work Together
          </h1>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Have a project, idea, or opportunity? Drop me a message and I&apos;ll
            get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-xl p-7 sm:p-8 shadow-sm">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="from_name" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Name
                  </Label>
                  <Input
                    id="from_name"
                    name="from_name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="bg-background/60 border-border/60 focus:border-teal-500/50 focus:ring-teal-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="from_email" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="from_email"
                    name="from_email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="bg-background/60 border-border/60 focus:border-teal-500/50 focus:ring-teal-500/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or idea..."
                  required
                  className="min-h-[140px] bg-background/60 border-border/60 focus:border-teal-500/50 focus:ring-teal-500/20 resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <Button
                type="submit"
                disabled={isSending}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/30 transition-all disabled:opacity-50"
              >
                {isSending ? (
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </span>
                )}
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Alternative contact */}
        <motion.div
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground mb-3">
            Or find me on
          </p>
          <div className="flex items-center justify-center gap-2">
            {personalInfo.socials.map((social) => (
              <SocialIcon
                key={social.label}
                url={social.url}
                aria-label={social.label}
                target="_blank"
                style={{ height: 32, width: 32 }}
                bgColor="transparent"
                fgColor="currentColor"
                className="text-muted-foreground hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
