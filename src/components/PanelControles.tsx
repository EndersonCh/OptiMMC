interface Props {
  lambda: number;
  setLambda: (v: number) => void;
  mu: number;
  setMu: (v: number) => void;
  c: number;
  setC: (v: number) => void;
}

export default function PanelControles({ lambda, setLambda, mu, setMu, c, setC }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h2 className="text-lg font-medium mb-4">Parámetros del Sistema</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Tasa de llegada (λ)</label>
          <input 
            type="number" 
            min="1"
            value={lambda}
            onChange={(e) => setLambda(Number(e.target.value))}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" 
          />
          <p className="text-xs text-slate-500 mt-1">Pacientes por hora</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Tasa de servicio (μ)</label>
          <input 
            type="number" 
            min="1"
            value={mu}
            onChange={(e) => setMu(Number(e.target.value))}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" 
          />
          <p className="text-xs text-slate-500 mt-1">Pacientes atendidos por servidor / hr</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Número de servidores (c)</label>
          <input 
            type="number" 
            min="1"
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" 
          />
          <p className="text-xs text-slate-500 mt-1">Personal médico disponible</p>
        </div>
      </div>
    </div>
  );
}
