import { useMemo } from "react";

const NicoFMiranda = () => {
  const srcDoc = useMemo(() => `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema IA para Carousels de Instagram - AdvantX</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #F8FAFC; background: linear-gradient(135deg, #6B46C1, #A855F7, #C084FC); min-height: 100vh; }
        .presentation { max-width: 1200px; margin: 0 auto; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 20px 40px rgba(107, 70, 193, 0.3); border-radius: 20px; overflow: hidden; }
        .slide { padding: 60px; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; page-break-after: always; position: relative; }
        .slide:last-child { page-break-after: avoid; }
        .landing-btn { position: fixed; top: 30px; right: 30px; background: rgba(255, 255, 255, 0.1); color: #F8FAFC; padding: 12px 24px; border-radius: 25px; font-size: 0.9rem; font-weight: 600; text-decoration: none; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3); transition: all 0.3s ease; z-index: 1000; }
        .landing-btn:hover { background: rgba(255, 255, 255, 0.2); transform: translateY(-2px); box-shadow: 0 10px 25px rgba(107, 70, 193, 0.4); }
        .slide-1 { color: #F8FAFC; text-align: center; justify-content: center; align-items: center; }
        .hero-logo { width: 120px; height: 120px; margin: 0 auto 40px auto; filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)); }
        .hero-logo img { width: 100%; height: 100%; object-fit: contain; }
        .slide-1 h1 { font-size: 3.5rem; font-weight: 800; margin-bottom: 30px; line-height: 1.2; background: linear-gradient(45deg, #ffffff, #E0E7FF); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 0 30px rgba(255, 255, 255, 0.3); }
        .slide-1 .subtitle { font-size: 1.5rem; font-weight: 300; margin-bottom: 40px; color: #F3E8FF; opacity: 0.9; }
        .slide-1 .company { font-size: 1.8rem; font-weight: 600; color: #DDD6FE; margin-top: 60px; }
        .slide-1 .company-subtitle { margin-top: 20px; font-size: 1.1rem; opacity: 0.8; color: #E2E8F0; }
        .slide-2 { background: rgba(255, 255, 255, 0.02); }
        .slide h2 { font-size: 2.5rem; color: #F8FAFC; margin-bottom: 40px; font-weight: 700; text-align: center; background: linear-gradient(45deg, #ffffff, #E0E7FF); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 40px; }
        .overview-card { background: rgba(255, 255, 255, 0.1); padding: 30px; border-radius: 20px; backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 8px 32px rgba(107, 70, 193, 0.3); border-left: 5px solid #A855F7; }
        .overview-card h3 { color: #F8FAFC; font-size: 1.4rem; margin-bottom: 15px; font-weight: 600; }
        .overview-card p { font-size: 1.1rem; color: #E2E8F0; line-height: 1.6; }
        .price-highlight { background: linear-gradient(45deg, #10B981, #06D6A0); color: white; padding: 25px; border-radius: 15px; text-align: center; margin: 30px 0; box-shadow: 0 8px 32px rgba(16, 185, 129, 0.3); }
        .price-highlight h3 { font-size: 1.8rem; margin-bottom: 10px; color: white; }
        .price-highlight p { color: rgba(255, 255, 255, 0.9); }
        .process-step { background: rgba(255, 255, 255, 0.08); margin: 20px 0; padding: 25px; border-radius: 15px; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-left: 5px solid #A855F7; transition: transform 0.3s ease; }
        .process-step:hover { transform: translateX(5px); }
        .step-number { background: linear-gradient(45deg, #A855F7, #C084FC); color: white; width: 40px; height: 40px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: 600; margin-right: 15px; font-size: 1.2rem; box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4); }
        .step-content { display: inline-block; vertical-align: top; width: calc(100% - 60px); }
        .step-title { font-size: 1.3rem; font-weight: 600; color: #F8FAFC; margin-bottom: 8px; }
        .step-description { color: #E2E8F0; font-size: 1rem; line-height: 1.6; }
        .features-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; margin-top: 40px; }
        .feature-card { background: rgba(255, 255, 255, 0.1); padding: 30px; border-radius: 20px; backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 8px 32px rgba(107, 70, 193, 0.3); text-align: center; border-top: 4px solid #A855F7; }
        .feature-icon { font-size: 3rem; margin-bottom: 20px; }
        .feature-card h3 { color: #F8FAFC; margin-bottom: 15px; font-size: 1.3rem; font-weight: 600; }
        .feature-card p { color: #E2E8F0; font-size: 1rem; line-height: 1.6; }
        .slide-5 { text-align: center; }
        .contact-info { background: rgba(255, 255, 255, 0.1); padding: 40px; border-radius: 20px; backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 8px 32px rgba(107, 70, 193, 0.3); margin-top: 40px; }
        .contact-info h3 { font-size: 1.8rem; margin-bottom: 30px; color: #F8FAFC; font-weight: 600; }
        .contact-item { margin: 20px 0; font-size: 1.2rem; color: #E2E8F0; }
        .cta-button { background: rgba(255, 255, 255, 0.1); color: #F8FAFC; padding: 15px 40px; border-radius: 25px; font-size: 1.2rem; font-weight: 600; text-decoration: none; display: inline-block; margin-top: 30px; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3); transition: all 0.3s ease; }
        .cta-button:hover { background: rgba(255, 255, 255, 0.2); transform: translateY(-2px); box-shadow: 0 10px 25px rgba(107, 70, 193, 0.4); }
        .slide-5 p { margin-top: 40px; font-size: 1.1rem; opacity: 0.9; color: #E2E8F0; }
        @media print { body { background: white; color: #2c3e50; } .presentation { box-shadow: none; background: white; } .slide { page-break-inside: avoid; background: white !important; } .slide h1, .slide h2, .slide h3 { color: #2c3e50 !important; -webkit-text-fill-color: #2c3e50 !important; } .overview-card, .feature-card, .process-step, .contact-info { background: #f8f9fa !important; color: #2c3e50 !important; border: 1px solid #dee2e6 !important; } .overview-card h3, .feature-card h3, .step-title, .contact-info h3 { color: #2c3e50 !important; } .overview-card p, .feature-card p, .step-description, .contact-item { color: #555 !important; } .watermark-logo { opacity: 0.3; } }
        @media (max-width: 768px) { .slide { padding: 30px 20px; } .slide h1 { font-size: 2.5rem; } .slide h2 { font-size: 2rem; } .overview-grid, .features-grid { grid-template-columns: 1fr; gap: 20px; } .landing-btn { top: 20px; right: 20px; font-size: 0.8rem; padding: 10px 20px; } .hero-logo { width: 80px; height: 80px; } }
    </style>
</head>
<body>
    <div class="presentation">
        <a href="https://advantx.co" target="_blank" class="landing-btn">Landing Page AdvantX ↗️</a>
        <div class="slide slide-1">
            <h1>Sistema de IA para<br>Carousels de Instagram</h1>
            <p class="subtitle">Automatización inteligente de contenido científico</p>
            <div class="company">AdvantX</div>
            <p class="company-subtitle">Agencia especializada en Inteligencia Artificial</p>
        </div>
        <div class="slide slide-2">
            <h2>Resumen del Proyecto</h2>
            <div class="price-highlight">
                <h3>Inversión: $250 USD inicial + $39 USD/mes</h3>
                <p>Sistema completo automatizado de generación de contenido</p>
            </div>
            <div class="overview-grid">
                <div class="overview-card">
                    <h3>🎯 Objetivo</h3>
                    <p>Crear carousels automatizados para Instagram con formato estilo Twitter, enfocados en neurociencia y respaldados por investigación científica actual.</p>
                </div>
                <div class="overview-card">
                    <h3>🔄 Frecuencia</h3>
                    <p>Generación automática semanal al inicio de cada semana, con contenido fresco basado en los últimos avances científicos.</p>
                </div>
                <div class="overview-card">
                    <h3>📱 Formato</h3>
                    <p>Carousels de 6 partes con diseño que simula posts de Twitter, optimizados para máximo engagement en Instagram.</p>
                </div>
                <div class="overview-card">
                    <h3>🚀 Entrega</h3>
                    <p>Integración directa con Google Drive o envío automático por Telegram para facilitar la publicación.</p>
                </div>
            </div>
        </div>
        <div class="slide">
            <h2>Proceso de Automatización</h2>
            <div class="process-step">
                <span class="step-number">1</span>
                <div class="step-content">
                    <div class="step-title">Trigger Semanal Automático</div>
                    <div class="step-description">El sistema se activa automáticamente cada lunes por la mañana, iniciando el ciclo de generación de contenido para la semana.</div>
                </div>
            </div>
            <div class="process-step">
                <span class="step-number">2</span>
                <div class="step-content">
                    <div class="step-title">Scraping Inteligente de Fuentes</div>
                    <div class="step-description">Recopilación automática de las últimas investigaciones, papers científicos y avances en neurociencia de fuentes académicas verificadas.</div>
                </div>
            </div>
            <div class="process-step">
                <span class="step-number">3</span>
                <div class="step-content">
                    <div class="step-title">Redacción IA del Script</div>
                    <div class="step-description">Creación de contenido estructurado en 6 partes optimizado para carousel de Instagram, con lenguaje accesible y engaging.</div>
                </div>
            </div>
            <div class="process-step">
                <span class="step-number">4</span>
                <div class="step-content">
                    <div class="step-title">Generación de Imágenes Estilo Twitter</div>
                    <div class="step-description">Creación automática de 6 imágenes con formato Twitter: avatar personalizado, username, verificación y texto optimizado para lectura.</div>
                </div>
            </div>
            <div class="process-step">
                <span class="step-number">5</span>
                <div class="step-content">
                    <div class="step-title">Entrega Automatizada</div>
                    <div class="step-description">Subida automática a Google Drive en carpeta organizada o envío directo por Telegram, listo para publicar en Instagram.</div>
                </div>
            </div>
        </div>
        <div class="slide">
            <h2>Características del Sistema</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🤖</div>
                    <h3>IA Avanzada</h3>
                    <p>Procesamiento de lenguaje natural para convertir investigación compleja en contenido digestible y atractivo.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>Fuentes Verificadas</h3>
                    <p>Acceso exclusivo a bases de datos académicas y journals científicos de neurociencia reconocidos mundialmente.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎨</div>
                    <h3>Diseño Consistente</h3>
                    <p>Generación automática de imágenes con branding cohesivo y formato Twitter optimizado para Instagram.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <h3>Totalmente Automatizado</h3>
                    <p>Cero intervención manual requerida. El sistema funciona de manera autónoma semana tras semana.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📈</div>
                    <h3>Optimizado para Engagement</h3>
                    <p>Contenido estructurado específicamente para maximizar interacción y alcance en Instagram.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔗</div>
                    <h3>Integración Completa</h3>
                    <p>Conexión directa con Google Drive y Telegram para flujo de trabajo sin interrupciones.</p>
                </div>
            </div>
        </div>
        <div class="slide slide-5">
            <h2>¿Listo para Revolucionar tu Contenido?</h2>
            <div class="contact-info">
                <h3>Contacta con AdvantX</h3>
                <div class="contact-item"><strong>Inversión:</strong> $250 USD (setup) + $39 USD/mes</div>
                <div class="contact-item"><strong>Tiempo de implementación:</strong> 10-14 días hábiles</div>
                <div class="contact-item"><strong>Soporte:</strong> Incluido durante toda la suscripción</div>
                <a href="https://wa.me/5491157388695?text=Eze,%20quiero%20comenzar%20el%20proyecto!" class="cta-button" target="_blank">Comenzar Proyecto</a>
            </div>
            <p>Automatiza tu estrategia de contenido científico y posiciona tu marca como líder en divulgación de neurociencia</p>
        </div>
    </div>
    <script>
        function generatePDF() { window.print(); }
        window.addEventListener('load', function() {
            setTimeout(() => {
                if (confirm('¿Deseas generar el PDF de la presentación?')) { generatePDF(); }
            }, 1000);
        });
    </script>
</body>
</html>`, []);

  return (
    <div style={{ minHeight: "100vh", background: "transparent" }}>
      <iframe
        title="NicoFMiranda Presentation"
        style={{ width: "100%", height: "100vh", border: "none" }}
        srcDoc={srcDoc}
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
    </div>
  );
};

export default NicoFMiranda;


