function MovieDetail({ coverImg, title, year, summary, genres }) {
  return (
    <div>
      <h3>{title}</h3>
      <h5>{year}</h5>

      <img src={coverImg} alt={title} />
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
          <p>{summary}</p>
        </div>
      ) : null}
    </div>
  );
}

export default MovieDetail;
