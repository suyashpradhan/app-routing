import {Pressable, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const Details = () => {
    const navigation = useNavigation();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{textAlign: "center", fontSize: 40}}>Details Page</Text>
            <Pressable style={{backgroundColor: "black", marginTop: 12, padding: 12, borderRadius: 4}}
                       onPress={() => navigation?.goBack()}>
                <Text style={{fontSize: 16, color: "white"}}>Home</Text>
            </Pressable>
        </View>
    )
}

export default Details;