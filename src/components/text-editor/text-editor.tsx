import { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

interface TextEditorProps {
  style?: any;
  value?: string;
  onChange: (value: string) => void;
}

function TextEditor({ style, value, onChange }: TextEditorProps) {
  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline"],
        [{ align: "center" }, { align: "right" }, { align: "justify" }],
        [{ list: "bullet" }, { list: "ordered" }],
        [{ background: [] }, { color: [] }],
      ],
    },
  };

  return (
    <ReactQuill
      style={style}
      modules={modules}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextEditor;
