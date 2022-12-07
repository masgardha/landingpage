import Footer from '../components/footer'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.card}>
        <div className={styles.cardWrapper}>
          <div className={styles.cardWrapperLeft}>
            <img src='https://via.placeholder.com/128x128' />
            </div>
          <div  className={styles.cardWrapperRight}>
            <h4>Rizqa Gardha Mahendra</h4>
            <p>Frontend specialist, full-stack developer. For the past 7 years, I've been working with healthcare agencies to build great software.</p>
          </div>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardBodyButton}>
            <a>Hire me on Upwork</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
