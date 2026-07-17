export function simularModeloMMC(lambda: number, mu: number, c: number) {
  function factorial(n: number): number {
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) resultado *= i;
    return resultado;
  }
  
  if (mu <= 0 || c <= 0) {
    return { isStable: false, capacidad: 0 };
  }
  
  const rho = lambda / mu;
  const estabilidad= (rho / c)
  const isStable = estabilidad < 1;
  const capacidad = estabilidad*100;

  // Calcular c óptimo (mínimo número de servidores para que sea estable)
  let cMinimo = 1;
  while ((rho / cMinimo) >= 1) {

    cMinimo++;
  }
  
  if (!isStable) {
    return { isStable: false, capacidad };
  }
  
  let sumatoria = 0;
  for (let n = 0; n < c; n++) {
    sumatoria += Math.pow(rho, n) / factorial(n);
  }
  
  const segundaParte = (Math.pow(rho, c) / factorial(c)) * (1 / (1 - (rho / c)));
  const p0 = 1 / (sumatoria + segundaParte);
  
  const numeradorLq = Math.pow(rho, c + 1);
  const denominadorLq = factorial(c - 1) * Math.pow(c - rho, 2);
  const lq = (numeradorLq / denominadorLq) * p0;
  
  const wqHoras = lq / lambda;
  const wqMinutos = wqHoras * 60;

  // Determinar si hay excedente de personal
  const enfermerosExcedentes = c > cMinimo ? c - cMinimo : 0;
  
  return {
    isStable: true,
    capacidad,
    wqMinutos,
    lq,
    enfermerosExcedentes
  };
}
