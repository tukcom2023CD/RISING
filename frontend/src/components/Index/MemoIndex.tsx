import end1 from 'images/end1.png';
import end2 from 'images/end2.png';
import end3 from 'images/end3.png';

function MemoIndex() {
  return (
    <div>
      <img
        className="absolute bottom-64 right-20 py-2 w-6"
        src={end1}
        alt="index1"
      />
      <img
        className="absolute bottom-64 right-12 py-2 w-6"
        src={end2}
        alt="index1"
      />
      <img
        className="absolute bottom-64 right-4 py-1 w-6"
        src={end3}
        alt="index1"
      />
    </div>
  );
}

export default MemoIndex;
