import styled from "styled-components";

export const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1400px;
  margin: 40px auto 0;
`;

export const MovieItem = styled.div`
  cursor: pointer;
  transition: transform 0.2s;
  flex: 0 0 16.66%;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

export const MovieTitle = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 20px;
  background-color: #a7a4b9;
  border: 1px solid #d8d7e5;
  color: #000;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 auto 30px;
  display: block;

  &:hover {
    background-color: #d8d7e5;
    border: 1px solid #a7a4b9;
  }
`;
