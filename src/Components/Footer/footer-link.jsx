const FooterLink = ({ links }) => (
  <div className="footer-link">
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLink;
