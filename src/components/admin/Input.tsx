import React from 'react';
import { Input as ShadcnInput } from '@/components/ui/input';
import { Field, FieldLabel, FieldError } from '@/components/ui/field';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = '',
  ...props
}: InputProps) {
  return (
    <Field>
      {label && <FieldLabel>{label}</FieldLabel>}
      <ShadcnInput
        className={error ? 'border-destructive' : ''}
        {...props}
      />
      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
}
