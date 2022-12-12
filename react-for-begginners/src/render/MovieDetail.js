import styles from "./MovieDetail.module.css";

function MovieDetail({ coverImg, backCoverImg, title, year, summary, genres }) {
  return (
    <div
      className={styles.movieDetail__background}
      alt={title}
      style={{ backgroundImage: `url(${backCoverImg})` }}
    >
      <div className={styles.MovieDetail__left}>
        <img className={styles.movieDetail__img} src={coverImg} alt={title} />
      </div>
      <div className={styles.MovieDetail__right}>
        <h1 className={styles.movieDetail__title}>{title}</h1>
        <h2 className={styles.movieDetail__year}>{year}</h2>
        {genres ? (
          // genre is the 'array'
          <div>
            <b>{"genres"}</b>
            <ul>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {summary ? (
          <div>
            <span className={styles.MovieDetail__summary}>{summary}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default MovieDetail;
