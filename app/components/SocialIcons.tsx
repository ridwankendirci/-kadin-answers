import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function SocialIcons() {
  return (
    <div className="social-icons-top-left">
      <a href="https://instagram.com/rdvnkndrc" target="_blank" rel="noopener noreferrer" className="social-btn">
        <FaInstagram />
      </a>
      <a href="https://x.com/kuroikenshi0" target="_blank" rel="noopener noreferrer" className="social-btn">
        <FaXTwitter />
      </a>
    </div>
  );
}
