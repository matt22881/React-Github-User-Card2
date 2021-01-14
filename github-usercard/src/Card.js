import React, { useState } from 'react'
import Followers from './Followers'
import Following from './Following'

export default function Card(props) {
    // const [showFollowers, setShowFollowers] = useState(false)
    // const [showFollowing, setShowFollowing] = useState(false)
    if (!props.user) return null;

    const { name, login, location, html_url, followers, followers_url, following, following_url, bio, avatar_url } = props.user

console.log('props.user: ', props.user)
return (
        <div>
            <div className="card-info">
                    <h2 className="name">{name}</h2>
                    <img src={avatar_url} width='200px' />
                    <p className="username">{login}</p>
                    <p>Location: {location}</p>
                    <p>Profile:
                    <a href={html_url}>{html_url}</a>
                    <p>Bio: {bio}</p>
                    </p>
                    <p>Followers: {followers} {/*<button onClick={setShowFollowers(!showFollowers)}>Followers</button>*/}</p>
                    <p>Following: {following} {/*<button onClick={setShowFollowing(!showFollowing)}>Following</button>*/}</p>
            </div>
        </div>
    )
}
                