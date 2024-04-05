import Image from "next/image";
import styles from "./page.module.css";
import { symlink } from "fs";

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
                <a className={styles.gameDropdownContentText} href="">
                  Patches
                </a>
                <a className={styles.gameDropdownContentText} href="">
                  Gameplay Updates
                </a>
                <a className={styles.gameDropdownContentText} href="">
                  Previous Updates
                </a>
              </div>
            </div>
            <a className={styles.navItem} href="">
              Heroes
            </a>
            <a className={styles.navItem} href="">
              News
            </a>
            <a className={styles.navItem} href="">
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
          <div className={styles.navButton}>
            <div className={styles.navSteamLogo}></div>
            <span className={styles.navButtonText}>Play for Free</span>
          </div>
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
            <a href="" className={styles.playButton}>
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
            <div className={styles.viewAll}>
              View All
              <div className={styles.rightArrow}></div>
            </div>
          </div>
          <div className={styles.newsCapsules}>
            <a href="" className={styles.blogCapsule} style={{backgroundImage: "url('https://clan.cloudflare.steamstatic.com/images/3703047/8256a7d97ebed00f8e77c4834f9306d08976e15c.png')"}}></a>
            <a href="" className={styles.blogCapsule} style={{backgroundImage: "url('https://clan.cloudflare.steamstatic.com/images/3703047/040f3cd7b283452e7939cf075284647905cbb900.png')"}}></a>
            <a href="" className={styles.blogCapsule} style={{backgroundImage: "url('https://clan.cloudflare.steamstatic.com/images/3703047/005df03fc8e0a1f0370db32eedf47f877aef119e.png')"}}></a>
          </div>
        </div>
      </div>
    </main>
  );
}
