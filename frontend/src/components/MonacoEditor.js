import Editor from '@monaco-editor/react';

const MonacoEditor = ({ value, onChange, language = "javascript" }) => {

  const handleEditorChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Editor
      height="30vh"
      width="50%"
      language={language}
      defaultValue={value} 
      onChange={(ev, value) => handleEditorChange(value)}
    />
  );
};

export default MonacoEditor;
