import styled from "styled-components";

export const MenuContainer = styled.div`
    padding: 100px 0 20px 0;
    background: #eaeaea;
`;

export const MenuContent = styled.div`
    max-width: 1280px;
    margin: auto;
`;

export const MenuTopline = styled.h5`
    width: 100%;
    text-align: start;
    font-size: 1.5rem;
    margin: 10px;
    color: #8e793e;
`;

export const MenuHeading = styled.h1`
    font-size: 3rem;
    margin: 10px;
    text-align: start;
    color: #231f20;
    max-width: 800px;
`;

export const MenuList = styled.div`
    margin: 20px;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    text-align: center;
    overflow-x: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const MenuListItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;

    &:hover img{
        transition: all 0.2s ease-in-out;
        padding: 10px;
    }

    &:hover h5{
        color: #231f20;
    }
`;

export const MenuImage = styled.img`
    height: 150px;
    width: 150px;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;

    &.active {
        border-radius: 5px;
    }
`;

export const MenuName = styled.h5`
    color: #8e793e;
    font-size: 1.2rem;
    transition: all 0.2s ease-in-out;

    &.active {
        color: #231f20;
    }
`;

export const MenuHr = styled.hgroup`
    max-width: 1280px;
    margin: 30px auto 0 auto;
    height: 2px;
    background-color: #756435;
    border: none;
`;
