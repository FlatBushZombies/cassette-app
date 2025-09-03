import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';
import {useRef, useState } from 'react';
import { commonStyles } from '@/styles/commonStyles';
import Swiper from 'react-native-swiper';
import { onboarding } from '@/constants';
import { router } from 'expo-router';


interface WelcomeScreenProps {
  onNavigateToLogin: () => {

  };
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNavigateToLogin }) => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView style={commonStyles.container}>
        <TouchableOpacity
        onPress={() => {
          router.replace("/(root)/HomeScreen");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity> {/* Main Content */}
      <View style={commonStyles.content}>
        <View style={commonStyles.illustrationContainer}>
          <Swiper
  ref={swiperRef}
  loop={false}
  style={{ height: 400 }} // ensure Swiper has height
  dot={<View style={{ width: 32, height: 4, marginHorizontal: 4, backgroundColor: '#E2E8F0', borderRadius: 2 }} />}
  activeDot={<View style={{ width: 32, height: 4, marginHorizontal: 4, backgroundColor: '#0286FF', borderRadius: 2 }} />}
  onIndexChanged={(index) => setActiveIndex(index)}
>
  {onboarding.map((item) => (
    <View
      key={item.id}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Image
        source={item.image}
        style={{ width: '100%', height: 300 }}
        resizeMode="contain"
      />

      {/* Title with Jakarta-Bold */}
      <Text
        style={{
          color: 'white',
          fontSize: 24,
          textAlign: 'center',
          marginTop: 20,
          fontFamily: 'Jakarta-Bold',
        }}
      >
        {item.title}
      </Text>

      {/* Description */}
      <Text
        style={{
          color: 'white',
          fontSize: 16,
          textAlign: 'center',
          marginTop: 10,
          fontFamily: 'Jakarta-SemiBold', // optional
        }}
      >
        {item.description}
      </Text>
    </View>
  ))}
</Swiper>
    
        </View>

        <View style={commonStyles.textContainer}>
        </View>

        <TouchableOpacity 
          style={commonStyles.buttonContainer}
          onPress={onNavigateToLogin}
        >
          <LinearGradient
            colors={['#FFD002', '#FFD002', '#FFD002']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={commonStyles.gradientButton}
          >
            <Link  href='/login'>
            <Text style={commonStyles.buttonText}>Get Started</Text>
            </Link>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Home Indicator */}
      <View style={commonStyles.homeIndicator} />
    </SafeAreaView>
  );
};

export default WelcomeScreen;