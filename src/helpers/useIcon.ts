import instagram from '../images/svg/instagram.svg';
import pinterest from '../images/svg/pinterest.svg';
import whatsapp from '../images/svg/whatsapp.svg';
import facebook from '../images/svg/facebook.svg';

export function useIcon() {
  const icons = [
    {
      name: instagram,
      link: 'https://www.instagram.com/modeleinterioreseflores/',
      alt: 'Instagram',
      width: 16,
      height: 16,
    },
    {
      name: pinterest,
      link: '',
      alt: 'Pinterest',
      width: 16,
      height: 16,
    },
    {
      name: whatsapp,
      link: '',
      alt: 'Whatsapp',
      width: 16,
      height: 16,
    },
    {
      name: facebook,
      link: '',
      alt: 'Facebook',
      width: 16,
      height: 16,
    },
  ];
  return icons;
}
