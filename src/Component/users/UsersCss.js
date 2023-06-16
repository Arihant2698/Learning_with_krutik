import styled from "styled-components";

export const Main = styled.div`
  height: 1500px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-around;
  padding: 20px;
  border: 1px solid black;
  flex-wrap:wrap;
  `;
  export const CardWrapper = styled.div`
  height: 300px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin:30px;
  border: 1px solid black;
`;
export const Child = styled.div`
  height: 40%;
  width: 40%;
  display: flex;
  flex-wrap:wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
`;
