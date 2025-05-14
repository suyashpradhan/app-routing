import {Button} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {Home} from "./navigation/screens/Home";
import {Notifications} from "./navigation/screens/Notifications";
import {Profile} from "./navigation/screens/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
       <NavigationContainer>
           <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle: {backgroundColor: "red"}}}>
               <Stack.Screen name="Home" component={Home} />
               <Stack.Screen name="Notifications" component={Notifications} />
               <Stack.Screen name="Profile" component={Profile} options={({route})=>({
                   title:`Profile ${route.params?.userId}`,
                   headerRight: () => (
                       <Button title="Info" onPress={() => alert('This is a button!')}/>
                   ),
                   headerTintColor:"white",
                   headerTitleStyle: {fontWeight:900}
               })} />
           </Stack.Navigator>
       </NavigationContainer>
    );
}

