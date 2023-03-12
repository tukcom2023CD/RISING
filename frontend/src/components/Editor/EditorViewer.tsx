import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';

interface Props {
  content: string;
}

function EditorViewer({ content = '' }: Props) {
  return (
    <div className="h-[20rem] overflow-y-auto max-w-full">
      {content && <Viewer initialValue={content || ''} />}
    </div>
  );
}

export default EditorViewer;