import styled from 'styled-components';

export const ErrorBoundaryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
`;

export const ErrorBoundaryOverlay = styled.div`
  border-radius: 30px;
  padding: 30px 30px;
  font-size: 25px;
  background-color: #ef5350;
  border: 2px solid #e57373;
  width: 40%;
`;