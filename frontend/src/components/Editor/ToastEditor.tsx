// Toast 에디터
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef } from 'react';

export default function ToastEditor() {
  const editorRef = useRef(null);

  // const btnClickListener = () => {
  //   const editorInstance = editorRef.current.getInstance();
  //   const getContent_md = editorInstance.getMarkdown();
  //   console.log('--마크다운--');
  //   console.log(getContent_md);
  // };
  return (
    <div>
      {/* 코드 에디터 */}
      <Editor
        placeholder="내용을 입력해주세요."
        previewStyle="vertical" // 미리보기 스타일 지정
        height="300px" // 에디터 창 높이
        initialValue="코드블럭 버튼을 눌러 코드를 작성하세요."
        ref={editorRef}
        language="ko-KR"
        toolbarItems={[
          // 툴바 옵션 설정
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock'],
        ]}
      />
    </div>
  );
}
