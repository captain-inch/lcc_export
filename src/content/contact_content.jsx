import logo from "./../media/img/misc/logo.png";
import confrerie from "./../media/img/misc/logo_confreriedesdomaines.png";
export const content = [
  {
    title: "La confrérie des domaines",
    logo: confrerie,
    text:
      " Teaming up for international marketing of Domaine Michelin – Les Combes Cachées, outside France.",
  },
  {
    title: "Domaine Michelin - Les Combes Cachees",
    logo: logo,
    text: "For any inquiry, adress us an email to lescombescachees@gmail.com.",
    button: {
      href: "mailto:lescombescachees@gmail.com",
      text: "Email us",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-envelope"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
        </svg>
      ),
    },
  },
];
