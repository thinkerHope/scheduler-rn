import React from 'react';
import {Navigation} from 'react-native-navigation';

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

export const ButtonComponent = () => {
  return <Text>aaa</Text>;
};

const Home = (props: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.root}>
          <Text>Hello React Native Navigation 👋</Text>
          {/* <Button
            title="Push Settings Screen"
            color="#710ce3"
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'Settings',
                  options: {
                    topBar: {
                      title: {
                        text: 'Settings',
                      },
                      rightButtons: [
                        {
                          id: 'SettingButton',
                          component: {
                            name: 'ButtonComponent',
                            passProps: {
                              count: 0,
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              })
            }
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Home.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
