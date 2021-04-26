import React, { useState } from "react";
import "./Methods.css";
import Text from "../../components/Text/Text";
import Card from "../../components/Card/Card";
import visaCard from "../../assets/images/visa.svg";
import bankCard from "../../assets/images/bank.svg";
import Info from "../Info/Info";
import Amount from "../Amount/Amount";

const Methods = ({ openDialog }) => {
  const [visaSelected, setVisaSelected] = useState(true);
  const [bankSelected, setBankSelected] = useState(false);

  function handleSelection(type) {
    if (type === "visa") {
      setVisaSelected(true);
      setBankSelected(false);
    } else if (type === "bank") {
      setVisaSelected(false);
      setBankSelected(true);
    }
  }
  return (
    <div>
      <div className="heading">
        <Text
          fontWeight="bold"
          fontSize="12px"
          color="dark-blue"
          textTransform="uppercase"
        >
          Chọn hình thức quyên góp
        </Text>
      </div>
      <Card
        isSelected={visaSelected}
        onClick={() => handleSelection("visa")}
        url={visaCard}
        text="Visa ...2725"
      />
      <Card
        isSelected={bankSelected}
        onClick={() => handleSelection("bank")}
        url={bankCard}
        text="Chuyển khoản ngân hàng"
      />

      {bankSelected && <Info />}
      {visaSelected && <Amount onClick={openDialog} />}
    </div>
  );
};

export default Methods;
