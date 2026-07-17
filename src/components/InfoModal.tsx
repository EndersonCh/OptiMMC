import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold text-slate-900">Acerca de OptiMMC</h2>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 space-y-6 text-slate-700">
          <section>
            <h3 className="font-semibold text-slate-900 text-lg mb-2">Objetivo del Proyecto</h3>
            <p className="text-sm leading-relaxed">
              OptiMMC es un simulador (MVP) diseñado para ofrecer una solución útil e innovadora en la mitigación de crisis humanitarias. 
              Permite calcular en tiempo real la cantidad óptima de servidores médicos (enfermeros) necesarios en un centro de vacunación post-desastre, 
              garantizando que los tiempos de espera se mantengan bajo control y evitando aglomeraciones peligrosas.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-900 text-lg mb-2">¿Cómo funciona el Modelo M/M/c?</h3>
            <p className="text-sm leading-relaxed mb-3">
              El modelo M/M/c de la Teoría de Colas analiza sistemas de líneas de espera con múltiples servidores paralelos. Evalúa tres variables fundamentales:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 mb-3">
              <li><strong>Tasa de llegada (λ):</strong> Número promedio de damnificados que llegan por unidad de tiempo.</li>
              <li><strong>Tasa de servicio (μ):</strong> Número promedio de personas que un solo enfermero puede vacunar por unidad de tiempo.</li>
              <li><strong>Número de servidores (c):</strong> Cantidad de personal médico activo.</li>
            </ul>
            <p className="text-sm leading-relaxed">
              El motor calcula el factor de utilización (ρ = λ/μ) y verifica la estabilidad matemática (ρ/c &lt; 1). 
              Si la capacidad es superada por la demanda, el sistema emite una alerta temprana de colapso, ayudando a los coordinadores a reasignar personal rápidamente.
            </p>
          </section>

          <section className="bg-slate-50 p-4 rounded-lg border border-slate-100">
            <h3 className="font-semibold text-slate-900 mb-2">Equipo de Trabajo</h3>
            <p className="text-sm text-slate-600 mb-3">
              <strong>Universidad Nacional Experimental del Táchira (UNET)</strong><br />
              Investigación de Operaciones II
            </p>
            <ul className="list-disc pl-5 text-sm font-medium text-slate-800 space-y-1">
              <li>Enderson Chavez</li>
              <li>Jessica Ramirez</li>
              <li>Francisco Adrianza</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
