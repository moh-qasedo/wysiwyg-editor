import React, { memo, useMemo } from "react";
import Container from "../Container";
import Image from "../Image";
import Text from "../Text";
import { getFullClassNames } from "../../utils";
import { ButtonProps } from "../../types";
import CONSTANTS from "../../constants";
import "./styles.css";

const Button: React.FC<ButtonProps> = ({
  title,
  selected = false,
  imgSrc,
  className,
  selectedClassName,
  ...otherProps
}) => {
  const buttonClassName = useMemo(
    () =>
      getFullClassNames(
        selected
          ? selectedClassName ?? CONSTANTS.DEFAULT_CLASSNAMES.SELECTED
          : className,
        CONSTANTS.DEFAULT_CLASSNAMES.BUTTON
      ),
    [selected, className, selectedClassName]
  );
  return (
    <Container className={buttonClassName} {...otherProps}>
      {imgSrc && <Image src={imgSrc} />}
      {title && <Text>{title}</Text>}
    </Container>
  );
};

export default memo(Button);
