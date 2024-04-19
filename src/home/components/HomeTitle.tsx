import Logo from '../../assets/logo.svg';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  & h1 {
    font-size: 3rem;
  }

  & img {
    padding: 40px 0 30px 0;
    width: 200px;
    aspect-ratio: 1;
  }

  & abbr {
    text-decoration: none;
    background: rgba(70, 87, 105, 0.4);
    padding: 5px 20px;
    margin: 0 10px;
  }
`;

export const HomeTitle = () => {
  return (
    <StyledTitle>
      <img src={Logo} alt='JOI.how' />
      <h1>
        <abbr title='Jack Off Instructions'>JOI</abbr>
        <sup>.how</sup>
      </h1>
    </StyledTitle>
  );
};