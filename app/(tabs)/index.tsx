import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SpinningMusicCircle from '@/components/SpinningMusicCircle';
import { commonStyles } from '@/styles/commonStyles';

interface WelcomeScreenProps {
  onNavigateToLogin: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNavigateToLogin }) => {
  return (
    <SafeAreaView style={commonStyles.container}>
      

      {/* Main Content */}
      <View style={commonStyles.content}>
        <View style={commonStyles.illustrationContainer}>
          <SpinningMusicCircle />
        </View>

        <View style={commonStyles.textContainer}>
          <Text style={commonStyles.title}>Music is meant{'\n'}to be shared</Text>
          <Text style={commonStyles.subtitle}>
            A community for music sharing and recommendations.{'\n'}
            Real time music sharing.
          </Text>
        </View>

        <TouchableOpacity 
          style={commonStyles.buttonContainer}
          onPress={onNavigateToLogin}
        >
          <LinearGradient
            colors={['#8B5CF6', '#A855F7', '#C084FC']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={commonStyles.gradientButton}
          >
            <Text style={commonStyles.buttonText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Home Indicator */}
      <View style={commonStyles.homeIndicator} />
    </SafeAreaView>
  );
};

export default WelcomeScreen;