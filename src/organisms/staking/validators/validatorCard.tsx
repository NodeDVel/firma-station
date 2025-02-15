import React from "react";
import numeral from "numeral";

import { IValidatorsState } from "../hooks";

import {
  ValidatorCardWrapper,
  ProfileWrapper,
  StatusWrapper,
  ProfileImageWrap,
  ProfileImage,
  DescriptionWrap,
  NameTypo,
  DescriptionTypo,
  StatusItem,
  StatusTitle,
  StatusContent,
  StatusSubContent,
  LinkTypo,
} from "./styles";
import { convertToFctNumber } from "../../../utils/common";

interface IProps {
  validatorsState: IValidatorsState;
}

const ValidatorCard = ({ validatorsState }: IProps) => {
  const getValidatorAddress = () => {
    return window.location.pathname.replace("/staking/validators/", "");
  };

  const [targetValidatorData] = validatorsState.validators.filter(
    (value) => value.validatorAddress === getValidatorAddress()
  );

  return (
    <ValidatorCardWrapper>
      {targetValidatorData && (
        <>
          <ProfileWrapper>
            <ProfileImageWrap>
              <ProfileImage src={targetValidatorData.validatorAvatar} />
            </ProfileImageWrap>
            <DescriptionWrap>
              <NameTypo>{targetValidatorData.validatorMoniker}</NameTypo>
              <DescriptionTypo>
                <div>{targetValidatorData.validatorDetail}</div>
                {targetValidatorData.validatorWebsite && (
                  <LinkTypo href={targetValidatorData.validatorWebsite} target="_blank">
                    {targetValidatorData.validatorWebsite}
                  </LinkTypo>
                )}
              </DescriptionTypo>
            </DescriptionWrap>
          </ProfileWrapper>
          <StatusWrapper>
            <StatusItem>
              <StatusTitle>Voting Power</StatusTitle>
              <StatusContent>{`${numeral(targetValidatorData.votingPowerPercent).format("0.00")} %`}</StatusContent>
              <StatusSubContent>{`${numeral(targetValidatorData.votingPower).format("0,0.00")} FCT`}</StatusSubContent>
            </StatusItem>
            <StatusItem>
              <StatusTitle>Self-delegation</StatusTitle>
              <StatusContent>{`${numeral(targetValidatorData.selfPercent).format("0.00")} %`}</StatusContent>
              <StatusSubContent>{`${numeral(convertToFctNumber(targetValidatorData.self)).format(
                "0,0.00"
              )} FCT`}</StatusSubContent>
            </StatusItem>
            <StatusItem>
              <StatusTitle>Commission</StatusTitle>
              <StatusContent>{`${numeral(targetValidatorData.commission).format("0.00")} %`}</StatusContent>
            </StatusItem>
            <StatusItem>
              <StatusTitle>Uptime</StatusTitle>
              <StatusContent>{`${numeral(targetValidatorData.condition).format("0.00")} %`}</StatusContent>
            </StatusItem>
          </StatusWrapper>
        </>
      )}
    </ValidatorCardWrapper>
  );
};

export default React.memo(ValidatorCard);
