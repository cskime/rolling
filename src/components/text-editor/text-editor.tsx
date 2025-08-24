import { useEffect, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

interface TextEditorProps {
  style?: any;
  value?: string;
  onChange: (value: string) => void;
  font?: string;
}

const Font: any = Quill.import("formats/font");
Font.whitelist = [
  "Noto Sans",
  "Pretendard",
  "Nanum Gothic",
  "Nanum Pen Script",
];
Quill.register(Font, true);

function TextEditor({ style, value, onChange, font }: TextEditorProps) {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = editorRef.current.getEditor();
      editor.root.style.fontFamily = font || "Noto Sans";
      editor.root.style.fontSize = "20px";
    }
  }, [font]);

  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline"],
        [{ align: "center" }, { align: "right" }, { align: "justify" }],
        [{ list: "bullet" }, { list: "ordered" }],
        [{ background: [] }, { color: [] }],
        [{ size: [] }],
      ],
    },
  };

  return (
    <ReactQuill
      ref={editorRef}
      style={style}
      modules={modules}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextEditor;
