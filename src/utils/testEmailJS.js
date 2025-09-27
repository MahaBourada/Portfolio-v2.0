// Utilitaire pour tester la configuration EmailJS
import { EMAILJS_CONFIG } from '../config/emailjs';

export const testEmailJSConfig = () => {
  console.log('🔧 Configuration EmailJS:');
  console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID);
  console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
  console.log('Public Key:', EMAILJS_CONFIG.PUBLIC_KEY);
  
  // Vérification des variables d'environnement
  console.log('🔍 Variables d\'environnement:');
  console.log('VITE_EMAILJS_SERVICE_ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
  console.log('VITE_EMAILJS_TEMPLATE_ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  console.log('VITE_EMAILJS_PUBLIC_KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  
  const isConfigured = EMAILJS_CONFIG.SERVICE_ID !== 'your_service_id' && 
                      EMAILJS_CONFIG.TEMPLATE_ID !== 'your_template_id' && 
                      EMAILJS_CONFIG.PUBLIC_KEY !== 'your_public_key' &&
                      EMAILJS_CONFIG.SERVICE_ID !== 'service_ntudb5o';
  
  console.log('✅ Configuration valide:', isConfigured);
  
  if (!isConfigured) {
    console.error('❌ Problème de configuration détecté!');
    console.log('Vérifiez que vos clés EmailJS sont correctes dans le fichier .env');
  }
  
  return isConfigured;
};
