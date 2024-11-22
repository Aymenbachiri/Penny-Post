import type { UseFormRegisterReturn } from "react-hook-form";

type FormFieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "url" | "number" | "select" | "textarea";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registration: UseFormRegisterReturn<any>;
  error?: { message?: string };
  placeholder?: string;
  options?: string[];
  className?: string;
  min?: number;
  step?: number;
  required?: boolean;
};

export function FormField({
  label,
  name,
  type = "text",
  registration,
  error,
  placeholder,
  options,
  className = "w-full border rounded p-2",
  min,
  step,
  required,
}: FormFieldProps) {
  const renderField = () => {
    switch (type) {
      case "select":
        return (
          <select {...registration} id={name} name={name} className={className}>
            <option value="">Select an option</option>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case "textarea":
        return (
          <textarea
            {...registration}
            id={name}
            name={name}
            className={`${className} min-h-[200px] resize-none`}
            placeholder={placeholder}
          />
        );

      default:
        return (
          <input
            {...registration}
            type={type}
            id={name}
            name={name}
            className={className}
            placeholder={placeholder}
            min={min}
            step={step}
            required={required}
          />
        );
    }
  };

  return (
    <section>
      <label htmlFor={name} className="mb-1 block font-medium">
        {label}
      </label>
      {renderField()}
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </section>
  );
}
