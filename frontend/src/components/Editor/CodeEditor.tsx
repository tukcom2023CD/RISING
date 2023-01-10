import React, { useEffect } from 'react';
import CodeEditor, { SelectionText } from '@uiw/react-textarea-code-editor';

function PrivateCodeEditor() {
  const [code, setCode] = React.useState(
    `def solution():
    answer = 0
    return answer`,
  );
  const textRef = React.useRef(null);
  // [] 원래 이거 있었음, 수정되자마자 바로바로 콘솔에 찍히게 이렇게 수정함
  useEffect(() => {
    if (textRef.current) {
      const obj = new SelectionText(textRef.current);
      console.log('obj:', obj);
    }
  });
  return (
    <div data-color-mode="dark">
      <CodeEditor
        value={code}
        ref={textRef}
        language="py"
        placeholder="Please enter Python code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          fontFamily:
            'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          fontSize: 12,
        }}
      />
    </div>
  );
}

export default PrivateCodeEditor;
