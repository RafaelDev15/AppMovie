import React, {useState} from 'react';
import { View, Text } from 'react-native';

import { Content, ModalContainer, HeaderModal, Title, ButtonClear, TextClear, Sinopse } from '../../Styles/detalhes';

export default function Detalhes({dados, modalShow}) {

 return (
   <Content>

       <ModalContainer>
          <HeaderModal>
            <ButtonClear onPress={ modalShow }>
              <TextClear>Fechar</TextClear>
            </ButtonClear>

            <Title> {dados.nome} </Title>
          </HeaderModal>

          <Sinopse>
            {dados.sinopse}
          </Sinopse>
       </ModalContainer>

   </Content>
  );
}