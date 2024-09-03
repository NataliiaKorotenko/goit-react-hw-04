import css from '../ImageCard/ImageCard.module.css'
export default function ImageCard({ description, small, regular, openModal }) {
  return (
    <img
      className={css.imageCard}
      src={small}
      alt={description}
      onClick={() => openModal(regular, description)}
    />
  );
}
