import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Social } from './misc.models';

export const socials: Social[] = [
  {
    name: 'GitHub',
    path: 'https://github.com/PiotrRut',
    icon: FaGithub,
    color: '#fff',
  },
  {
    name: 'LinkedIn',
    path: 'https://www.linkedin.com/in/piotr-rutkowski-7082a917a/',
    icon: FaLinkedinIn,
    color: '#0e76a8',
  },
  {
    name: 'Twitter',
    path: 'https://twitter.com/PiotrRut99',
    icon: FaTwitter,
    color: '#00acee',
  },
  {
    name: 'Instagram',
    path: 'https://www.instagram.com/prutkowskii/',
    icon: FaInstagram,
    color: '#C13584',
  },
];
