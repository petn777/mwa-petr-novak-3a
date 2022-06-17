import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/nav'
import FirstPage from './components/first'
import SecondPage from './components/second'
import ThirdPage from './components/third'
import FourthPage from './components/fourth'
import FifthPage from './components/fifth'
import SixthPage from './components/sixth'
import SeventhPage from './components/seventh'
import EighthPage from './components/eighth'
import FooterPage from './components/footer'

export default function Home() {
  
  return (
    <div>
      <Navbar />
      <div>
        <main>
          <FirstPage />
          <SecondPage />
          <ThirdPage />
          <FourthPage />
          <FifthPage />
          <SixthPage />
          <SeventhPage />
          <EighthPage />
        </main>

        <footer>
          <FooterPage />
        </footer>
      </div>
     
    </div>
  )
}
