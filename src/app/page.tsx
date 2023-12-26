import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles['main']}>
      <div className={styles['center']}>
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={440}
          height={145}
          priority={true}
        />
        <h1>Welcome to My Government Expert</h1>
      </div>
    </main>
  )
}
