import React from "react";
import "./Span.scss";

/**
 * @param {String} children 표시될 내용
 */

export const SmallSpan = ({ children = " " }) => {
  return <span className="SmallSpan">{children}</span>;
};

export const MiddleSpan = ({ children = " " }) => {
  return <span className="MiddleSpan">{children}</span>;
};

export const LargeSpan = ({ children = " " }) => {
  return <span className="LargeSpan">{children}</span>;
};

export const LargeStrongSpan = ({ children = " " }) => {
  return <span className="BannerSpan">{children}</span>;
};