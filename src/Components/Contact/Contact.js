import React from 'react';
import styles from './Contact.module.css';
import axios from 'axios';

const Contato = () => {
  React.useEffect(() => {
    const wave = document.getElementById('wave');
    function waveEffect() {
      wave.style.opacity = '1';
    }

    function scrollToTop() {
      if (window.pageYOffset !== 0) {
        window.scrollTo(0, 0);
      }
    }

    waveEffect();
    scrollToTop();
  }, []);

  const [data, setData] = React.useState({
    name: '',
    email: '',
    msg: '',
    anexo: '',
  });

  function handleInputChange(event) {
    if (event.target.name === 'anexo')
      data[event.target.name] = event.target.files[0];
    else data[event.target.name] = event.target.value;
    setData(data);
  }

  function send() {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    axios
      .post('http://localhost:3030/send', formData, {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(data);
    send(data);
  }

  return (
    <>
      <div>
        <svg
          height="600px"
          id="wave"
          className={styles.waves}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20962 10601"
        >
          <path
            className={styles.wave1}
            fill="#43818A"
            d="M27489 8635c504 1667 831 3818-27 5680s-2901 3434-6193 3904-7834-161-12155-589c-4321-427-8421-649-10976-1537-2555-889-3565-2443-4071-4061-505-1619-505-3302 938-4835 1442-1533 4327-2916 6274-3122s2958 764 3877 1522 1746 1304 2738 1382 2148-312 2976-730 1327-864 2136-1014c810-151 1929-6 2757 206s1363 490 1978 775c614 284 1308 574 1947 535s1223-407 1935-875c712-469 1552-1037 2240-1266 688-228 1223-117 1832 530 608 646 1290 1828 1794 3495z"
          />

          <path
            className={styles.wave2}
            fill="#57A7B3"
            d="M25681 10400c-171 822-305 1990-646 3115-341 1124-889 2206-1856 2808-968 602-2355 724-4668 1064s-5550 898-8520 987-5672-290-9037-859c-3366-568-7394-1326-9403-2118-2008-791-1996-1616-1892-3305 103-1689 298-4242 1412-5731 1113-1488 3146-1912 4953-1627 1808 284 3390 1276 4522 1878s1814 814 2423 552 1145-998 2333-1388c1187-389 3025-432 4266 275 1240 707 1884 2164 2861 2407 976 244 2285-726 3493-1308 1209-581 2316-775 3731-567 1415 207 3137 815 4290 1221 1153 407 1737 612 1926 953 189 342-18 820-188 1643z"
          />

          <path
            className={styles.wave3}
            fill="#66C3D0"
            d="M30706 11822c-291 731-653 1801-1548 2972-895 1170-2321 2441-4988 3026-2667 586-6574 485-10469 541s-7778 268-10906-256-5501-1784-6906-3382c-1404-1598-1840-3533-1957-4910-118-1377 82-2195 1029-2854 946-659 2637-1158 4033-1002s2495 968 3440 1630 1737 1175 2905 1086c1169-89 2714-780 3810-1332 1095-552 1740-965 2665-820s2130 848 3110 1360c980 513 1734 837 2458 672s1416-819 2179-1050 1597-40 3058 269c1461 310 3550 739 5069 1177 1519 437 2469 883 2998 1112 529 228 639 240 584 440-55 201-274 591-564 1321z"
          />
        </svg>
      </div>
      <div className={styles.section}>
        <div className={styles.container}>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="email">Seu E-mail*</label>
            <input
              required
              onChange={handleInputChange}
              type="text"
              id="email"
              name="email"
              placeholder="Seu E-mail..."
            />

            <label htmlFor="nome">Nome*</label>
            <input
              required
              onChange={handleInputChange}
              type="text"
              id="name"
              name="name"
              placeholder="Nome da pessoa.."
            />

            <label htmlFor="mensagem">Mensagem*</label>
            <textarea
              required
              onChange={handleInputChange}
              id="msg"
              name="msg"
              placeholder="Escreva algo.."
              className="textArea"
            ></textarea>

            <label htmlFor="anexo">Foto do seu Pet</label>
            <input
              onChange={handleInputChange}
              type="file"
              id="anexo"
              name="anexo"
            />

            <input type="submit" value="Enviar" />
          </form>
        </div>
        <div className={`${styles.content} text`}>
          <h1>Entre em contato conosco!</h1>
          <div>
            <h2>Localização</h2>
            <ul>
              <li>Cidade: Cancun</li>
              <li>Rua: Me Gusta</li>
              <li>Tel: 40028922</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contato;
