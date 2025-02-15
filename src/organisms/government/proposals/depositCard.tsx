import React from "react";
import moment from "moment";
import numeral from "numeral";

import { convertNumber, convertToFctNumber } from "../../../utils/common";
import { PROPOSAL_STATUS_DEPOSIT_PERIOD } from "../../../constants/government";
import { IProposalState } from "../hooks";
import { modalActions } from "../../../redux/action";

import {
  CardWrapper,
  DepositDetailWrapper,
  DepositDetailItem,
  Label,
  DepositContent,
  DepositMainTitle,
  DepositButton,
} from "./styles";

interface IProps {
  proposalState: IProposalState;
}

const DepositCard = ({ proposalState }: IProps) => {
  const getAddTimeFormat = (startTime: string, second: number) => {
    return moment(startTime).add(numeral(second).value(), "seconds").format("YYYY-MM-DD HH:mm:ss");
  };

  const getCurrentDeposit = (deposits: any) => {
    if (deposits === undefined) return 0;

    let totalDeposit = 0;
    for (let value of deposits) {
      totalDeposit += convertNumber(value.amount[0].amount);
    }

    return totalDeposit;
  };

  const getAmountFormat = (amount: number) => {
    return `${numeral(convertToFctNumber(amount)).format("0.00")} FCT`;
  };

  return (
    <CardWrapper>
      <DepositMainTitle>Deposit</DepositMainTitle>
      <DepositDetailWrapper>
        <DepositDetailItem>
          <Label>Deposit Period</Label>
          <DepositContent>{getAddTimeFormat(proposalState.submitTime, proposalState.periodDeposit)}</DepositContent>
        </DepositDetailItem>
        <DepositDetailItem>
          <Label>Min Deposit Amount</Label>
          <DepositContent bigSize={true}>{getAmountFormat(proposalState.paramMinDepositAmount)}</DepositContent>
        </DepositDetailItem>
        <DepositDetailItem>
          <Label>Current Deposit</Label>
          <DepositContent bigSize={true}>{getAmountFormat(getCurrentDeposit(proposalState.depositors))}</DepositContent>
        </DepositDetailItem>
      </DepositDetailWrapper>
      {proposalState.status === PROPOSAL_STATUS_DEPOSIT_PERIOD && (
        <DepositButton
          active={true}
          onClick={() => {
            modalActions.handleModalData({
              proposalId: proposalState.proposalId,
            });
            modalActions.handleModalDeposit(true);
          }}
        >
          Deposit
        </DepositButton>
      )}
    </CardWrapper>
  );
};

export default React.memo(DepositCard);
