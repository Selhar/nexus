import "./globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DragDropContext onDragEnd={(result) => undefined}>
      <Component {...pageProps} />
    </DragDropContext>
  );
}
export default MyApp;
