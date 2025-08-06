"use client";
import React, { useState, useEffect } from "react";
import styles from "./Input.module.scss";
import cn from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mobileInput?: boolean;
  onValidationChange?: (isValid: boolean, errorMessage?: string) => void;
  label?: string;
  required?: boolean;
}

const Input = ({
  className,
  mobileInput = false,
  onValidationChange,
  value,
  onChange,
  label,
  required = false,
  id,
  ...props
}: InputProps) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Generate unique ID if not provided
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const validateMobileNumber = (
    inputValue: string
  ): { isValid: boolean; errorMessage: string } => {
    const cleanNumber = inputValue.replace(/\D/g, "");

    if (!cleanNumber) {
      return { isValid: true, errorMessage: "" };
    }

    if (!cleanNumber.startsWith("09")) {
      return {
        isValid: false,
        errorMessage: "Mobile number must start with '09'",
      };
    }

    if (cleanNumber.length > 11) {
      return {
        isValid: false,
        errorMessage: "Mobile number cannot exceed 11 digits",
      };
    }

    if (cleanNumber.length < 11) {
      return {
        isValid: false,
        errorMessage: "Mobile number must be 11 digits",
      };
    }

    return { isValid: true, errorMessage: "" };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (mobileInput) {
      const cleanNumber = inputValue.replace(/\D/g, "");

      const limitedNumber = cleanNumber.slice(0, 11);

      let formattedNumber = "";
      if (limitedNumber.length > 0) {
        formattedNumber = limitedNumber;
        if (limitedNumber.length > 4) {
          formattedNumber =
            limitedNumber.slice(0, 4) + "-" + limitedNumber.slice(4);
        }
        if (limitedNumber.length > 7) {
          formattedNumber =
            limitedNumber.slice(0, 4) +
            "-" +
            limitedNumber.slice(4, 7) +
            "-" +
            limitedNumber.slice(7, 11);
        }
      }

      inputValue = formattedNumber;
    }

    if (onChange) {
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          value: inputValue,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }

    if (mobileInput) {
      const validation = validateMobileNumber(inputValue);
      setIsValid(validation.isValid);
      setErrorMessage(validation.errorMessage);

      if (onValidationChange) {
        onValidationChange(validation.isValid, validation.errorMessage);
      }
    }
  };

  useEffect(() => {
    if (mobileInput && value) {
      const validation = validateMobileNumber(value as string);
      setIsValid(validation.isValid);
      setErrorMessage(validation.errorMessage);

      if (onValidationChange) {
        onValidationChange(validation.isValid, validation.errorMessage);
      }
    }
  }, [mobileInput, value, onValidationChange]);

  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          styles.input,
          {
            [styles.error]: !isValid && mobileInput,
            [styles.success]:
              isValid &&
              mobileInput &&
              value &&
              (value as string).replace(/\D/g, "").length === 11,
          },
          className
        )}
        value={value}
        onChange={handleChange}
        maxLength={mobileInput ? 13 : undefined}
        {...props}
      />
      {mobileInput && !isValid && errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
