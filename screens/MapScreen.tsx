// File: /screens/MapScreen.tsx

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MapScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Search and Filter Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Apartment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Villa</Text>
        </TouchableOpacity>
      </View>

      {/* Information Text */}
      <View style={styles.infoContainer}>
        <MaterialCommunityIcons name="information-outline" size={20} color="#fff" />
        <Text style={styles.infoText}>59 of 285 shown. Zoom in to see more.</Text>
      </View>

      {/* Google Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Custom Markers */}
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
          <View style={styles.marker}>
            <Text style={styles.markerText}>90K</Text>
          </View>
        </Marker>
        <Marker coordinate={{ latitude: 37.78925, longitude: -122.4314 }}>
          <View style={styles.marker}>
            <Text style={styles.markerText}>40K</Text>
          </View>
        </Marker>
        <Marker coordinate={{ latitude: 37.78725, longitude: -122.4334 }}>
          <View style={styles.marker}>
            <Text style={styles.markerText}>160K</Text>
          </View>
        </Marker>
      </MapView>

      {/* Floating List Button */}
      <TouchableOpacity style={styles.listButton}>
        <MaterialCommunityIcons name="format-list-bulleted" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Bottom Buttons Above Tab Navigator */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>Daily/Monthly</Text>
          <MaterialCommunityIcons name="briefcase-outline" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>For Rent</Text>
          <MaterialCommunityIcons name="briefcase-outline" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>For Sale</Text>
          <MaterialCommunityIcons name="briefcase-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: 50,
    left: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 10,
    zIndex: 1,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 5,
    paddingLeft: 10,
  },
  filterButton: {
    marginLeft: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#00D6BE',
    borderRadius: 5,
  },
  filterButtonText: {
    color: '#fff',
  },
  infoContainer: {
    position: 'absolute',
    top: 120,
    left: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6c5ce7',
    borderRadius: 15,
    padding: 10,
    zIndex: 1,
  },
  infoText: {
    marginLeft: 5,
    color: '#fff',
  },
  map: {
    flex: 1,
  },
  marker: {
    backgroundColor: '#00D6BE',
    padding: 5,
    borderRadius: 5,
  },
  markerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listButton: {
    position: 'absolute',
    bottom: 150,
    left: 10,
    backgroundColor: '#1f1f1f',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 10,
  },
  bottomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00D6BE',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  bottomButtonText: {
    color: '#fff',
    marginRight: 5,
  },
});

export default MapScreen;
