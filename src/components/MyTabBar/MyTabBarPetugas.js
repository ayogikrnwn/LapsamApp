import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TabItemPetugas from '../TabItem/TabItemPetugas'

const MyTabBarPetugas = ({ state, descriptors, navigation }) => {
 

    return (
      <View style={{  flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 6,
      backgroundColor: 'white',
      borderRadius: 20}}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TabItemPetugas
            key={index}
            title={label}
            active={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
          );
        })}
      </View>
    );
  }
export default MyTabBarPetugas

const styles = StyleSheet.create({})