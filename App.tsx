import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Details from "./screens/Details";
import {ProductScreen} from "./screens/ProductScreen";

const Stack = createNativeStackNavigator()

const RootStack = () => {
    return (
        <Stack.Navigator initialRouteName="Products" screenOptions={{
            headerStyle: {
                backgroundColor: "white"
            },
            headerTintColor: "black",
        }}>
            <Stack.Screen name="Products" options={{title: "Products"}} component={ProductScreen}/>
            <Stack.Screen name="Details" component={Details} options={({route}) => ({
                headerBackVisible: true, title: `Product Details`
            })}/>
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

