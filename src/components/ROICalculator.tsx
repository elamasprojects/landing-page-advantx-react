
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, TrendingUp, Clock, DollarSign } from 'lucide-react';

const ROICalculator = () => {
  const [employees, setEmployees] = useState(10);
  const [hoursPerDay, setHoursPerDay] = useState(2);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [showResults, setShowResults] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-500 ${showResults ? 'lg:translate-x-[-4%]' : 'justify-items-center'}`}>
          {/* Calculator Form */}
          <Card className={`h-fit transition-transform ${isAnimating ? 'animate-pulse' : ''} ${showResults ? '' : 'mx-auto'}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6 text-primary-600" />
                Calcula tu Ahorro
              </CardTitle>
              <CardDescription>
                Ingresa los datos de tu empresa para calcular el ROI de la automatización
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="employees">Número de empleados que realizan tareas repetitivas</Label>
                <Input
                  id="employees"
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value) || 0)}
                  className="mt-2"
                  min="1"
                />
              </div>

              <div>
                <Label htmlFor="hours">Horas diarias dedicadas a tareas manuales (por empleado)</Label>
                <Input
                  id="hours"
                  type="number"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(parseInt(e.target.value) || 0)}
                  className="mt-2"
                  min="0.5"
                  step="0.5"
                />
              </div>

              <div>
                <Label htmlFor="rate">Costo por hora promedio (USD)</Label>
                <Input
                  id="rate"
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value) || 0)}
                  className="mt-2"
                  min="5"
                />
              </div>

              <Button 
                onClick={handleCalculate}
                className="w-full bg-primary-600 hover:bg-primary-700"
                size="lg"
              >
                Calcular ROI
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {showResults && results && (
            <Card className="bg-gradient-to-br from-primary-50 to-purple-50 border-primary-200 animate-in fade-in slide-in-from-right-4 duration-500">
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
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
