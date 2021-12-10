import React, {useState} from 'react';
import { View, Image, Modal } from 'react-native';

import { Container, Capa, SlideShow, ButtonGet, BtnText } from '../../Styles/home';

import Detalhes from '../Detalhes';

export default function Filmes({data}) {

    const [showModal, setShowModal] = useState(false);

    function handleShowModal(){
        setShowModal(!showModal);
    }
    
 return (
   <Container>


       <SlideShow>
            <Capa 
                source={{ uri: data.foto }}
            />

            <ButtonGet onPress={handleShowModal}>
                <BtnText>Saiba mais</BtnText>
            </ButtonGet>

        </SlideShow>

        <Modal transparent={true} animationType='slide' visible={showModal}>
            <Detalhes dados={data} modalShow={ () => setShowModal(false) }  />
        </Modal>

   </Container>
  );
}