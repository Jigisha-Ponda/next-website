"use client";
import React, { useState } from "react";
import Image from "next/image";
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      projectType: e.target.projectType.value,
      budget: e.target.budget.value,
      description: e.target.description.value,
      date: e.target.date.value,
      time: e.target.time.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      e.target.reset();
      Swal.fire({
        icon: 'success',
        title: 'Request Submitted!',
        text: 'Thank you! We will contact you shortly.',
        confirmButtonColor: '#3085d6',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'Something went wrong. Please try again later.',
        confirmButtonColor: '#d33',
      });
    }

  };

  return (
    <section className="dark:bg-darkmode pt-24 pb-24">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <h2 className="max-w-100 text-40 font-bold mb-9">
          Let’s Discuss Your Digital Goals
        </h2>
        <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
          <div className="col-span-6">
            <form onSubmit={handleSubmit} className="flex flex-wrap w-full m-auto justify-between">
              <div className="sm:flex gap-3 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="firstName" className="pb-3 inline-block text-17">First Name*</label>
                  <input
                    name="firstName"
                    required
                    type="text"
                    className="w-full text-17 px-4 rounded-lg py-2.5 border-border dark:border-dark_border border-solid dark:text-white dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                </div>
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="lastName" className="pb-3 inline-block text-17">Last Name*</label>
                  <input
                    name="lastName"
                    required
                    type="text"
                    className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                </div>
              </div>

              <div className="sm:flex gap-3 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="email" className="pb-3 inline-block text-17">Email Address*</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                </div>
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="projectType" className="pb-3 inline-block text-17">Project Type*</label>
                  <select
                    name="projectType"
                    required
                    className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:text-white border-solid dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:outline-0"
                  >
                    <option value="">Choose a project type</option>
                    <option value="Website">Website Development</option>
                    {/* <option value="E-commerce">E-commerce</option> */}
                    <option value="Odoo E-commerce">Odoo E-commerce</option>
                    <option value="Odoo POS">Odoo POS</option>
                    <option value="Graphic">Graphic Design</option>
                  </select>
                </div>
              </div>

              <div className="sm:flex gap-3 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="budget" className="pb-3 inline-block text-17">Estimated Budget*</label>
                  <input
                    name="budget"
                    type="text"
                    required
                    className="w-full text-17 px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:text-white dark:bg-transparent transition-all duration-500 focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div className="w-full my-2.5">
                <label htmlFor="description" className="pb-3 inline-block text-17">Project Description*</label>
                <textarea
                  name="description"
                  required
                  rows={4}
                  className="w-full text-17 px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:text-white dark:bg-transparent transition-all duration-500 focus:border-primary focus:outline-none"
                ></textarea>
              </div>

              <div className="sm:flex gap-3 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="date" className="pb-3 inline-block text-17">Date*</label>
                  <input
                    name="date"
                    type="date"
                    required
                    className="w-full text-17 px-4 rounded-lg py-2.5 outline-hidden dark:text-white dark:bg-transparent border-border border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:outline-0"
                  />
                </div>
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="time" className="pb-3 inline-block text-17">Time*</label>
                  <input
                    name="time"
                    type="time"
                    required
                    className="w-full text-17 px-4 rounded-lg py-2.5 border-border outline-hidden dark:text-white dark:bg-transparent border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:outline-0"
                  />
                </div>
              </div>

              <div className="mx-0 my-2.5 w-full">
                <button
                  type="submit"
                  className="bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700"
                >
                  Submit Request
                </button>
              </div>
            </form>

          </div>
          <div className="col-span-6 flex items-center justify-center">
            <Image
              src="/images/image/contact-us.png"
              alt="goals"
              width={1300}
              height={0}
              quality={100}
              style={{ width: "100%", height: "auto" }}
              className="bg-no-repeat bg-contain max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-darkmode p-6 rounded-lg shadow-xl text-center">
            <h3 className="text-xl font-semibold mb-3">✅ Request Submitted</h3>
            <p className="mb-4">Thank you! We’ll get back to you shortly.</p>
            <button
              className="px-6 py-2 bg-primary text-white rounded hover:bg-blue-700"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default ContactForm;
