import React, { useState } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const [btnTop, setBtnTop] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      // document.body.scrollTop // For Safari
      // document.documentElement.scrollTop // For Chrome, Firefox, IE and Opera
      document.documentElement.scrollTop > 350 ||
      document.body.scrollTop > 350
    ) {
      setBtnTop(true);
    } else {
      setBtnTop(false);
    }
  }

  return (
    <div
      id='back-to-top'
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <a className={btnTop ? "top" : "topHide"} id='top' href='#top'>
        TOP
      </a>
    </div>
  );
};

export default BackToTop;
