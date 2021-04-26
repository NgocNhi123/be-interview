import React, { useState } from "react";
import "./Amount.css";
import Text from "../../components/Text/Text";
import { VNDFormatter } from "../../utils/MoneyFormatter";

const Amount = ({ onClick }) => {
  const amounts = [100000, 200000, 300000, 500000, 800000, 100000];
  const formatter = VNDFormatter();
  const [moneyDonate, setMoneyDonate] = useState(0);

  return (
    <div className="amount">
      <div className="heading">
        <Text
          fontWeight="bold"
          fontSize="12px"
          color="dark-blue"
          textTransform="uppercase"
        >
          Chọn số tiền quyên góp
        </Text>
      </div>
      <div className="body">
        {amounts.map((item, index) => {
          return (
            <button
              key={index}
              className="moneyButton"
              onClick={() => setMoneyDonate(item)}
            >
              <Text fontWeight="bold">{formatter.format(item)}</Text>
            </button>
          );
        })}
      </div>
      <div className="proceedToCheckout">
        <button onClick={() => onClick({ amount: moneyDonate })}>
          <Text fontWeight="bold">Tiến hành thanh toán</Text>
        </button>
      </div>
    </div>
  );
};

export default Amount;
