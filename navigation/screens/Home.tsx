import {Button, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export const Home = ()=>{
    const navigation  = useNavigation();

    return (
        <View>
        <Text>Home</Text>
        <Button title="Profile" onPress={()=> navigation.navigate('Profile', {userId:"143535232324232"})} />
        </View>
    )
}
