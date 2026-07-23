import { useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export function useVisitorTracking() {
    useEffect(() => {
        const trackVisitor = async () => {
            // Only track once per session
            if (sessionStorage.getItem('visitor_tracked')) return;
            
            try {
                // Collect basic metadata
                const metadata = {
                    userAgent: navigator.userAgent,
                    language: navigator.language,
                    platform: navigator.platform,
                    screenResolution: `${window.screen.width}x${window.screen.height}`,
                    viewportSize: `${window.innerWidth}x${window.innerHeight}`,
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    timestamp: serverTimestamp(),
                    url: window.location.href,
                    referrer: document.referrer
                };

                // Try to get IP and rough location if possible (using ipify, but could use other services)
                try {
                    const ipResponse = await fetch('https://api.ipify.org?format=json');
                    if (ipResponse.ok) {
                        const ipData = await ipResponse.json();
                        metadata.ip = ipData.ip;
                    }
                } catch (e) {
                    console.warn('Could not fetch IP address');
                }

                await addDoc(collection(db, 'visitors'), metadata);
                sessionStorage.setItem('visitor_tracked', 'true');
            } catch (error) {
                console.error('Failed to track visitor metadata:', error);
            }
        };

        trackVisitor();
    }, []);
}
