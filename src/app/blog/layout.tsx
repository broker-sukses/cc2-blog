import React from "react";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="my-auto">This Is Blog Layout</h1>
      {children}
    </>
  );
}
