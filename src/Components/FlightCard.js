import { FlatList, View, Text  } from 'react-native';
import React from 'react'
import { Button, Card } from 'react-native-elements';

const FlightCard = ({data}) => {
    const renderItem = ({ item }) => (
        <Card style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 10 }}>
            <Card.Title>{item.displayData.source.airport.cityCode}   TO   {item.displayData.destination.airport.cityCode}</Card.Title>
            <Card.Divider/>
          <Text>{`Airline:   ${item.displayData.airlines[0].airlineName} - ${item.displayData.airlines[0].flightNumber}`}</Text>
          <Text>{`Flight ID: ${item.id}`}</Text>
          <Text>{`Fare: ${item.fare}`}</Text>
          <Text>{`From: ${item.displayData.source.airport.cityName}`}</Text>
          <Text>{`Departure Time: ${item.displayData.source.depTime}`}</Text>
          <Text>{`Stop Info: ${item.displayData.stopInfo}`}</Text>
          <Text>{`Destination: ${item.displayData.destination.airport.cityName}`}</Text>
          <Text>{`Arrival Time: ${item.displayData.destination.arrTime}`}</Text>
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

export default FlightCard