import middle1 from 'images/middle1.png';
import middle2 from 'images/middle2.png';
import middle3 from 'images/middle3.png';

function TitleIndex() {
  return (
    <div>
      <img
        className="absolute bottom-64 right-20 py-2 w-6"
        src={middle1}
        alt="index1"
      />
      <img
        className="absolute bottom-64 right-12 py-1 w-6"
        src={middle2}
        alt="index1"
      />
      <img
        className="absolute bottom-64 right-4 py-2 w-6"
        src={middle3}
        alt="index1"
      />
    </div>
  );
}

export default TitleIndex;
