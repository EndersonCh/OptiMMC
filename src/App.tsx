/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { Info } from 'lucide-react';
import PanelControles from './components/PanelControles';
import ResultadosSimulacion from './components/ResultadosSimulacion';
import AlertaEstado from './components/AlertaEstado';
import InfoModal from './components/InfoModal';
import { simularModeloMMC } from './modelo';

export default function App() {
  const [lambda, setLambda] = useState(50);
  const [mu, setMu] = useState(20);
  const [c, setC] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resultado = useMemo(() => simularModeloMMC(lambda, mu, c), [lambda, mu, c]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <header className="bg-slate-900 text-white p-6 shadow-md flex items-center justify-between"> 
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">OptiMMC</h1>
          <p className="text-slate-400 text-sm mt-1">Evaluación de centro de vacunación post-desastre </p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="p-2 hover:bg-slate-800 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
          title="Acerca del Proyecto"
        >
          <Info className="w-6 h-6 text-slate-300 hover:text-white transition-colors" />
        </button>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sección Izquierda: Inputs */}
        <section className="lg:col-span-4 flex flex-col gap-6">
          <PanelControles 
            lambda={lambda} setLambda={setLambda}
            mu={mu} setMu={setMu}
            c={c} setC={setC}
          />
        </section>

        {/* Sección Derecha: Resultados */}
        <section className="lg:col-span-8 flex flex-col gap-6">
          <AlertaEstado isStable={resultado.isStable} />
          <ResultadosSimulacion 
            isStable={resultado.isStable}
            capacidad={resultado.capacidad}
            wqMinutos={resultado.wqMinutos}
            lq={resultado.lq}
            enfermerosExcedentes={resultado.enfermerosExcedentes}
          />
        </section>
      </main>

      <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
