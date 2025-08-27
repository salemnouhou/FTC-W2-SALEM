"use client";
import React, { ReactNode } from "react";
import clsx from "clsx";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary" | "minimal";
type ButtonState = "enabled" | "disabled";

interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  state?: ButtonState;
  label?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  variant = "primary",
  state = "enabled",
  label,
  iconLeft,
  iconRight,
  onClick,
  className,
}) => {

  // Classes par taille
  const sizeClasses: Record<ButtonSize, string> = {
    small: "py-[5px] px-[16px] text-medium-12",
    medium: "py-[9px] px-[16px] text-medium-12",
    large: "py-[13px] px-[24px] text-medium-16",
  };

  // Classes par variant
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-primary text-white  hover:bg-primary-600 active:bg-primary-700 focus:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 disabled:bg-primary/40",
    secondary:
      "bg-white text-secondary-400 border border-primary-200 rounded-[60px]  hover:border-secondary-400 hover:text-secondary-500  active:bg-secondary-100 active:border-secondary-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-secondary-100 focus:text-secondary-400 disabled:bg-white disabled:border-secondary-100 disabled:text-secondary-300",
      minimal:
      " bg-transparent  rounded-[60px]  hover:border-secondary-400 hover:text-secondary-500 hover:bg-white   active:bg-secondary-100 active:border-secondary-200 focus:bg-secondary-500 focus:outline-none focus:ring-1 focus:ring-secondary-100 focus:text-secondary-400 disabled:bg-white disabled:border-secondary-100 disabled:text-secondary-300",
  
  };

  const baseClasses =
    "inline-flex items-center justify-center rounded-[60px]  font-jakarta transition-colors duration-200";

  // Ajustement pour icon-only
  const isIconOnly = !label && (iconLeft || iconRight);
  const iconOnlyClasses = isIconOnly ? "p-[12px] w-10 rounded-full h-10" : "";

  return (
    <button
      className={clsx(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        state === "disabled" && "cursor-not-allowed opacity-50",
        iconOnlyClasses,
        className
      )}
      onClick={state === "disabled" ? undefined : onClick}
      disabled={state === "disabled"}
    >
      {iconLeft && <span className={label ? "mr-2" : ""}>{iconLeft}</span>}
      {label && <span>{label}</span>}
      {iconRight && <span className={label ? "ml-2" : ""}>{iconRight}</span>}
    </button>
  );
};

export default Button;
