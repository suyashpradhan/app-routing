import {FlatList, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {Product} from "../types/Product";
import {ProductCard} from "./ProductCard";

export const ProductListing = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=5')
            const data = await response.json()
            setProducts(data)
        })()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.productContainerText}>Products({products.length})</Text>
            {products.length > 0 && (
                <FlatList
                    data={products}
                    renderItem={({item}) => <ProductCard item={item}/>}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        paddingHorizontal: 20,
    },
    productContainer: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
    },
    productContainerText: {
        marginTop: 12,
        fontWeight: "bold",
        fontSize: 18,
    },
    cartButton: {
        borderWidth: 1,
        borderColor: "red",
        paddingVertical: 6,
        paddingHorizontal: 18,
        borderRadius: 5
    },
    cartButtonText: {
        color: "black",
    },
})