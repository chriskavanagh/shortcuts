import React from "react";
import cover from "../../public/img/cover.png";
import Image from "next/image";

export default function Cards() {
  return (
    <div className="card">
      <div className="front">Front</div>
      <div className="back">Back</div>
      <style jsx>{`
        .card {
          width: 500px;
          height: 500px;
          position: relative;
          border: 5px solid #333;
          text-align: center;
          line-height: 500px;
          font-size: 3em;
          background-color: transparent;
          overflow: hidden;
          margin: 55px auto;
        }
        .front,
        .back {
          width: 500px;
          height: 500px;
          backface-visibility: hidden;
        }
        .front {
          background: #434343;
          position: absolute;
          transition: transform 0.8s;
        }
        .back {
          background: #0080b5;
          position: absolute;
          transform: rotateY(180deg);
          transition: transform 0.8s;
        }
        .card:hover .front {
          transform: rotateY(180deg);
        }
        .card:hover .back {
          transform: rotateY(0deg);
        }
      `}</style>
    </div>
  );
}
