"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Header from "@/components/header/header";
import HeaderMobile from "@/components/header_mobile/header";

const ClientWrapper=({ children }: { children: React.ReactNode }) =>{
  return (
    <Provider store={store}>
      <Header />
      {/* <HeaderMobile /> */}
      <main>{children}</main>
    </Provider>
  );
}
export default ClientWrapper;
