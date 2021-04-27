import React, { useEffect, useState } from "react";
import "./Info.css";
import TransferInfo from "../../components/TransferInfo/TransferInfo";
import Text from "../../components/Text/Text";
import * as Fetch from "../../utils/Fetch";
import { URL } from "../../common/index";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Info = () => {
  const [bankInfo, setBankInfo] = useState({});

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await Fetch.get(`${URL}/bank`, {});
    setBankInfo(data.data);
  }

  return (
    <div className="info">
      <TransferInfo title="chi nhánh ngân hàng">
        {bankInfo.bank} {bankInfo.branch}
      </TransferInfo>
      <div className="card-with-button">
        <TransferInfo title="số tài khoản">{bankInfo.number}</TransferInfo>
        <div className="copy-button">
          <CopyToClipboard text={bankInfo.number}>
            <button>
              <Text fontWeight="bold">Copy STK</Text>
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <TransferInfo title="tên tài khoản">{bankInfo.account}</TransferInfo>
      <TransferInfo title="nội dung chuyển tiền">
        "{bankInfo.message}"
      </TransferInfo>
    </div>
  );
};

export default Info;
