"use client"

import { createContext, useContext, useState, useEffect } from "react"

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

const translations = {
  en: {
    // Login/SignUp Common
    login: "Login",
    signUp: "Sign Up",
    emailAddress: "Email Address",
    password: "Password",
    confirmPassword: "Confirm Password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot Password?",
    loginSecurely: "Login Securely",
    createAccountSecurely: "Create Account Securely",
    orContinueWith: "Or continue with",
    google: "Google",
    github: "GitHub",

    // Login Specific
    welcomeBack: "Welcome back",
    signInToContinue: "Sign in to continue",

    // SignUp Specific
    firstName: "First Name",
    lastName: "Last Name",
    joinNow: "Join Now!",
    createAccountToStart: "Create an account to start",
    agreeToTerms: "I agree to the Terms of Service and Privacy Policy",
    alreadyHaveAccount: "Already have an account?",
    signInHere: "Sign in here",

    // Branding
    aiFirstLegal: "AI-First Legal",
    compliance: "Compliance",
    startYourLegal: "Start Your Legal",
    aiJourney: "AI Journey",
    automateClause:
      "Automate clause analysis, generate policies, and stay compliant across all jurisdictions with intelligent AI assistance.",
    joinThousands:
      "Join thousands of legal professionals who trust our AI-powered platform for compliance management and legal automation.",

    // Features
    gdprReady: "GDPR Ready",
    aiActCompliant: "AI Act Compliant",
    multiJurisdiction: "Multi-Jurisdiction",
    freeTrial: "Free Trial",
    secureSetup: "Secure Setup",
    globalAccess: "Global Access",

    // Placeholders
    emailPlaceholder: "you@company.com",
    firstNamePlaceholder: "John",
    lastNamePlaceholder: "Doe",
    passwordPlaceholder: "••••••••",
  },
  es: {
    // Login/SignUp Common
    login: "Iniciar Sesión",
    signUp: "Registrarse",
    emailAddress: "Dirección de Email",
    password: "Contraseña",
    confirmPassword: "Confirmar Contraseña",
    rememberMe: "Recordarme",
    forgotPassword: "¿Olvidaste tu contraseña?",
    loginSecurely: "Iniciar Sesión Segura",
    createAccountSecurely: "Crear Cuenta Segura",
    orContinueWith: "O continúa con",
    google: "Google",
    github: "GitHub",

    // Login Specific
    welcomeBack: "Bienvenido de vuelta",
    signInToContinue: "Inicia sesión para continuar",

    // SignUp Specific
    firstName: "Nombre",
    lastName: "Apellido",
    joinNow: "¡Únete Ahora!",
    createAccountToStart: "Crea una cuenta para comenzar",
    agreeToTerms: "Acepto los Términos de Servicio y Política de Privacidad",
    alreadyHaveAccount: "¿Ya tienes una cuenta?",
    signInHere: "Inicia sesión aquí",

    // Branding
    aiFirstLegal: "Legal con IA",
    compliance: "Cumplimiento",
    startYourLegal: "Inicia tu Viaje",
    aiJourney: "Legal con IA",
    automateClause:
      "Automatiza el análisis de cláusulas, genera políticas y mantente conforme en todas las jurisdicciones con asistencia inteligente de IA.",
    joinThousands:
      "Únete a miles de profesionales legales que confían en nuestra plataforma impulsada por IA para la gestión de cumplimiento y automatización legal.",

    // Features
    gdprReady: "GDPR Listo",
    aiActCompliant: "Conforme IA",
    multiJurisdiction: "Multi-Jurisdicción",
    freeTrial: "Prueba Gratis",
    secureSetup: "Configuración Segura",
    globalAccess: "Acceso Global",

    // Placeholders
    emailPlaceholder: "tu@empresa.com",
    firstNamePlaceholder: "Juan",
    lastNamePlaceholder: "Pérez",
    passwordPlaceholder: "••••••••",
  },
  ar: {
    // Login/SignUp Common
    login: "تسجيل الدخول",
    signUp: "إنشاء حساب",
    emailAddress: "عنوان البريد الإلكتروني",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    rememberMe: "تذكرني",
    forgotPassword: "نسيت كلمة المرور؟",
    loginSecurely: "تسجيل دخول آمن",
    createAccountSecurely: "إنشاء حساب آمن",
    orContinueWith: "أو المتابعة مع",
    google: "جوجل",
    github: "جيت هاب",

    // Login Specific
    welcomeBack: "مرحباً بعودتك",
    signInToContinue: "سجل الدخول للمتابعة",

    // SignUp Specific
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    joinNow: "انضم الآن!",
    createAccountToStart: "أنشئ حساباً للبدء",
    agreeToTerms: "أوافق على شروط الخدمة وسياسة الخصوصية",
    alreadyHaveAccount: "هل لديك حساب بالفعل؟",
    signInHere: "سجل الدخول هنا",

    // Branding
    aiFirstLegal: "قانوني بالذكاء",
    compliance: "الامتثال",
    startYourLegal: "ابدأ رحلتك",
    aiJourney: "القانونية",
    automateClause:
      "أتمت تحليل البنود، وولد السياسات، وابق متوافقاً عبر جميع الولايات القضائية بمساعدة الذكاء الاصطناعي الذكي.",
    joinThousands:
      "انضم إلى آلاف المهنيين القانونيين الذين يثقون في منصتنا المدعومة بالذكاء الاصطناعي لإدارة الامتثال والأتمتة القانونية.",

    // Features
    gdprReady: "جاهز للائحة العامة",
    aiActCompliant: "متوافق مع قانون الذكاء الاصطناعي",
    multiJurisdiction: "متعدد الولايات",
    freeTrial: "تجربة مجانية",
    secureSetup: "إعداد آمن",
    globalAccess: "وصول عالمي",

    // Placeholders
    emailPlaceholder: "you@company.com",
    firstNamePlaceholder: "أحمد",
    lastNamePlaceholder: "محمد",
    passwordPlaceholder: "••••••••",
  },
  ur: {
    // Login/SignUp Common
    login: "لاگ ان",
    signUp: "سائن اپ",
    emailAddress: "ای میل ایڈریس",
    password: "پاس ورڈ",
    confirmPassword: "پاس ورڈ کی تصدیق",
    rememberMe: "مجھے یاد رکھیں",
    forgotPassword: "پاس ورڈ بھول گئے؟",
    loginSecurely: "محفوظ لاگ ان",
    createAccountSecurely: "محفوظ اکاؤنٹ بنائیں",
    orContinueWith: "یا جاری رکھیں",
    google: "گوگل",
    github: "گٹ ہب",

    // Login Specific
    welcomeBack: "واپس آپ کا خیر مقدم",
    signInToContinue: "جاری رکھنے کے لیے لاگ ان کریں",

    // SignUp Specific
    firstName: "پہلا نام",
    lastName: "آخری نام",
    joinNow: "ابھی شامل ہوں!",
    createAccountToStart: "شروع کرنے کے لیے اکاؤنٹ بنائیں",
    agreeToTerms: "میں خدمات کی شرائط اور رازداری کی پالیسی سے اتفاق کرتا ہوں",
    alreadyHaveAccount: "کیا آپ کا پہلے سے اکاؤنٹ ہے؟",
    signInHere: "یہاں لاگ ان کریں",

    // Branding
    aiFirstLegal: "AI پہلے قانونی",
    compliance: "تعمیل",
    startYourLegal: "اپنا قانونی",
    aiJourney: "سفر شروع کریں",
    automateClause:
      "شق کا تجزیہ خودکار بنائیں، پالیسیاں بنائیں، اور ذہین AI مدد کے ساتھ تمام دائرہ اختیارات میں مطابقت پذیر رہیں۔",
    joinThousands:
      "ہزاروں قانونی پیشہ ور افراد کے ساتھ شامل ہوں جو تعمیل کے انتظام اور قانونی خودکاری کے لیے ہمارے AI سے چلنے والے پلیٹ فارم پر بھروسہ کرتے ہیں۔",

    // Features
    gdprReady: "GDPR تیار",
    aiActCompliant: "AI ایکٹ مطابق",
    multiJurisdiction: "کثیر دائرہ اختیار",
    freeTrial: "مفت آزمائش",
    secureSetup: "محفوظ سیٹ اپ",
    globalAccess: "عالمی رسائی",

    // Placeholders
    emailPlaceholder: "آپ@کمپنی.com",
    firstNamePlaceholder: "احمد",
    lastNamePlaceholder: "علی",
    passwordPlaceholder: "••••••••",
  },
}

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ar", name: "العربية", flag: "🇦🇪" },
  { code: "ur", name: "اردو", flag: "🇵🇰" },
]

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode)
    localStorage.setItem("language", languageCode)
  }

  const t = (key) => {
    return translations[currentLanguage][key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        changeLanguage,
        t,
        languages,
        isRTL: currentLanguage === "ar" || currentLanguage === "ur",
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
