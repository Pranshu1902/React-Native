import React from 'react';
import {Text, View, StyleSheet, Image, Button, Alert} from 'react-native';

export function Blog1({route, navigation}): JSX.Element {
  const {title} = route.params;
  return (
    <View style={styles.page}>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.subHeading}>Text sent through pages</Text>
      <View style={styles.center}>
        <Image
          style={styles.image}
          resizeMode={'cover'}
          source={require('../../assets/project.png/')}
        />
      </View>
      <Button
        title="Learn More"
        onPress={() =>
          Alert.alert('Work in progress', 'This blog is not ready yet')
        }
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
    fontSize: 40,
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
});
