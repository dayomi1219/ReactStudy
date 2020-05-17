import React from "react";
import "./Button.scss";


/**
 * @param {Function} onclick 클릭 이벤트
 * @param {String} children 버튼에 표시될 내용
 */

export const GreyButton = ({
  onclick = () => console.log("hi"),
  children = "",
}) => {
  return <button class="GreyButton">{children}</button>
};

export const PurpleButton = ({
  onclick = () => console.log("hi"),
  children = "",
}) => {
  return <button class="PurpleButton">{children}</button>
};

export const SmallGreyButton = ({
  onclick = () => console.log("hi"),
  children = "",
}) => {
  return <button class="SmallGreyButton">{children}</button>
};