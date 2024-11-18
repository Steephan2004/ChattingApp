import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { TouchableOpacity, Text } from 'react-native';
import { collection, addDoc, orderBy, query, onSnapshot } from 'firebase/firestore';  
import { signOut } from 'firebase/auth';
import { auth, database } from '../config/firebase';
import { useNavigation } from '@react-navigation/native';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();

  const onSignOut = () => {
    signOut(auth).catch(error => console.log(error));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 10 }} onPress={onSignOut}>
          <Text style={{ marginRight: 10,fontSize:14,backgroundColor:'#000',color:'#fff',padding:8,borderRadius:20 }}>Sign Out</Text>
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  useLayoutEffect(() => {
    const collectionRef = collection(database, 'chats');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(
        snapshot.docs.map(doc => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(), // Assuming `createdAt` is a Firestore Timestamp
          text: doc.data().text,
          user: doc.data().user
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(database, 'chats'), {
      _id,
      createdAt,
      text,
      user
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessages => onSend(newMessages)}
      user={{
        _id: auth.currentUser?.uid, // Use UID for unique identification
        avatar: 'https://i.pravatar.cc/300'
      }}
      messagesContainerStyle={{
        backgroundColor: '#fff'
      }}
    />
  );
}
