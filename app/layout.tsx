"use client";
import "./globals.css";
import { Provider } from "react-redux";
import {store} from "../store/store";
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
          <Provider store={store}>{children}</Provider>
        </main>
      </body>
    </html>
  );
}
