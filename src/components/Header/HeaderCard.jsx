import React, { useState } from "react";

function HeaderCard() {
  const [sepet, setSepet] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
  );

  return (
    <>
      {sepet.map((item, index) => (
        <div
          key={index}
          className="d-flex my-2 p-2 flex-row justify-content-between text-start align-items-center"
        >
          <img src={item.thumbnail} alt="" width="20%" />
          <h6>
            {item.brand} - {item.title}
          </h6>
          <h6>{item.price}$</h6>
        </div>
      ))}
      <p>Toplam Tutar : {toplam} </p>
    </>
  );
}

export default HeaderCard;
