import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { HeaderProps } from '../constants/types'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants'
import { router } from 'expo-router'


const { itemCount } = {itemCount: 6 }


export default function Header({title, showBack, showMenu, showCart, showSearch, showLogo}: HeaderProps) {
  return (
  <View className="h-16 w-full flex-row items-center px-4 bg-white">

    {/* Left */}
    <View className="flex-row items-center">
      {showBack && (
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      )}

      {showMenu && (
        <TouchableOpacity className="mr-4">
          <Ionicons name="menu-outline" size={28} color={COLORS.primary} />
        </TouchableOpacity>
      )}
    </View>

    {/* Center */}
    <View className="flex-1 items-center">
      {showLogo ? (
        <Image
          source={require('@/assets/logo.png')}
          style={{ width: 120, height: 40 }}
          resizeMode="contain"
        />
      ) : (
        title && (
          <Text className="text-xl font-bold text-primary">
            {title}
          </Text>
        )
      )}
    </View>

    {/* Right */}
    <View className="flex-row items-center gap-4">
      {showSearch && (
        <TouchableOpacity className="p-2 rounded-full bg-gray-200">
          <Ionicons
            name="search-outline"
            size={24}
            color={COLORS.primary}
          />
        </TouchableOpacity >
      )}

      {showCart && (
        <TouchableOpacity onPress={() => router.push('/(tabs)/cart')}>
          <Ionicons
            name="cart-outline"
            size={24}
            color={COLORS.primary}
          />
          <View className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 items-center justify-center">
            <Text className="text-white text-[10px] font-bold">{itemCount}</Text> 
          </View>
        </TouchableOpacity>
      )}
    </View>

  </View>
);
}