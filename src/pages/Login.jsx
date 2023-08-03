import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import APIInstance from "../../helpers/axios";
// import { USER_DATA, USER_TOKEN } from "../../helpers/helpers";
import toast from "react-hot-toast";

// import Image from "../../assets/images/4417.png";
// import Logo from "../../assets/images/logo.png";
import { Input } from "../components/ui/input";
import { Button } from "../components/buttons/Button";
const Login = () => {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const login = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("The email field is required"),
      password: Yup.string().required("The password field is required"),
    }),
    onSubmit: (values) => {
      setLoading(true);
    },
  });
  return (
    <div>
      <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-grey">
        <main className={`mx-auto min-h-screen`}>
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
              <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                <div className="absolute left-0 hidden h-full min-h-screen bg-primary dark:bg-primary md:block lg:w-[49vw] lg:rounded-br-[120px] xl:rounded-br-[200px] 2xl:w-[44vw]">
                  <div className="mt-0 w-max lg:pt-10">
                    <div className="mx-auto mt-1 flex h-fit w-fit items-center">
                      <img
                        alt="Learnsave logo"
                        src={""}
                        className="md:h-12 md:w-auto"
                      />
                    </div>
                  </div>
                  <h4 className="font-semi-bold mb-2.5 text-center text-3xl text-brand-dark dark:text-brand-dark">
                    LearnSave Africa
                  </h4>
                  <p className="mb-9 ml-1 text-center text-base text-white">
                    Secure and reliable school fees payment system.
                  </p>
                  <div className="mx-auto mt-5 flex h-fit w-fit items-center">
                    <img
                      aria-hidden="true"
                      className="object-contain md:h-80 md:w-auto"
                      src={""}
                      alt="Office"
                    />
                  </div>
                </div>
                <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-20 md:mx-0 md:px-20 md:pr-40 lg:mb-10 lg:items-center lg:justify-end">
                  <Formik
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
                      // setLoading(true);
                      // APIInstance.post("auth-school-user/login", values)
                      //   .then((res) => {
                      //     if (res.status === 200) {
                      //       localStorage.setItem(
                      //         USER_TOKEN,
                      //         res.data.data.token.access_token
                      //       );
                      //       localStorage.setItem(
                      //         USER_DATA,
                      //         JSON.stringify(res.data)
                      //       );
                      //       navigate(ROUTES.DASHBOARD);
                      //       // Router.push("/dashboard");
                      //     } else {
                      //       toast.error(res.data.message);
                      //     }
                      //   })
                      //   .catch((err) => {
                      //     console.log(err.data);
                      //     toast.error(err?.data?.data);
                      //   })
                      //   .finally(() => {
                      //     setLoading(false);
                      //   });
                    }}
                  >
                    <Form className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
                      <h4 className="font-semi-bold mb-2.5 text-3xl text-brand-dark dark:text-brand-dark">
                        Get Started Now
                      </h4>
                      <p className="mb-9 ml-1 text-base text-grey">
                        Enter your credentials to access your account!
                      </p>

                      <Input
                        label="Email"
                        name="username"
                        type="email"
                        variant="auth"
                        className="mt-2 mb-3 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none focus:border-primary dark:focus:border-primary"
                      />
                      <Input
                        label="Password"
                        name="password"
                        type="password"
                        variant="auth"
                        className="mt-2 mb-3 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none focus:border-primary dark:focus:border-primary"
                      />

                      <div className="mb-4 flex items-center justify-between px-2">
                        <div className="flex items-center">
                          {/* <Checkbox /> */}
                          <p className="ml-2 text-sm font-medium text-brand-dark dark:text-brand-dark">
                            Keep me logged In
                          </p>
                        </div>
                        <Link
                          className="text-sm font-medium text-brand hover:text-brand-dark dark:text-primary"
                          to="/forgot-password"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                      <Button
                        className="linear bg-band-dark mt-2 w-full rounded-xl py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-dark active:bg-brand-dark dark:bg-brand-dark dark:text-white dark:hover:bg-brand dark:active:bg-brand-dark"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Loading..." : "Log In"}
                      </Button>
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
