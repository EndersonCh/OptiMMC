interface Props {
  isStable: boolean;
  capacidad?: number;
  wqMinutos?: number;
  lq?: number;
  enfermerosExcedentes?: number;
}

export default function ResultadosSimulacion({ isStable, capacidad, wqMinutos, lq,enfermerosExcedentes }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h2 className="text-lg font-medium mb-4">Indicadores Clave</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
          <p className="text-sm text-slate-500 font-medium">Tiempo promedio en fila (Wq)</p>
          <p className="text-3xl font-semibold text-slate-900 mt-2">
            {!isStable ? "Infinito" : `${wqMinutos?.toFixed(1)} min`}
          </p>
        </div>
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
          <p className="text-sm text-slate-500 font-medium">Longitud de la fila (Lq)</p>
          <p className="text-3xl font-semibold text-slate-900 mt-2">
            {!isStable ? "Infinita" : `${Math.round(lq || 0)} personas`}
          </p>
        </div>
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
          <p className="text-sm text-slate-500 font-medium">Utilización</p>
          <p className="text-3xl font-semibold text-slate-900 mt-2">{capacidad?.toFixed(2)} %</p>
        </div>
         <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
          <p className="text-sm text-slate-500 font-medium">Excedente</p>
          <p className="text-3xl font-semibold text-slate-900 mt-2">{enfermerosExcedentes ?? 0} Enfermeros</p>
        </div>
      </div>
    </div>
  );
}
