import { useEffect } from "react";
import { useState } from "react";
import "../index.css"

let images = [
  {
    id: 1,
    imageSrc:
      "https://images.pexels.com/photos/242125/pexels-photo-242125.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageTitle: "Car 1",
  },
  {
    id: 2,
    imageSrc:
      "https://images.pexels.com/photos/2631489/pexels-photo-2631489.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageTitle: "Car 2",
  },
  {
    id: 3,
    imageSrc:
      "https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageTitle: "Car 3",
  },
];

const Carasouel = () => {
  const [img, setImg] = useState(0);
  const SetPreImg = () => {
    if (img === 0) {
      setImg(images.length - 1);
    } else {
      setImg((img) => img - 1);
    }
  };
  const SetNextImage = () => {
    if (img === images.length - 1) {
      setImg(0);
    } else {
      setImg((img) => img + 1);
    }
  };
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      SetNextImage();
    }, 1700);
    return () => clearTimeout(timeOutId);
  }, [img]);

  return (
    <div>
      <img className="w-full h-80" src={images[img].imageSrc} />
      <h3 className="text-center font-extrabold font-mono">{images[img].imageTitle}</h3>
      <div className="text-center">
      <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md m-1" onClick={SetPreImg}>Prev</button>
      <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  rounded-md m-1" onClick={SetNextImage}>Next</button>
      </div>
      
    </div>
  );
};
export default Carasouel;
