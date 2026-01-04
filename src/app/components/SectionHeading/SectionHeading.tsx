import { Children, ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <>
      <h2 className="text-2xl font-medium text-center tracking-wider pb-2">
        {children}
      </h2>
    </>
  );
}
