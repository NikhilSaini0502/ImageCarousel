import { useEffect } from "react";
import { useState } from "react";

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
      <img src={images[img].imageSrc} height="250px" width="420px" />
      <h3>{images[img].imageTitle}</h3>

      <button onClick={SetPreImg}>Prev</button>
      <button onClick={SetNextImage}>Next</button>
    </div>
  );
};
export default Carasouel;
