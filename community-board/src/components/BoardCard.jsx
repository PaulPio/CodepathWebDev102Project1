function BoardCard({ title, category, image, description, link }) {
  return (
    <article className="card">
      <img className="card-image" src={image} alt={`${title}, ${category}`} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-category">{category}</p>
        <p className="card-description">{description}</p>
        <a className="card-link" href={link} target="_blank" rel="noreferrer">
          Learn more
        </a>
      </div>
    </article>
  )
}

export default BoardCard
