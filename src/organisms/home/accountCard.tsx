import React from "react";
import numeral from "numeral";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import { copyToClipboard } from "../../utils/common";
import { rootState } from "../../redux/reducers";

import theme from "../../themes";
import { BlankCard } from "../../components/card";
import { AddressTitleTypo, CopyIconImg, UserAddressTypo, UserBalanceTypo } from "./styles";

const AccountCard = () => {
  const { address } = useSelector((state: rootState) => state.wallet);
  const { balance } = useSelector((state: rootState) => state.user);

  const { enqueueSnackbar } = useSnackbar();

  const clipboard = () => {
    copyToClipboard(address);

    enqueueSnackbar("Copied", {
      variant: "success",
      autoHideDuration: 1000,
    });
  };

  return (
    <BlankCard bgColor={theme.colors.mainblue} height="130px" backgroundLogo={true}>
      <AddressTitleTypo>Address</AddressTitleTypo>
      <CopyIconImg onClick={clipboard} />
      <UserAddressTypo>{address}</UserAddressTypo>
      <UserBalanceTypo>{`${numeral(balance).format("0,0.000")} ${"FCT"}`}</UserBalanceTypo>
    </BlankCard>
  );
};

export default React.memo(AccountCard);
