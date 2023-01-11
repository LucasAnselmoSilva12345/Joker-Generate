import { useState } from 'react';
import { ShowJoker } from '../../components/ShowJoker';
import { Bandaids } from 'phosphor-react';
import './styles.css';

export function Home() {
  const [joker, setJoker] = useState(null);
  const [loading, setLoading] = useState(null);

  async function generateJoker() {
    setLoading(true);
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();

    setJoker(data);
    setLoading(false);
  }

  return (
    <section className="container-box">
      {loading && <p>Carregando as informações</p>}

      {!loading && joker && <ShowJoker data={joker} />}
      <button onClick={generateJoker} className="btnGenerateJoker">
        <Bandaids size={32} weight="regular" />
      </button>
    </section>
  );
}
