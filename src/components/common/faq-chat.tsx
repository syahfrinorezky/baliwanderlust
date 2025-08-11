/** @format */

"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import { HiChatBubbleBottomCenterText, HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { QUESTIONS } from "@/constants/questions";

export const FaqChat = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("form");
  const [user, setUser] = useState({ name: "", email: "" });
  const [messages, setMessages] = useState<{ from: string; text: string }[]>(
    []
  );
  const [showQuickQs, setShowQuickQs] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const startChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.name || !user.email) return;
    setStep("chat");
    setMessages([
      {
        from: "bot",
        text: `Hi ${user.name}! I'm Wander. How can I assist you with your Bali travel plans today?`,
      },
    ]);
  };

  const sendQuestion = (item: { q: string; a: string }) => {
    setMessages((prev) => [...prev, { from: "user", text: item.q }]);
    setShowQuickQs(false);
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: item.a }]);
      setIsTyping(false);
      setShowQuickQs(true);
    }, 3000);
  };

  const availableQs = QUESTIONS.filter(
    (q) => !messages.some((m) => m.text === q.q)
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setOpen(true);
              setStep("form");
              setMessages([]);
              setShowQuickQs(true);
            }}
            className="p-4 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-500 text-white shadow-lg hover:from-yellow-500 hover:to-yellow-600 transition-all">
            <HiChatBubbleBottomCenterText className="text-2xl" />
          </motion.button>
        )}

        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}>
            <Card
              className={clsx(
                step === "form" ? "w-80 h-96" : "w-96 h-[30rem]",
                "flex flex-col shadow-2xl transition-all duration-300 ease-in-out"
              )}>
              <CardHeader className="flex-shrink-0 pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg text-yellow-500">
                      {step === "form" ? "Welcome!" : "Chat with Wander"}
                    </CardTitle>
                    <CardDescription>
                      {step === "form"
                        ? "Let's get started"
                        : "Ask me anything about Bali Wanderlust"}
                    </CardDescription>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-1 hover:bg-accent rounded-full transition-colors">
                    <HiXMark className="w-5 h-5" />
                  </button>
                </div>
              </CardHeader>

              <CardContent className="flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  {step === "form" ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      onSubmit={startChat}
                      className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          value={user.name}
                          onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          placeholder="Enter your email"
                          value={user.email}
                          onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                          }
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-tr from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white transition-all">
                        Start Chatting
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="chat"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="h-full flex flex-col">
                      <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
                        {messages.map((m, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={clsx(
                              "flex",
                              m.from === "user"
                                ? "justify-end"
                                : "justify-start"
                            )}>
                            <div
                              className={clsx(
                                "max-w-[80%] px-3 py-2 rounded-lg text-sm",
                                m.from === "user"
                                  ? "bg-gradient-to-tr from-yellow-400 to-yellow-500 text-white rounded-br-none"
                                  : "bg-secondary text-secondary-foreground rounded-bl-none"
                              )}>
                              {m.text}
                            </div>
                          </motion.div>
                        ))}

                        {isTyping && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-start">
                            <div className="bg-secondary text-secondary-foreground rounded-lg rounded-bl-none px-3 py-2 max-w-[80%]">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"></div>
                                <div
                                  className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                                  style={{ animationDelay: "0.2s" }}></div>
                                <div
                                  className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                                  style={{ animationDelay: "0.4s" }}></div>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {showQuickQs && availableQs.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {availableQs.slice(0, 4).map((item, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                onClick={() => sendQuestion(item)}
                                className="cursor-pointer border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors">
                                {item.q}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
