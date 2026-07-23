import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import CookieConsentBanner from '../CookieConsentBanner';
import { WindowManagerProvider } from '../../context/WindowManager';

describe('CookieConsentBanner', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const renderWithProvider = (component) => {
    return render(
      <WindowManagerProvider>
        {component}
      </WindowManagerProvider>
    );
  };

  it('renders the banner when no consent is found in localStorage', () => {
    renderWithProvider(<CookieConsentBanner />);
    expect(screen.getByText(/We use cookies to improve your experience/i)).toBeInTheDocument();
  });

  it('does not render the banner if consent was previously given', () => {
    localStorage.setItem('cire_cookie_consent', 'granted');
    renderWithProvider(<CookieConsentBanner />);
    expect(screen.queryByText(/We use cookies to improve your experience/i)).not.toBeInTheDocument();
  });

  it('hides the banner and sets localStorage when Accept is clicked', () => {
    renderWithProvider(<CookieConsentBanner />);
    const acceptBtn = screen.getByRole('button', { name: /Accept/i });
    
    fireEvent.click(acceptBtn);
    
    expect(localStorage.getItem('cire_cookie_consent')).toBe('granted');
    expect(screen.queryByText(/We use cookies to improve your experience/i)).not.toBeInTheDocument();
  });

  it('hides the banner and sets localStorage when Decline is clicked', () => {
    renderWithProvider(<CookieConsentBanner />);
    const declineBtn = screen.getByRole('button', { name: /Decline/i });
    
    fireEvent.click(declineBtn);
    
    expect(localStorage.getItem('cire_cookie_consent')).toBe('denied');
    expect(screen.queryByText(/We use cookies to improve your experience/i)).not.toBeInTheDocument();
  });
});
