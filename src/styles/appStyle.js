import styled from "styled-components";

export const Main = styled.main`
  margin: 68px auto;
  max-width: 1024px;
  border-radius: 6px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.75);
  .nav-bar {
    width: 100%;
  }
  .table {
    thead {
      th {
        border: 0;
      }
    }
    td,
    th {
      vertical-align: middle;
    }
  }
`;
