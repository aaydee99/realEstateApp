// File: /screens/MapScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HamburgerIcon from '../assets/HamburgerIcon';
import BriefcaseIcon from '../assets/BriefCaseIcon';
import Modal from 'react-native-modal';
import moment from 'moment';

const MapScreen: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState<string>('Daily/Monthly');
  const [boundaryCoordinates, setBoundaryCoordinates] = useState([
    { latitude: 37.79025, longitude: -122.4314 },
    { latitude: 37.78825, longitude: -122.4324 },
    { latitude: 37.78725, longitude: -122.4334 },
    { latitude: 37.78525, longitude: -122.4344 },
    { latitude: 37.78425, longitude: -122.4354 },
    { latitude: 37.78625, longitude: -122.4374 },
  ]);

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const searchHistory = [
    "Apartment for Booking",
    "Villa for Booking",
    "Studio for Booking",
    "Chalet for Booking",
    "Lounge for Booking",
    "Tent for Booking",
    "Farm for Booking",
    "Hall for Booking",
  ];

  const handleButtonPress = (button: string) => {
    setSelectedButton(button);
  };

  const toggleDatePicker = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDates((prevDates) =>
      prevDates.includes(date) ? prevDates.filter((d) => d !== date) : [...prevDates, date]
    );
  };

  const renderCalendar = () => {
    const startOfMonth = moment().startOf('month');
    const daysInMonth = moment().daysInMonth();
    const weeks = [];
    let days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <TouchableOpacity
          key={i}
          style={[
            styles.calendarDay,
            selectedDates.includes(i) && styles.selectedDay,
          ]}
          onPress={() => handleDateSelect(i)}
        >
          <Text style={styles.calendarDayText}>{i}</Text>
        </TouchableOpacity>
      );

      if (i % 7 === 0 || i === daysInMonth) {
        weeks.push(
          <View key={i} style={styles.calendarWeek}>
            {days}
          </View>
        );
        days = [];
      }
    }

    return weeks;
  };

  return (
    <View style={styles.container}>
      {/* Search and Filter Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#888"
          onFocus={() => setDropdownVisible(true)}
          onBlur={() => setDropdownVisible(false)}
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

      {/* Dropdown for Search History */}
      {dropdownVisible && (
        <View style={styles.dropdownContainer}>
          <FlatList
            data={searchHistory}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.historyItem} onPress={() => setDropdownVisible(false)}>
                <Text style={styles.historyText}>{item}</Text>
                <MaterialCommunityIcons name="chevron-right" size={20} color="#676D75" />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}

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
        {/* Draw Boundary */}
        {boundaryCoordinates.length > 0 && (
          <Polygon
            coordinates={boundaryCoordinates}
            strokeColor="#00D6BE"
            fillColor="rgba(0, 214, 190, 0.2)"
            strokeWidth={2}
          />
        )}

        {/* Custom Markers */}
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} onPress={toggleDatePicker}>
          <View style={styles.marker}>
            <Text style={styles.markerText}>90K</Text>
          </View>
        </Marker>
        <Marker coordinate={{ latitude: 37.78925, longitude: -122.4314 }} onPress={toggleDatePicker}>
          <View style={styles.marker}>
            <Text style={styles.markerText}>40K</Text>
          </View>
        </Marker>
        <Marker coordinate={{ latitude: 37.78725, longitude: -122.4334 }} onPress={toggleDatePicker}>
          <View style={styles.marker}>
            <Text style={styles.markerText}>160K</Text>
          </View>
        </Marker>
      </MapView>

      {/* Floating List Button */}
      <TouchableOpacity style={styles.listButton}>
        <Text style={styles.listButtonText}>List View</Text>
        <HamburgerIcon width={15} height={15} fill="#fff" />
      </TouchableOpacity>

      {/* Bottom Buttons Above Tab Navigator */}
      <View style={styles.bottomButtons}>
        {['Daily/Monthly', 'For Rent', 'For Sale'].map((buttonLabel) => (
          <TouchableOpacity
            key={buttonLabel}
            style={[
              styles.bottomButton,
              selectedButton === buttonLabel ? styles.bottomButtonSelected : styles.bottomButtonUnselected,
            ]}
            onPress={() => handleButtonPress(buttonLabel)}
          >
            <Text
              style={[
                styles.bottomButtonText,
                selectedButton === buttonLabel ? styles.bottomButtonTextSelected : styles.bottomButtonTextUnselected,
              ]}
            >
              {buttonLabel}
            </Text>
            <BriefcaseIcon
              width={15}
              height={15}
              fill={selectedButton === buttonLabel ? '#00D6BE' : '#fff'}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Date Picker Modal */}
      <Modal isVisible={isDatePickerVisible} onBackdropPress={toggleDatePicker}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Pick Reservation Date</Text>
            <TouchableOpacity onPress={toggleDatePicker}>
              <MaterialCommunityIcons name="close" size={24} color="#00D6BE" />
            </TouchableOpacity>
          </View>
          <Text style={styles.modalMonth}>June</Text>
          <TouchableOpacity>
            <Text style={styles.modalWholeMonth}>Whole month</Text>
          </TouchableOpacity>
          <View style={styles.calendarContainer}>{renderCalendar()}</View>
          <TouchableOpacity style={styles.confirmButton} onPress={toggleDatePicker}>
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  dropdownContainer: {
    position: 'absolute',
    top: 100,
    left: 10,
    right: 10,
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 10,
    zIndex: 2,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#676D75',
  },
  historyText: {
    color: '#fff',
    fontSize: 16,
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
    bottom: 130,
    left: 10,
    backgroundColor: '#00D6BE',
    color: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    width: 100,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    gap: 10,
  },
  listButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  bottomButtonSelected: {
    backgroundColor: '#fff',
  },
  bottomButtonUnselected: {
    backgroundColor: '#00D6BE',
  },
  bottomButtonText: {
    marginRight: 5,
  },
  bottomButtonTextSelected: {
    color: '#00D6BE',
  },
  bottomButtonTextUnselected: {
    color: '#fff',
  },
  modalContainer: {
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalMonth: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  modalWholeMonth: {
    color: '#00D6BE',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  calendarContainer: {
    flexDirection: 'column',
  },
  calendarWeek: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  calendarDay: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 5,
  },
  selectedDay: {
    backgroundColor: '#00D6BE',
  },
  calendarDayText: {
    color: '#fff',
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: '#00D6BE',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default MapScreen;
