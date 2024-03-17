import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Import the icon component

function StoryCards({ title, iconName, comment }) {
  return (
    <View style={{ width: 300, height: 200, backgroundColor: '#344966', justifyContent: 'center', gap: 10, marginBottom: 10, borderRadius: 10, marginLeft: 20 }}>
      <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
        {/* Render the icon component */}
        <FontAwesome5 name={iconName} size={20} color="#ffffff" style={{ marginRight: 10 }} />
        <Text>{title}</Text>
      </View>
      <View style={{ borderRadius: 10, justifyContent: 'center', padding: 10, borderColor: '#f6bd60', marginLeft: 20 }}>
        <Text style={{ color: '#f6bd60' }}>{comment}</Text>
      </View>
    </View>
  );
}

export default StoryCards;
