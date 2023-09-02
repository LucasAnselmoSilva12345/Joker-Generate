import pattermDivider from '../../assets/pattern-divider-mobile.svg';

import './styles.scss';

interface ShowJokerProps {
  data: JokerDataProps;
}

export function ShowJoker({ data }: ShowJokerProps) {
  return (
    <div key={data.id} className="content-data">
      <p>Joker</p>
      <h2>{`"${data.value}"`}</h2>
      <img src={pattermDivider} alt="Pattern Divider" />
    </div>
  );
}
