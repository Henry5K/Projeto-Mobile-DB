import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  titleContainer: {
    marginBottom: 20,
  },

  title: {
    marginTop: 25,
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '900',
    marginBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  
  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center'
  },

cardContainer: {
  marginBottom: 20,
  width: '95%',
  alignSelf: 'center',
},

  card: {
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'white',
    overflow: 'hidden',
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  cardBullet: {
    color: '#FFFFFF',
    fontSize: 20,
    marginRight: 5,
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
  },

  cardDescription: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 20,
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  cardFooterText: {
    color: '#FFFFFF',
    fontSize: 14,
  },

  icon: {
    fontSize: 16,
    marginRight: 5,
    color: '#FFFFFF',
  },

  startButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 10,
    width: '100%',
  },

  startButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
});