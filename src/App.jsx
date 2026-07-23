import Desktop from "./components/Desktop/Desktop.jsx";
import CoordinateOverlay from "./components/Debug/CoordinateOverlay.jsx";
import NewsletterPopup from "./components/NewsletterPopup.jsx";
import { useWindowManager } from "./context/WindowManager.jsx";

import GuestbookPopup from "./components/GuestbookPopup.jsx";
import TikTokCurationWindow from "./components/windows/TikTokCurationWindow.jsx";
import PrivacyPolicyWindow from "./components/windows/PrivacyPolicyWindow.jsx";
import CookieConsentBanner from "./components/CookieConsentBanner.jsx";
import { useVisitorTracking } from "./hooks/useVisitorTracking.js";

export default function App() {
  useVisitorTracking();

  const { 
    isSubscribePopupOpen, toggleSubscribePopup, 
    isGuestbookOpen, toggleGuestbook, 
    isCuratedContentOpen, toggleCuratedContent,
    isPrivacyPolicyOpen, togglePrivacyPolicy,
    windows, focusWindow, closeWindow 
  } = useWindowManager();

  // Find the highest z-index for the privacy policy window
  const maxZIndex = windows.length > 0 ? Math.max(...windows.map(w => w.zIndex)) + 1 : 100;

  // We only conditionally mount Analytics if consent is granted or not explicitly denied,
  // however Vercel Analytics handles compliance on its own mostly. 
  // We'll let the user decide if they want strict mode.
  const consent = localStorage.getItem('cire_cookie_consent');

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <CoordinateOverlay />
      {/* Main Desktop Environment */}
      <Desktop />
      {isSubscribePopupOpen && (
        <NewsletterPopup onClose={() => toggleSubscribePopup(false)} />
      )}
      {isGuestbookOpen && (
        <GuestbookPopup onClose={() => toggleGuestbook(false)} />
      )}
      {isCuratedContentOpen && (
        <TikTokCurationWindow onClose={() => toggleCuratedContent(false)} />
      )}
      {isPrivacyPolicyOpen && (
        <PrivacyPolicyWindow 
          windowData={{ id: 'privacy-policy', x: window.innerWidth / 2 - 300, y: 100 }} 
          focusWindow={() => {}} 
          closeWindow={() => togglePrivacyPolicy(false)} 
          zIndex={maxZIndex} 
        />
      )}
      
      <CookieConsentBanner />
      
      {/* Firebase Analytics will auto-initialize when configured in firebase.js */}
    </div>
  );
}
