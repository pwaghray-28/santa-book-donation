import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import{DrawerItems} from 'react-navigation-drawer'
export default class CustomSideBar extends React.Component{
    render(){
        return(
            <View style = {{flex:1}}>
            <View style = {styles.drawerItemsContainer}>
            <DrawerItems {...this.props} />
            </View>
            </View>

        )
    }
}
var styles = StyleSheet.create({ container : { flex:1 }, drawerItemsContainer:{ flex:0.8 }, logOutContainer : { flex:0.2, justifyContent:'flex-end', paddingBottom:30 }, logOutButton : { height:30, width:'100%', justifyContent:'center', padding:10 }, logOutText:{ fontSize: 30, fontWeight:'bold' } })
