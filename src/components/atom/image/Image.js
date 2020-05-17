import React from "react";
import "./Image.scss";

/**
 * @param {Function} onclick 클릭 이벤트
 * @param {String} children 버튼에 표시될 내용
 */

export const VideoImage = ({
  onclick = () => console.log("hi"),
  imgsrc = "",
}) => {
  return <img class="VideoImage" src={imgsrc} alt=""/>
};


export const ThumbnailImage = ({
  onclick = () => console.log("hi"),
  imgsrc = "",
}) => {
  return <img class="ThumbnailImage" src={imgsrc} alt=""/>
};


export const IconImage = ({
  onclick = () => console.log("hi"),
  imgsrc = "",
}) => {
  return <img class="ThumbnailImage" src={imgsrc}  alt=""/>
};

export const CategoryImage = ({
  onclick = () => console.log("hi"),
  imgsrc = "",
}) => {
  return <img class="ThumbnailImage" src={imgsrc}  alt=""/>
};