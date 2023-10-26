import Link from "next/link"
import Image from "next/image"
import styles from '../css/header.module.css'

export default function Header(){

    return(
        <header className={styles.header}>
            <Link href='/'>
                <span className={styles.name}>SunA</span>
                <span className={styles.blog}> .blog</span>
            </Link>
            <div>
                <Link href='/' className={styles.menu}>Home</Link>
                <Link href='/' className={styles.menu}>About Me</Link>
                <Link href='/' className={styles.donate}>Buy Me A Coffee</Link>
            </div>
        </header>
    )
}