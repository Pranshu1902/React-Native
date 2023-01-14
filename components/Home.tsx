import React from 'react';
import type {PropsWithChildren} from 'react';
import {Image} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

export function Home({navigation}): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#0a192f',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View style={styles.bgStyle}>
          <Image
            style={styles.headerImage}
            resizeMode={'cover'}
            source={require('../assets/computer.png/')}
          />
          <Text style={styles.nameHeader}>Pranshu Aggarwal</Text>
          <Text style={styles.basicTextStyle}>
            Tech enthusiast and self-taught programmer. Started learning to code
            as a hobby rather than a career focus. Familiar with a variety of
            technology including Django, React, Python, Javascript, Typescript,
            Java, etc.
          </Text>
          <Text style={styles.sicParvisMagnaStyle}>Sic Parvis Magna</Text>

          <View style={styles.buttons}>
            <Button title="Blogs" onPress={() => navigation.push('Blogs')} />
            <Button
              title="Projects"
              onPress={() => navigation.push('Projects')}
            />
          </View>

          <Section title="About Me">
            Hello, I'm Pranshu, a sophomore CS undergrad at VIT, Chennai. I am a
            self-taught programmer. Started learning to code as a hobby rather
            than a career focus. I build websites for people from all walks of
            life. Primarily using Django, MERN stack. I also write blogs.
          </Section>
          <Text style={styles.techTitle}>Tech & Tools</Text>
          <View style={styles.tech}>
            <Image
              style={styles.image}
              resizeMode={'cover'}
              source={require('../assets/tech/django.png/')}
            />
            <Image
              style={styles.image}
              resizeMode={'cover'}
              source={require('../assets/tech/python.png/')}
            />
            <Image
              style={styles.image}
              resizeMode={'cover'}
              source={require('../assets/tech/kotlin.png/')}
            />
            <Image
              style={styles.image}
              resizeMode={'cover'}
              source={require('../assets/tech/androidStudio.png/')}
            />
            <Image
              style={styles.image}
              resizeMode={'cover'}
              source={require('../assets/tech/nodejs.png/')}
            />
            <Image
              style={styles.image}
              resizeMode={'cover'}
              source={require('../assets/tech/React.png/')}
            />
            <Image
              style={styles.image}
              resizeMode={'cover'}
              source={require('../assets/tech/figma.png/')}
            />
          </View>
          <View style={styles.end} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#66fcf1',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  nameHeader: {
    fontSize: 48,
    fontWeight: '700',
    color: '#66fcf1',
  },
  headerImage: {
    width: 300,
    height: 300,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: '#0a192f',
  },
  bgStyle: {
    padding: 10,
    backgroundColor: '#0a192f',
    color: '#66fcf1',
  },
  sicParvisMagnaStyle: {
    color: '#01d293',
    fontSize: 24,
    paddingLeft: 20,
    paddingBottom: 10,
  },
  techTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    paddingTop: 40,
    paddingLeft: 20,
  },
  tech: {
    display: 'flex',
    paddingTop: 10,
    flexDirection: 'row',
    width: '100%',
    rowGap: 10,
    columnGap: 12,
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
  },
  basicTextStyle: {
    padding: 20,
  },
  end: {
    paddingTop: 50,
  },
  buttons: {
    display: 'flex',
    gap: 20,
  },
});

export default Home;
