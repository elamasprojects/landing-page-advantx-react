
import { useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Calculator, TrendingUp, Clock, DollarSign, Info, HelpCircle, Minus, Plus } from 'lucide-react';

const ROICalculator = () => {
  const [employees, setEmployees] = useState(10);
  const [hoursPerDay, setHoursPerDay] = useState(2);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [showResults, setShowResults] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const calculateBtnRef = useRef<HTMLButtonElement | null>(null);

  type ConfettiParticle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    alpha: number;
    rotation: number;
    vr: number;
  };

  const launchConfettiFromButton = () => {
    try {
      const btn = calculateBtnRef.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const originX = rect.left + rect.width / 2;
      const originY = rect.top + rect.height / 2;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'fixed';
      canvas.style.left = '0';
      canvas.style.top = '0';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '9999';
      document.body.appendChild(canvas);

      const colors = ['#7c3aed', '#9333ea', '#22c55e', '#eab308', '#3b82f6', '#ef4444'];
      const particles: ConfettiParticle[] = [];
      const particleCount = 80;
      for (let i = 0; i < particleCount; i += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 3 + Math.random() * 6;
        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 3 + Math.random() * 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          rotation: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.2,
        });
      }

      const gravity = 0.15;
      const drag = 0.985;
      const start = performance.now();
      const duration = 900; // ms

      const animate = (time: number) => {
        const elapsed = time - start;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
          p.vx *= drag;
          p.vy = p.vy * drag + gravity;
          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.vr;
          p.alpha *= 0.985;
          ctx.save();
          ctx.globalAlpha = Math.max(p.alpha, 0);
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        });
        if (elapsed < duration) {
          requestAnimationFrame(animate);
        } else {
          document.body.removeChild(canvas);
        }
      };
      requestAnimationFrame(animate);
    } catch (_) {
      // ignore if canvas is unavailable
    }
  };

  const playSuccessTone = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.value = 880; // A5 tone
      gainNode.gain.setValueAtTime(0.0001, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.2, audioContext.currentTime + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.2);
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.22);
    } catch (e) {
      // noop if AudioContext is unavailable
    }
  };

  const handleCalculate = () => {
    setIsAnimating(true);
    playSuccessTone();
    launchConfettiFromButton();
    setShowResults(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const calculateROI = () => {
    const workingDaysPerMonth = 22;
    const efficiencyGain = 0.7; // 70% de la carga manual automatizada
    const dailySavings = employees * hoursPerDay * hourlyRate * efficiencyGain;
    const monthlySavings = dailySavings * workingDaysPerMonth;
    const annualSavings = monthlySavings * 12;
    const implementationCost = 1000; // Costo promedio de implementación actualizado
    const monthlyMaintenance = 100; // Mantenimiento estimado
    const annualMaintenance = monthlyMaintenance * 12;
    const netAnnualSavings = annualSavings - implementationCost - annualMaintenance;
    const roi = (netAnnualSavings / implementationCost) * 100;
    const effectiveMonthlyNet = Math.max(monthlySavings - monthlyMaintenance, 1);
    const paybackMonths = Math.ceil(implementationCost / effectiveMonthlyNet);

    return {
      dailySavings,
      monthlySavings,
      annualSavings,
      netAnnualSavings,
      roi: Math.max(roi, 0),
      paybackMonths: Math.max(paybackMonths, 1)
    };
  };

  const results = showResults ? calculateROI() : null;

  return (
    <section id="calculadora" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculadora de
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"> ROI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cuánto puedes ahorrar automatizando tus procesos con IA
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch transition-all duration-500 ${showResults ? 'lg:translate-x-[-4%]' : 'justify-items-center'}`}>
          {/* Calculator Form */}
          <Card className={`h-full flex flex-col transition-transform ${isAnimating ? 'animate-pulse' : ''} ${showResults ? '' : 'mx-auto'}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6 text-primary-600" />
                Calcula tu Ahorro
              </CardTitle>
              <CardDescription>
                Ingresa los datos de tu empresa para calcular el ROI de la automatización
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 flex-1 flex flex-col">
              <div>
                <Label htmlFor="employees">Número de empleados que realizan tareas repetitivas</Label>
                <div className="mt-2 grid grid-cols-[auto_1fr_auto] items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label="Disminuir empleados"
                    onClick={() => setEmployees((v) => Math.max(1, v - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Slider
                    value={[employees]}
                    onValueChange={(v) => setEmployees(v[0] || 1)}
                    min={1}
                    max={100}
                    step={1}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label="Aumentar empleados"
                    onClick={() => setEmployees((v) => Math.min(100, v + 1))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Input
                  id="employees"
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value) || 1)}
                  className="mt-2"
                  min={1}
                />
              </div>

              <div>
                <Label htmlFor="hours">Horas diarias dedicadas a tareas manuales (por empleado)</Label>
                <div className="mt-2 grid grid-cols-[auto_1fr_auto] items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label="Disminuir horas"
                    onClick={() => setHoursPerDay((v) => Math.max(0.5, +(v - 0.5).toFixed(1)))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Slider
                    value={[hoursPerDay]}
                    onValueChange={(v) => setHoursPerDay(v[0] || 0.5)}
                    min={0.5}
                    max={10}
                    step={0.5}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label="Aumentar horas"
                    onClick={() => setHoursPerDay((v) => Math.min(10, +(v + 0.5).toFixed(1)))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Input
                  id="hours"
                  type="number"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(parseFloat(e.target.value) || 0.5)}
                  className="mt-2"
                  min={0.5}
                  step={0.5}
                />
              </div>

              <div>
                <Label htmlFor="rate">Costo por hora promedio (USD)</Label>
                <div className="mt-2 grid grid-cols-[auto_1fr_auto] items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label="Disminuir costo por hora"
                    onClick={() => setHourlyRate((v) => Math.max(5, v - 5))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Slider
                    value={[hourlyRate]}
                    onValueChange={(v) => setHourlyRate(v[0] || 5)}
                    min={5}
                    max={100}
                    step={5}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label="Aumentar costo por hora"
                    onClick={() => setHourlyRate((v) => Math.min(100, v + 5))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Input
                  id="rate"
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value) || 5)}
                  className="mt-2"
                  min={5}
                  step={5}
                />
              </div>

              <Button 
                ref={calculateBtnRef}
                onClick={handleCalculate}
                className="mt-auto w-full bg-primary-600 hover:bg-primary-700"
                size="lg"
              >
                Calcular ROI
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-primary-50 to-purple-50 border-primary-200 animate-in fade-in slide-in-from-right-4 duration-500">
            {showResults && results ? (
              <>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-800">
                    Resultados de tu ROI
                  </CardTitle>
                  <CardDescription className="text-primary-700">
                    Basado en los datos proporcionados
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-gray-700">Ahorro Mensual</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        ${results.monthlySavings.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-gray-700">Ahorro Anual</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        ${results.annualSavings.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Calculator className="w-5 h-5 text-purple-600" />
                        <span className="font-medium text-gray-700">ROI Anual</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">
                        {results.roi.toFixed(0)}%
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-orange-600" />
                        <span className="font-medium text-gray-700">Recuperación</span>
                      </div>
                      <div className="text-2xl font-bold text-orange-600">
                        {results.paybackMonths} meses
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Beneficio Neto Anual</h4>
                    <div className="text-3xl font-bold text-primary-600">
                      ${results.netAnnualSavings.toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Después de costos de implementación y mantenimiento
                    </p>
                  </div>

                  <Button 
                    onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-primary-600 hover:bg-primary-700"
                    size="lg"
                  >
                    Agenda tu Consultoría Gratuita
                  </Button>
                </CardContent>
              </>
            ) : (
              <>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-800 flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-primary-600" />
                    Resultados de tu ROI
                  </CardTitle>
                  <CardDescription className="text-primary-700">
                    Se mostrarán aquí cuando calcules
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative">
                  {/* Placeholder skeletons */}
                  <div className="grid grid-cols-2 gap-4">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="bg-white/70 dark:bg-slate-800/70 p-4 rounded-lg shadow-sm">
                        <div className="h-4 w-32 bg-gray-200 dark:bg-slate-700 rounded mb-3 animate-pulse" />
                        <div className="h-7 w-24 bg-gray-200 dark:bg-slate-700 rounded animate-pulse" />
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/70 dark:bg-slate-800/70 p-4 rounded-lg shadow-sm">
                    <div className="h-4 w-48 bg-gray-200 dark:bg-slate-700 rounded mb-3 animate-pulse" />
                    <div className="h-8 w-40 bg-gray-200 dark:bg-slate-700 rounded animate-pulse" />
                  </div>

                  {/* Placeholder overlay intentionally removed per request */}
                </CardContent>
              </>
            )}
          </Card>
        </div>

        {/* Brief explanation below the calculator */}
        <div className="mt-10">
          <div className="max-w-3xl mx-auto rounded-xl border border-gray-200 bg-gray-50/60 p-5 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/60">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-primary-700 dark:text-primary-300">
                <Info className="h-5 w-5" />
              </div>
              <div className="text-sm text-gray-700 leading-relaxed dark:text-gray-100">
                <p>
                  Calculamos cuánto podrías ahorrar según tus empleados, horas manuales y costo por hora.
                </p>
                <p className="mt-2">
                  Usamos una mejora del 70%, y restamos el costo de implementación y mantenimiento para mostrarte el ROI y en cuántos meses recuperas la inversión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
