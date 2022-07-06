import styled from "styled-components";

export default function CreateMeal() {
  return (
    <StyledCard>
      <div className="header">Titre</div>
      <div className="content">Content</div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 70%;
  background-color: white;
  border-radius: 5px;
  & .header {
    display: flex;
    align-items: center;
    height: 30px;
    padding: 15px;
    border-bottom: 1px solid #ddd;
  }
  & .content {
    padding: 15px;
  }
`;
