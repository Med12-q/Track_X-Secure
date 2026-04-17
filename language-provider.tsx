'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

type Language = 'fr' | 'en'

interface Translations {
  [key: string]: {
    fr: string
    en: string
  }
}

const translations: Translations = {
  // Navigation
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.dashboard': { fr: 'Tableau de bord', en: 'Dashboard' },
  'nav.devices': { fr: 'Appareils', en: 'Devices' },
  'nav.tracking': { fr: 'Localisation', en: 'Tracking' },
  'nav.reports': { fr: 'Signalements', en: 'Reports' },
  'nav.notifications': { fr: 'Notifications', en: 'Notifications' },
  'nav.settings': { fr: 'Parametres', en: 'Settings' },
  'nav.assistant': { fr: 'Assistant IA', en: 'AI Assistant' },
  'nav.logout': { fr: 'Deconnexion', en: 'Logout' },
  'nav.login': { fr: 'Connexion', en: 'Login' },
  'nav.signup': { fr: 'Inscription', en: 'Sign Up' },
  
  // Landing page
  'landing.hero.title': { fr: 'TRACK-X SECURE', en: 'TRACK-X SECURE' },
  'landing.hero.subtitle': { fr: 'Plateforme intelligente de localisation et recuperation de telephones', en: 'Intelligent phone tracking and recovery platform' },
  'landing.hero.cta': { fr: 'Commencer maintenant', en: 'Get Started' },
  'landing.hero.learnMore': { fr: 'En savoir plus', en: 'Learn More' },
  
  // Features
  'features.title': { fr: 'Fonctionnalites', en: 'Features' },
  'features.tracking.title': { fr: 'Localisation en temps reel', en: 'Real-time Tracking' },
  'features.tracking.desc': { fr: 'Suivez votre appareil sur une carte interactive', en: 'Track your device on an interactive map' },
  'features.security.title': { fr: 'Securite avancee', en: 'Advanced Security' },
  'features.security.desc': { fr: 'Verrouillez ou effacez vos donnees a distance', en: 'Lock or erase your data remotely' },
  'features.ai.title': { fr: 'Assistant IA', en: 'AI Assistant' },
  'features.ai.desc': { fr: 'Conseils intelligents en cas de vol', en: 'Smart advice in case of theft' },
  'features.reports.title': { fr: 'Declaration de vol', en: 'Theft Reports' },
  'features.reports.desc': { fr: 'Signalez et suivez vos cas de vol', en: 'Report and track theft cases' },
  
  // Dashboard
  'dashboard.welcome': { fr: 'Bienvenue', en: 'Welcome' },
  'dashboard.devices': { fr: 'Vos appareils', en: 'Your devices' },
  'dashboard.noDevices': { fr: 'Aucun appareil enregistre', en: 'No devices registered' },
  'dashboard.addDevice': { fr: 'Ajouter un appareil', en: 'Add a device' },
  'dashboard.lastSeen': { fr: 'Derniere connexion', en: 'Last seen' },
  'dashboard.online': { fr: 'En ligne', en: 'Online' },
  'dashboard.offline': { fr: 'Hors ligne', en: 'Offline' },
  'dashboard.battery': { fr: 'Batterie', en: 'Battery' },
  
  // Actions
  'actions.ring': { fr: 'Faire sonner', en: 'Ring' },
  'actions.lock': { fr: 'Verrouiller', en: 'Lock' },
  'actions.erase': { fr: 'Effacer', en: 'Erase' },
  'actions.locate': { fr: 'Localiser', en: 'Locate' },
  'actions.findMyDevice': { fr: 'Ouvrir Find My Device', en: 'Open Find My Device' },
  'actions.findMyiPhone': { fr: 'Ouvrir Find My iPhone', en: 'Open Find My iPhone' },
  
  // Theft report
  'report.title': { fr: 'Declaration de vol', en: 'Theft Report' },
  'report.email': { fr: 'Email', en: 'Email' },
  'report.phone': { fr: 'Numero de telephone', en: 'Phone number' },
  'report.brand': { fr: 'Marque', en: 'Brand' },
  'report.model': { fr: 'Modele', en: 'Model' },
  'report.imei': { fr: 'IMEI (optionnel)', en: 'IMEI (optional)' },
  'report.description': { fr: 'Description', en: 'Description' },
  'report.submit': { fr: 'Soumettre le signalement', en: 'Submit report' },
  'report.success': { fr: 'Signalement envoye avec succes', en: 'Report submitted successfully' },
  
  // AI Assistant
  'ai.title': { fr: 'Assistant Securite', en: 'Security Assistant' },
  'ai.placeholder': { fr: 'Posez votre question...', en: 'Ask your question...' },
  'ai.voice': { fr: 'Parler', en: 'Speak' },
  'ai.listening': { fr: 'Ecoute en cours...', en: 'Listening...' },
  
  // Auth
  'auth.login': { fr: 'Connexion', en: 'Login' },
  'auth.signup': { fr: 'Inscription', en: 'Sign Up' },
  'auth.email': { fr: 'Email', en: 'Email' },
  'auth.password': { fr: 'Mot de passe', en: 'Password' },
  'auth.confirmPassword': { fr: 'Confirmer le mot de passe', en: 'Confirm password' },
  'auth.fullName': { fr: 'Nom complet', en: 'Full name' },
  'auth.forgotPassword': { fr: 'Mot de passe oublie?', en: 'Forgot password?' },
  'auth.noAccount': { fr: 'Pas de compte?', en: 'No account?' },
  'auth.hasAccount': { fr: 'Deja un compte?', en: 'Already have an account?' },
  'auth.orContinueWith': { fr: 'Ou continuer avec', en: 'Or continue with' },
  'auth.google': { fr: 'Continuer avec Google', en: 'Continue with Google' },
  'auth.apple': { fr: 'Continuer avec Apple', en: 'Continue with Apple' },
  
  // Settings
  'settings.title': { fr: 'Parametres', en: 'Settings' },
  'settings.language': { fr: 'Langue', en: 'Language' },
  'settings.theme': { fr: 'Theme', en: 'Theme' },
  'settings.notifications': { fr: 'Notifications', en: 'Notifications' },
  'settings.security': { fr: 'Securite', en: 'Security' },
  
  // Common
  'common.loading': { fr: 'Chargement...', en: 'Loading...' },
  'common.error': { fr: 'Une erreur est survenue', en: 'An error occurred' },
  'common.save': { fr: 'Enregistrer', en: 'Save' },
  'common.cancel': { fr: 'Annuler', en: 'Cancel' },
  'common.delete': { fr: 'Supprimer', en: 'Delete' },
  'common.edit': { fr: 'Modifier', en: 'Edit' },
  'common.confirm': { fr: 'Confirmer', en: 'Confirm' },
  'common.back': { fr: 'Retour', en: 'Back' },
  'common.next': { fr: 'Suivant', en: 'Next' },
  'common.search': { fr: 'Rechercher', en: 'Search' },
  
  // Footer
  'footer.rights': { fr: 'Tous droits reserves', en: 'All rights reserved' },
  'footer.privacy': { fr: 'Confidentialite', en: 'Privacy' },
  'footer.terms': { fr: 'Conditions', en: 'Terms' },
  'footer.contact': { fr: 'Contact', en: 'Contact' },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr')

  useEffect(() => {
    const saved = localStorage.getItem('trackx-language') as Language
    if (saved && (saved === 'fr' || saved === 'en')) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('trackx-language', lang)
  }, [])

  const t = useCallback((key: string): string => {
    const translation = translations[key]
    if (!translation) return key
    return translation[language] || key
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
