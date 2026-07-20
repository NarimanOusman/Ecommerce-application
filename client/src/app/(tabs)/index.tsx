import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/header'
import { BANNERS } from '@/assets/assets'
import { COLORS } from '../../../constants'
import { useRoute } from 'expo-router'

const width = Dimensions.get('window').width

export default function Home() {
  // Account for the screen padding (px-4 is 16px left + 16px right = 32px total)
  const bannerWidth = width - 16 * 2; // 16px padding on each side
  const router = useRoute();
  const [activeBannerIndex, setActiveBannerIndex] = React.useState(0);
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <Header showMenu showCart showLogo showSearch />

      <ScrollView
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
      >
        {/* Banner Slider */}
        <ScrollView
           horizontal
  pagingEnabled
  showsHorizontalScrollIndicator={false}
  className="mt-4"
  scrollEventThrottle={16}
  onScroll={(event) => {
    const offsetX = event.nativeEvent.contentOffset.x;

    const index = Math.round(offsetX / (bannerWidth + 15));

    setActiveBannerIndex(index);
  }}
        >
          {BANNERS.map((banner) => (
            <View
              key={banner.id}
              style={{
                width: bannerWidth,
                height: 190,
                marginRight: 15,
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              {/* Banner Image */}
              <Image
                source={{ uri: banner.image }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                resizeMode="cover"
              />

              {/* Dark Overlay */}
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.35)",
                }}
              />

              {/* Banner Content */}
              <View
                style={{
                  position: "absolute",
                  left: 15,
                  bottom: 10,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 25,
                    fontWeight: "700",
                  }}
                >
                  {banner.title}
                </Text>

                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    marginTop: 4,
                  }}
                >
                  {banner.subtitle}
                </Text>

                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    backgroundColor: "#fff",
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    borderRadius: 20,
                    alignSelf: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    Get Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
        {/*pagination dots*/}
        <View className="flex-row justify-center mt-2 gap-2">
          {BANNERS.map((_, index) => (
            <View
              key={index}
              className={`w-2 h-2 rounded-full ${index ===  activeBannerIndex ? 'w-6 bg-blue-500'  : 'w-2 h-2 rounded-full bg-gray-300 '}`} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}