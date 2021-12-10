import styled from 'styled-components/native';

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    background: rgba(000, 000, 000, 0.3);
`;

export const ModalContainer = styled.View`
    height: 80%;
    width: 100%;
    background: #242424;
`;

export const HeaderModal = styled.View`
    height: 100px;
`;

export const Title = styled.Text`
    text-align: center;
    margin-top: 30px;
    font-size: 30px;
    color: #FFF;
    text-transform: uppercase;
`;

export const ButtonClear = styled.TouchableOpacity`
    padding: 10px;
    margin: 5px;
    background: #B80000;
    width: 100px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;

export const TextClear = styled.Text`
 color: #FFF;
 font-size: 20px;
 font-weight: bold;
`;

export const Sinopse = styled.Text`
    margin-left: 10px;
    margin-right: 10px;
    color: #FFF;
    font-size: 18px;
    margin-top: 100px
`;