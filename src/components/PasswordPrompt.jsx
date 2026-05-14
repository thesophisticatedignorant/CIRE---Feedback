import React, { useState } from 'react';

export default function PasswordPrompt({ onCancel, onSuccess }) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    // Hardcoded password as shortcut for now
    const CORRECT_PASSWORD = 'TheBiggest';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === CORRECT_PASSWORD) {
            onSuccess();
        } else {
            setError(true);
            setPassword('');
            setTimeout(() => setError(false), 820);
        }
    };

    const handleChange = (e) => {
        setPassword(e.target.value);
        if (error) setError(false);
    };

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        }}>
            <div 
                className={`ios-password-prompt ${error ? 'shake' : ''}`}
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '14px',
                    width: '270px',
                    textAlign: 'center',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    animation: error ? 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both' : 'none'
                }}
            >
                <div style={{ padding: '20px 16px 16px' }}>
                    <h3 style={{ 
                        margin: '0 0 4px', 
                        fontSize: '17px', 
                        fontWeight: '600', 
                        color: '#000',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                    }}>
                        Enter Password
                    </h3>
                    <p style={{ 
                        margin: '0 0 16px', 
                        fontSize: '13px', 
                        color: '#333',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                    }}>
                        Password is required to access this folder.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="password"
                            value={password}
                            onChange={handleChange}
                            autoFocus
                            placeholder="Password"
                            style={{
                                width: '100%',
                                padding: '6px 8px',
                                fontSize: '14px',
                                border: '1px solid rgba(0, 0, 0, 0.2)',
                                borderRadius: '6px',
                                backgroundColor: '#fff',
                                color: '#000',
                                outline: 'none',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                textAlign: 'center',
                                letterSpacing: '4px'
                            }}
                        />
                    </form>
                </div>
                <div style={{
                    display: 'flex',
                    borderTop: '1px solid rgba(0, 0, 0, 0.2)',
                    height: '44px'
                }}>
                    <button
                        onClick={onCancel}
                        style={{
                            flex: 1,
                            background: 'transparent',
                            border: 'none',
                            borderRight: '1px solid rgba(0, 0, 0, 0.2)',
                            color: '#007AFF',
                            fontSize: '17px',
                            fontWeight: '400',
                            cursor: 'pointer',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        style={{
                            flex: 1,
                            background: 'transparent',
                            border: 'none',
                            color: '#007AFF',
                            fontSize: '17px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                        }}
                    >
                        OK
                    </button>
                </div>
            </div>
            <style>{`
                @keyframes shake {
                    10%, 90% { transform: translate3d(-1px, 0, 0); }
                    20%, 80% { transform: translate3d(2px, 0, 0); }
                    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                    40%, 60% { transform: translate3d(4px, 0, 0); }
                }
            `}</style>
        </div>
    );
}
