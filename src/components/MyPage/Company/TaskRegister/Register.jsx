import { useState } from "react";
import cn from "../../../../utils/cn";
import Camera from "../../../../assets/icons/Camera.svg";
import Text from "../../../../assets/icons/Text.svg";
import Photo from "../../../../assets/icons/Photo.svg";

export default function Register() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result); // 파일의 데이터 URL을 상태에 저장
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="px-20 flex flex-col justify-center pt-5 gap-10 ">
      {/* 과제 제목 작성창 */}
      <input
        type="text"
        placeholder="과제 제목"
        className={cn(
          "w-full h-10 rounded-md px-2 outline-none focus:ring-0",
          "text-4xl font-bold text-center"
        )}
      />

      {/* 과제 이미지 업로드 */}
      <div className="flex flex-col items-center gap-4">
        {/* 이미지 업로드 영역 */}
        <div className="relative bg-gray-300 w-full h-80 rounded-lg flex items-center justify-center">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <p className="text-gray-600 text-lg">기업 전단지/포스터 등 사진 등록</p>
          )}

          {/* 업로드 버튼 */}
          <label
            htmlFor="imageUpload"
            className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow cursor-pointer"
          >
            <img src={Camera} alt="camera" className="w-5 h-5" />
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
      </div>

      {/* 과제 설명 작성창 */}
      <div className="rounded-lg border-2 border-black">
        <div className="bg-[#B0B0B0] flex flex-row justify-end gap-4 text-white rounded-t-lg p-1 px-4">
          <img src={Text} alt="text" className="w-6 h-6" />
          <img src={Photo} alt="photo" className="w-6 h-6" />
        </div>
        <textarea
          placeholder="과제 설명"
          className={cn(
            "w-full h-64 rounded-md p-2 outline-none focus:ring-0",
            "text-lg font-medium"
          )}
        />
      </div>
    </div>
  );
}
