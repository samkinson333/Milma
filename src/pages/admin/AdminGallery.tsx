
import { useState } from 'react';
import styles from './Admin.module.css';
import {
    Plus, Image as ImageIcon, Video, Trash2,
    Upload, X, Link as LinkIcon, MoreVertical,
    FolderPlus, ArrowLeft
} from 'lucide-react';

interface MediaItem {
    id: number;
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
    title: string;
}

interface Album {
    id: number;
    title: string;
    description: string;
    coverImage: string;
    itemCount: number;
    media: MediaItem[];
    createdAt: string;
}

const AdminGallery = () => {
    const [viewMode, setViewMode] = useState<'albums' | 'detail'>('albums');
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [, setShowUploadPanel] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [dragActive, setDragActive] = useState(false);

    // Mock Data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [albums] = useState<Album[]>([
        {
            id: 1,
            title: 'Dairy Plant Inauguration',
            description: 'Photos from the new heavy machinery plant opening ceremony in 2025.',
            coverImage: 'https://images.unsplash.com/photo-1595411425732-e69661eb1c01?auto=format&fit=crop&q=80&w=400',
            itemCount: 12,
            createdAt: '2025-11-15',
            media: []
        },
        {
            id: 2,
            title: 'Employee Welfare Program',
            description: 'Annual meet and cultural programs held at headquarters.',
            coverImage: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=400',
            itemCount: 45,
            createdAt: '2026-01-20',
            media: []
        },
        {
            id: 3,
            title: 'Product Launch - 2026',
            description: 'Launch event of the new misguided pension scheme... wait no, milk products.',
            coverImage: 'https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&q=80&w=400',
            itemCount: 8,
            createdAt: '2026-02-01',
            media: []
        }
    ]);

    const handleAlbumClick = (album: Album) => {
        setSelectedAlbum(album);
        setViewMode('detail');
    };

    const handleBackToAlbums = () => {
        setSelectedAlbum(null);
        setViewMode('albums');
        setShowUploadPanel(false);
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        // Handle file drop logic here
        alert('Files dropped! (This is a mock action)');
    };

    return (
        <div>
            {/* Government Theme Header */}
            <div className={styles.govHeader}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h1 className={styles.govTitle}>Media Gallery Management</h1>
                        <p className={styles.govSubtitle}>Kerala Co-operative Milk Marketing Federation Ltd. (TRCMPU)</p>
                    </div>
                </div>
            </div>

            <div className={styles.govTableContainer} style={{ padding: '2rem', minHeight: '600px' }}>

                {/* Navigation / Breadcrumbs */}
                {viewMode === 'detail' && (
                    <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button onClick={handleBackToAlbums} className={styles.buttonSecondary} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <ArrowLeft size={16} /> Back to Albums
                        </button>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0, color: '#1e3a8a' }}>
                            / {selectedAlbum?.title}
                        </h2>
                    </div>
                )}

                {/* ALBUMS GRID VIEW */}
                {viewMode === 'albums' && (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#334155' }}>Official Photo & Video Albums</h3>
                            <button className={styles.buttonSuccess} onClick={() => setShowCreateModal(true)}>
                                <FolderPlus size={18} /> Create New Album
                            </button>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '2rem'
                        }}>
                            {albums.map((album) => (
                                <div
                                    key={album.id}
                                    className={styles.galleryCard}
                                    style={{
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        background: 'white'
                                    }}
                                    onClick={() => handleAlbumClick(album)}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'none';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                                        <img
                                            src={album.coverImage}
                                            alt={album.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <div style={{
                                            position: 'absolute', bottom: 0, left: 0, right: 0,
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                            padding: '1rem',
                                            color: 'white'
                                        }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem' }}>
                                                <ImageIcon size={14} /> {album.itemCount} items
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ padding: '1.25rem' }}>
                                        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 700, color: '#1e293b' }}>
                                            {album.title}
                                        </h4>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b', lineHeight: 1.4 }}>
                                            {album.description}
                                        </p>
                                        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Created: {album.createdAt}</span>
                                            <button
                                                style={{ border: 'none', background: 'transparent', color: '#ef4444', cursor: 'pointer', padding: '4px' }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // Delete logic
                                                }}
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* ALBUM DETAIL & UPLOAD VIEW */}
                {viewMode === 'detail' && selectedAlbum && (
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        {/* Main Media Grid */}
                        <div style={{ flex: 3 }}>
                            <div style={{
                                background: '#f8fafc',
                                border: '2px dashed #cbd5e1',
                                borderRadius: '8px',
                                padding: '2rem',
                                textAlign: 'center',
                                marginBottom: '2rem',
                                cursor: 'pointer',
                                transition: 'background 0.2s'
                            }}
                                className={dragActive ? styles.dragActive : ''}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                                onClick={() => setShowUploadPanel(true)}
                            >
                                <Upload size={48} color="#94a3b8" style={{ margin: '0 auto 1rem auto' }} />
                                <h4 style={{ margin: '0 0 0.5rem 0', color: '#334155' }}>Drag & Drop Photos Here</h4>
                                <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>or click to browse from device</p>
                            </div>

                            {/* Existing Media Grid Placeholder */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
                                {/* Mock Items */}
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} style={{ borderRadius: '6px', overflow: 'hidden', height: '150px', position: 'relative', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                                        <img
                                            src={`https://images.unsplash.com/photo-${1600000000000 + i}?auto=format&fit=crop&w=300&h=300`}
                                            alt="Gallery item"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <div style={{ position: 'absolute', top: 5, right: 5 }}>
                                            <button style={{ background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '4px', padding: '4px', cursor: 'pointer' }}>
                                                <MoreVertical size={14} />
                                            </button>
                                        </div >
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Sidebar - Upload & Embed */}
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <div style={{ background: '#f1f5f9', borderRadius: '8px', padding: '1.5rem' }}>
                                <h4 style={{ margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155' }}>
                                    <Video size={18} /> Embed Video
                                </h4>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>
                                        Video URL (YouTube/Vimeo)
                                    </label>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <div style={{ position: 'relative', flexGrow: 1 }}>
                                            <LinkIcon size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                            <input
                                                type="text"
                                                placeholder="https://..."
                                                style={{
                                                    width: '100%',
                                                    padding: '0.5rem 0.5rem 0.5rem 2.25rem',
                                                    border: '1px solid #cbd5e1',
                                                    borderRadius: '4px',
                                                    fontSize: '0.9rem'
                                                }}
                                            />
                                        </div>
                                        <button className={styles.buttonSecondary} style={{ padding: '0 0.75rem' }}>
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                    <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem' }}>
                                        Paste a valid URL to embed an external video player.
                                    </p>
                                </div>
                            </div>

                            <div style={{ marginTop: '1.5rem', background: '#f1f5f9', borderRadius: '8px', padding: '1.5rem' }}>
                                <h4 style={{ margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155' }}>
                                    <FolderPlus size={18} /> Album Details
                                </h4>
                                <div style={{ fontSize: '0.9rem', color: '#475569' }}>
                                    <p><strong>Title:</strong> {selectedAlbum.title}</p>
                                    <p><strong>Created:</strong> {selectedAlbum.createdAt}</p>
                                    <p><strong>Items:</strong> {selectedAlbum.itemCount}</p>
                                    <button className={styles.buttonSecondary} style={{ width: '100%', marginTop: '1rem' }}>
                                        Edit Album Info
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Create Album Modal */}
            {
                showCreateModal && (
                    <div className={styles.modalOverlay} onClick={() => setShowCreateModal(false)}>
                        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                            <div className={styles.modalHeader}>
                                <h3 className={styles.modalTitle}>Create New Album</h3>
                                <button className={styles.modalCloseButton} onClick={() => setShowCreateModal(false)}>
                                    <X size={20} />
                                </button>
                            </div>
                            <div className={styles.modalBody}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Album Title</label>
                                    <input type="text" className={styles.formInput} placeholder="e.g. Annual General Meeting 2026" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Description</label>
                                    <textarea className={styles.formTextarea} placeholder="Brief description of the event..." />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Date</label>
                                    <input type="date" className={styles.formInput} />
                                </div>
                            </div>
                            <div className={styles.modalFooter}>
                                <button className={styles.buttonSecondary} onClick={() => setShowCreateModal(false)}>Cancel</button>
                                <button className={styles.buttonPrimary}>Create Album</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AdminGallery;
