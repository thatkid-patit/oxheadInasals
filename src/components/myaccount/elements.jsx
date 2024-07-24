import styled from 'styled-components'

export const MyAccountNav = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
`;

export const AdVideo = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #231f20;
`;

export const MyAccountContainer = styled.div`
    padding-bottom: 50px;
    min-height: 600px;
    background: #eaeaea;
    position: relative;
    z-index: 1;
`;

export const MyAccountContent = styled.div`
    max-width: 1280px;
    padding: 20px;
    margin: auto;
`;

export const MyAccountHeading = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color:#231f20;
    margin: 30px 0 10px 0;
    cursor: pointer;

    &:hover {
        color:#ee73c4;
    }
`;

export const MyAccountHeading2 = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color:#231f20;
    margin: 30px 0 10px 0;
`;

export const MyAccountSubWrap = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`;

export const MyAccountSubWrap2 = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }

`;

export const MyAccountSubHeading = styled.h5`
    font-size: 1rem;
    font-weight: 500;
    color:#231f20;
    cursor: pointer;
    margin: 5px 20px 2px 0;

    &:hover {
        color:#ee73c4;
    }
`;

export const MyAccountSubHeading2 = styled.h5`
    font-size: 1rem;
    font-weight: 500;
    color:#8e793e;
    white-space: nowrap;
    margin: 5px 30px 30px;
    cursor: pointer;

    &.active {
        color:#ee73c4;
    }
`;

export const MyAccountHr = styled.hr`
    border: 1px solid #ee73c4;
    margin: 50px 0;
`;

export const MyOrders = styled.section`
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
`;
