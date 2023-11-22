// Eric Grigor 100668121
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const AlbumListScreen = ({ navigation }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/albums'
        );
        setAlbums(response.data);
      } catch (error) {
        console.error(' ### Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  const renderAlbumItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('AlbumDetails', { albumId: item.id })
      }
    >
      <View style={{ padding: 15 }}>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 15, padding: 15 }}>
        Student: Eric Grigor -  Student ID: 100668121
      </Text>
      <FlatList
        data={albums}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAlbumItem}
      />
    </View>
  );
};

export default AlbumListScreen;
