import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, FlatList } from 'react-native';
import { Button, TextInput } from 'react-native';

export default function History() {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    
    const [result, setResult] = useState('');

    const [data, setData] = useState([]);

    const count1 = () => {
        const result = Number(text1) + Number(text2);
        setResult(result);
        setData([...data, { key: result }]);
        Alert.alert(`Yhteenlaskettu summa on ${result}`);
    }

    const count2 = () => {
        const result = Number(text1) - Number(text2);
        setResult(result);
        setData();
        Alert.alert(`Yhteenlaskettu summa on ${result}`);
    }



    return (
        <View style={styles.container}>
            <Text>History</Text>
            <FlatList
                data={data}
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
    }

});
