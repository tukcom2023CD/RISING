import title1 from 'images/title1.png';
import title2 from 'images/title2.png';
import title3 from 'images/title3.png';

function AnsTitleIndex() {
  return (
    <div>
      <img
        className="absolute bottom-28 right-20 py-1 w-6"
        src={title1}
        alt="index1"
      />
      <img
        className="absolute bottom-28 right-12 py-2 w-6"
        src={title2}
        alt="index1"
      />
      <img
        className="absolute bottom-28 right-4 py-2 w-6"
        src={title3}
        alt="index1"
      />
    </div>
  );
}

export default AnsTitleIndex;
