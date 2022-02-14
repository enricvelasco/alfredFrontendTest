import css from './styles.module.css';

const Card = () => {
  return (
      <div className={css.card}>
        <img className={css.cardImage} src='https://wallpapercave.com/wp/kjmq9b0.jpg'/>
        <div className={css.cardInfo}>
          <div className={css.cardIngoText}>Name: Millennium Falcon</div>
          <div className={css.cardIngoText}>Model: YT-1300 light freighter</div>
          <div className={css.cardIngoText}>Manufacturer: Corellian Engineering Corporation</div>
          <div className={css.cardIngoText}>Class: Light freighter</div>
          <div className={css.cardIngoText}>Price: 100000</div>
        </div>
        <button className={css.cardButton}>go to detail</button>
      </div>
  )
}

export default Card;
