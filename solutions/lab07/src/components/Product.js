import styles from './Product.module.css';

function Product(props) {
  const { title, author, published, country, lang, pages, image, url, price } =
    props;
  return (
    <div className={styles.product}>
      <div>
        <img
          className={styles.thumbnail}
          src={image ? 'images/' + image : 'images/default.jpg'}
          alt="{title}"
        />
      </div>
      <div>
        <h2>{title}</h2>
        <p>
          by: {author}
          <br />
          published: {published}, {country}
          <br />
          language: {lang}
          <br />
          pages: {pages}
          <br />
          price: ${price}
          <br />
          link: ${url}
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
