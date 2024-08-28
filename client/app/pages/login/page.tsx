"use client";
import { CustomTextField } from "@/app/styles/common";
import { LoginValidationSchema } from "@/app/validation/LoginValidationSchema";
import { Formik, Field, Form } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import logoDark from "@/public/assets/logo-dark.svg";
import logoLight from "@/public/assets/logo-light.svg";
import Link from "next/link";
import { tryLogin, isDisable } from "./utils/common";

const Login = () => {
  const [initialValues] = useState({
    email: "",
    password: "",
  });
  return (
    <main className="w-full h-screen bg-white dark:bg-[#3E3F4E]">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={LoginValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          tryLogin(values, resetForm);
        }}
      >
        {({ errors, isSubmitting, touched }) => (
          <Form
            autoComplete="off"
            className="w-full h-screen flex p-5 justify-start gap-5 flex-col md:flex md:items-center md:justify-center "
          >
            <Image src={logoDark} alt="sum" className="block dark:hidden" />
            <Image src={logoLight} alt="sum" className="hidden dark:block" />
            <div className="mt-16 flex flex-col gap-3 md:mt-10 md:gap-7 md:w-[70%] lg:w-[30%]">
              <div className="flex flex-col gap-2">
                <h1 className="bold text-[#333333] font-bold text-[24px] md:text-[32px]">
                  Login
                </h1>
                <p className="regular text-[#737373] font-[400] text-[16px]">
                  Add your details below to get back into the app
                </p>
              </div>
              <div>
                <Field
                  size="small"
                  className=""
                  name={"email"}
                  label="Email"
                  as={CustomTextField}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.email && errors.email && errors.email}
                  helperText={touched.email && errors.email && errors.email}
                />
                <Field
                  size="small"
                  className=""
                  name={"password"}
                  label="Password"
                  as={CustomTextField}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.password && errors.password && errors.password}
                  helperText={
                    touched.password && errors.password && errors.password
                  }
                />
              </div>
              <button
                disabled={isDisable(isSubmitting, touched, errors)}
                type="submit"
                className="w-full md:w-auto md:py-3 md:px-7 bg-[#635FC7] text-[#FFFFFF] font-semibold p-2 text-[16px] rounded-[8px] active:bg-[#A8A4FF] disabled:bg-[#A8A4FF]"
              >
                Login
              </button>
              <div className="w-full flex flex-col items-center justify-center md:flex-row gap-2">
                <p className="regular flex items-center justify-center text-[#737373] font-[400] text-[16px]">
                  Don’t have an account?
                </p>
                <Link
                  className="regular flex items-center justify-center text-[#633CFF] font-[400] text-[16px]"
                  href={"signin"}
                >
                  Create account
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default Login;
