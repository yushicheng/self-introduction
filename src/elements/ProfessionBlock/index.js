/* eslint-disable react/prop-types */
import React from "react";
import classnames from "classnames";
// import classnames from "classnames";
// import propTypes from "prop-types";

import css from "./style.module.css";

export default function ProfessionBlock({children,...otherProps}){
  return (
    <div className={classnames(css.profession_block)} {...otherProps}>
      {children}
    </div>
)};


ProfessionBlock.propTypes={


};
ProfessionBlock.defaultProps={


};