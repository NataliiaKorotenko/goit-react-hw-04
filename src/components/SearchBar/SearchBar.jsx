import toast, { Toaster } from "react-hot-toast";
import css from "../SearchBar/SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value.trim();

    if (!query) {
      toast("Enter search query!", {
        duration: 3000,
        position: "top-center",
        style: { marginTop: 100 },
        icon: "👀",
      });
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <button type="submit" className={css.Btn}>Search</button>
        <input
          className={css.Input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      <Toaster />
    </header>
  );
}
