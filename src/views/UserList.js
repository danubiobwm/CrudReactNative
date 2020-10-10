import {getActionFromState} from '@react-navigation/native';
import React from 'react';
import {View, FlatList, Alert} from 'react-native';
import {ListItem, Button, Icon} from 'react-native-elements';

import users from '../data/users';





const UserLista = () => {


  function confirmUserDelete(user){
    Alert.alert('Excluir Usuário', 'Deseja exclui o usuário?',
    [
      { text:"Sim", onPress() {console.warn('Sim deleta' +user.id)} 
    },
      {text:"Não", onPress() {console.warn('Não deleta'+user.id)}},
   ])
  }


  function getActions(user) {
    return (
      <>
        <Button 
        onPress={()=>props.navigation.navigate('UserForm')}
        type='clear'
        icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button 
        onPress={()=>confirmUserDelete(user)}
        type='clear'
        icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  }

  function getUserItem({item: user}) {
    return (
      <ListItem
        leftAvatar={{source: {uri: user.avatarUrl}}}
        key={user.id}
        title={user.name}
        subtitle={user.email}
        bottomDivider
        rightElement={getActions(user)}
        onPress={() => props.navigation.navigate('UserForm')}
      />
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  );
};

export default UserLista;
