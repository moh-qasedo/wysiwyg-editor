import React, { memo } from "react";
import { getFullClassNames } from "../../utils";
import { ContainerProps } from "../../types";
import CONSTANTS from "../../constants";
import "./styles.css";

const Container: React.FC<ContainerProps> = ({
  style,
  className,
  children,
  onPress,
}) => {
  return (
    <div
      onClick={onPress}
      className={getFullClassNames(
        className,
        CONSTANTS.DEFAULT_CLASSNAMES.CONTAINER
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default memo(Container);
