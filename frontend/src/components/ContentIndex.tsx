import content1 from 'images/content1.png';
import content2 from 'images/content2.png';
import content3 from 'images/content3.png';

function TitleIndex() {
  return (
    <div>
      <img
        className="absolute bottom-64 right-20 py-2 w-6"
        src={content1}
        alt="index1"
      />
      <img
        className="absolute bottom-64 right-12 py-1 w-6"
        src={content2}
        alt="index1"
      />
      <img
        className="absolute bottom-64 right-4 py-2 w-6"
        src={content3}
        alt="index1"
      />
    </div>
  );
}

export default TitleIndex;
