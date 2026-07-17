# OptiMMC

## 📌 Descripción del Proyecto
Una aplicación web (MVP) diseñada para ofrecer una solución útil e innovadora en la mitigación de crisis humanitarias. Basada en el Modelo M/M/c de la Teoría de Colas, la herramienta permite calcular en tiempo real la cantidad óptima de servidores médicos (enfermeros) necesarios en un centro de vacunación post-desastre, garantizando que los tiempos de espera no superen los 10 minutos y evitando aglomeraciones peligrosas.

## ⚙️ Características Principales
* **Calculadora M/M/c:** Ingreso interactivo de tasa de llegadas ($\lambda$), tasa de servicio ($\mu$) y número de servidores ($c$).
* **Alertas Visuales:** Renderizado condicional en tiempo real. Rojo para colapso inminente y verde para sistema estable.
* **Optimización de Recursos:** Algoritmo que detecta personal ocioso o excedente y sugiere la reasignación al mínimo necesario para evitar desperdicio de recursos humanos.
* **Arquitectura Ágil:** Ejecución enteramente en el cliente (React) para máxima velocidad de respuesta sin depender de bases de datos.

## 🧮 Base Matemática (Modelo M/M/c)
El motor analítico del simulador evalúa las siguientes variables y ecuaciones de forma algorítmica:

### 1. Variables de Entrada
* **$\lambda$ (Lambda):** Tasa de llegada (ej. 50 personas/hora).
* **$\mu$ (Mu):** Tasa de servicio por servidor (ej. 20 vacunados/hora por enfermero).
* **$c$:** Número de servidores activos (enfermeros).

### 2. Factor de Utilización ($\rho$) y Estabilidad
* **$\rho = \frac{\lambda}{\mu}$**
* **Condición de estabilidad:** $\frac{\rho}{c} < 1$. Si el cociente es $\ge 1$, el sistema colapsará provocando un tiempo de espera infinito.

### 3. Probabilidad de Sistema Vacío ($P_0$)
Calcula la probabilidad de que no haya ninguna persona esperando o siendo atendida:
$$ P_0 = \frac{1}{\sum_{n=0}^{c-1} \frac{\rho^n}{n!} + \frac{\rho^c}{c!} \left(\frac{1}{1 - \rho/c}\right)} $$

### 4. Longitud Promedio de la Fila ($L_q$)
Representa la cantidad esperada de personas esperando su turno en la carpa médica:
$$ L_q = \left[ \frac{\rho^{c+1}}{(c-1)! (c-\rho)^2} \right] \times P_0 $$

### 5. Tiempo Promedio de Espera en Fila ($W_q$)
El tiempo que un damnificado pasará en la cola antes de recibir la vacuna:
$$ W_q = \frac{L_q}{\lambda} $$
*(Nota: El sistema convierte automáticamente este valor resultante de horas a minutos para facilitar la interpretación del usuario).*

## 🛠️ Stack Tecnológico
* **Frontend:** React, Vite
* **Estilos:** Tailwind CSS
* **Lenguaje:** TypeScript (Asegurando un tipado estricto para las operaciones matemáticas).

## 🚀 Instrucciones de Ejecución
1. Clonar el repositorio.
2. Instalar dependencias mediante la terminal:
   ```bash
   npm install
   ```
3. Levantar el entorno de desarrollo:
   ```bash
   npm run dev
   ```
