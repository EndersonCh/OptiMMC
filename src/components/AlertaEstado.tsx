interface Props {
  isStable: boolean;
}

export default function AlertaEstado({ isStable }: Props) {
  if (!isStable) {
    return (
      <div className="bg-red-50 p-8 rounded-xl border-2 border-red-500 shadow-sm flex items-center justify-center">
        <h2 className="text-red-600 font-bold text-2xl text-center tracking-tight">¡ALERTA! Tiempo de espera infinito. La fila colapsará.</h2>
      </div>
    );
  }

  return (
    <div className="bg-emerald-50 p-6 rounded-xl border-2 border-emerald-500 shadow-sm flex items-center justify-center">
      <h2 className="text-emerald-700 font-bold text-xl text-center tracking-tight">¡Sistema Seguro!</h2>
    </div>
  );
}
