import React from 'react'
import{createDrawerNavigator} from 'react-navigation-drawer'
import{AppTabNavigator} from './AppTabNavigator'
import CustomSideBar from './CustomSideBar'
export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator}
},
{contentComponent:CustomSideBar},
{initialRouteName:'Home'}
)