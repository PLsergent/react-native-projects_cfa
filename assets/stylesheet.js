import { StyleSheet } from 'react-native'; 

export const styles = StyleSheet.create({

  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  timerContainer: {
    borderRadius: 5,
    borderWidth : 2,
    marginBottom: 15,
    borderColor: "#9046cf"
  },
  timer: {
    fontSize: 50,
    padding: 10
  },
  timerEnd: {
    fontSize: 50,
    padding: 10,
    color:'#ef476f'
  },

  labelRed: {
    fontSize: 50,
    marginTop: 20,
    marginBottom: 25,
    alignSelf: 'center',
    color: '#ef476f'
  },
  labelGreen: {
    fontSize: 50,
    marginTop: 20,
    marginBottom: 25,
    alignSelf: 'center',
    color: '#389c40'
  },

  button: {
    marginHorizontal: 5,
    marginBottom: 20,
    backgroundColor: "#612cad",
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 22,
    color: 'white'
  },

  menu: {
    marginLeft: 10,
    marginRight: 10,
  },
  dropdownTextStyle: {
    fontSize: 20
  },
  textStyle: {
    fontSize: 20,
  },

  dropdownButtonStyle: {
    width: 30,
    backgroundColor: "#dddddd",
    borderRadius: 5,
    alignItems: 'center'
  },
  menuContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  menuLabel: {
    fontSize: 20
  }
});