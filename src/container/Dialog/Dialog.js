import React from "react";
import "./Dialog.css";
import Tick from "../../assets/images/tick.svg";
import Text from "../../components/Text/Text";

const Dialog = ({ onClick }) => {
  return (
    <div className="dialog-container">
      <div className="dialog">
        <img src={Tick} alt="" />
        <Text fontWeight="bold" fontSize="18px">
          Thanh toán thành công
        </Text>
        <Text>Xin chân thành cảm ơn sự ủng hộ của Quý khách hàng</Text>
        <button className="confirm-button" onClick={onClick}>
          <Text fontWeight="bold">OK</Text>
        </button>
      </div>
    </div>
  );
};

export default Dialog;
