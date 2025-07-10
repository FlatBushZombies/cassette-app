import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Headphones } from '@/components/MusicIcons';
import { commonStyles } from '@/styles/commonStyles';

interface LoginScreenProps {
  onNavigateBack: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onNavigateBack }) => {
  return (
    <SafeAreaView style={commonStyles.container}>
     

      {/* Log in text */}
      <View style={commonStyles.loginHeader}>
        <TouchableOpacity onPress={onNavigateBack}>
          <Text style={commonStyles.loginText}>log in</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={commonStyles.content}>
        <View style={commonStyles.illustrationContainer}>
          <Headphones />
        </View>

        <View style={commonStyles.loginButtonsContainer}>
          <TouchableOpacity style={commonStyles.buttonContainer}>
            <LinearGradient
              colors={['#8B5CF6', '#A855F7', '#C084FC']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={commonStyles.gradientButton}
            >
              <View style={commonStyles.buttonContent}>
                <Text style={commonStyles.musicIcon}>🎵</Text>
                <Text style={commonStyles.buttonText}>Continue with Apple Music</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={commonStyles.buttonContainer}>
            <LinearGradient
              colors={['#8B5CF6', '#A855F7', '#C084FC']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={commonStyles.gradientButton}
            >
              <View style={commonStyles.buttonContent}>
                <Text style={commonStyles.spotifyIcon}>🎧</Text>
                <Text style={commonStyles.buttonText}>Continue with Spotify</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      {/* Home Indicator */}
      <View style={commonStyles.homeIndicator} />
    </SafeAreaView>
  );
};

export default LoginScreen;