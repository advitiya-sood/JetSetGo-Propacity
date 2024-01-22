import { View, Text, ActivityIndicator,FlatList, Platform, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FlightCard from '../Components/FlightCard';
import {Picker} from '@react-native-picker/picker';

const TravelRequestScreen = () => {

    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedAirline, setSelectedAirline] = useState('All');


    useEffect(() => {
        axios.get('https://api.npoint.io/4829d4ab0e96bfab50e7')
          .then(response => {
            setFlights(response.data.data.result);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching flight data:', error);
            setLoading(false);
          });
      }, []);


      const filteredFlights = selectedAirline === 'All'
    ? flights
    : flights.filter(flight => flight.displayData.airlines[0].airlineName === selectedAirline);


      if (loading) {
        return <ActivityIndicator size="small" />;
      }

  return (
    <View style={{marginTop:50}}>
        <View style={{ borderBlockColor:'#808B96', borderWidth:1 }} >
        <Picker
        selectedValue={selectedAirline}
        onValueChange={(itemValue) => setSelectedAirline(itemValue)}
        >
        <Picker.Item label="All Airlines" value="All" />
        <Picker.Item label="JetSpice" value="JetSpice" />
        <Picker.Item label="Air India" value="Air India" />
      </Picker>
        </View>

    <FlightCard data={filteredFlights} />
    </View>
  )
}

export default TravelRequestScreen