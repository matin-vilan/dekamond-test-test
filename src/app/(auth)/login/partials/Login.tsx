"use client";

import Button from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Input from "@/shared/components/UI/Input";
import React, { useState } from "react";
import classes from "./Login.module.scss";
import Text from "@/shared/components/UI/Text";
import { login } from "@/shared/utils/api/auth/login";
import { useRouter } from "next/navigation";
import { ErrorResponse } from "@/shared/types";
import { ACCESS_TOKEN_KEY } from "@/shared/constants/tokens";
import { useAppActions } from "@/shared/contexts/AppContext";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const { setAccessToken } = useAppActions();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const password = formData.get("password") as string;
    const userName = formData.get("userName") as string;
    try {
      const response = await login({ userName, password });
      console.log({ response });
      if (response?.success) {
        localStorage.setItem(ACCESS_TOKEN_KEY, response.user.accessToken);
        setAccessToken(response.user.accessToken);
        router.push("/dashboard");
      }
    } catch (error: unknown) {
      const err = error as ErrorResponse;
      setError(err.message);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <Container variant="md">
      <form className={classes.form} onSubmit={handleLogin}>
        {error && (
          <Text variant="default" color="danger">
            {error}
          </Text>
        )}
        <Text variant="title" color="primary" className={classes.title}>
          Login
        </Text>
        <Input
          label="Phone Number"
          placeholder="Phone Number"
          name="phone"
          mobileInput
          onChange={onChange}
          value={phoneNumber}
        />

        <Input
          label="User Name"
          placeholder="User Name"
          name="userName"
          required
        />
        <Input
          label="Password"
          placeholder="Password"
          name="password"
          required
        />
        <Button type="submit" schema="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
