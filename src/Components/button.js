import styled from 'styled-components'
import home from '../Images/home.png'

const Wrapper = styled.button`
    background-color: red;
    width: 150px;
    height: 60px;
    border-radius: 30px;
    border: solid;
    border-width: 0.1px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(to top, #C00D0D, #C00D0D);
    margin-right: 20px;

    @media(max-Width:600px){
        margin: 0;
    }

    :hover{
        border-width: 1.5px;
        cursor: pointer;
    }


`
const IconBox = styled.div`
    width: 25%;
    height: 60%;
    background-color: white;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 1s;

    ${Wrapper}:hover &{
        transform: scale(1.2) rotate(360deg);
    }
`

const Icon = styled.img`
    width: 60%;
`

const TextBubble = styled.div`
    width: 65%;
    height: 70%;
    background-color: white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition-duration: 1s;

    ${Wrapper}:hover &{
        height: 70%;
        width: 55%;
    }

   
`

const Text = styled.p`

`

export const HeaderButton = (props) => {
    return (
        <Wrapper onClick={props.onclick}>
            <IconBox>
                <Icon src={props.icon} />
            </IconBox>
            <TextBubble>
                <Text>
                    {props.name}
                </Text>
            </TextBubble>
        </Wrapper>
    )
}