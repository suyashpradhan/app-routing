import {FlatList, Image, Pressable, SafeAreaView, StyleSheet, View,} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useLayoutEffect} from "react";
import {tweets} from "../data/data";
import Tweet from "../components/Tweet";

export default function Feed() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                    <Image
                        source={require("../assets/beto.jpeg")}
                        style={{width: 40, height: 40, borderRadius: 100, marginLeft: 15}}
                    />
                </Pressable>
            ),
        });
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList
                data={tweets}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={({item}) => {
                    return <Tweet tweet={item}/>;
                }}
                // ListHeaderComponent={() => (
                //   <View style={styles.header}>
                //     <Text style={styles.headerTitle}>New tweets available</Text>
                //   </View>
                // )}
                ListHeaderComponentStyle={{backgroundColor: "#ccc"}}
                ItemSeparatorComponent={() => <View style={styles.divider}/>}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    divider: {
        width: "100%",
        backgroundColor: "#DDD",
    },
    header: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1DA1F2",
    },
    footer: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    headerTitle: {
        color: "#FFFFFF",
        padding: 8,
        borderRadius: 12,
        fontSize: 12,
    },
    footerTitle: {
        padding: 8,
        borderRadius: 12,
        fontSize: 12,
    },
    emptyComponentTitle: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    emptyComponentSubtitle: {
        color: "#808080",
        padding: 8,
        fontSize: 14,
        textAlign: "center",
    },
    emptyComponent: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
});