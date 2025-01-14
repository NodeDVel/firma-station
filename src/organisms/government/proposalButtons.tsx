import React from "react";

import { modalActions } from "../../redux/action";

import { ButtonWrapper, Button } from "./styles";

const ProposalButtons = () => {
  return (
    <ButtonWrapper>
      <Button onClick={() => modalActions.handleModalNewProposal(true)}>New Proposal</Button>
    </ButtonWrapper>
  );
};

export default React.memo(ProposalButtons);
