import React from "react";
import clsx from "clsx";
export default function FooterLayout({ style, copyright }) {
  return (
    <footer
      className={`${clsx(
        "footer",
        { "footer--dark": style === "dark" }
      )} w-full border-t border-solid border-gray-400 bg-gray-100 p-0`}
    >
      <div className="py-6 px-4 tablet:py-4">{copyright}</div>
    </footer>
  );
}
