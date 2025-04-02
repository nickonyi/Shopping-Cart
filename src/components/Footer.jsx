import Github from '../assets/icons/github.svg?react';

export default function Footer() {
  return (
    <footer className="footer">
      <p>Copyright © 2025 Nickonyi</p>
      <div>
        <a href="https://github.com/nickonyi" target="_blank" rel="noreferrer">
          <Github className="icon" />
        </a>
      </div>
    </footer>
  );
}
