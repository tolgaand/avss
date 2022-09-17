import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

type CustomEditorProps = {
  value: string;
  setValue(value: string): void;
};

export const CustomEditor = (props: CustomEditorProps) => {
  const { value, setValue } = props;

  return (
    <Editor
      height="100%"
      width="100%"
      theme="vs-dark"
      defaultLanguage="rust"
      defaultValue={value}
      onChange={(value) => setValue(value as string)}
    />
  );
};
