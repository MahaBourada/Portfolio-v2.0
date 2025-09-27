# Configuration EmailJS pour le formulaire de contact

## 📧 Instructions de configuration

### 1. Créer un compte EmailJS
- Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
- Créez un compte gratuit

### 2. Configurer un service email
- Dans le dashboard EmailJS, allez dans "Email Services"
- Cliquez sur "Add New Service"
- Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
- Suivez les instructions pour connecter votre compte email

### 3. Créer un template d'email
- Allez dans "Email Templates"
- Cliquez sur "Create New Template"
- Utilisez ce template :

```
Subject: Nouveau message de contact depuis votre portfolio

De: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Envoyé depuis votre portfolio
```

### 4. Obtenir vos clés
- **Service ID** : Trouvé dans "Email Services"
- **Template ID** : Trouvé dans "Email Templates" 
- **Public Key** : Trouvé dans "Account" > "General"

### 5. Configurer les variables d'environnement
Créez un fichier `.env` à la racine du projet :

```env
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```

### 6. Redémarrer le serveur
```bash
npm run dev
```

## 🔧 Dépannage

- Vérifiez que toutes les clés sont correctes
- Assurez-vous que le template utilise les bonnes variables (from_name, from_email, message)
- Vérifiez la console du navigateur pour les erreurs
- Testez avec un email valide

## 📝 Variables du template
Le formulaire envoie ces variables :
- `from_name` : Nom de l'expéditeur
- `from_email` : Email de l'expéditeur  
- `message` : Message de l'utilisateur
