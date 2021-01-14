import React, { useEffect } from 'react'
import axios from 'axios'
import Card from './Card'


export default function Followers(props) {
    console.log('props: ', props)
    debugger
    const { followers, followers_url } = props
    console.log('followers: ', followers)
    // console.log('showFollowers: ', showFollowers)
    console.log('followers_url: ', followers_url)

useEffect(() => {
    axios
        .get(followers_url)
        .then(res => {
            console.log('res2: ', res)
        })
        .catch(err => console.log('err: ', err))
        })
    return (
        <div>
        {
            followers.map(follower => {
               return <Card user={follower} />
            })
        }   
        </div>
    )
}
