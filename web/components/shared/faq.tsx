"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-primary-light/50">
      <button
        onClick={onClick}
        className="w-full text-left py-6 flex justify-between items-center"
      >
        <span className="text-lg font-semibold  text-primary">{question}</span>
        <span
          className="text-primary transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v12m6-6H6"
            />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? "200px" : "0px" }}
      >
        <p className="pb-6 pr-4 text-text-light">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t("faq.items.q1"),
      answer: t("faq.items.a1"),
    },
    {
      question: t("faq.items.q2"),
      answer: t("faq.items.a2"),
    },
    {
      question: t("faq.items.q3"),
      answer: t("faq.items.a3"),
    },
    {
      question: t("faq.items.q4"),
      answer: t("faq.items.a4"),
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-background-alt py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl  font-bold text-primary mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-text-light">{t("faq.subtitle")}</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

