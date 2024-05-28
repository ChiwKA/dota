import styles from "./page.module.css";

// Test RESTful API (mockapi)
async function NewsCapsule() {
  const res = await fetch('https://65f129e5da8c6584131cf886.mockapi.io/data', {
    method: 'GET',
    headers: {'content-type':'application/json'}
  })
  if (!res.ok) {
    throw new Error('failed to fetch data')
  }
  const data = await res.json()

  return (
    <div className={styles.newsCapsules}>
      {data.map((capsule: any) => (
        <a key={capsule.id} href={capsule.link} className={styles.blogCapsule}>
          <div className={styles.capsuleContent} style={{backgroundImage: `url('${capsule.backgroundUrl}')`}}>
            <div className={styles.capsuleText}>
              <div className={styles.capsuleDate}>{capsule.date}</div>
              <div className={styles.capsuleTitle}>{capsule.title}</div>
              <div className={styles.capsuleDesc}>{capsule.description}</div>
            </div>
          </div>
          <div className={styles.bottomFade}></div>
        </a>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main className={styles.homepage}>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <a className={styles.navLogo} href="/"></a>
          <div className={styles.navMenu}>
            <div className={styles.dropdown}>
              <div className={styles.navItem + " " + styles.gameDropdown}>
                <div>Game</div>
                <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_over.png"
                  className={styles.dropdownArrow}
                />
              </div>
              <div className={styles.gameDropdownContent}>
                <a className={styles.gameDropdownContentText} href="https://www.dota2.com/patches">
                  Patches
                </a>
                <a className={styles.gameDropdownContentText} href="https://www.dota2.com/news/updates">
                  Gameplay Updates
                </a>
                <a className={styles.gameDropdownContentText} href="https://www.dota2.com/pastupdates">
                  Previous Updates
                </a>
              </div>
            </div>
            <a className={styles.navItem} href="https://www.dota2.com/heroes">
              Heroes
            </a>
            <a className={styles.navItem} href="https://www.dota2.com/news">
              News
            </a>
            <a className={styles.navItem} href="https://www.dota2.com/esports/ti12">
              Esports
            </a>
          </div>
          <div className={styles.accountLanguage}>
            <a className={styles.navLogin} href="">
              Login
            </a>
            <div className={styles.languageWrapper}>
              <div className={styles.languageIcon}></div>
              <span>Select Language</span>
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_over.png"
                className={styles.dropdownArrow}
              />
            </div>
          </div>
          <a className={styles.navButton} href="https://store.steampowered.com/app/570/Dota_2/">
            <div className={styles.navSteamLogo}></div>
            <span className={styles.navButtonText}>Play for Free</span>
          </a>
        </nav>
        <div className={styles.videoContainer}>
          <video
            className={styles.video}
            preload="auto"
            loop
            autoPlay
            playsInline
            muted
          >
            <source
              type="video/webm"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
            />
            <source
              type="video/mp4"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4"
            />
          </video>
        </div>
        <div
          className={styles.quoteContainer}
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          <div>
            <div className={styles.quoteText}>
              “A Modern Multiplayer Masterpiece.”
            </div>
            <div className={styles.quoteCredit}>- Destructoid</div>
          </div>
          <div className={styles.verticalBar}></div>
          <div className={styles.playButtonWrapper}>
            <a href="https://store.steampowered.com/app/570/Dota_2/" className={styles.playButton}>
              <div className={styles.steamLogo}></div>
              <div className={styles.rightSide}>
                <div className={styles.playforfree}>play for free</div>
                <div className={styles.download}>download on steam</div>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.bottomFade}></div>
      </div>
      <div className={styles.news}>
        <div className={styles.newsWrapper}>
          <div className={styles.newsHeading}>
            <div className={styles.latestNews}>Latest News</div>
            <a className={styles.viewAll} href="https://www.dota2.com/news">
              View All
              <div className={styles.rightArrow}></div>
            </a>
          </div>
          <NewsCapsule />
          {/* <div className={styles.newsCapsules}>
            <a href="https://www.dota2.com/newsentry/6127782523022178336" className={styles.blogCapsule}>
              <div className={styles.capsuleContent} style={{backgroundImage: "url('https://clan.cloudflare.steamstatic.com/images/3703047/8256a7d97ebed00f8e77c4834f9306d08976e15c.png')"}}>
                <div className={styles.capsuleText}>
                  <div className={styles.capsuleDate}>March 22, 2024</div>
                  <div className={styles.capsuleTitle}>Gameplay Patch 7.35d And Matchmaking Features</div>
                  <div className={styles.capsuleDesc}>We've just released Gameplay Patch 7.35d (Chen had it coming), and with it a new set of features. Over the last year or so, we've taken a number of visible actions against users...</div>
                </div>
              </div>
              <div className={styles.bottomFade}></div>
            </a>
            <a href="https://www.dota2.com/newsentry/4115798034511524384" className={styles.blogCapsule}>
              <div className={styles.capsuleContent} style={{backgroundImage: "url('https://clan.cloudflare.steamstatic.com/images/3703047/040f3cd7b283452e7939cf075284647905cbb900.png')"}}>
                <div className={styles.capsuleText}>
                  <div className={styles.capsuleDate}>March 9, 2024</div>
                  <div className={styles.capsuleTitle}>The International 2024</div>
                  <div className={styles.capsuleDesc}>War banners are being washed clean of blood stains and scorch marks. Trumpets are being tested for their ability to sound the imminent approach of battle.</div>
                </div>
              </div>
              <div className={styles.bottomFade}></div>
            </a>
            <a href="https://www.dota2.com/newsentry/4169840594114934858" className={styles.blogCapsule}>
              <div className={styles.capsuleContent} style={{backgroundImage: "url('https://clan.cloudflare.steamstatic.com/images/3703047/005df03fc8e0a1f0370db32eedf47f877aef119e.png')"}}>
                <div className={styles.capsuleText}>
                  <div className={styles.capsuleDate}>March 6, 2024</div>
                  <div className={styles.capsuleTitle}>Dota Plus Update — Spring 2024 (And Dota Labs)</div>
                  <div className={styles.capsuleDesc}>As Spring blooms to life around us, it transports us here on the Dota team to the springs of yore, when the world was new and vibrant.</div>
                </div>
              </div>
              <div className={styles.bottomFade}></div>
            </a>
          </div> */}
        </div>
      </div>
      <div className={styles.battle}>
        <div className={styles.fadeContainer + ' ' + styles.fadeTop}></div>
        <div className={styles.battleBG}>
          <img className={styles.battleImg} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/radiant_dire5.jpg" alt="battle" />
          <img className={styles.battleImgMobile} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/battle_mobile.jpg" alt="battleMobile" />
        </div>
        <div className={styles.battleText}>
          <div
            className={styles.headerText}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <span className={styles.minor}>Join the</span>
            <br />
            Battle of the Ancients
          </div>
          <div className={styles.verticalBar}></div>
          <div className={styles.bodyText}>
            Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic to discover. It's completely free to play and always will be – start defending your ancient now.
            <a className={styles.standardButton} href="https://www.dota2.com/news">See What's new</a>
          </div>
        </div>
      </div>
      <div className={styles.choose}>
        <div 
          className={styles.headerText + ' ' + styles.chooseHeader}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <span className={styles.minor}>Who will you</span>
          <br />
          Choose?
        </div>
        <div className={styles.verticalBar}></div>
        <div className={styles.bodyText}>
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and limitlessly diverse. Unleash incredible abilities and devastating ultimates on your way to victory.
          <a className={styles.standardButton} href="https://www.dota2.com/heroes">View all Heroes</a>
        </div>
        <div className={styles.heroGrid}>
          <div className={styles.heroGridRow} style={{width: '5300px', animationDuration:'100s'}}>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="" />
                <div className={styles.heroName}>Lich</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a><a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="" />
                <div className={styles.heroName}>Lich</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
          </div>
          <div className={styles.heroGridRow} style={{width: '5300px', animationDuration:'120s', animationDirection:'reverse'}}>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="" />
                <div className={styles.heroName}>Lich</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a><a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="" />
                <div className={styles.heroName}>Lich</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
          </div>
          <div className={styles.heroGridRow} style={{width: '5300px', animationDuration:'137s'}}>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="" />
                <div className={styles.heroName}>Lich</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a><a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="" />
                <div className={styles.heroName}>Lich</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
          </div>
          <div className={styles.heroGridRow} style={{width: '5300px', animationDuration:'87s', animationDirection:'reverse'}}>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="" />
                <div className={styles.heroName}>Lich</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a><a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="" />
                <div className={styles.heroName}>Lich</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
          </div>
          <div className={styles.heroGridRow} style={{width: '5300px', animationDuration:'130s'}}>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="" />
                <div className={styles.heroName}>Lich</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a><a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="" />
                <div className={styles.heroName}>Anti-Mage</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
            <a className={styles.heroIcon} href="" style={{backgroundImage: 'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png)'}}>
              <div className={styles.heroNameContainer}>
                <img className={styles.primaryStatIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="" />
                <div className={styles.heroName}>Lich</div>
              </div>
              <div className={styles.fadeHero}>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.proCircuit}>
        <div className={styles.dpcImgs}>
          <img className={styles.dpcImg + " " + styles.dpcImg1} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_1.jpg" data-aos="fade-up" data-aos-duration="2500" data-aos-delay="300" alt="" />
          <img className={styles.dpcImg + " " + styles.dpcImg2} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_2.jpg" data-aos="fade-up" data-aos-duration="2500" data-aos-delay="600" alt="" />
          <img className={styles.dpcImg + " " + styles.dpcImg3} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_3.jpg" data-aos="fade-up" data-aos-duration="2500" data-aos-delay="1000" alt="" />
        </div>
        <div className={styles.dpcIcon}></div>
        <div className={styles.headerText}>
          <span className={styles.minor}>The</span>
          <br />
          Dota Pro Circuit
        </div>
        <div className={styles.verticalBar}></div>
        <div className={styles.bodyText}>
          When not climbing the ranks, you'll be able to learn from the best. The Dota Pro Circuit features ultra-high-level Dota 2 competition streaming regularly in the game client, on Twitch and Steam.TV. Culminating in the largest e-sports championship in the world, The International, professional Dota 2 is an event not to be missed.
        </div>
      </div>
      <div className={styles.joinBattle}>
        <div className={styles.headerText + " " + styles.joinBattleText}>
          <span className={styles.minor}>Join the</span>
          <br />
          Battle
        </div>
        <div className={styles.verticalBar}></div>
        <a className={styles.standardButton} href="https://store.steampowered.com/app/570/Dota_2/">Play free now</a>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLogos}>
          <a className={styles.footerLogo} href=""><img className={styles.footerLogoImg} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png" alt="" /></a>
          <a className={styles.footerLogo} href=""><img className={styles.footerLogoImg} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dota_footer_logo.png" alt="" /></a>
        </div>
        <div className={styles.trademark}>Dota and the Dota logo are trademarks and/or registered trademarks of Valve Corporation. 2023 Valve Corporation, all rights reserved.</div>
      </div>
    </main>
  );
}
