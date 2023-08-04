import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import APIInstance from "../../helpers/axios";
// import { USER_DATA, USER_TOKEN } from "../../helpers/helpers";
import toast from "react-hot-toast";

// import Image from "../../assets/images/4417.png";
// import Logo from "../../assets/images/logo.png";
import { FormInput, Input } from "../components/ui/input";
import { Button } from "../components/buttons/Button";
import { Wallet } from "lucide-react";
import { ROUTES } from "../routes/routes";
const Login = () => {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  return (
    <div>
      <div className="relative float-right h-full min-h-screen w-full">
        <main className={`mx-auto min-h-screen`}>
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
              <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                <div className="absolute left-0 hidden h-full min-h-screen bg-container  md:block lg:w-[49vw] ">
                  <div className="mx-auto mt-5 flex h-fit w-fit items-center">
                    <img
                      aria-hidden="true"
                      className="object-contain md:h-96 md:w-auto"
                      src={
                        "https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1691130327~exp=1691130927~hmac=9b50f4888b86695b663568c58a0eb6b3e03a7e2711c8841bb668ec89fb5f208b"
                      }
                      alt="Office"
                    />
                  </div>

                  <h4 className="font-semi-bold mb-2.5 text-center text-2xl font-semibold text-brand-dark dark:text-brand-dark capitalize">
                    Cashnet: Your finance <span className="block">tracker</span>
                  </h4>

                  <p className="mb-9 ml-1 text-center text-base md:px-32 capitalize">
                    Track and manage your accounts, payments, expenses, invoices
                    and reports
                  </p>
                </div>
                <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-20 md:mx-0 md:px-20 md:pr-40 lg:mb-10 lg:items-center lg:justify-end">
                  <Formik
                    enableReinitialize
                    initialValues={{
                      username: "",
                      password: "",
                    }}
                    validationSchema={Yup.object({
                      username: Yup.string()
                        .email("Invalid email address")
                        .required("Email filed is required"),
                      password: Yup.string().required(
                        "Password field is required"
                      ),
                    })}
                    onSubmit={(values) => {
                      navigate(ROUTES.DASHBOARD);
                    }}
                  >
                    <Form className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
                      <div className="py-5 flex items-center space-x-3">
                        <Wallet
                          className="text-secondary"
                          width={24}
                          height={24}
                        />
                        <p className="font-bold text-lg">Cashnet</p>
                      </div>
                      <p className="mb-9 ml-1 text-lg font-semibold text-grey">
                        Login
                      </p>

                      <div className="flex flex-col space-y-3">
                        <FormInput
                          label="Email Address"
                          name="username"
                          type="email"
                          variant="auth"
                        />

                        <FormInput
                          label="Password"
                          name="password"
                          type="password"
                          variant="auth"
                        />

                        <Button
                          className="w-full"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? "Loading..." : "Log In"}
                        </Button>
                        <div className="mb-4 flex items-center justify-between px-2">
                          <Link
                            className="text-sm font-medium text-brand hover:text-brand-dark dark:text-primary"
                            to="/forgot-password"
                          >
                            Forgot your Password?
                          </Link>
                        </div>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
