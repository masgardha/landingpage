import Footer from '../components/footer'
import Menu from '../components/menu'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Menu />
      <div className={styles.card}>
        <div className={styles.cardWrapper}>
          <div className={styles.cardWrapperLeft}>
            <img src='https://gardha.web.id/wp-content/uploads/2022/08/IMG_1464-150x150.jpeg' />
            </div>
          <div  className={styles.cardWrapperRight}>
            <h4>Rizqa Gardha Mahendra</h4>
            <p>Frontend specialist, full-stack developer. For the past 7 years, I've been working with healthcare agencies to build great software.</p>
          </div>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardBodyButton}>
            <a href='https://www.upwork.com/freelancers/~01f0009b358076a7f4'>Hire me on Upwork</a>
          </div>
        </div>
      </div>

      <div className={styles.skill}>
        <p>My skills and quality of work have been proven with the portfolio that I have so far working on groverments, POS, games</p>
      </div>

      <div className={styles.logo}>
        <Image src="/reactjs-icon.svg" alt="Vercel Logo" width={70} height={70} />
        <Image src="/drupal.svg" alt="Vercel Logo" width={70} height={70} />
        <Image src="/cakephp.svg" alt="Vercel Logo" width={70} height={70} />
        <Image src="/canva.svg" alt="Vercel Logo" width={70} height={70} />
      </div>
      <Footer />
    </div>
  )
}
