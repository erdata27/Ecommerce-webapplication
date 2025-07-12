import React from "react";

const InputField = ({
  label,          // Label text for the input
  id,             // ID used for input field and htmlFor on label
  type = "text",  // Input type, default is 'text'
  errors,         // Errors object from react-hook-form
  register,       // register function from react-hook-form
  required = false, // Is this field required?
  message = "This field is required", // Custom error message for required
  className = "", // Optional additional className
  min,            // Minimum character length validation
  value,          // Optional value for controlled input
  placeholder,    // Placeholder text for the input
}) => {
  
  // Base styles applied to all input fields
  const baseClasses =
    "px-2 py-2 border outline-none bg-transparent text-slate-800 rounded-md";

  // Extract specific error message for this field if any
  const error = errors?.[id]?.message;

  // Validation rules for this input field
  const validationRules = {
    required: required ? { value: true, message } : false, // If required, add rule
    minLength: min
      ? { value: min, message: `Minimum ${min} characters required` }
      : undefined,
    pattern:
      type === "email"
        ? {
            // Simple email pattern
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email",
          }
        : type === "url"
        ? {
            // URL validation regex pattern
            value: /^(https?:\/\/)?(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
            message: "Invalid URL",
          }
        : undefined,
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {/* Input label */}
      <label
        htmlFor={id}
        className={`font-semibold text-sm text-slate-800 ${className}`}
      >
        {label}
      </label>

      {/* Input field with conditional border color based on error */}
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        className={`${baseClasses} ${className} ${
          error ? "border-red-500" : "border-slate-700"
        }`}
        {...register(id, validationRules)} // React Hook Form registration
      />

      {/* Validation error message (if any) */}
      {error && (
        <p className="text-sm font-semibold text-red-600 mt-0">{error}</p>
      )}
    </div>
  );
};

export default InputField;
