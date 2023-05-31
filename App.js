import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDumbbell, faChartBar, faUser } from '@fortawesome/free-solid-svg-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { styles } from './styles/app.jsx';
import * as SQLite from 'expo-sqlite';

// -----------------
//   TELAS DA NAV
// -----------------

let icon;
import TreinosScreen from './screens/Treinos.jsx';
import ResultadoScreen from './screens/Resultado.jsx';
import PerfilScreen from './screens/Perfil.jsx';

const Tab = createBottomTabNavigator();

// -----------------
//   ICONS DE NAV
// -----------------

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarButton: (props) => (
            <TouchableOpacity {...props} style={styles.tabButton}/>
          ),
          
          tabBarIcon: ({ color, size }) => {
            if(route.name === 'Treinos') {
              icon = faDumbbell;
            } else if(route.name === 'Resultado') {
              icon = faChartBar;
            } else if (route.name === 'Perfil') {
              icon = faUser;
            }
            return <FontAwesomeIcon icon={icon} size={size} color={color} />;
          },

          headerShown: false,
        })}

        tabBarOptions={{
          showLabel: false,
          style: styles.tabBar,
        }}>
        
        <Tab.Screen name="Treinos" component={TreinosScreen} />
        <Tab.Screen name="Resultado" component={ResultadoScreen} />
        <Tab.Screen name="Perfil" component={PerfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// -----------------
//     DATABASE
// -----------------

const db = SQLite.openDatabase('treinos.db');

db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS treinos (calorias INT DEFAULT 0, tempo INT DEFAULT 0);',
    [],
    () => {
      console.log('Tabela criada com sucesso');
      
      tx.executeSql(
        'INSERT INTO treinos (calorias, tempo) VALUES (0, 0);',
        [],
        () => {
          console.log('Valores iniciais inseridos com sucesso');
        },
        (_, error) => {
          console.log('Erro ao inserir valores iniciais:', error);
        }
      );
    },
    (_, error) => {
      console.log('Erro ao criar tabela:', error);
    }
  );
});

export default BottomNavigation;