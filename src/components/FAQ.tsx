"use client";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
  return (
    <section
      id="faq"
      className="py-10 lg:py-20 bg-[#F3F4F6]" // Background: Neutral light grey
    >
      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto px-4">
        <div>
          <p className="hidden lg:block text-[#4B5563]">FAQ&apos;S</p>
          <SectionTitle>
            <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left text-[#111827]">
              Frequently Asked Questions
            </h2>
          </SectionTitle>
          <p className="lg:mt-10 text-[#4B5563] text-center lg:text-left">
            Ask us anything!
          </p>
        </div>

        <div className="w-full lg:max-w-2xl mx-auto border-b border-[#E5E7EB]">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-7">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton
                      className={`flex items-center justify-between w-full px-4 pt-7 text-left border-t transition-all duration-300 ease-in-out ${
                        open
                          ? "border-[#2563EB] text-[#2563EB]"
                          : "border-[#E5E7EB] text-[#111827]"
                      }`}
                    >
                      <span
                        className={`text-2xl font-semibold transition-colors duration-300 ${
                          open ? "text-[#2563EB]" : "text-[#111827]"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`transform transition-all duration-300 ease-in-out ${
                          open ? "rotate-180 text-[#2563EB]" : "rotate-0 text-[#2563EB]/70"
                        }`}
                      >
                        {open ? (
                          <BiMinus className="w-5 h-5 opacity-100 transition-opacity duration-300" />
                        ) : (
                          <BiPlus className="w-5 h-5 opacity-80 transition-opacity duration-300" />
                        )}
                      </span>
                    </DisclosureButton>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <DisclosurePanel
                            static
                            className="px-4 pt-4 pb-2 text-[#4B5563]"
                          >
                            {faq.answer}
                          </DisclosurePanel>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
