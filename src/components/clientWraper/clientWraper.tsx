"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Header from "@/components/header/header";
const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
  <Provider store={store}>
  <Header />
  <main className="mt-[4.5rem] lg:mt-[5rem]">{children}</main>
  </Provider>
  );
}
export default ClientWrapper;
