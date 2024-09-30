import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Avatar = styled.img`
  width: 300px;
  margin: 16px 0 32px 0;
  border-radius: 100%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-width: 10px;
  box-shadow: -5px -2px 4px rgb(227 135 255 / 25%),
    0px 5px 4px rgb(255 219 57 / 30%), 5px -2px 4px rgb(118 255 255 / 30%),
    0 0 2pt 4pt rgb(255 255 255 / 60%);
`;
