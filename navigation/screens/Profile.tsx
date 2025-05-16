import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./Home";
import { Notifications } from "./Notifications";

export const Profile = ({ route }: { route: any }) => {
  const navigation = useNavigation();

  const { userId } = route.params;

  const Tab = createBottomTabNavigator();

  return (
    <View>
      <Text>Profile</Text>
      <Text>{userId}</Text>
      <Button
        title="Notifications"
        onPress={() => navigation.navigate("Notifications")}
      />

      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Notifications" component={Notifications} />
      </Tab.Navigator>
    </View>
  );
};
