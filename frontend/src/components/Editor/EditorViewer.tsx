/* eslint-disable react/jsx-no-useless-fragment */
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';

interface Props {
  content: string;
}

function EditorViewer({ content = '' }: Props) {
  return <>{content && <Viewer initialValue={content || ''} />}</>;
}

export default EditorViewer;
