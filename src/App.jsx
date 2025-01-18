import { useState } from 'react'
import Lampada from './assets/lampada.png'
import Genio from './assets/genio.png'
import './Style.scss'

export default function App() {
  const [aladdin, setAladdin] = useState(Lampada);

  // const genioDaLampada = () => {
  //   setAladdin(Genio);
  // };
  const genioDaLampada = () => {
    setAladdin((prevState) => prevState === Lampada ? Genio : Lampada);  // Alterna entre as imagens
  };

  return (
    <main>
      <h1>&quot;Liberte a magia da programação com a lâmpada de Aladim.&quot;</h1>
      <img src={aladdin} alt="Imagem lâmpada mágica" />
      <button onClick={genioDaLampada}>Clique Aqui</button>
    </main>
  );
}