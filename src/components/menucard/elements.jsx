import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
import { 
    AiFillMinusCircle, 
    AiFillPlusCircle  
} from "react-icons/ai";



export const MenuCardDisplay = styled.div`
    border-radius: 5px;
    margin: 15px;
    position: relative;
    box-shadow: 0px 0px 10px #231f2036;
    transition: all 0.2s ease-in-out;
    background: #fff;

    &:hover {
        box-shadow: none;
    }
`;

export const MenuCardImageContainer = styled.section`
    border-radius: 5px;
    position: relative;
`;

export const MenuCardImage = styled.img`
    width: 100%;
    height: 180px;
    border-radius: 5px 5px 0 0;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const MenuCardInfo = styled.section`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 220px;
`;

export const MenuCardInfoWrapper = styled.section`
    position: relative;
`;

export const MenuCardNameRating = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const MenuCardName = styled.p`
    font-size: 1rem;
    font-weight: 700;
    color: #8e793e;
`;

export const MenuCardDescription = styled.p`
    font-size: .8rem;
    margin-bottom: 10px;
    color: #231f20;
`;

export const MenuCardPrice = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    color: #ee73c4;
`;

export const MenuCardAdd = styled(IoIosAddCircleOutline)`
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size: 25px;
    color: #8e793e;
    cursor: pointer;
`;

export const MenuCardCounter = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    right: 20px;
    bottom: 20px;
`;

export const MenuCardMinus = styled(AiFillMinusCircle)`
    font-size: 25px;
    color: #8e793e;
    cursor: pointer;
`;

export const MenuCardCount = styled.p`
    padding: 0 10px;
    min-width: 50px;
    text-align: center;
    font-size: 1rem;
    color: #231f20;
    font-weight: 500;
`;

export const MenuCardPlus = styled(AiFillPlusCircle)`
    font-size: 25px;
    color: #8e793e;
    cursor: pointer;
`;