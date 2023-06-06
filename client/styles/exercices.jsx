import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
},

contentContainer: {
    paddingTop: 20,
    paddingBottom: 20,
},

title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFFFFF',
},

description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFFFFF',
},

cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#191c1a',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    paddingLeft: 10,
},

dayContainer: {
    alignItems: 'center',
    marginRight: 10,
},

dayText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
},

dayNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
},

divider: {
    width: 1,
    height: '80%',
    backgroundColor: '#FFFFFF',
},

descriptionContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
},

titleText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
},

descriptionText: {
    fontSize: 12,
    marginBottom: 5,
    color: '#FFFFFF',
},

buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
},

checkButton: {
    marginRight: 10,
    backgroundColor: '#0a8a1b',
    padding: 5,
    borderRadius: 5,
},

timesButton: {
    backgroundColor: '#FF0000',
    padding: 5,
    borderRadius: 5,
},
});