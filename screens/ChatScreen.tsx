// File: /screens/ChatScreen.tsx

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatScreen: React.FC = () => {
  const navigation = useNavigation();
  // Sample data for chat messages
  const messages = [
    {
      id: '1',
      name: 'Mahnoor Naseer',
      message: 'Makes to a illustrated on all and...',
      time: '17:33',
      avatar: 'https://via.placeholder.com/100', // Replace with real image URLs
      unread: 0,
    },
    {
      id: '2',
      name: 'Imran Khan',
      message: 'Hey, I heard that you wanted...',
      time: '16:42',
      avatar: 'https://via.placeholder.com/100',
      unread: 3,
    },
    {
      id: '3',
      name: 'Test Property',
      message: 'For sure! Let’s hangout on Sund...',
      time: '14:32',
      avatar: 'https://via.placeholder.com/100',
      unread: 0,
    },
    {
      id: '4',
      name: 'Aaron Zimmer',
      message: 'No 😅 I just went to bed right...',
      time: 'Yesterday',
      avatar: 'https://via.placeholder.com/100',
      unread: 0,
    },
    {
      id: '5',
      name: 'Annette Black',
      message: 'Ooooh thank you so much! ❤️ 1',
      time: 'Wednesday',
      avatar: 'https://via.placeholder.com/100',
      unread: 1,
    },
    // Add more messages as needed
  ];

  // Update the render function for each message item in ChatScreen.tsx

const renderMessageItem = ({ item }: { item: any }) => (
  <TouchableOpacity onPress={() => navigation.navigate('ChatDetail')}>
    <View style={styles.messageContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.messageInfo}>
        <Text style={styles.messageName}>{item.name}</Text>
        <Text style={styles.messageText} numberOfLines={1}>{item.message}</Text>
      </View>
      <View style={styles.messageMeta}>
        <Text style={styles.messageTime}>{item.time}</Text>
        {item.unread > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unread}</Text>
          </View>
        )}
      </View>
    </View>
  </TouchableOpacity>
);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="cog-outline" size={24} color="#00D6BE" />
        </TouchableOpacity>
      </View>

      {/* Messages List */}
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#1f1f1f',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  messageInfo: {
    flex: 1,
  },
  messageName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  messageText: {
    fontSize: 14,
    color: '#888',
  },
  messageMeta: {
    alignItems: 'flex-end',
  },
  messageTime: {
    fontSize: 12,
    color: '#888',
  },
  unreadBadge: {
    backgroundColor: '#00D6BE',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ChatScreen;
