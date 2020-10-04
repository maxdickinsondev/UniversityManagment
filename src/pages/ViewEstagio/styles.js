import styled from 'styled-components';

export const Container = styled.div`
    background-color: #f5f5f5;

    display: flex;
    
    flex-direction: row;
    justify-content: space-between;

    margin: auto;

    border-radius: 8px;
    padding: 0px 40px 40px;

    margin-top: 150px;

    width: 50vw;
    height: 50vh;
`;

export const Title = styled.h3`
    color: #191920;
    font-size: 18px;

    margin-bottom: 10px;
`;

export const Email = styled.span`

`;

export const Matricula = styled.span`

`;

export const Nome = styled.span`

`;

export const Type = styled.span`

`;

export const TypeArea = styled.div`
    display: flex;
   
    flex-direction: column;
   
    margin-top: 25px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    margin: 15px;

    width: 100%;
`;

export const NameArea = styled.div``;

export const MatriculaArea = styled.div``;

export const EmailArea = styled.div`
    
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 20px 0px;

    width: 100%;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;

    display: flex;
    
    margin-top: 20px;
`;