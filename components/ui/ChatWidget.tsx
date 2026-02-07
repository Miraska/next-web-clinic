"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Здравствуйте! Чем могу помочь? Можете задать вопрос или оставить заявку.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Show widget after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const botResponses: { [key: string]: string } = {
    привет: "Привет! Чем могу помочь?",
    здравствуйте: "Здравствуйте! Расскажите, что вас интересует?",
    стоимость: "Стоимость проекта зависит от сложности и объема работ. Обычно от 50 000 ₽ для лендингов и от 150 000 ₽ для CRM-систем. Хотите получить точную оценку? Оставьте заявку, и мы свяжемся с вами!",
    цена: "Стоимость проекта зависит от сложности и объема работ. Обычно от 50 000 ₽ для лендингов и от 150 000 ₽ для CRM-систем. Хотите получить точную оценку? Оставьте заявку, и мы свяжемся с вами!",
    сколько: "Стоимость проекта зависит от сложности и объема работ. Обычно от 50 000 ₽ для лендингов и от 150 000 ₽ для CRM-систем. Хотите получить точную оценку? Оставьте заявку, и мы свяжемся с вами!",
    услуги: "Мы предоставляем следующие услуги:\n• Сайты и лендинги\n• Интернет-магазины\n• Веб-приложения\n• CRM/ERP системы\n• Чат-боты\n• API и интеграции\n• SEO-оптимизация\n• Поддержка и развитие\n• Автоматизация бизнеса\n\nПодробнее на странице /services",
    что: "Мы предоставляем следующие услуги:\n• Сайты и лендинги\n• Интернет-магазины\n• Веб-приложения\n• CRM/ERP системы\n• Чат-боты\n• API и интеграции\n• SEO-оптимизация\n• Поддержка и развитие\n• Автоматизация бизнеса\n\nПодробнее на странице /services",
    кейсы: "У нас более 50 успешных проектов! Посмотрите примеры на странице /projects. Там вы найдете кейсы по CRM системам, интернет-магазинам и автоматизации.",
    проекты: "У нас более 50 успешных проектов! Посмотрите примеры на странице /projects. Там вы найдете кейсы по CRM системам, интернет-магазинам и автоматизации.",
    сроки: "Сроки разработки зависят от сложности проекта:\n• Лендинг: 2-4 недели\n• Корпоративный сайт: 4-8 недель\n• CRM система: 8-16 недель\n• Enterprise решение: от 16 недель\n\nТочные сроки обсудим после анализа вашей задачи.",
    время: "Сроки разработки зависят от сложности проекта:\n• Лендинг: 2-4 недели\n• Корпоративный сайт: 4-8 недель\n• CRM система: 8-16 недель\n• Enterprise решение: от 16 недель\n\nТочные сроки обсудим после анализа вашей задачи.",
    контакты: "Связаться с нами можно:\n📧 Email: hello@webclinic.dev\n📱 Телефон: +7 (495) 123-45-67\n💬 Telegram: @webclinic\n\nРаботаем: Пн-Пт, 10:00-19:00 (МСК)",
    связаться: "Связаться с нами можно:\n📧 Email: hello@webclinic.dev\n📱 Телефон: +7 (495) 123-45-67\n💬 Telegram: @webclinic\n\nРаботаем: Пн-Пт, 10:00-19:00 (МСК)",
    заявка: "Отлично! Чтобы оставить заявку, заполните форму на странице /contact или напишите нам на hello@webclinic.dev. Мы свяжемся с вами в течение рабочего дня!",
    оставить: "Отлично! Чтобы оставить заявку, заполните форму на странице /contact или напишите нам на hello@webclinic.dev. Мы свяжемся с вами в течение рабочего дня!",
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase().trim();

    // Check for exact matches
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // Default responses
    if (lowerMessage.length < 3) {
      return "Пожалуйста, уточните ваш вопрос. Чем могу помочь?";
    }

    return "Спасибо за вопрос! Для более детального ответа рекомендую:\n• Оставить заявку на странице /contact\n• Написать нам на hello@webclinic.dev\n• Позвонить по телефону +7 (495) 123-45-67\n\nМы свяжемся с вами в ближайшее время!";
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(text),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleQuickAction = (action: string) => {
    sendMessage(action);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-blue-600 shadow-lg flex items-center justify-center group hover:bg-blue-700 hover:scale-105 transition-all"
        aria-label="Открыть чат"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.svg
              key="chat"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="close"
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -180 }}
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </motion.svg>
          )}
        </AnimatePresence>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40"
            />

            {/* Chat Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-4 bg-blue-600 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">WC</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">WebClinic</h3>
                    <p className="text-white/70 text-xs">Обычно отвечаем в течение 2-4 часов</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-3 ${
                      message.sender === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === "bot"
                          ? "bg-blue-600"
                          : "bg-slate-200"
                      }`}
                    >
                      <span
                        className={`font-bold text-xs ${
                          message.sender === "bot" ? "text-white" : "text-slate-600"
                        }`}
                      >
                        {message.sender === "bot" ? "WC" : "Вы"}
                      </span>
                    </div>
                    <div className={`flex-1 ${message.sender === "user" ? "text-right" : ""}`}>
                      <div
                        className={`rounded-xl p-3 ${
                          message.sender === "bot"
                            ? "bg-white border border-slate-200"
                            : "bg-blue-600 text-white"
                        }`}
                      >
                        <p className={`text-sm whitespace-pre-line ${
                          message.sender === "bot" ? "text-slate-700" : "text-white"
                        }`}>{message.text}</p>
                      </div>
                      <p className="text-slate-400 text-xs mt-1">
                        {message.timestamp.toLocaleTimeString("ru-RU", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">WC</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white rounded-xl p-3 border border-slate-200 w-20">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />

                {/* Quick Actions - only show if no messages from user yet */}
                {messages.length === 1 && (
                  <div className="space-y-2">
                    <p className="text-slate-500 text-xs px-1">Быстрые действия:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Связаться",
                        "Узнать стоимость",
                        "Посмотреть кейсы",
                        "Связаться с нами",
                      ].map((action, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickAction(action)}
                          className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 text-xs hover:border-blue-300 hover:text-blue-600 transition-all text-left"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-slate-200 bg-white">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Напишите сообщение..."
                    className="flex-1 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm"
                    disabled={isTyping}
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </form>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-slate-400 text-xs">
                    Или{" "}
                    <a
                      href="mailto:hello@webclinic.dev"
                      className="text-blue-600 hover:underline"
                    >
                      hello@webclinic.dev
                    </a>
                  </p>
                  <a
                    href="https://t.me/webclinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-600 transition-colors text-xs flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z" />
                    </svg>
                    Telegram
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
