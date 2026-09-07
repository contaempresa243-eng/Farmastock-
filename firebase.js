import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";

// 1. Configuração do seu projeto Firebase (FarmaStock)
const firebaseConfig = {
  apiKey: "AIzaSyC4JPzPRnI2R0vYKDngIc55-D2v_BMUh54",
  authDomain: "farmastock-fbbd2.firebaseapp.com",
  projectId: "farmastock-fbbd2",
  storageBucket: "farmastock-fbbd2.firebasestorage.app",
  messagingSenderId: "535073309658",
  appId: "1:535073309658:web:e208aa2389ad8aa95136e3"
};

// 2. Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// 3. Inicializar o App Check com o reCAPTCHA Enterprise
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider('6Lcojq4tAAAAAI8jJ-0AlfBdLzYo3RgDzs3oHKoG'),
  isTokenAutoRefreshEnabled: true
});

// 4. Inicializar os serviços que o FarmaStock utiliza
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
