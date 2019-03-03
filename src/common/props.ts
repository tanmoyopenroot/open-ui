import * as React from 'react';

export type HTMLDivProps = React.HTMLAttributes<HTMLDivElement>;
export type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface IProps {
  className?: string;
}
