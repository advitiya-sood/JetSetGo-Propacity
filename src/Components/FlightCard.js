import { FlatList, View, Text, StyleSheet  } from 'react-native';
import React from 'react'
import { Button, Card } from 'react-native-elements';

const FlightCard = ({data}) => {

    // format the iso string to local string.
    const formatTime = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleString();
      };

    // render item component supplied to the flat list, can be modified as per the requirement.
    const renderItem = ({ item }) => (
        <Card style={Styles.CardStyle}>
            <Card.Title>{item.displayData.source.airport.cityCode}   TO   {item.displayData.destination.airport.cityCode}</Card.Title>
            
            <Card.Divider/>
          <Text>{`Flight ID: ${item.id}`}</Text>
          <Text>{`Airline:   ${item.displayData.airlines[0].airlineName} - ${item.displayData.airlines[0].flightNumber}`}</Text>
          <Text>{`Fare: ${item.fare}`}</Text>
          <Text>{`From: ${item.displayData.source.airport.cityName}`}</Text>
          <Text>{`Departure Time: ${formatTime(item.displayData.source.depTime)}`}</Text>
          <Text>{`Stop Info: ${item.displayData.stopInfo}`}</Text>
          <Text>{`Destination: ${item.displayData.destination.airport.cityName}`}</Text>
          <Text>{`Arrival Time: ${formatTime(item.displayData.destination.arrTime)}`}</Text>
          <Text>{`Total Duration: ${item.displayData.totalDuration}`}</Text>

          <Button title="Book Now" size="sm" type="clear" onPress={() =>{}} />
        </Card>
      );


      return (
        <View style={{ flex: 1, paddingTop: 50 }} > 

            <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            />
        </View>
      );
    };


const Styles=StyleSheet.create({
    CardStyle:{ 
        borderBottomWidth: 1, 
        borderBottomColor: '#ccc', 
        padding: 10 
    }

})


export default FlightCard