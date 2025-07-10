import { Image } from 'expo-image';
import {
  Platform,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle, Rect, Line } from 'react-native-svg';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const CassetteTape = () => (
  <Svg width={200} height={140} viewBox="0 0 200 140" fill="none">
    {/* Main cassette body */}
    <Rect x={20} y={30} width={160} height={80} rx={8} stroke="#ffffff" strokeWidth={2} fill="none" />
    
    {/* Top section with diagonal lines */}
    <Path d="M60 30 L140 30 L120 50 L80 50 Z" stroke="#ffffff" strokeWidth={1.5} fill="none" />
    <Line x1={70} y1={35} x2={90} y2={35} stroke="#ffffff" strokeWidth={1} />
    <Line x1={75} y1={40} x2={95} y2={40} stroke="#ffffff" strokeWidth={1} />
    <Line x1={80} y1={45} x2={100} y2={45} stroke="#ffffff" strokeWidth={1} />
    
    {/* Tape reels */}
    <Circle cx={70} cy={75} r={15} stroke="#ffffff" strokeWidth={2} fill="none" />
    <Circle cx={130} cy={75} r={15} stroke="#ffffff" strokeWidth={2} fill="none" />
    
    {/* Inner reel details */}
    <Circle cx={70} cy={75} r={8} stroke="#ffffff" strokeWidth={1} fill="none" />
    <Circle cx={130} cy={75} r={8} stroke="#ffffff" strokeWidth={1} fill="none" />
    
    {/* Side controls */}
    <Circle cx={35} cy={45} r={4} stroke="#ffffff" strokeWidth={1} fill="none" />
    <Circle cx={35} cy={65} r={4} stroke="#ffffff" strokeWidth={1} fill="none" />
    <Circle cx={35} cy={85} r={4} stroke="#ffffff" strokeWidth={1} fill="none" />
    <Circle cx={35} cy={105} r={4} stroke="#ffffff" strokeWidth={1} fill="none" />
    
    {/* Right side controls */}
    <Rect x={165} y={40} width={8} height={4} stroke="#ffffff" strokeWidth={1} fill="none" />
    <Rect x={165} y={50} width={8} height={4} stroke="#ffffff" strokeWidth={1} fill="none" />
    <Rect x={165} y={60} width={8} height={4} stroke="#ffffff" strokeWidth={1} fill="none" />
    
    {/* Play button triangle */}
    <Path d="M100 95 L110 100 L100 105 Z" stroke="#ffffff" strokeWidth={1.5} fill="none" />
    
    {/* Corner screws */}
    <Circle cx={30} cy={40} r={2} stroke="#ffffff" strokeWidth={1} fill="none" />
    <Circle cx={170} cy={40} r={2} stroke="#ffffff" strokeWidth={1} fill="none" />
    <Circle cx={30} cy={100} r={2} stroke="#ffffff" strokeWidth={1} fill="none" />
    <Circle cx={170} cy={100} r={2} stroke="#ffffff" strokeWidth={1} fill="none" />
  </Svg>
);


export default function HomeScreen() {
  return (
        <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
     

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.illustrationContainer}>
          <CassetteTape />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Music is meant{'\n'}to be shared</Text>
          <Text style={styles.subtitle}>
            A community for music sharing and recommendations.{'\n'}
            Real time music sharing.
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.buttonContainer}
          onPress={() => setCurrentScreen('login')}
        >
          <LinearGradient
            colors={['#8B5CF6', '#A855F7', '#C084FC']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientButton}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Home Indicator */}
      <View style={styles.homeIndicator} />
    </SafeAreaView>
   ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  time: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statusIcon: {
    color: '#ffffff',
    fontSize: 12,
  },
  loginHeader: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  loginText: {
    color: '#4ADEAA',
    fontSize: 16,
    fontWeight: '400',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  textContainer: {
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 60,
  },
  title: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 42,
    marginBottom: 16,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    opacity: 0.8,
  },
  loginButtonsContainer: {
    width: '100%',
    gap: 16,
    marginBottom: 60,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  gradientButton: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#8B5CF6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
  },
  musicIcon: {
    fontSize: 20,
  },
  spotifyIcon: {
    fontSize: 20,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#ffffff',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 8,
  },
});
