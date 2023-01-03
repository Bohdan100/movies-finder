import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchFormWrapper = styled.div`
  top: -61px;

  position: relative;
  padding-top: 150px;
  padding-bottom: ${p => p.theme.space[0]}px;
  display: block;
  z-index: 0;

  @media screen and (min-width: 625px) {
    position: fixed;
    padding-top: 70px;
    z-index: 100;
    padding-left: 160px;
  }
  @media screen and (min-width: 695px) {
    padding-left: 100px;
  }
  @media screen and (min-width: 730px) {
    padding-left: ${p => p.theme.space[8]}px;
  }

  @media screen and (min-width: 768px) {
    padding-left: ${p => p.theme.space[4]}px;
  }
  @media screen and (min-width: 800px) {
    padding-left: ${p => p.theme.space[0]}px;
  }
`;

export const SearchForm = styled.form`
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  outline: 0;
  float: left;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: ${p => p.theme.radii.border};
  svg {
    display: inline-block;
    width: 1.2em;
    height: 1.2em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }
`;

export const SearchInput = styled.input`
  width: 244px;
  height: 42px;
  padding: 0 16px;

  outline: ${p => p.theme.space[0]}px;
  line-height: 42px;
  background-color: rgba(255, 255, 255, 0.8);
  color: ${p => p.theme.colors.blackFirst};
  border: ${p => p.theme.borders.none};
  float: left;
  border-radius: 4px 0 0 4px;

  &:hover,
  &:focus {
    outline: ${p => p.theme.space[0]}px;
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.orangeFirst};
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 42px;
  width: 42px;

  outline: ${p => p.theme.space[2]}px;
  background: none;
  background-color: rgba(38, 50, 56, 0.8);
  float: left;
  text-align: center;
  line-height: 42px;
  border: 0;
  color: ${p => p.theme.colors.white};
  font: normal normal normal 14px/1 FontAwesome;
  font-size: 16px;
  text-rendering: auto;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  transition: background-color 0.4s ease;
  border-radius: 0 4px 4px 0;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.orangeFirst};
    & > svg {
      width: 1.4em;
      height: 1.4em;
    }
  }
`;
