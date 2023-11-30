import { useState } from "react";
import axios from "axios";
import Result from "./Result";

const ImageInput = () => {
  const [result, setResult] = useState<FoodResult>();
  const [selectedFile, setSelectedFile] = useState<File>();
  const url = "https://api.calorieninjas.com/v1/imagetextnutrition";
  const config = {
    headers: {
      "X-Api-Key": "EsPjqbIcOgeWooBUAGJeQw==KIVvSyvnMfkGK7UR",
    },
  };

  const handleCLick = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("selectedFile", selectedFile);
      try {
        const response = await axios.post(url, formData, config);
        setResult(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="wrapper">
      <div className="textSearch">
        <span className="title">
          <span className="text-yellow">Image </span>
          search
        </span>
        <input
          className="image-input"
          type="file"
          accept="image/png,image/jpeg"
          onChange={(e) => setSelectedFile(e.target.files![0])}
        />
        <button className="search-btn" onClick={handleCLick}>
          Search
        </button>
      </div>
      {result && <Result data={result} />}
    </div>
  );
};

export default ImageInput;
