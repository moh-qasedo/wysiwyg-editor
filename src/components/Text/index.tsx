import React, { memo } from "react";
import Container from "../Container";
import { getFullClassNames } from "../../utils";
import { ContainerProps } from "../../types";
import CONSTANTS from "../../constants";
import "./styles.css";

const Text: React.FC<ContainerProps> = ({ className, ...otherProps }) => {
  return (
    <Container
      className={getFullClassNames(
        className,
        CONSTANTS.DEFAULT_CLASSNAMES.TEXT
      )}
      {...otherProps}
    />
  );
};

export default memo(Text);
