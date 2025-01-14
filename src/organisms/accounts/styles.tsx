import styled from "styled-components";
import FileCopyIcon from "@mui/icons-material/FileCopy";

export const AddressTitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.realWhite};
  height: 30px;
  line-height: 30px;
  font-size: ${({ theme }) => theme.sizes.accountCardSize1};
  margin-right: 6px;
  float: left;
`;

export const UserAddressTypo = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: ${({ theme }) => theme.sizes.accountCardSize2};
  color: ${({ theme }) => theme.colors.defaultGray2};
  float: left;
`;

export const UserBalanceTypo = styled.div`
  height: 20px;
  line-height: 20px;
  width: 100%;
  margin-top: 20px;
  font-size: ${({ theme }) => theme.sizes.accountCardSize1};
  float: left;
  text-align: left;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.realWhite};
`;

export const CopyIconImg = styled(FileCopyIcon)`
  margin-top: 2px;
  float: left;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.realWhite};
`;

export const TitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.realWhite};
  height: 30px;
  line-height: 30px;
  font-size: ${({ theme }) => theme.sizes.accountCardSize1};
  margin-right: 6px;
  margin-bottom: 10px;
`;

export const NextButton = styled.div`
  width: 300px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainblue};
  border-radius: 4px;
  cursor: pointer;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const RowWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
`;

export const Column = styled.div`
  width: 100%;
  & {
    flex: 1 1 100%;
    text-align: center;
  }
  &:nth-child(1) {
    flex: 1 1 300px;
  }
  &:nth-child(2) {
    flex: 1 1 350px;
  }
  &:nth-child(3) {
    flex: 1 1 350px;
  }
  &:nth-child(5) {
    flex: 1 1 300px;
  }
  &:nth-child(6) {
    flex: 1 1 400px;
  }
  &:nth-child(7) {
    flex: 1 1 800px;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  border-bottom: 1px solid #444;
`;

export const ItemColumn = styled(Column)`
  height: 50px;
  line-height: 50px;
  font-size: ${({ theme }) => theme.sizes.accountCardSize4};
  & > a {
    text-decoration: none !important;
    font-weight: 300 !important;
  }
  & > a:hover {
    background: none;
    font-weight: 500 !important;
  }
  &:nth-child(1) {
    font-size: ${({ theme }) => theme.sizes.accountCardSize5};
  }
  &:nth-child(2) {
    font-size: ${({ theme }) => theme.sizes.accountCardSize5};
  }
  &:nth-child(3) {
    font-size: ${({ theme }) => theme.sizes.accountCardSize5};
  }
`;

export const HeaderWrapper = styled(RowWrapper)`
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #444;
`;

export const HeaderColumn = styled(Column)`
  color: ${({ theme }) => theme.colors.defaultGray3};
`;
