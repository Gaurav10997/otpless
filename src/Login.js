import React, { useEffect } from "react";
import { initOTP } from "./initOTP";

const Login = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramsValue = urlParams.get("ex");
    if (paramsValue) {
      openModal();
    }
  }, []);

  const openModal = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramsValue = urlParams.get("ex");
    if (!paramsValue) {
      const currentURL = window.location.href;
      const newParam1 = "ex=true";
      const updatedURL = `${currentURL}?${newParam1}`;
      window.history.pushState(null, "", updatedURL);
    }
    initOTP();
    const modalContainer = document.getElementById("modalContainer");
    const modal = document.getElementById("otpless-login-page");
    modalContainer.style.display = "flex";
    modal.style.display = modal.style.display === "block" ? "none" : "block";
  };

  const closeModal = (e) => {
    const currentURL = window.location.href;
    const urlWithoutParams = currentURL.split("?")[0];
    window.history.pushState(null, "", urlWithoutParams);
    const modalContainer = document.getElementById("modalContainer");
    if (e.target === modalContainer) {
      modalContainer.style.display = "none";
    }
  };
  return (
    <div>
      <h1>Demo</h1>
      <div className="main" id="modalContainer" onClick={closeModal}>
        <div className="modal">
          <div id="otpless-login-page"></div>
        </div>
      </div>
      <button id="loginBtn" onClick={openModal}>
        Login
      </button>
    </div>
  );
};

export default Login;
