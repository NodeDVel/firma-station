import React from "react";
import moment from "moment";
import numeral from "numeral";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import { Link } from "react-router-dom";

import theme from "themes";
import { BlankCard } from "components/card";
import { ListWrapper, ItemWrapper, ItemColumn, HeaderWrapper, HeaderColumn, TitleTypo } from "./styles";

import { EXPLORER_URI } from "config";

const Row = ({ data, index, style }) => {
  const currentHistory = data[index];

  const getHash = (hash) => {
    return "0x" + hash.substr(0, 4) + "...";
  };

  const getAddress = (address) => {
    return address.substr(0, 16) + "...";
  };

  const getAmount = (amount) => {
    return `${numeral(currentHistory.amount / 1000000).format("0,0.000")} FCT`;
  };

  const getResult = (result) => {
    return result ? "SUCCESS" : "FAILED";
  };

  const getTimestamp = (timestamp) => {
    return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
  };

  return (
    <ItemWrapper style={style}>
      <ItemColumn>
        <Link to={{ pathname: `${EXPLORER_URI}/transactions/${currentHistory.hash}` }} target={"_blank"}>
          {getHash(currentHistory.hash)}
        </Link>
      </ItemColumn>
      <ItemColumn>
        <Link to={{ pathname: `${EXPLORER_URI}/accounts/${currentHistory.from}` }} target={"_blank"}>
          {getAddress(currentHistory.from)}
        </Link>
      </ItemColumn>
      <ItemColumn>
        <Link to={{ pathname: `${EXPLORER_URI}/accounts/${currentHistory.to}` }} target={"_blank"}>
          {getAddress(currentHistory.to)}
        </Link>
      </ItemColumn>
      <ItemColumn>{getAmount(currentHistory.amount)}</ItemColumn>
      <ItemColumn>{getResult(currentHistory.success)}</ItemColumn>
      <ItemColumn>{currentHistory.memo}</ItemColumn>
      <ItemColumn>{getTimestamp(currentHistory.timestamp)}</ItemColumn>
    </ItemWrapper>
  );
};

const TransferHistoryCard = ({ transferHistoryByAddressState }) => {
  return (
    <BlankCard bgColor={theme.colors.backgroundSideBar} height={"100%"}>
      <TitleTypo>Send History</TitleTypo>
      <ListWrapper>
        <AutoSizer>
          {({ height, width }) => (
            <>
              <HeaderWrapper style={{ width }}>
                <HeaderColumn>Hash</HeaderColumn>
                <HeaderColumn>From</HeaderColumn>
                <HeaderColumn>To</HeaderColumn>
                <HeaderColumn>Amount</HeaderColumn>
                <HeaderColumn>Result</HeaderColumn>
                <HeaderColumn>Memo</HeaderColumn>
                <HeaderColumn>Time</HeaderColumn>
              </HeaderWrapper>
              <List
                width={width}
                height={height - 50}
                itemCount={transferHistoryByAddressState.historyList.length}
                itemSize={50}
                itemData={transferHistoryByAddressState.historyList}
              >
                {Row}
              </List>
            </>
          )}
        </AutoSizer>
      </ListWrapper>
    </BlankCard>
  );
};

export default TransferHistoryCard;
