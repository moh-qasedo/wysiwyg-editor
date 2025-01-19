import { DraftEditorCommand, EditorState } from "draft-js";
import { PropsWithChildren } from "react";

export type Orientation = "vertical" | "horizontal";

export type ContainerProps = PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties;
  onPress?: () => void;
}>;

export type ImageProps = {
  className?: string;
  style?: React.CSSProperties;
  src: string;
};

export type ButtonProps = {
  title?: string;
  onPress: () => void;
  selected?: boolean;
  imgSrc?: string;
  className?: string;
  selectedClassName?: string;
  style?: React.CSSProperties;
};

export type DividerProps = {
  size?: number;
  orientation?: Orientation;
  color?: string;
};

export type ToolbarProps = ContainerProps & {
  onPressAction: (action: DraftEditorCommand) => void;
};

export type EditerProps = ContainerProps & {
  value?: EditorState;
  onChange?: (state: EditorState) => void;
  renderToolbar?: () => React.ReactNode;
  onSave?: () => void;
  saving?: boolean;
};
