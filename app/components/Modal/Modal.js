"use client";
import React, { useEffect, useState } from "react";
import "./modal.scss";
export default function Modal({
  className,
  onClose,
  title = "title",
  children,
  noHeader = false,
  onModalClick = null,
  onBackdropClick = null,
  type = "",
  deleteMsg = "Are you sure you want to delete?",
  isLoading,
  onConfirmDelete,
  onCancelDelete,
  style,
}) {
  const name = type ? "confirm_modal_content" : "modal_content";

  return (
    <div className={`emai_modal ${className ?? ""}`}>
      <div
        className="backdrop fadeIn"
        id={`${name}`}
        onClick={onBackdropClick}
      ></div>
      <div
        className={`${name} fadeInLeftBig`}
        style={{
          minHeight: type ? "10vw" : null,
          padding: type ? "16px" : null,
          ...style,
        }}
        onClick={onModalClick}
      >
        <button className="modal_close">
          <CloseIcon
            {...{
              onClick: () => {
                document
                  .querySelector("." + name)
                  .classList.add("fadeOutRightBig");
                document.querySelector("#" + name).classList.add("fadeOut");
                setTimeout(() => {
                  onClose();
                }, 500);
              },
            }}
          />
        </button>
        {children}
      </div>
    </div>
  );
}

export const CloseIcon = (props) => (
  <svg
    width={"1vw"}
    height={"1vw"}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 1L1 13M1 1L13 13"
      stroke="#fff"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
