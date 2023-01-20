import { useState } from 'react';
import Button from '../components/Btn';
import DefaultImg from '../images/profile.png';
import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';

function Uploader() {
  const [image, setImage] = useState({
    image_file: '',
    preview_URL: DefaultImg,
  });

  let inputRef;

  const saveImage = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();

    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setImage({
        image_file: e.target.files[0],
        preview_URL: fileReader.result,
      });
    };
  };

  const deleteImage = () => {
    setImage({
      image_file: '',
      preview_URL: DefaultImg,
    });
  };

  // const sendImageToServer = async () => {
  //   if(image.image_file){
  //     const formData = new FormData()
  //     formData.append('file', image.image_file);
  //     await axios.post('/api/image/upload', formData);
  //     alert("서버에 등록이 완료되었습니다!");
  //     setImage({
  //       image_file: "",
  //       preview_URL: "img/default_image.png",
  //     });
  //   }
  //   else{
  //     alert("사진을 등록하세요!")
  //   }
  // }

  return (
    <div className="uploader-wrapper">
      <input
        type="file"
        accept="image/*"
        onChange={saveImage}
        // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
        // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
        // eslint-disable-next-line no-return-assign
        onClick={(e) => (e.target.value = null)}
        // eslint-disable-next-line no-return-assign
        ref={(refParam) => (inputRef = refParam)}
        style={{ display: 'none' }}
      />
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-52 h-52 rounded-full"
          src={image.preview_URL}
          alt="cropped"
        />
      </div>

      <div className="flex flex-row place-content-center">
        <Button text="등록하기" onClick={() => inputRef.click()} />

        <Button text="삭제하기" onClick={deleteImage} />

        {/* <Button text="적용하기"  onClick={sendImageToServer}/> */}
      </div>
    </div>
  );
}

export default Uploader;
