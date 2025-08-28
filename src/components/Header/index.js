import '../Header/style.css';
import Icons from '../Icons';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { MdClose } from "react-icons/md";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);

      // Fecha o menu quando mudar de tamanho de tela
      if (window.innerWidth > 768) {
        setMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div className="header-container">
        <Link to="/"><span>OdontoCare</span></Link>

        {isMobile && (
          <>
            {!menu ? (
              <TiThMenuOutline
                size={28}
                className="menu-icon"
                onClick={() => setMenu(true)}
              />
            ) : (
              <MdClose
                size={28}
                className="menu-icon"
                onClick={() => setMenu(false)}
              />
            )}
          </>
        )}

        {(menu || !isMobile) && (
          <nav className={isMobile ? "mobile-nav" : "desktop-nav"}>
            <Link to="/servicos">Serviços</Link>
            <Link to="/sobre">Sobre</Link>
            <Icons />
          </nav>
        )}
      </div>
    </header>
  );
}
