import React from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';

export function Blogs(): JSX.Element {
  return (
    <View style={styles.page}>
      <Text style={styles.heading}>Blogs</Text>
      <Text style={styles.subHeading}>Some of my latests blogs</Text>
      <View style={styles.center}>
        <Image
          style={styles.image}
          resizeMode={'cover'}
          source={require('../assets/blog.png/')}
        />
        <Text style={styles.text}>
          Artificial Intelligence has been around for a while now, especially
          for times like now when chatGPT is on everyone’s mind. In this blog we
          will explore how you can start your journey into the field of A.I.
          History
        </Text>
      </View>
      <Button title="Read" />
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
