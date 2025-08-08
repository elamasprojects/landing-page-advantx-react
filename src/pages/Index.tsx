
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ProcessSteps from '../components/ProcessSteps';
import AutomationAssessment from '../components/AutomationAssessment';
import Services from '../components/Services';
import ROICalculator from '../components/ROICalculator';
// import Testimonials from '../components/Testimonials';
// import Team from '../components/Team';
import FAQs from '../components/FAQs';
import ContactCTA from '../components/ContactCTA';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      <Hero />
      <ProcessSteps />
      <AutomationAssessment />
      <Services />
      <ROICalculator />
      {/* <Testimonials /> */}
      {/* <Team /> */}
      <ContactCTA />
      <FAQs />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
