'use client';
import CookieConsent from "react-cookie-consent";

const CookieBanner = () => (
    <CookieConsent
        location="bottom"
        buttonText="Приймаю"
        cookieName="animanCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
    >
        Ми використовуємо cookie для поліпшення досвіду користування.
    </CookieConsent>
);

export default CookieBanner;