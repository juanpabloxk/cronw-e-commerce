import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  border-bottom-color: gray;
  animation: spin 0.7s ease-in-out infinite;
  -webkit-animation: spin 0.7s ease-in-out infinite;

  @media screen and (max-width: 800px) {
    height: 100px;
    width: 100px;
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
