import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 20px 0px;
  width: 100%;
  text-align: center;
  border: 1px solid #cccccc;

  thead {
    tr {
      th {
        padding: 5px 10px;
        border: none;
        border-top: 1px solid #cccccc;
        background-color: #ececec;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 5px 10px;
        border: none;
        border-top: 1px solid #cccccc;
        background-color: #ffffff;
      }
    }
  }
`;

export const Modal = styled.div`
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  width: 800px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 8px;
  flex-direction: column;
  > a {
    margin-left: auto;
    & svg {
      color: #000;
    }
  }

  > form {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.span`
  color: #191920;
  font-size: 18px;

  margin-bottom: 10px;
`;
