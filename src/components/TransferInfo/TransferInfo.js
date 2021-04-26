import React from "react";
import "./TransferInfo.css";
import Text from "../Text/Text";

const TransferInfo = ({ title, children }) => {
  return (
    <div className="transfer-info">
      <Text
        fontWeight="bold"
        fontSize="10px"
        color="dark-blue"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <div style={{ marginTop: "1%" }}>
        <Text>{children}</Text>
      </div>
    </div>
  );
};

export default TransferInfo;
