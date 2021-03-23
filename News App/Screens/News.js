import React, { useState, useEffect }from 'react'
import { View, StyleSheet, Text, Button, FlatList } from 'react-native'
import NewsCard from '../Components/NewsCard'
import newsAPI from '../apis/News'

const News = ({ navigation }) => {

    const [news, setNews] = useState([])

    useEffect(() => {
        getNewsFromAPI()
    },[])

    // const newsResponse = async() => {
    //     const response = await newsAPI.get('top-headlines?sources=bbc-news&apiKey=d5f8685d2f7443d8948a6eda5818061b')
    //     console.log(response.data)
    // }

    function getNewsFromAPI(){
        newsAPI.get('top-headlines?sources=bbc-news&apiKey=d5f8685d2f7443d8948a6eda5818061b')
        .then(function(response){
            setNews(response.data)
        })
        .catch(function(error) {
            console.log(error)
        })
    }
    
    if(!news) {
        return null
    }

    return(
        <View>
            <FlatList data = {news.articles}
                keyExtractor = {(item, index) => 'key' + index} 
                renderItem = {({ item }) => {
                    return <NewsCard item = {item}/>
                }} 
            />
        </View>
    )
}

export default News