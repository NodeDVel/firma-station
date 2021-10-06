import React from "react";
import { AccountCard, AssetCard, BlockCard, VotingPowerCard, TokenomicsCard } from "organisms/home";
import {
  ContentContainer,
  CardWrap,
  LeftCardWrap,
  RightCardWrap,
  RightCardTopWrap,
  RightCardMiddleWrap,
} from "styles/home";

const Home = () => {
  return (
    <ContentContainer>
      <CardWrap>
        <LeftCardWrap>
          <AccountCard />
          <AssetCard />
        </LeftCardWrap>
        <RightCardWrap>
          <RightCardTopWrap>
            <BlockCard />
          </RightCardTopWrap>
          <RightCardMiddleWrap>
            <VotingPowerCard />
            <TokenomicsCard />
          </RightCardMiddleWrap>
        </RightCardWrap>
      </CardWrap>
    </ContentContainer>
  );
};

export default React.memo(Home);
