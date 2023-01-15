import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export function Counter(): JSX.Element {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.page}>
      <Text style={styles.heading}>Counter</Text>
      <View style={styles.center}>
        <Text style={styles.subHeading}>{value}</Text>
      </View>
      <View style={styles.button}>
        <View style={styles.buttonDepth}>
          <Button title="Press Me" onPress={() => setValue(value + 1)} />
          <Button title="Reset" onPress={() => setValue(0)} color={'#FF0000'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#0a192f',
    padding: 10,
    minHeight: 800,
  },
  heading: {
    fontSize: 40,
    color: '#66fcf1',
    fontWeight: '600',
  },
  subHeading: {
    fontSize: 20,
    fontWeight: '300',
  },
  center: {
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    paddingTop: 20,
    fontSize: 20,
  },
  button: {
    padding: '10%',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonDepth: {
    width: 200,
    gap: 20,
  },
});
