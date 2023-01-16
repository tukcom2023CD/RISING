import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

interface Props {
  editorRef: React.MutableRefObject<any>;
}

export default function ToastEditor({ editorRef }: Props) {
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
