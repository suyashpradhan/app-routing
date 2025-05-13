import {Button, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export const Profile = ()=>{
    const navigation = useNavigation();
    return (
        <View>
            <Text>Profile</Text>
            <Button title="Notifications" onPress={()=>navigation.navigate("Notifications")}  />
        </View>
    )
}