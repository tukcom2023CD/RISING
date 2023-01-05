import answer1 from 'images/answer1.png';
import answer2 from 'images/answer2.png';
import answer3 from 'images/answer3.png';

function TitleIndex() {
  return (
    <div>
      <img
        className="absolute bottom-14 right-20 py-2 w-6"
        src={answer1}
        alt="index1"
      />
      <img
        className="absolute bottom-14 right-12 py-2 w-6"
        src={answer2}
        alt="index1"
      />
      <img
        className="absolute bottom-14 right-4 py-1 w-6"
        src={answer3}
        alt="index1"
      />
    </div>
  );
}

export default TitleIndex;
