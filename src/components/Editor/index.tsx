import React, { useCallback, useMemo, useState } from "react";
import {
  EditorState,
  Editor as DraftEditor,
  RichUtils,
  DraftEditorCommand,
} from "draft-js";
import Container from "../Container";
import Toolbar from "../Toolbar";
import Divider from "../Divider";
import { EditerProps } from "../../types";
import "./styles.css";
import Button from "../Button";
import CONSTANTS from "../../constants";
import Text from "../Text";

const Editor: React.FC<EditerProps> = ({
  value,
  onChange,
  renderToolbar,
  className,
  onSave,
  saving,
  ...otherProps
}) => {
  const [internalValue, setInternalValue] = useState(EditorState.createEmpty());
  const editorState = useMemo(
    () => (value && onChange ? value : internalValue),
    [internalValue, value]
  );
  const editorOnChange = useMemo(
    () => (value && onChange ? onChange : setInternalValue),
    [value, onChange, setInternalValue]
  );

  const handleToolbarAction = useCallback(
    (command: DraftEditorCommand) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) editorOnChange(newState);
    },
    [editorState, editorOnChange]
  );

  const renderDefaultToolbar = useCallback(
    () => <Toolbar onPressAction={handleToolbarAction} />,
    [handleToolbarAction]
  );

  const toolbar = useMemo(
    () => renderToolbar ?? renderDefaultToolbar,
    [renderToolbar, renderDefaultToolbar]
  );

  return (
    <Container className={`editor-container ${className}`} {...otherProps}>
      {toolbar()}
      <Divider />
      <DraftEditor
        editorState={editorState}
        onChange={editorOnChange}
        placeholder="Start writing..."
      />
      <Container className="footer">
        <Button onPress={onSave} imgSrc={CONSTANTS.IMAGES.SAVE} />
        {saving && <Text>Saving...</Text>}
      </Container>
    </Container>
  );
};

export default Editor;
