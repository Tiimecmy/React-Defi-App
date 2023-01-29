import React from 'react'
import search from '../assets/icons/search.svg'
import { ReactComponent as TelegramIcon } from '../assets/icons/telegram.svg'
import { ReactComponent as TwitterIcon } from '../assets/icons/twitter.svg'
import { ReactComponent as DiscordIcon } from '../assets/icons/discord.svg'
import { ReactComponent as YoutubeIcon } from '../assets/icons/youtube.svg'
import hero from "../assets/hero.svg"

const HeroSection = () => {
  return <div className='hero-section-container'>
    <div className="hero-info-wrapper">
      <div className="hero-info-text">
        <h1>
          The <span className='highlighted'>Decentralized</span> Cross-Chain Exchange
        </h1>
        <p className="hero-info-description">
          It is long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout.
        </p>
        <div className="search-container">
          <div className="search-input-wrapper">
            <img className="search" src={search} alt="search" />
            <input className="search-input" placeholder="Search 5000+ tokens across 9 Chains..."></input>
          </div>
          <button className="search-bttn primary">
            <span className="start-swapping">Start Swapping</span>
          </button>
        </div>
        <div className="social-links-container">
          <div className="social-links">
            <a href="/">
              <TelegramIcon />
            </a>
            <a href="/">
              <TwitterIcon />
            </a>
            <a href="/">
              <YoutubeIcon />
            </a>
            <a href="/">
              <DiscordIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-image-container">
      <div>
        <img src={hero} alt="blockchain" className="hero-img" />
      </div>
    </div>
  </div>

}

export default HeroSection;
