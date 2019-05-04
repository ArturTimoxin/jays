import React from "react";
import { Link } from "react-router-dom";

export default function SuccessOrderModal({ showSuccessModal, successModalMessage }) {
  return (
    <div className={`successOrderModal ${showSuccessModal ? "show" : ""}`}>
      <div className="modalWindow">
        <div className="message">{successModalMessage}</div>
        <Link to="/shop" className="backToShopButton">
          Назад у магазин
        </Link>
      </div>
    </div>
  );
}
