import React, { useEffect } from 'react';
import { View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MusicNote3D, Headphone3D, Speaker3D, Microphone3D } from './MusicIcons';
import { spinningCircleStyles } from '../styles/spinningCircleStyles';

const SpinningMusicCircle: React.FC = () => {
  const spinValue = new Animated.Value(0);
  const pulseValue = new Animated.Value(1);

  useEffect(() => {
    // Spinning animation
    const spinAnimation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: true,
      })
    );

    // Pulse animation
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1.1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseValue, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    );

    spinAnimation.start();
    pulseAnimation.start();

    return () => {
      spinAnimation.stop();
      pulseAnimation.stop();
    };
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={spinningCircleStyles.container}>
      {/* Glass morphism background circle */}
      <View style={spinningCircleStyles.glassCircle}>
        <LinearGradient
          colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)']}
          style={spinningCircleStyles.glassGradient}
        />
      </View>

      {/* Main spinning circle */}
      <Animated.View 
        style={[
          spinningCircleStyles.mainCircle,
          {
            transform: [
              { rotate: spin },
              { scale: pulseValue }
            ]
          }
        ]}
      >
        <LinearGradient
          colors={['rgba(139, 92, 246, 0.3)', 'rgba(168, 85, 247, 0.2)', 'rgba(192, 132, 252, 0.1)']}
          style={spinningCircleStyles.circleGradient}
        />
        
        {/* Inner glow circle */}
        <View style={spinningCircleStyles.innerGlow} />
      </Animated.View>

      {/* Music Icons positioned around the circle */}
      <Animated.View 
        style={[
          spinningCircleStyles.iconContainer,
          { transform: [{ rotate: spin }] }
        ]}
      >
        <View style={[spinningCircleStyles.iconPosition, { top: -20, left: '50%', marginLeft: -20 }]}>
          <MusicNote3D rotation={0} scale={1.2} />
        </View>
        
        <View style={[spinningCircleStyles.iconPosition, { top: '25%', right: -20 }]}>
          <Headphone3D rotation={90} scale={1.1} />
        </View>
        
        <View style={[spinningCircleStyles.iconPosition, { bottom: -20, left: '50%', marginLeft: -20 }]}>
          <Speaker3D rotation={180} scale={1.2} />
        </View>
        
        <View style={[spinningCircleStyles.iconPosition, { top: '25%', left: -20 }]}>
          <Microphone3D rotation={270} scale={1.1} />
        </View>
        
        {/* Additional smaller icons */}
        <View style={[spinningCircleStyles.iconPosition, { top: '10%', right: '15%' }]}>
          <MusicNote3D rotation={45} scale={0.8} />
        </View>
        
        <View style={[spinningCircleStyles.iconPosition, { bottom: '10%', left: '15%' }]}>
          <Headphone3D rotation={225} scale={0.8} />
        </View>
      </Animated.View>

      {/* Center dot with glow */}
      <View style={spinningCircleStyles.centerDot}>
        <LinearGradient
          colors={['#ffffff', 'rgba(255,255,255,0.8)']}
          style={spinningCircleStyles.centerDotGradient}
        />
      </View>
    </View>
  );
};

export default SpinningMusicCircle;