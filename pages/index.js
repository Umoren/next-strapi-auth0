
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const ISSERVER = typeof window === "undefined";
  const token = !ISSERVER ? localStorage.getItem('jwt') : ""
  const username = !ISSERVER ? localStorage.getItem('username') : ""
  const logOut = () => {
    !ISSERVER ? localStorage.removeItem('jwt') : ""
    router.push('/')
  }
  return (
    token ? (
      <>
        <p> {username} </p>
        <button onClick={logOut}> Logout </button>
      </>
    ) : (

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>

            <a href="http://localhost:1337/api/connect/auth0" className={styles.card}>
              <h2>Login &rarr;</h2>
              <p>Login to Nextjs app here</p>
            </a>
          </div>
        </main>

      </div>
    )
  )
}
