import React, { memo } from "react";
import { getFullClassNames } from "../../utils";
import { ImageProps } from "../../types";
import CONSTANTS from "../../constants";
import "./styles.css";

const Image: React.FC<ImageProps> = ({ className, style, src }) => {
  return (
    <img
      src={src}
      className={getFullClassNames(
        className,
        CONSTANTS.DEFAULT_CLASSNAMES.IMAGE
      )}
      style={style}
    />
  );
};

export default memo(Image);
