import React from 'react';

export default function TikTokCurationWindow({ onClose }) {
    // Mock TikTok videos
    const videos = Array.from({ length: 9 }).map((_, i) => ({
        id: i,
        title: `Repost ${9 - i}`,
        imageUrl: `https://picsum.photos/seed/${i + 100}/300/500`, // Placeholder vertical images
        date: new Date(Date.now() - i * 86400000).toLocaleDateString()
    }));

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
                height: '700px',
                backgroundColor: '#111',
                border: '1px solid #333',
                borderRadius: '8px',
                padding: '2rem',
                boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
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
                        cursor: 'pointer',
                        zIndex: 10
                    }}
                >
                    &times;
                </button>

                <div style={{ textAlign: 'center', marginBottom: '20px', flexShrink: 0 }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 8px 0', color: '#fff', letterSpacing: '1px' }}>Curated Content</h2>
                    <a 
                        href="https://www.tiktok.com/@thesophisticatedignorant" 
                        target="_blank" 
                        rel="noreferrer"
                        style={{
                            color: '#69c9d0',
                            textDecoration: 'none',
                            fontSize: '14px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}
                    >
                        <i className="fab fa-tiktok"></i> @thesophisticatedignorant
                    </a>
                </div>

                {/* 1 extended space (mosaic/grid) */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px',
                    paddingBottom: '20px',
                    overflowY: 'auto',
                    flexGrow: 1,
                    paddingRight: '4px' // Room for scrollbar
                }}>
                    {videos.map(video => (
                        <a 
                            key={video.id} 
                            href="https://www.tiktok.com/@thesophisticatedignorant" 
                            target="_blank" 
                            rel="noreferrer"
                            style={{
                                display: 'block',
                                position: 'relative',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                aspectRatio: '9/16',
                                textDecoration: 'none',
                                backgroundColor: '#222'
                            }}
                        >
                            <img 
                                src={video.imageUrl} 
                                alt={video.title} 
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s'
                                }} 
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '16px 12px 12px',
                                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                color: '#fff'
                            }}>
                                <div style={{ fontSize: '13px', fontWeight: '500' }}>{video.title}</div>
                                <div style={{ fontSize: '11px', color: '#ccc', marginTop: '4px' }}>{video.date}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
