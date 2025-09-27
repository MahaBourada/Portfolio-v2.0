// Configuration EmailJS
// Remplacez ces valeurs par vos vraies clés EmailJS
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xehdanh',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_glvq34m',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '9UlskkPVV5Nbb2bhl'
};

// Instructions pour configurer EmailJS :
// 1. Créez un compte sur https://www.emailjs.com/
// 2. Créez un service email (Gmail, Outlook, etc.)
// 3. Créez un template d'email
// 4. Créez un fichier .env à la racine du projet avec :
//    VITE_EMAILJS_SERVICE_ID=votre_service_id
//    VITE_EMAILJS_TEMPLATE_ID=votre_template_id
//    VITE_EMAILJS_PUBLIC_KEY=votre_public_key
