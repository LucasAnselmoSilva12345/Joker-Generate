import pattermDivider from '../../assets/pattern-divider-mobile.svg';

import './styles.css';

export function ShowJoker({ data }) {
  return (
    <div key={data.id} className="content-data">
      <p>Joker</p>
      <h2>{`"${data.value}"`}</h2>
      <img src={pattermDivider} alt="Pattern Divider" />
    </div>
  );
}
