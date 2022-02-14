import { useParams } from "react-router-dom";
import css from './styles.module.css';

const Detail = () => {
  const {id} = useParams();

  return (
      <div className={css.detail}>
        <img className={css.detailImage} src={'https://wallpapercave.com/wp/kjmq9b0.jpg'}/>
        <div className={css.infoPanel}>
          <div className={css.infoPanelTitle}>info panel</div>
          <div>info...</div>
        </div>
      </div>
  )
}

export default Detail;
