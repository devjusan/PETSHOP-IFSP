import React from 'react';
import DogPhoto from './Section1/DogPhoto';
import DogPhotoContent from './Section1/DogPhotoContent';
import styles from './Home.module.css';
import DogPhoto2 from './Section2/DogPhoto2';
import DogPhotoContent2 from './Section2/DogPhotoContent2';
import ContentOptions from './Section3/ContentOptions';
import KnowPrices from './Section4/KnowPrices';

const Home = () => {
  // função para ganhar performance com o evento no scroll
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

  let target1 = document.querySelectorAll('[data-anime]');

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    target1 = document.querySelectorAll('[data-anime]');
  }, []);

  const animationClass = 'animate';

  const animeIt = debounce(function animeScroll() {
    const windowTop = window.pageYOffset + window.innerHeight * 0.75;
    target1.forEach(function (element) {
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

  return (
    <div className={styles.home}>
      <div className={`${styles.section1}`}>
        <DogPhoto />
        <DogPhotoContent />
      </div>

      <div className={`${styles.section2}`}>
        <div data-anime="left">
          <DogPhoto2 />
        </div>
        <div data-anime="right">
          <DogPhotoContent2 />
        </div>
      </div>

      <div className={`${styles.section3}`} data-anime="left">
        <ContentOptions />
      </div>

      <div className={`${styles.section4}`} data-anime="right">
        <KnowPrices />
      </div>
    </div>
  );
};

export default Home;
