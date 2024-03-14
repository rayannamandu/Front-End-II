import React, { useState } from 'react';

const HookMegaSena = () => {
  const [ultimoNumeroSorteado, setUltimoNumeroSorteado] = useState();
  const [sorteados, setSorteados] = useState([]);

  function sortearNumero() {
    if (sorteados.length === 6) {
      alert("Já temos 6 números sorteados!");
      return;
    }

    const novoNumero = Math.floor(Math.random() * 60) + 1;
    setUltimoNumeroSorteado(novoNumero);
    setSorteados([...sorteados, novoNumero]);
  };

  return (
    <div>
      <h1>Sorteador da Mega em React!</h1>
      <button onClick={sortearNumero}>Sortear Número</button>
      <h2>Último número sorteado: {ultimoNumeroSorteado !== null ? ultimoNumeroSorteado : " "}</h2>
      <h2>Sorteados: {sorteados.length > 0 ? sorteados.join(', ') : " "}</h2>
    </div>
  );
};

export default HookMegaSena;