import styled from "styled-components";

export const MenuDisplayContainer = styled.div`
    background: #eaeaea;
    padding-bottom: 50px;
`;

export const MenuDisplayContent = styled.div`
    max-width: 1280px;
    margin: auto;
`;

export const MenuDisplayTopline = styled.h5`
    width: 100%;
    text-align: start;
    font-size: 1.5rem;
    margin: 0 10px 10px 10px;
    color: #8e793e;
`;

export const MenuDisplayList = styled.section`
    margin: 20px;
    max-width: 1280px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
`;
