import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { en, es } from "../lang/translations";

interface Inputs {
  email: string;
  name: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();

  const [errorsForm, setErrorsForm] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const onSubmit: SubmitHandler<Inputs> = async ({ email, name, message }) => {
    const valuesForm = { email, name, message };
    const isError = Object.keys(errorsForm).length;
    if (isError && isError > 0) {
      setErrorsForm(errorsForm);
      return;
    }
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valuesForm),
      });
      if (!res.ok) {
        console.log("all ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [sendOk, setSendOk] = useState(false);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
      setSendOk(true);
    }
  }, [formState, reset]);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  return (
    <div id="contact" className="w-full lg:h-screen relative">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          {t.contact.headerTitle}
        </p>
        <h2 className="py-4">{t.contact.title}</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="contactImage"
                />
              </div>
              <div>
                <h2 className="py-2">Facundo Naranjo</h2>
                <p>{t.contact.subtitle}</p>
                <p className="py-4">{t.contact.subtitle2}</p>
              </div>
              <div>
                <p className="uppercase pt-8">{t.contact.subtitle3}</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4 w-full py-2">
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">
                      {t.contact.name}
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      onClick={() => setSendOk(false)}
                      {...register("name", {
                        required: true,
                        minLength: 4,
                        maxLength: 30,
                      })}
                    />
                    {errors.name && (
                      <span className="pt-1 text-[#5651e5]">
                        {t.contact.errorName}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    onClick={() => setSendOk(false)}
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="pt-1 text-[#5651e5]">
                      {t.contact.errorEmail}
                    </span>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    {t.contact.message}
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 resize-none"
                    rows={10}
                    onClick={() => setSendOk(false)}
                    {...register("message", {
                      required: true,
                      minLength: 10,
                      maxLength: 500,
                    })}
                  ></textarea>
                  {errors.message && (
                    <span className="pt-1 text-[#5651e5]">
                      {t.contact.errorMessage}
                    </span>
                  )}
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 mb-5">
                  {t.contact.button}
                </button>
                {sendOk && (
                  <span className="text-[#16a34a]">{t.contact.success}</span>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="m-auto text-[#5651e5]"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
