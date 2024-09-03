import { useState, useEffect } from 'react';
import styles from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchImages } from './Api.js';
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Loader from './components/Loader/Loader.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const handleSubmit = (searchValue) => {
    setQuery(searchValue);
    setImages([]);
    setPage(1);
    setNextPage(false);
    setError(null);
  };

  useEffect(() => {
    if (!query) return;

    const fetchImagesData = async () => {
      setLoading(true);
      setError(null);

      try {
        const { images: results, total_pages } = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...results]);
        setNextPage(page < total_pages);
      } catch (error) {
        setError("Something went wrong. Please try again later.");
        toast.error("Failed to fetch images.");
      } finally {
        setLoading(false);
      }
    };

    fetchImagesData();
  }, [query, page]);

  const loadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (url, alt) => {
    setIsOpen(true);
    setModalUrl(url);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalUrl("");
    setModalAlt("");
  };

  return (
    <div className={styles.Container}>
      <SearchBar onSubmit={handleSubmit} />

      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}

      {loading && !error && <Loader />}
      {error && <ErrorMessage message={error} />}
      {nextPage && <LoadMoreBtn loadMoreClick={loadMoreClick} />}

      <Toaster />
      <ImageModal
        modalIsOpen={isOpen}
        closeModal={closeModal}
        src={modalUrl}
        alt={modalAlt}
      />
    </div>
  );
}

export default App;
