import React from "react";
import Image from "next/image";
import Button from "../common/Button";
import Input from "../common/Input";

const iconStyle =
  "cursor-pointer duration-500 flex justify-center items-center mx-2 my-3 py-3 rounded-full text-gray-100 transition-all transform hover:scale-105 hover:-translate-y-2 md:py-3";

const PasswordReset = ({ error, errors, form, loading, onChange, onSubmit }) => (
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
        Set New Password
      </h3>

      <p className="max-w-sm px-3 mx-auto mt-1 mb-3 text-sm text-center text-gray-400 tracking-wide sm:text-base">
        Enter your new password for your account.
      </p>

      <form className="my-2 px-2 md:px-5" onSubmit={onSubmit}>
        <div className="my-1 mx-4 mb-4">
          <Input
            bordered
            disabled={loading}
            error={errors.password1 || error?.new_password1 || ""}
            icon="lock"
            label="New Password"
            name="password1"
            onChange={onChange}
            placeholder="Enter new password"
            required={true}
            type="password"
            value={form.password1 || ""}
          />
        </div>
        <div className="my-1 mx-4 mb-4">
          <Input
            bordered
            disabled={loading}
            error={errors.password2 || error?.new_password2 || ""}
            icon="lock"
            label="Confirm New Password"
            name="password2"
            onChange={onChange}
            placeholder="Enter new password again"
            required={true}
            type="password"
            value={form.password2 || ""}
          />
        </div>
        <div className="mb-2 mt-6 mx-4">
          <Button
            background="primary"
            className="px-4 py-3 w-full"
            caps
            disabled={loading}
            loader
            loading={loading}
            rounded="lg"
            title={loading ? "Submitting..." : "Confirm"}
            type="submit"
          />
        </div>
      </form>
    </section>
  </div>
);

export default PasswordReset;
