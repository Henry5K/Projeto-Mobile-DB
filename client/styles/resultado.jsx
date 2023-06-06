import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 20,
    color: '#fff',
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '80%',
    borderWidth: 3,
    borderColor: 'lightgreen'
  },
  
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconText: {
    fontSize: 24,
    color: '#fff',
    marginTop: 10,
  },

  iconLabel: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },

  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
  },

  button: {
    backgroundColor: '#28a745',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});