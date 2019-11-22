import styled from 'styled-components';

const NavContainer = styled.nav`
  border-bottom: 2px solid black;
  z-index: 99;
  background-color: white;
`;

const Nav = styled.nav`
  margin: 0 3%;
  display: flex;
  justify-content: space-between;
`;

const NavButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavButton = styled.button`
  width: 100px;
  padding: 15px;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 10px;
`;

const TitleDiv = styled.div``;

const NavTitle = styled.h1``;
export { Nav, NavButton, TitleDiv, NavTitle, NavButtonContainer, NavContainer };
