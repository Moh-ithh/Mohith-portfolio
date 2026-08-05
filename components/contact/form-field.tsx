import * as React from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea";
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
  placeholder?: string;
  error?: string;
}

export function FormField({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
  error
}: FormFieldProps) {
  const inputClass = "w-full bg-neutral-950/80 border border-border/20 rounded px-3 py-2 text-xs text-foreground placeholder-neutral-500 focus-visible:outline-none focus-visible:border-primary/60 transition-colors";

  return (
    <div className="flex flex-col gap-1.5 text-left w-full select-none">
      <label htmlFor={id} className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest leading-none">
        {label} {required && <span className="text-warning">*</span>}
      </label>
      
      {type === "textarea" ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          rows={5}
          className={inputClass}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className={inputClass}
        />
      )}

      {error && (
        <span className="text-[10px] font-mono text-warning font-semibold leading-none mt-0.5" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
