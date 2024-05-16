/* eslint-disable no-redeclare */
import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="p-4 bg-white border rounded-lg">
      <h1 className="pb-2 text-xl border-b">{title}</h1>
      <>{children}</>
    </div>
  );
}
