import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function GuestbookPopup({ onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await addDoc(collection(db, 'guestbook'), {
                ...formData,
                timestamp: serverTimestamp()
            });

            setStatus('success');
            setTimeout(() => {
                if (onClose) onClose();
            }, 2500);
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#333',
        border: '1px solid #444',
        color: '#fff',
        borderRadius: '4px',
        marginBottom: '1rem',
        fontSize: '0.9rem',
        fontFamily: 'var(--font-mono)'
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
        }}>
            <div style={{
                width: '450px',
                backgroundColor: '#111',
                border: '1px solid #333',
                borderRadius: '8px',
                padding: '2rem 2rem 1rem 2rem',
                boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                position: 'relative'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '12px',
                        right: '15px',
                        background: 'none',
                        border: 'none',
                        color: '#666',
                        fontSize: '1.5rem',
                        cursor: 'pointer'
                    }}
                >
                    &times;
                </button>

                <h2 style={{
                    color: '#fff',
                    marginBottom: '0.2rem',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    letterSpacing: '1px'
                }}>
                    GUESTBOOK 🤝
                </h2>

                <p style={{
                    color: '#888',
                    textAlign: 'center',
                    marginBottom: '2rem',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)'
                }}>
                    SIGN THE GUESTBOOK TO CONNECT
                </p>

                {status === 'success' ? (
                    <div style={{ 
                        textAlign: 'center', 
                        color: '#00ffcc', 
                        padding: '2rem 1rem',
                        fontFamily: 'var(--font-mono)',
                        border: '1px dashed #333',
                        borderRadius: '4px'
                    }}>
                        ENTRY RECORDED.<br/><br/>WELCOME TO THE NETWORK.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="NAME / ALIAS"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{...inputStyle, marginBottom: 0}}
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="LOCATION"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            style={{...inputStyle, marginBottom: 0}}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="EMAIL ADDRESS"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{...inputStyle, marginBottom: 0}}
                        />
                        <textarea
                            name="message"
                            placeholder="MESSAGE"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={3}
                            style={{
                                ...inputStyle,
                                marginBottom: 0,
                                resize: 'none'
                            }}
                        />
                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            style={{
                                width: '100%',
                                padding: '12px',
                                backgroundColor: '#fff',
                                color: '#000',
                                border: 'none',
                                borderRadius: '4px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                cursor: status === 'submitting' ? 'wait' : 'pointer',
                                opacity: status === 'submitting' ? 0.7 : 1,
                                letterSpacing: '1px',
                                marginTop: '5px'
                            }}
                        >
                            {status === 'submitting' ? 'SUBMITTING...' : 'SIGN GUESTBOOK'}
                        </button>
                        {status === 'error' && (
                            <p style={{ color: '#ef4444', textAlign: 'center', marginTop: '5px', fontSize: '0.875rem' }}>
                                Connection failed. Please try again.
                            </p>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
}
