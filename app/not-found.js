import styles from '../css/notFound.module.css'
import Link from 'next/link'

export default function NotFound(){
    return(
        <div className={styles.container}>
            <div className={styles.title}>404</div>
            <div className={styles.subtitle}>
                Sorry. the content you’re looking for doesn’t exist. 
                <br/>
                Either it was removed, or you mistyped the link.
            </div>
            <div className={styles.btncontainer}>
                <Link href='/' className={styles.btn}>Go to Home</Link>
                <button className={styles.btn}>Contact Us</button>
            </div>
        </div>
    )
}