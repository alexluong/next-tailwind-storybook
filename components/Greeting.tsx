import { ReactNode } from "react";

export type GreetingProps = {
  children: ReactNode;
};

export function Greeting({ children }: GreetingProps) {
  return <p className="text-green-500 text-5xl">{children}</p>;
}
