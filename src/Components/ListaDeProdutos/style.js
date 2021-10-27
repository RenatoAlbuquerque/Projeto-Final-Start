import styled from 'styled-components';

export const GlobalStyle = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #FDF4F3;
    display: flex;
    justify-content: center;
`


export const Global = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 54px;
    grid-row-gap: 0px;
    justify-items: center;
    background-color: #FDF4F3;

    @media(max-width: 1440px){
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 2vw;
    }
    @media(max-width: 950px){
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 2vw;
    }
    @media(max-width: 950px){
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 2vw;
    }
    @media(max-width: 700px){
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 10vw;
    }
    @media(max-width: 500px){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const Card = styled.div`
    width: 180px;
    height: 400px;
    padding: 20px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FDF4F3;

    &:hover {
        width: 220px;
        height: 400px;
        margin-bottom: 0;
        padding: 0px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
`

export const CardGapDetail = styled.div`
    display: flex;
    height: 100%;
    background-color: transparent;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const CardImage = styled.img`
    width: 156px;
    height: 165px;
    border-radius: 25px;
`

export const CardName = styled.h3`
    font: normal 400 18px cursive;
    letter-spacing: 1px;
    text-align: left;
    width: 100%;
    padding-left: 17px;
    margin: 3px 0;
    background-color: transparent;
`

export const CardBrand = styled.h4`
    font: normal 400 16px cursive;
    letter-spacing: 1px;
    text-align: left;
    width: 100%;
    padding-left: 17px;
    margin: 3px 0;
    background-color: transparent;
`

export const CardCategory = styled.h5`
    font: normal 400 14px cursive;
    letter-spacing: 1px;
    text-align: left;
    width: 100%;
    padding-left: 17px;
    margin: 3px 0;
    background-color: transparent;
`

export const CardPrice = styled.h6`
    font: normal 400 12px cursive;
    letter-spacing: 1px;
    text-align: left;
    width: 100%;
    padding-left: 17px;
    margin: 3px 0;
    background-color: transparent;
`

export const CardFooter = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    background-color: transparent;
`

export const CardRating = styled.p`
    font: normal 400 10px cursive;
    letter-spacing: 1px;
    text-align: left;
    width: 100%;
    padding-left: 17px;
    margin: 3px 0;
    color: grey;
    background-color: transparent;
`

export const CardDetail = styled.button`
    font: normal 400 15px cursive;
    letter-spacing: 1px;
    text-align: left;
    width: 120px;
    padding-left: 10px;
    margin: 3px 0;
    color: grey;
    border-radius: 20px;
    cursor: pointer;
    border: 1px solid #D6778E;
    background-color: transparent;
    text-align: center;
`

export const CardLocalColor = styled.div`
    width: 100%;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: 4px;
    grid-row-gap: 2px;
    background-color: transparent;
`

export const CardColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props) => props.color};
`

export const Loading = styled.div`
    color: red;
`