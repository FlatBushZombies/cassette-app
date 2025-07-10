import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
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
    alignItems: 'center',
    width: '100%',
    marginBottom: 60,
  },
  title: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 42,
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    opacity: 0.8,
    textAlign: 'center',
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