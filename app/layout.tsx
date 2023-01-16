
'use client'
import "./globals.css";
import { Provider } from "zustand";
import { useState } from "react";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        
        <main className="bg-dark-grey text-grey font-medium text-base leading-body m-0 p-0 box-border w-full h-full flex items-center justify-center">
          <Provider value={useStore()}>
            {children}
           </Provider>
        </main>
      </body>
    </html>
  );
}
