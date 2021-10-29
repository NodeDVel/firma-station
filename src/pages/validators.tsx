import React from "react";
import { useSelector } from "react-redux";

import { rootState } from "../redux/reducers";

import { ValidatorCard, DelegationCard, DelegatorsCard } from "../organisms/staking/validators";
import { useStakingData } from "../organisms/staking/hooks";
import { ContentContainer } from "../styles/validators";

const Validators = () => {
  const { isInit } = useSelector((state: rootState) => state.wallet);
  const { targetStakingState, validatorsState } = useStakingData();

  return (
    <ContentContainer>
      {targetStakingState && isInit && <DelegationCard targetStakingState={targetStakingState} />}
      {validatorsState && (
        <>
          <ValidatorCard validatorsState={validatorsState} />
          <DelegatorsCard validatorsState={validatorsState} />
        </>
      )}
    </ContentContainer>
  );
};

export default React.memo(Validators);
