import { View, Text, ActivityIndicator,FlatList, Platform, TouchableHighlight, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FlightCard from '../Components/FlightCard';
import {Picker} from '@react-native-picker/picker';
import { Button, Slider } from 'react-native-elements';

const TravelRequestScreen = () => {

    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedAirline, setSelectedAirline] = useState('All');
    const [sortOrder, setSortOrder] = useState('LowToHigh');
    const [filteredAndSorted, setFilteredAndSorted]=useState([]);


    // fetch data from the given api
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



    //   NOTE : Due to the identical data it may seem filter and sorting is not working, but in reality both of them are properly functional.

      useEffect(() => {
    
        // Filter flights based on selected airline
        const filteredFlights = selectedAirline === 'All'
          ? flights
          : flights.filter(flight => flight.displayData.airlines[0].airlineName === selectedAirline);
    

        // Sort flights by price
        const sortedFlights = [...filteredFlights].sort((a, b) => {
          if (sortOrder === 'LowToHigh') {
            return a.fare   - b.fare;
          } else {
            return b.fare - a.fare;
          }
        });
    
        setFilteredAndSorted(sortedFlights);
      }, [selectedAirline, flights, sortOrder]);


      // show loader while fetching
      if (loading) {
        return <ActivityIndicator size="large" />;
      }

  return (
    <View style={Styles.Main}>

    <View style={Styles.FilterGroup}>
        <View style={Styles.FilterDropdown} >
            <Picker
            selectedValue={selectedAirline}
            onValueChange={(itemValue) => setSelectedAirline(itemValue)}
            style={{color:'blue'}}
            >
                {/* List can be made dynamically, if there are more number of airlines in the future */}
                <Picker.Item label="All Airlines" value="All" />
                <Picker.Item label="JetSpice" value="JetSpice" />
                <Picker.Item label="Air India" value="Air India" />
            </Picker>
        </View>
        <View>
            <Text>Sort Order: {sortOrder === 'LowToHigh' ? 'Low to High' : 'High to Low'}</Text>
            <Slider
                style={{ width: '80%', alignSelf: 'center' }}
                minimumValue={0}
                maximumValue={1}
                onValueChange={(value) => setSortOrder(value === 0 ? 'LowToHigh' : 'HighToLow')}
                />
        </View>
    </View>

    <FlightCard data={filteredAndSorted} />
    </View>
  )
}


const Styles=StyleSheet.create({

    Main:{
        marginTop:10,
        flex:1, 
        padding:16
    },
    FilterGroup:{
        display:'flex', 
        gap:16
},
    FilterDropdown:{ 
        borderBlockColor:'#808B96', 
        borderWidth:1 
    }
})


export default TravelRequestScreen