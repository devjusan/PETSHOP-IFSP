import React from 'react';
import styles from './About.module.css';
import f1 from '../../Assets/f1.jpg';
import f2 from '../../Assets/f2.jpg';
import f3 from '../../Assets/f3.jpg';
import f4 from '../../Assets/f4.jpg';
import f5 from '../../Assets/f5.jpg';
import f6 from '../../Assets/f6.jpg';
import f7 from '../../Assets/f7.jpg';

const Sobre = () => {
  let target = document.querySelectorAll('[data-anime]');
  const debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    target = document.querySelectorAll('[data-anime]');
  }, []);

  const animationClass = 'animate';

  const animeIt = debounce(function animeScroll() {
    const windowTop = window.pageYOffset + window.innerHeight * 0.75;
    target.forEach(function (element) {
      console.log('oi');
      if (windowTop > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    });
  }, 150);

  animeIt();

  window.addEventListener('scroll', function () {
    animeIt();
  });

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
  return (
    <div>
      {/* ONDAS*/}
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
      <section className={styles.section}>
        <div className={`${styles.history} text`}>
          <h1>
            <strong>O lugar ideal</strong> para o seu cão{' '}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum ante et lacus pulvinar convallis
          </p>
          <p>
            Curabitur dapibus arcu at erat consequat, vitae placerat velit
            vulputate. Aenean eget lectus dui. Etiam nisl urna, ullamcorper
            vestibulum est volutpat, tempor varius justo.
          </p>
          <p>
            Cras ac varius libero. Aenean a dapibus augue, id consectetur risus.
            Vestibulum quis diam elementum, maximus metus ut, tempor nibh.
          </p>
        </div>
        <div className={`${styles.divText} text`}>
          <h1>Veja algumas fotos</h1>
        </div>

        <div className={styles.aboutUs}>Teste</div>

        <div className={`${styles.niceDisplay}`}>
          <div data-anime="left" className={styles.div1}>
            <img src={f1} alt="Foto 1" />
          </div>
          <div data-anime="left" className={styles.div2}>
            <div>
              <img src={f2} alt="Foto 2" />
            </div>
            <div>
              <img src={f3} alt="Foto 3" />
            </div>
          </div>

          <div data-anime="right" className={styles.div3}>
            <div>
              <img src={f4} alt="Foto 4" />
            </div>
            <div>
              <img src={f5} alt="Foto 5" />
            </div>
          </div>

          <div data-anime="right" className={styles.div4}>
            <div>
              <img src={f6} alt="Foto 6" />
            </div>
            <div>
              <img src={f7} alt="Foto 7" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
