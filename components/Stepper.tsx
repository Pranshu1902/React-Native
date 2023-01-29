import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Button, Alert} from 'react-native';

export function Stepper({route, navigation}): JSX.Element {
  //   const {Headers} = props.headers;
  const Headers: any[] = [
    {title: '1', content: 'This is page 1'},
    {title: '2', content: 'This is page 2'},
    {title: '3', content: 'This is page 3'},
  ];

  const [activeState, setActiveState] = useState(0);

  return (
    <View style={styles.page}>
      <View style={styles.steppet}>
        {Headers.map((header: any, index) => (
          <View
            key={index}
            style={
              index === activeState
                ? styles.stepperBackgroundActive
                : styles.stepperBackground
            }>
            <Text
              style={styles.stepperText}
              onPress={() => setActiveState(index)}>
              {header.title}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.contentView}>
        <Text style={styles.body}>{Headers[activeState].content}</Text>
      </View>
      <Button
        title="Submit"
        onPress={() => {
          if (activeState !== Headers.length - 1) {
            Alert.alert('Error', 'Please read the entire page');
          } else {
            Alert.alert('Success', 'You have successfully submitted the page.');
          }
        }}
      />
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
    fontSize: 10,
    color: '#66fcf1',
    fontWeight: '600',
  },
  subHeading: {
    fontSize: 20,
    fontWeight: '300',
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: '#0a192f',
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
  stepperBackgroundActive: {
    fontSize: 20,
    backgroundColor: 'white',
    color: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 40,
    alignContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderWidth: 5,
    borderColor: 'white',
  },
  stepperBackground: {
    fontSize: 20,
    backgroundColor: '#808080',
    color: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 40,
    alignContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderWidth: 5,
    borderColor: '#808080',
  },
  contentView: {
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 100,
  },
  body: {
    fontSize: 20,
    color: 'white',
    alignContent: 'center',
    alignItems: 'center',
  },
  stepperText: {
    fontSize: 20,
    color: 'black',
    alignContent: 'center',
    alignItems: 'center',
  },
  steppet: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'space-between',
    padding: 20,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 40,
  },
});
