import css from './styles.module.css';

const ListContainer = ({ children }) => {
  return (
      <div className={css.container}>
        {children}
      </div>
  )
}

export default ListContainer;
