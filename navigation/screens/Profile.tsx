import {Button, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export const Profile = ({route}:{route: any})=>{
    const navigation = useNavigation();

    const {userId}  = route.params;

    return (
        <View>
            <Text>Profile</Text>
            <Text>{userId}</Text>
            <Button title="Notifications" onPress={()=>navigation.navigate("Notifications",{id: userId})}  />
        </View>
    )
}