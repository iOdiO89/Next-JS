import Image from 'next/image'
import styles from '../css/home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <div>
            <div className={styles.title}>Hi, I'm SunA<br/>Front End Dev</div>
            <div className={styles.subtitle}>
                On this blog I share tips and tricks, frameworks, projects, tutorials, etc
                <br/>
                Make sure you subscribe to get the latest updates
            </div>
            <div className={styles.inputcontainer}>
                <div className={styles.inputwrapper}>
                    <input 
                        type='email'
                        className={styles.input}
                        placeholder='Enter your email here...'
                    />
                </div>
                <button className={styles.btn}>Subscribe</button>
            </div>
        </div>
        <div>
            <Image
                src='/images/profile.png'
                width={470}
                height={387}
            />
        </div>
    </div>
  )
}
