// File: /screens/SingleChatScreen.tsx

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SingleChatScreen: React.FC = () => {
    const navigation = useNavigation();
  // Sample data for chat messages
  const messages = [
    {
      id: '1',
      text: 'Both with sisters first very to remodelling logbook due and attempt. Dropped him is the come comment a candidates...',
      time: '17:57',
      sender: 'other',
    },
    {
      id: '2',
      text: 'Much to omens, accept would was basically.',
      time: '18:49',
      sender: 'me',
    },
    {
      id: '3',
      text: 'Are hazardous sight rolled subordinates what his average many, to the feel among scent cleaning and behavioural written 😊',
      time: '18:49',
      sender: 'me',
    },
    {
      id: '4',
      text: 'gilded the go so might that mail odd they after recently than be around times...',
      time: '15:24',
      sender: 'other',
    },
    // Add more messages as needed
  ];

  const renderMessageItem = ({ item }: { item: any }) => (
    <View style={[styles.messageBubble, item.sender === 'me' ? styles.myMessage : styles.otherMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Main')}}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with the actual image URL
          style={styles.avatar}
        />
        <Text style={styles.headerTitle}>Mahnoor Naseer</Text>
      </View>

      {/* Messages List */}
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

      {/* Message Input */}
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="emoticon-outline" size={24} color="#888" style={styles.icon} />
        <MaterialCommunityIcons name="attachment" size={24} color="#888" style={styles.icon} />
        <TextInput
          placeholder="Write a message"
          placeholderTextColor="#888"
          style={styles.input}
        />
        <TouchableOpacity>
          <MaterialCommunityIcons name="send" size={24} color="#00D6BE" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#1f1f1f',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  messageBubble: {
    maxWidth: '80%',
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
  },
  myMessage: {
    backgroundColor: '#00D6BE',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#1f1f1f',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 14,
    color: '#fff',
  },
  messageTime: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1f1f1f',
  },
  icon: {
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#0d0d0d',
    borderRadius: 20,
    paddingHorizontal: 15,
    color: '#fff',
    marginHorizontal: 10,
  },
});

export default SingleChatScreen;
