import React from "react";
import classNames from "classnames/bind";
const cx = classNames.bind(require("./appFooter.module.css"));
const AppFooter = props => {
  const { news } = props;
  return (
    <div className={cx("footer-container")}>
      <footer>
        India Mapped using{" "}
        <a
          href="https://openstreetmap.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenStreetMap.org
        </a>
      </footer>
    </div>
  );
};
export default AppFooter;
