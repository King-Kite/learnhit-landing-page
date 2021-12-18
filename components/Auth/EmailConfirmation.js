import React from "react";
import Image from "next/image";
import Button from "../common/Button";
import Input from "../common/Input";

const iconStyle =
  "cursor-pointer duration-500 flex justify-center items-center mx-2 my-3 py-3 rounded-full text-gray-100 transition-all transform hover:scale-105 hover:-translate-y-2 md:py-3";

const EmailConfirmation = ({ error, errors, form, loading, onChange, onSubmit }) => (
  <div className="container mx-auto">
    <section className="bg-white max-w-lg mx-auto py-5">
      <div className="flex items-center justify-center mt-6 w-full">
        <div className={`${iconStyle} flex items-center justify-center rounded-full`}>
          <Image 
            className="bg-gradient-to-r from-gray-300 to-gray-200 rounded-full"
            src="/assets/images/logos/learnhit-logo.png" 
            height={70} 
            width={70} 
            alt="learhit" 
          />
        </div>
      </div>

      <h3 className="font-semibold my-1 text-xl text-center text-primary-500 md:text-2xl">
        Verification Link Sent
      </h3>

      <p className="max-w-sm px-3 mx-auto my-1 text-sm text-center text-gray-400 tracking-wide sm:text-base">
        A verification link was sent to your email address. Click the link to verify your account. 
        Enter your email address below if you did not receive the verification link.
      </p>

      <form className="my-2 px-2 md:px-5" onSubmit={onSubmit}>
        <div className="m-2 mt-6 mb-10">
          <Input
            bordered
            disabled={loading}
            error={errors.email || error?.email || ""}
            icon="envelope"
            label="email"
            name="email"
            onChange={onChange}
            placeholder="Enter your email"
            required={true}
            type="email"
            value={form.email || ""}
          />
        </div>
        <div className="mb-2 mt-8 mx-3">
          <Button
            background="primary"
            className="px-4 py-3 w-full"
            caps
            disabled={loading}
            loader
            loading={loading}
            rounded="lg"
            title={loading ? "Sending..." : "send verification link"}
            type="submit"
          />
        </div>
      </form>
    </section>
  </div>
);

export default EmailConfirmation;
