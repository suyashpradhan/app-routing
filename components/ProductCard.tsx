import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Product} from "../types/Product";
import {useNavigation} from "@react-navigation/native";

export const ProductCard = ({item}: { item: Product }) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', {itemId: item.id})}>
            <View style={styles.card}>
                <Image source={{uri: item.image}} style={styles.productImage}/>
                <View style={styles.cardContent}>
                    <Text style={styles.productTitle}>{item.title}</Text>
                    <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
                    <TouchableOpacity style={styles.cartButton}>
                        <Text style={styles.cartButtonText}>View Product</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#dadce0',
        borderRadius: 10,
        marginVertical: 10,
        padding: 15,
        alignItems: 'center',
    },
    productImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginRight: 15,
    },
    cardContent: {
        flex: 1,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 14,
        color: '#888888',
        marginBottom: 10,
    },
    cartButton: {
        backgroundColor: '#ff6347',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    cartButtonText: {
        color: '#ffffff',
        fontSize: 14,
        textAlign: 'center',
    },
});
