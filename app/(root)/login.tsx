import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Headphones } from '@/components/MusicIcons';
import { commonStyles } from '@/styles/commonStyles';
import * as WebBrowser from 'expo-web-browser'


interface LoginScreenProps {
  onNavigateBack: () => void;
}

const SPOTIFY_AUTH_ENDPOINT = 'https://cassette-tapes.onrender.com/login';

const LoginScreen: React.FC<LoginScreenProps> = ({ onNavigateBack }) => {
  const [isLoading, setIsLoading] = React.useState(false);

   const handleLogin = async () => {
    setIsLoading(true);
    try {
      // Open the Spotify authentication URL
      const result = await WebBrowser.openAuthSessionAsync(
        SPOTIFY_AUTH_ENDPOINT,
        'https://cassette-tapes.onrender.com/callback'
      );
      
      if (result.type === 'success') {
        // If authentication was successful, navigate to dashboard
        Alert.alert('Authentication successed')
      } else {
        Alert.alert('Authentication cancelled', 'You need to authenticate with Spotify to use this app.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to Spotify. Please try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
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

          <TouchableOpacity style={commonStyles.buttonContainer}
          onPress={handleLogin}
          >
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