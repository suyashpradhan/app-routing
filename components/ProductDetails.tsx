import {ActivityIndicator, Image, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {Product} from "../types/Product";

export const ProductDetails = ({itemId}: { itemId: any }) => {
    const [singleProduct, setSingleProduct] = useState<Product>();
    const [loadingStatus, setLoadingStatus] = useState(false);

    useEffect(() => {
        setLoadingStatus(true);
        (async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${itemId}`);
            const data = await response.json()
            setSingleProduct(data)
            setLoadingStatus(false);
        })()
    }, [])

    if (loadingStatus) {
        return (
            <View style={{flex: 1, justifyContent: "center"}}>
                <ActivityIndicator size="small" color="#0000ff"/>
            </View>
        )
    }

    return (
        <View style={styles.card}>
            <Image source={{uri: singleProduct?.image}} style={styles.productImage}/>
            <View style={styles.cardContent}>
                <Text style={styles.productTitle}>{singleProduct?.title}</Text>
                <Text style={styles.productPrice}>${singleProduct?.price.toFixed(2)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: "100%",
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#dadce0',
        borderRadius: 10,
        marginVertical: 10,
        padding: 15,
        alignItems: 'center',
    },
    productImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginRight: 15,
    },
    cardContent: {
        flex: 1,
    },
    productTitle: {
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 22,
        color: '#888888',
        marginBottom: 10,
    },
});