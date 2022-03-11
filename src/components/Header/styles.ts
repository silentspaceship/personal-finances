import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 0 8rem;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 14rem;
  }

  button {
    font-size: 1rem;
    color: white;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.1s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
