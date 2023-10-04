import propTypes from 'prop-types';

function Card({ children, reverse }) {
  const a = 'iamreverse' + reverse;
  /* console.log(a); */
  return (
    <>
      <div className={`card ${reverse && 'reverse'}`}>{children}</div>
    </>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: propTypes.node.isRequired,
  reverse: propTypes.bool,
};

export default Card;
