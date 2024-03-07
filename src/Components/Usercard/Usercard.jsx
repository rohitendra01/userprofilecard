import React from 'react'
import './Usercard.css'
import user_image from '../Image/image.jpg'
export const Usercard = () => {
  return (
    <div class="upc">
    <div class="gradient"></div>
    <div class="profile-icon">
        <img src={user_image} >
        <div class="profile-title">Zenin Maki</div>
        <div class="profile-sedcription">I,m the most powerfull warrior in Zenin Clan.</div>
        <div class="profile-button">
            <a href="mailto:">Contact Me</a>
        </div>
    </div>
</div>
  )
}
