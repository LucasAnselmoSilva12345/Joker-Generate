import { useEffect, useState } from 'react';
import { ShowJoker } from '../../components/ShowJoker';
import { Bandaids } from 'phosphor-react';
import './styles.css';

export interface JokerData {
  id: string;
  value: string;
}

export function Home() {
  const [joker, setJoker] = useState<JokerData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    generateJoker();
  }, []);

  async function generateJoker() {
    setLoading(true);

    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data: JokerData = await response.json();

      setJoker(data);
    } catch (error) {
      console.log('Erro ao search joker: ', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container-box">
      {loading && <p>Loading the information</p>}

      {!loading && joker && <ShowJoker data={joker} />}
      <button onClick={generateJoker} className="btnGenerateJoker">
        <Bandaids size={32} weight="regular" />
      </button>
    </section>
  );
}
