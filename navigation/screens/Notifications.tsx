import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Notifications</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};
