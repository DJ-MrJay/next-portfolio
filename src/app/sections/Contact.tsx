"use client";

import { useState } from "react";

export default function ContactSection() {
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const name = form.fullname.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    let hasError = false;

    const newErrors = { name: "", email: "", message: "" };

    if (!name) {
      newErrors.name = "Name is required.";
      hasError = true;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "A valid email is required.";
      hasError = true;
    }
    if (!message) {
      newErrors.message = "Message is required.";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) {
      e.preventDefault();
    }
  };

  const capitalizeEachWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    const words = e.target.value
      .split(" ")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
    e.target.value = words.join(" ");
  };

  return (
    <section id="contacts" className="py-20">
      <div className="max-w-[90%] mx-auto">
        <div className="text-center mb-12 scroll-in">
          <h2 className="text-4xl font-bold mb-4">Contacts</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            If you have an application you are interested in developing, a brand
            that you need designed, or a project that needs coding, I’d love to
            help with it. Leave a message below and I will promptly get in
            touch.
          </p>
        </div>

        <div className="form-container px-4 md:px-12 lg:px-24">
          <form
            action="https://formspree.io/f/xrgjwepv"
            method="POST"
            name="form"
            onSubmit={validateForm}
            className="flex flex-col gap-8 text-center"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                id="fname"
                name="fullname"
                maxLength={30}
                placeholder="Your name?"
                onInput={capitalizeEachWord}
                className="flex-1 border border-gray-300 bg-transparent p-4 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none focus:border-black"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address?"
                className="flex-1 border border-gray-300 bg-transparent p-4 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none focus:border-black"
              />
            </div>

            <textarea
              id="msg"
              name="message"
              maxLength={500}
              placeholder="Write your message here"
              className="border border-gray-300 bg-transparent p-4 h-[250px] rounded-md text-gray-700 dark:text-gray-300 focus:outline-none focus:border-black"
            ></textarea>

            <input
              type="submit"
              value="Send Message"
              className="link-btn border border-gray-300 px-6 py-3 text-base text-gray-700 dark:text-gray-300 rounded-md w-fit mx-auto hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            />
          </form>

          <div className="error text-red-600 mt-4 text-sm text-center">
            {errors.name && <div id="nameError">{errors.name}</div>}
            {errors.email && <div id="emailError">{errors.email}</div>}
            {errors.message && <div id="messageError">{errors.message}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
