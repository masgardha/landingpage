import styles from '../styles/Link.module.scss'
import Footer from "../components/footer";

export default function link() {
  return(
    <div>
      <div className={styles.link}>
      <div className={styles.linkHeader}>
        <div className={styles.linkPhoto}>
          <img src='https://gardha.web.id/wp-content/uploads/2022/08/IMG_1464-150x150.jpeg' />
        </div>
        <p>@masgardha</p>
        <h3>Rizqa Gardha Mahendra</h3>
        <p>👇 Monggo pinarak wonton link ngandap meniko! 👇</p>
      </div>
      <div className={styles.linkButton}>
        <ul>
          <li><a href='http://gardha.web.id'>🖥️  Website saya</a></li>
          <li><a href='http://youtube.com/@masgardha'>📹 Channel Youtube</a></li>
          <li><a href='http://instagram.com/rizqagardha'>Instagram</a></li>
          <li><a href='https://saweria.co/masgardha'>💵 Dukungan / Kontribusi</a></li>
        </ul>
      </div>

      
      </div>
      <Footer />
    </div>
  )
} 