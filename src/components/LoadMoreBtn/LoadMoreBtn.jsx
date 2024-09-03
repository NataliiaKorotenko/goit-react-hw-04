import css from '../LoadMoreBtn/LoadMoreBtn.module.css'
export default function LoadMoreBtn({ loadMoreClick }) {
    return (
      <button className={css.loadBtn} type="button" onClick={loadMoreClick}>
        Load More
      </button>
    );
  }
  