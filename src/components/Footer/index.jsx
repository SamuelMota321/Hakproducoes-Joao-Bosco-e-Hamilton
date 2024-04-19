const Footer = () => {
    return (
      <footer className="container">
          <p>© {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
          <nav>
            <ul>
              <li><a href="/">Página Inicial</a></li>
              <li><a href="/sobre">Sobre</a></li>
              <li><a href="/contato">Contato</a></li>
            </ul>
          </nav>
      </footer>
    );
  };
  
  export default Footer