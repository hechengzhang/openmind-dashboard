import { useState, ChangeEvent, ComponentType, InputHTMLAttributes } from "react";
import HideSvg from "@/assets/images/login/hide.svg?react";
import ShowSvg from "@/assets/images/login/show.svg?react";
import classNames from "classnames";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password" | "email" | "number";
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: ComponentType;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
}

const InputField = ({
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder = "",
  icon: Icon,
  name,
  required = false,
  disabled = false,
  error = false
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className={classNames(
      `flex items-center gap-[8px] px-[12px] py-[10px] border-[1px] rounded-[10px]`,
      disabled ? "opacity-50" : "",
      error ? 'border-error' : 'border-[#EDEDED] focus-within:border-blue',
    )}>
      {Icon && (
        <div className="w-[24px] h-[24px] flex-shrink-0">
          <Icon />
        </div>
      )}
      <input
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        required={required}
        disabled={disabled}
        onBlur={onBlur}
        className="w-full border-none outline-0 text-[14px] font-[500] leading-[18px] text-primary placeholder-black/20 bg-transparent"
      />
      {isPassword && (
        <div
          className="w-[24px] h-[24px] flex-shrink-0 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <ShowSvg /> : <HideSvg />}
        </div>
      )}
    </div>
  );
};

export default InputField;
