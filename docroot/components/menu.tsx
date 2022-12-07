import Link from "next/link";
import styles from '../styles/Menu.module.scss'

export default function Menu() {
  return (
    <div className={styles.componentMenu}>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/projects'>Projects</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/contect'>Contect</Link></li>
      </ul>
    </div>
  )
}