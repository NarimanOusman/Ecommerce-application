import { View, Text } from 'react-native'
import React from 'react'
import {  Tabs } from 'expo-router'
import { Feather, Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../../constants';



export default function TabLayout() {
  return (
    <Tabs
  screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: COLORS.primary, // active icon color
    tabBarInactiveTintColor: '#c8c8db', //  inactive icon color
    tabBarShowLabel: false, // hide the icon name label
    tabBarStyle: {
        backgroundColor: '#fff', // background color of the tab bar
        borderTopWidth: 1.2, // remove the top border
        borderTopColor: '#F0F0F0', // color of the top border
        height: 85, // height of the tab bar
        paddingTop: 1.5,
        paddingBottom: 10, // padding at the bottom of the tab bar
    }
  }}
>
        
        <Tabs.Screen  name='index' options= {{
            tabBarIcon: ({ color, focused})=> <Ionicons  name ={focused ? 'home' : 'home-outline'} size={30} color={color} />
        }} />


        <Tabs.Screen name='cart' options={{tabBarIcon: ({ color, focused }) => (<Ionicons name={focused ? 'cart' : 'cart-outline'} size={30} color={color} />
        )
        }}/>

        
        
        <Tabs.Screen  name='favorites' options= {{
            tabBarIcon: ({ color, focused})=> <Ionicons  name ={focused ? 'heart' : 'heart-outline'} size={30} color={color} />
        }}/>


        <Tabs.Screen  name='profile' options= {{
            tabBarIcon: ({ color, focused})=> <Ionicons  name ={focused ? 'person' : 'person-outline'} size={30} color={color} />
        }}/>



    </Tabs>    
  )
}