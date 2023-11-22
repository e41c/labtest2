import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const AlbumDetailsScreen = ({ route }) => {
  const { albumId } = route.params;
  const [albumDetails, setAlbumDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/albums/${albumId}`
        );
        setAlbumDetails(response.data);

        // Fetch user details using the userId from the album
        const userResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${response.data.userId}`
        );
        setUserDetails(userResponse.data);
      } catch (error) {
        console.error('### Error fetching album details:', error);
      }
    };

    fetchAlbumDetails();
  }, [albumId]);

  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 18, padding: 16 }}>
        Student: Eric Grigor - Student ID: 100668121
      </Text>
      {albumDetails && userDetails && (
        <View style={{ padding: 16 }}>
          <Text>ID: {albumDetails.id}</Text>
          <Text>Title: {albumDetails.title}</Text>
          {/* Display user details */}
          <Text>User ID: {userDetails.id}</Text>
          <Text>User Name: {userDetails.name}</Text>
        </View>
      )}
    </View>
  );
};

export default AlbumDetailsScreen;
