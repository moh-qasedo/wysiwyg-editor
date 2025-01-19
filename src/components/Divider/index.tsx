import React, { memo, useMemo } from "react";
import Container from "../Container";
import { DividerProps } from "../../types";

const Divider: React.FC<DividerProps> = ({
  size = "0.7px",
  orientation = "horizontal",
  color = "lightgray",
}) => {
  const style = useMemo(
    () => ({
      width: orientation == "horizontal" ? "100%" : size,
      height: orientation == "vertical" ? "100%" : size,
      backgroundColor: color,
    }),
    [size, orientation, color]
  );
  return <Container style={style} />;
};

export default memo(Divider);
