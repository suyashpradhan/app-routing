import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./screens/Home";
import Details from "./screens/Details";


const Stack = createNativeStackNavigator()

const RootStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle:
                {backgroundColor: "red"},
            headerTintColor: "white",
        }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Details" component={Details} options={{headerBackVisible: true}}/>
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <RootStack/>
        </NavigationContainer>
    );
}

