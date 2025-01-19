import React, { memo, useCallback, useEffect, useState } from "react";
import {
  convertFromRaw,
  convertToRaw,
  DraftEditorCommand,
  EditorState,
  RichUtils,
} from "draft-js";
import Container from "./components/Container";
import Editor from "./components/Editor";
import Button from "./components/Button";
import { editContent, getContent } from "./apis";
import CONSTANTS from "./constants";
import "./App.css";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleToolbarAction = useCallback(
    (command: DraftEditorCommand) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) setEditorState(newState);
    },
    [editorState]
  );

  const renderEditorToolbar = useCallback(() => {
    return (
      <Container className={CONSTANTS.DEFAULT_CLASSNAMES.TOOLBAR}>
        <Button
          imgSrc={CONSTANTS.IMAGES.BOLD}
          onPress={() => handleToolbarAction("bold")}
        />
        <Button
          imgSrc={CONSTANTS.IMAGES.ITALIC}
          onPress={() => handleToolbarAction("italic")}
        />
        <Button
          imgSrc={CONSTANTS.IMAGES.UNDERLINE}
          onPress={() => handleToolbarAction("underline")}
        />
        <Button
          imgSrc={CONSTANTS.IMAGES.CODE}
          onPress={() => handleToolbarAction("code")}
        />
      </Container>
    );
  }, [handleToolbarAction]);

  const getData = useCallback(async () => {
    const rawContent = (await getContent()) as string;
    if (rawContent) {
      const contentState = convertFromRaw(JSON.parse(rawContent));
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, []);

  const saveContent = useCallback(async () => {
    const rawContent = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    setLoading(true);
    await editContent(rawContent);
    setLoading(false);
  }, [editorState]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container className="app-container">
      <Editor
        value={editorState}
        onChange={setEditorState}
        renderToolbar={renderEditorToolbar}
        onSave={saveContent}
        saving={loading}
      />
    </Container>
  );
};

export default memo(App);
