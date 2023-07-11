import React from "react";
import { useMsal } from "@azure/msal-react";
import { msalConfig, msalInstance } from "../config/authAzure";

export default function ButtonLoginAzure() {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    if (loginType === "popup") {
        msalInstance.loginRedirect({ scopes: ['User.Read'] });
    //   instance.loginPopup(msalConfig).catch((e) => {
    //     console.log(e);
    //   });
    } else if (loginType === "redirect") {
      instance.loginRedirect(msalConfig).catch((e) => {
        console.log(e);
      });
    }
  };

  return (
    <button className="buttonMicrosoft" onClick={() => handleLogin("popup")} type="button">
      Iniciar sesión con Microsoft Outlook
    </button>
  );
}
