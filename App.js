import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput, FlatList, ActivityIndicator } from 'react-native';

import Filmes from './src/components/Filmes';
import api from './src/services/api';

export default function App() {

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadFilmes(){

        await api.get('r-api/?api=filmes')
        .then((res) => {
          setFilmes(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        })
  
    }

    loadFilmes();

  }, [])

  if(loading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#242424'}}>
        <ActivityIndicator color="#8B0000" size={55} />
      </View>
    );
  }else{
    return (
      <View>
   
        <FlatList 
         data={filmes}
         keyExtractor={item => String(item.id)}
         renderItem={ ({item}) => <Filmes data={item} /> }
        />
   
      </View>
     );
  }
}