import React, { memo, useCallback } from "react";
import Container from "../Container";
import Button from "../Button";
import { getFullClassNames } from "../../utils";
import { ToolbarProps } from "../../types";
import CONSTANTS from "../../constants";
import "./styles.css";

const Toolbar: React.FC<ToolbarProps> = ({
  onPressAction,
  className,
  ...otherProps
}) => {
  const handlePressBold = useCallback(
    () => onPressAction("bold"),
    [onPressAction]
  );
  const handlePressItalic = useCallback(
    () => onPressAction("italic"),
    [onPressAction]
  );
  const handlePressUnderline = useCallback(
    () => onPressAction("underline"),
    [onPressAction]
  );
  return (
    <Container
      className={getFullClassNames(
        className,
        CONSTANTS.DEFAULT_CLASSNAMES.TOOLBAR
      )}
      {...otherProps}
    >
      <Button imgSrc={CONSTANTS.IMAGES.BOLD} onPress={handlePressBold} />
      <Button imgSrc={CONSTANTS.IMAGES.ITALIC} onPress={handlePressItalic} />
      <Button
        imgSrc={CONSTANTS.IMAGES.UNDERLINE}
        onPress={handlePressUnderline}
      />
    </Container>
  );
};

export default memo(Toolbar);
