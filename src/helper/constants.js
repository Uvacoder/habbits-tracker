import React from 'react'
import { RiHome7Fill, RiCalendar2Fill, RiPriceTag3Fill, RiSearch2Line } from 'react-icons/ri'

export const PRIORITY_OPTIONS = [
    { value: 0, label: 'Low'},
    { value: 1, label: 'High'}
]

const size = 20
const color = '#C6A567' 

export const NAVIGATION = [
    { label: 'Home', path:'/', icon: <RiHome7Fill size={size} color={color} /> },
    { label: 'Calendar', path:'/calendar', icon: <RiCalendar2Fill size={size} color={color} /> },
    { label: 'Tags', path:'/tags', icon: <RiPriceTag3Fill size={size} color={color} /> },
    { label: 'Search', path:'/search', icon: <RiSearch2Line size={size} color={color} /> },
]