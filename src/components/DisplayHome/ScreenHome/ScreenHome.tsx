// components/HomePage.tsx

import React from "react";
import FooterHome from "./FooterHome";

import FormDataUser from "@/components/FormDataUser/Forms/FormDataUser";
import HeaderHome from "./HeaderHome";

export function ScreenHome() {
  return (
    <div>
      <HeaderHome/>
      <FormDataUser />
      <FooterHome/>
    </div>
  );
}
