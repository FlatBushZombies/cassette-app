export  const LoginScreen = () => (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
  

      {/* Log in text */}
      <View style={styles.loginHeader}>
        <TouchableOpacity onPress={() => setCurrentScreen('welcome')}>
          <Text style={styles.loginText}>log in</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.illustrationContainer}>
          <Headphones />
        </View>

        <View style={styles.loginButtonsContainer}>
          <TouchableOpacity style={styles.buttonContainer}>
            <LinearGradient
              colors={['#8B5CF6', '#A855F7', '#C084FC']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientButton}
            >
              <View style={styles.buttonContent}>
                <Text style={styles.musicIcon}>🎵</Text>
                <Text style={styles.buttonText}>Continue with Apple Music</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer}>
            <LinearGradient
              colors={['#8B5CF6', '#A855F7', '#C084FC']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientButton}
            >
              <View style={styles.buttonContent}>
                <Text style={styles.spotifyIcon}>🎧</Text>
                <Text style={styles.buttonText}>Continue with Spotify</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      {/* Home Indicator */}
      <View style={styles.homeIndicator} />
    </SafeAreaView>
  );
