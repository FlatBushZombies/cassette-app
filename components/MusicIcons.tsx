import React from 'react';
import Svg, { Path, Circle, Rect, Line, Defs, RadialGradient, Stop } from 'react-native-svg';

interface IconProps {
  rotation: number;
  scale?: number;
}

// 3D Music Note Component
export const MusicNote3D: React.FC<IconProps> = ({ rotation, scale = 1 }) => (
  <Svg width={40 * scale} height={40 * scale} viewBox="0 0 40 40" style={{ transform: [{ rotate: `${rotation}deg` }] }}>
    <Defs>
      <RadialGradient id="noteGradient" cx="0.3" cy="0.3" r="0.8">
        <Stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <Stop offset="70%" stopColor="#e0e7ff" stopOpacity="0.7" />
        <Stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.5" />
      </RadialGradient>
    </Defs>
    <Path 
      d="M12 28 C12 30.2 13.8 32 16 32 C18.2 32 20 30.2 20 28 C20 25.8 18.2 24 16 24 C13.8 24 12 25.8 12 28 Z" 
      fill="url(#noteGradient)" 
      stroke="#ffffff" 
      strokeWidth="1"
    />
    <Path 
      d="M20 28 L20 12 L28 10 L28 26" 
      stroke="url(#noteGradient)" 
      strokeWidth="3" 
      strokeLinecap="round"
    />
    <Circle cx="28" cy="26" r="4" fill="url(#noteGradient)" stroke="#ffffff" strokeWidth="1" />
  </Svg>
);

// 3D Headphone Component
export const Headphone3D: React.FC<IconProps> = ({ rotation, scale = 1 }) => (
  <Svg width={40 * scale} height={40 * scale} viewBox="0 0 40 40" style={{ transform: [{ rotate: `${rotation}deg` }] }}>
    <Defs>
      <RadialGradient id="headphoneGradient" cx="0.3" cy="0.3" r="0.8">
        <Stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <Stop offset="70%" stopColor="#e0e7ff" stopOpacity="0.7" />
        <Stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.5" />
      </RadialGradient>
    </Defs>
    <Path 
      d="M8 15 Q20 5 32 15" 
      stroke="url(#headphoneGradient)" 
      strokeWidth="3" 
      fill="none"
      strokeLinecap="round"
    />
    <Circle cx="10" cy="20" r="6" fill="url(#headphoneGradient)" stroke="#ffffff" strokeWidth="1" />
    <Circle cx="30" cy="20" r="6" fill="url(#headphoneGradient)" stroke="#ffffff" strokeWidth="1" />
  </Svg>
);

// 3D Speaker Component
export const Speaker3D: React.FC<IconProps> = ({ rotation, scale = 1 }) => (
  <Svg width={40 * scale} height={40 * scale} viewBox="0 0 40 40" style={{ transform: [{ rotate: `${rotation}deg` }] }}>
    <Defs>
      <RadialGradient id="speakerGradient" cx="0.3" cy="0.3" r="0.8">
        <Stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <Stop offset="70%" stopColor="#e0e7ff" stopOpacity="0.7" />
        <Stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.5" />
      </RadialGradient>
    </Defs>
    <Rect x="12" y="8" width="16" height="24" rx="2" fill="url(#speakerGradient)" stroke="#ffffff" strokeWidth="1" />
    <Circle cx="20" cy="16" r="3" fill="none" stroke="#ffffff" strokeWidth="1.5" />
    <Circle cx="20" cy="24" r="5" fill="none" stroke="#ffffff" strokeWidth="1.5" />
    <Circle cx="20" cy="24" r="2" fill="#ffffff" opacity="0.6" />
  </Svg>
);

// 3D Microphone Component
export const Microphone3D: React.FC<IconProps> = ({ rotation, scale = 1 }) => (
  <Svg width={40 * scale} height={40 * scale} viewBox="0 0 40 40" style={{ transform: [{ rotate: `${rotation}deg` }] }}>
    <Defs>
      <RadialGradient id="micGradient" cx="0.3" cy="0.3" r="0.8">
        <Stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <Stop offset="70%" stopColor="#e0e7ff" stopOpacity="0.7" />
        <Stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.5" />
      </RadialGradient>
    </Defs>
    <Rect x="17" y="8" width="6" height="12" rx="3" fill="url(#micGradient)" stroke="#ffffff" strokeWidth="1" />
    <Path d="M14 18 Q14 24 20 24 Q26 24 26 18" stroke="url(#micGradient)" strokeWidth="2" fill="none" />
    <Line x1="20" y1="24" x2="20" y2="30" stroke="url(#micGradient)" strokeWidth="2" />
    <Line x1="16" y1="30" x2="24" y2="30" stroke="url(#micGradient)" strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

// Large Headphones Component for Login Screen
export const Headphones: React.FC = () => (
  <Svg width={250} height={300} viewBox="0 0 250 300" fill="none">
    <Defs>
      <RadialGradient id="headphoneMainGradient" cx="0.3" cy="0.3" r="0.8">
        <Stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <Stop offset="70%" stopColor="#e0e7ff" stopOpacity="0.7" />
        <Stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.5" />
      </RadialGradient>
    </Defs>
    {/* Headband */}
    <Path 
      d="M50 80 Q125 20 200 80" 
      stroke="url(#headphoneMainGradient)" 
      strokeWidth={4} 
      fill="none" 
    />
    <Path 
      d="M55 85 Q125 30 195 85" 
      stroke="url(#headphoneMainGradient)" 
      strokeWidth={2} 
      fill="none" 
    />
    
    {/* Left ear cup */}
    <Circle cx={70} cy={120} r={35} stroke="url(#headphoneMainGradient)" strokeWidth={3} fill="rgba(255,255,255,0.1)" />
    <Circle cx={70} cy={120} r={25} stroke="url(#headphoneMainGradient)" strokeWidth={2} fill="none" />
    
    {/* Right ear cup */}
    <Circle cx={180} cy={120} r={35} stroke="url(#headphoneMainGradient)" strokeWidth={3} fill="rgba(255,255,255,0.1)" />
    <Circle cx={180} cy={120} r={25} stroke="url(#headphoneMainGradient)" strokeWidth={2} fill="none" />
    
    {/* Headband padding */}
    <Path 
      d="M60 75 Q125 25 190 75" 
      stroke="url(#headphoneMainGradient)" 
      strokeWidth={8} 
      fill="none" 
      strokeLinecap="round"
    />
    
    {/* Cable with liquid curves */}
    <Path 
      d="M70 155 Q80 180 90 200 Q100 220 110 240 Q120 260 125 280 Q130 300 140 320 Q150 340 160 360" 
      stroke="url(#headphoneMainGradient)" 
      strokeWidth={3} 
      fill="none" 
    />
  </Svg>
);