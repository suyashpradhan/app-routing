import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import Feed from "../screens/Feed";
import {Notifications} from "../screens/Notifications";
import {Users} from "../screens/Users";

const Tab = createBottomTabNavigator()

const TabsGroup = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed}
                        options={{tabBarIcon: () => <AntDesign name="home" size={24} color="black"/>}}/>
            <Tab.Screen name="Notifications" component={Notifications}
                        options={{tabBarIcon: () => <FontAwesome name="bell" size={24} color="black"/>}}/>
            <Tab.Screen name="Users" component={Users}
                        options={{tabBarIcon: () => <Feather name="users" size={24} color="black"/>}}/>
        </Tab.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <TabsGroup/>
        </NavigationContainer>
    )
}

export default Navigation