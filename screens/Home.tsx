import {Pressable, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{textAlign: "center", fontSize: 40}}>Home Page</Text>
            <Pressable style={{backgroundColor: "black", marginTop: 12, padding: 12, borderRadius: 4}}
                       onPress={() => navigation?.navigate('Details')}>
                <Text style={{fontSize: 16, color: "white"}}>Details Page</Text>
            </Pressable>
        </View>
    )
}

export default Home;