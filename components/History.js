import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';



export default function History(props) {


    return (
        <View style={styles.container}>
            <Text style={{ marginTop: 10, marginBottom: 10 }}>History</Text>
            <FlatList
                data={props.data}
                renderItem={({ item }) => <Text>{item.key}</Text>}
                //keyExtractor={(item, index) => index.toString()}
            />

            <StatusBar style="auto" />
        </View>
    );
}



    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
    
        },
        input: {
            width: '20%',
            borderColor: 'gray',
            borderWidth: 1,
            marginTop: 5,
        },
    
        row: {
            flexDirection: "row",
            justifyContent: 'space-evenly',
            //alignItems: 'space-evenly',
            width: '20%',
        },
    
    
        button: {
            marginTop: 10,
        },
     
      });

