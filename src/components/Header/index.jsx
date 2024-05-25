import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import Instagram from '../../assets/icon/insta-icon.png'
import Facebook from '../../assets/icon/facebook-icon.png'

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        setIsVisible(false); // Rolando para baixo, oculta o header
      } else {
        setIsVisible(true); // Rolando para cima, mostra o header
      }
      setLastScrollTop(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
        <div className="container">
          <div>
            <h1 className="title lg bold">Hakproducoes</h1>
            <h2 className="title md end bold">.com.br</h2>
          </div>
          <ul>
            <li>
              <a href="/" target='_blank'>
                <img src={Instagram} alt="Instagram Logo" />
              </a>
            </li>
            <li>
              <a href="/sobre" target='_blank'>
                <img src={Facebook} alt="Facebook Logo" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
