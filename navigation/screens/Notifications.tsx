import {Button, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export const Notifications = ({route}:{route: any})=>{
    const navigation = useNavigation();

    const {id} = route.params;
    return (
        <View>
            <Text>Notifications</Text>
            <Text>{id}</Text>
            <Button title="Back" onPress={() => navigation.goBack()}/>
        </View>
    )
}