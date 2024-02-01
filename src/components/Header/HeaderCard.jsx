import React, { useState, useEffect } from "react";

function HeaderCard() {
  const [sepet, setSepet] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      setSepet(cartItems);
    }
  }, []);

  let toplam = 0;
  sepet.forEach((element) => {
    toplam += +element.price;
  });

  const deleteOrder = (item) => {
    const updatedSepet = sepet.filter((order) => order.id !== item.id);
    setSepet(updatedSepet);
    localStorage.setItem("cartItems", JSON.stringify(updatedSepet));
  };
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
          <i className="bi bi-trash-fill" onClick={() => deleteOrder(item)}></i>
        </div>
      ))}
      <p>Toplam Tutar : {toplam} $ </p>
    </>
  );
}

export default HeaderCard;
