import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles['header']}>
      <span>This is a header</span>
    </header>
  )
}
