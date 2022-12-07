import style from '../styles/Footer.module.scss'

export default function footer() {
  return(
    <div className={style.componentFooter}>
      <p>©2022 - Built with <a href='http://google.com'>Next JS</a> | Powered by <a href='http://vercel.com'>Vercel</a></p>
    </div>
  )
}