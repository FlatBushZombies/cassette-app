import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ActivityIndicator
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Headphones } from '@/components/MusicIcons';
import { commonStyles } from '@/styles/commonStyles';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import * as SecureStore from 'expo-secure-store';

interface LoginScreenProps {
  onNavigateBack: () => void;
  onLoginSuccess: () => void;
}

// Spotify OAuth credentials
const SPOTIFY_CLIENT_ID = "1d0e4aa878834922a51b0e15c736ff10";
const SPOTIFY_REDIRECT_URI = AuthSession.makeRedirectUri();
const SPOTIFY_SCOPES = [
  'user-read-email',
  'user-read-private',
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played'
].join('%20');

// Spotify authentication endpoints
const SPOTIFY_AUTH_ENDPOINT = `https://accounts.spotify.com/authorize?response_type=token&client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}&scope=${SPOTIFY_SCOPES}`;

const LoginScreen: React.FC<LoginScreenProps> = ({ onNavigateBack, onLoginSuccess }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSpotifyLogin = async () => {
    setIsLoading(true);
    try {
      // Open Spotify authentication directly
      const result = await WebBrowser.openAuthSessionAsync(
        SPOTIFY_AUTH_ENDPOINT,
        SPOTIFY_REDIRECT_URI
      );

      if (result.type === 'success') {
        // Extract access token from URL
        const url = result.url;
        const tokenMatch = url.match(/access_token=([^&]*)/);
        const expiresInMatch = url.match(/expires_in=([^&]*)/);
        
        if (tokenMatch && expiresInMatch) {
          const accessToken = tokenMatch[1];
          const expiresIn = parseInt(expiresInMatch[1], 10);
          
          // Store the token securely
          await SecureStore.setItemAsync('spotify_access_token', accessToken);
          
          // Calculate expiration time
          const expirationTime = new Date().getTime() + (expiresIn * 1000);
          await SecureStore.setItemAsync('spotify_token_expiration', expirationTime.toString());
          
          Alert.alert('Success', 'Successfully connected to Spotify!');
          onLoginSuccess();
        } else {
          Alert.alert('Error', 'Failed to retrieve access token from Spotify.');
        }
      } else {
        Alert.alert('Authentication cancelled', 'You need to authenticate with Spotify to use this app.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to Spotify. Please try again.');
      console.error('Spotify auth error:', error);
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

          <TouchableOpacity 
            style={[commonStyles.buttonContainer, { opacity: isLoading ? 0.6 : 1 }]}
            onPress={handleSpotifyLogin}
            disabled={isLoading}
          >
            <LinearGradient
              colors={['#1DB954', '#1ED760', '#1ED760']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={commonStyles.gradientButton}
            >
              <View style={commonStyles.buttonContent}>
                {isLoading ? (
                  <ActivityIndicator color="white" size="small" />
                ) : (
                  <>
                    <Text style={commonStyles.spotifyIcon}>🎧</Text>
                    <Text style={commonStyles.buttonText}>Continue with Spotify</Text>
                  </>
                )}
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