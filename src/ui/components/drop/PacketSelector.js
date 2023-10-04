import { useEffect } from 'react';
import Warning from '../common/Warning';
import PacketModeSelector from "./PacketModeSelector";

export default function PacketSelector(props) {
  const {
    mode, setMode,
    capacity, setCapacity,
    identicalAmount, setIdenticalAmount,
    totalAmount, setTotalAmount
  } = props;
  const disabled = props.disabled || false;

  useEffect(() => {
    setCapacity('');
    setTotalAmount('');
    setIdenticalAmount('');
  }, [mode]);

  const inputStyle = "w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-drizzle-green-dark bg-drizzle-green-ultralight border border-gray-300 font-flow text-lg placeholder-gray-500";
  const labelStyle = "block mb-1 font-flow font-bold";

  const showExtraInputs = (mode) => {
    if (!mode) return null;

    return (
      <div className="w-full flex flex-col gap-y-2 mt-2">
        {mode.key === "Random" && (
          <>
            <Warning content={`Alguém pode obter uma recompensa maior do que o valor esperado. Este modo só deve ser usado para diversão!`} />
            <div className="flex flex-col gap-y-2">
              <label htmlFor="capacity" className={labelStyle}>Vencedores</label>
              <input
                type="number"
                disabled={disabled}
                id="capacity"
                min="1"
                value={capacity}
                className={inputStyle}
                placeholder="Digite o número extato de ganhadores..."
                onChange={(event) => setCapacity(event.target.value)}
              />
              <label htmlFor="total_amount" className={labelStyle}>Valor Total</label>
              <input
                type="number"
                disabled={disabled}
                id="total_amount"
                min="0"
                value={totalAmount}
                className={inputStyle}
                placeholder="Digite o número total de tokens..."
                onChange={(event) => setTotalAmount(event.target.value)}
              />
            </div>
          </>
        )}
        {mode.key === "Identical" && (
          <div className="flex flex-col gap-y-2">
            <label htmlFor="capacity" className={labelStyle}>Vencedores</label>
            <input
              type="number"
              disabled={disabled}
              id="capacity"
              value={capacity}
              min="1"
              className={inputStyle}
              placeholder="Digite o número extato de vencedores..."
              onChange={(event) => setCapacity(event.target.value)}
            />
            <label htmlFor="per_amount" className={labelStyle}>Valor Recebido</label>
            <input
              type="number"
              disabled={disabled}
              id="per_amount"
              value={identicalAmount}
              min="0"
              className={inputStyle}
              placeholder="Digite número da quantia que cada vencedor receberá..."
              onChange={(event) => setIdenticalAmount(event.target.value)}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-y-4">
      <label className="block text-2xl font-bold font-flow mb-2">
        Modo<span className="text-red-600">*</span>
      </label>
      <PacketModeSelector mode={mode} setMode={setMode} />
      {showExtraInputs(mode)}
    </div>
  );
}
