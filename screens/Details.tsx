import {Pressable, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const Details = () => {
    const navigation = useNavigation();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{textAlign: "center", fontSize: 40}}>Details Page</Text>
            <Pressable style={{backgroundColor: "black", marginTop: 12, padding: 12, borderRadius: 4}}
                       onPress={() => navigation?.push('Details')}>
                <Text style={{fontSize: 16, color: "white"}}>Go to Details Page Again...</Text>
            </Pressable>
            <Pressable style={{backgroundColor: "black", marginTop: 12, padding: 12, borderRadius: 4}}
                       onPress={() => navigation?.popTo('Detail"')}>
                <Text style={{fontSize: 16, color: "white"}}>Go to Home</Text>
            </Pressable>
            <Pressable style={{backgroundColor: "black", marginTop: 12, padding: 12, borderRadius: 4}}
                       onPress={() => navigation?.popToTop()}>
                <Text style={{fontSize: 16, color: "white"}}>Go to first screen</Text>
            </Pressable>
            <Pressable style={{backgroundColor: "black", marginTop: 12, padding: 12, borderRadius: 4}}
                       onPress={() => navigation?.goBack()}>
                <Text style={{fontSize: 16, color: "white"}}>Home</Text>
            </Pressable>
        </View>
    )
}

export default Details;