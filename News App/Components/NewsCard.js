import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import moment from 'moment'

const { width, height } = Dimensions.get('window')

const NewsCard = ({ item }) => {
    return(
        <View style = {styles.cardView}>
            <Text style = {styles.title}>{item.title}</Text>
            <Text style = {styles.author}>{item.author}</Text>
            <Image style = {styles.image} source = {{uri: item.urlToImage}}/>
            <Text style = {styles.description}>{item.description}</Text>
            <Text style = {styles.publishedAt}>{new Date(item.publishedAt).toDateString()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView:{
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    title: {
        marginHorizontal: width * 0.04,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.04,
        fontSize: 15,
        color: 'gray'
    },
    image: {
        height: height / 4.2,
        marginLeft: width * 0.03,
        marginRight: width * 0.03,
        marginVertical: height * 0.02
    },
    description: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.08,
        color: 'gray',
        fontSize: 18
    },
    publishedAt: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.05,
        color: 'gray',
        fontSize: 12
    }
    
    
})

export default NewsCard