import { useState } from 'react';
import styles from './Admin.module.css';
import { Plus, Edit, Trash2, Upload, MapPin, Save, CheckCircle, X, User, Calendar, FileText } from 'lucide-react';

interface LeaderProfile {
    id: number;
    name: string;
    position: string;
    image: string;
    bio: string;
    joinedDate: string;
}

interface Location {
    id: number;
    name: string;
    address: string;
    coordinates: string;
}

const AdminAboutUs = () => {
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [editingProfile, setEditingProfile] = useState<LeaderProfile | null>(null);

    const [leaders, setLeaders] = useState<LeaderProfile[]>([
        {
            id: 1,
            name: 'Dr. K. S. Mani',
            position: 'Chairman',
            image: 'avatar1.jpg',
            bio: 'Leading Milma with vision and dedication...',
            joinedDate: '2020-01-15'
        },
        {
            id: 2,
            name: 'Smt. Priya Nair',
            position: 'Managing Director',
            image: 'avatar2.jpg',
            bio: 'Expert in dairy technology and operations...',
            joinedDate: '2019-06-10'
        },
        {
            id: 3,
            name: 'Shri. Rajan Kumar',
            position: 'Director, Operations',
            image: 'avatar3.jpg',
            bio: 'Overseeing production and quality control...',
            joinedDate: '2021-03-22'
        },
    ]);

    const [locations, setLocations] = useState<Location[]>([
        { id: 1, name: 'Thiruvananthapuram Regional Office', address: 'PMG Junction, Thiruvananthapuram', coordinates: '8.5241° N, 76.9366° E' },
        { id: 2, name: 'Ernakulam Dairy Plant', address: 'Edappally, Ernakulam', coordinates: '10.0261° N, 76.3125° E' },
        { id: 3, name: 'Kozhikode Distribution Center', address: 'Mavoor Road, Kozhikode', coordinates: '11.2588° N, 75.7804° E' },
    ]);

    const openProfileModal = (profile?: LeaderProfile) => {
        setEditingProfile(profile || null);
        setShowProfileModal(true);
    };

    const closeProfileModal = () => {
        setShowProfileModal(false);
        setEditingProfile(null);
    };

    const deleteLeader = (id: number) => {
        if (confirm('Are you sure you want to delete this profile?')) {
            setLeaders(leaders.filter(l => l.id !== id));
        }
    };

    const deleteLocation = (id: number) => {
        if (confirm('Are you sure you want to delete this location?')) {
            setLocations(locations.filter(loc => loc.id !== id));
        }
    };

    return (
        <div>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>About Us Management</h1>
                <p className={styles.pageSubtitle}>Manage organization vision, leadership profiles, history, policies, and locations.</p>
            </div>

            {/* Vision & Mission Editor */}
            <div className={styles.cmsPanel}>
                <div className={styles.cmsPanelHeader}>
                    <h3 className={styles.cmsPanelTitle}>Vision & Mission</h3>
                </div>
                <div className={styles.cmsPanelBody}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Our Vision</label>
                        <div className={styles.richTextToolbar}>
                            <button className={styles.toolbarButton}><strong>B</strong></button>
                            <button className={styles.toolbarButton}><em>I</em></button>
                            <button className={styles.toolbarButton}><u>U</u></button>
                            <span className={styles.toolbarDivider}></span>
                            <button className={styles.toolbarButton}>•</button>
                            <button className={styles.toolbarButton}>1.</button>
                        </div>
                        <textarea
                            className={styles.formTextarea}
                            rows={4}
                            placeholder="Enter your organization's vision statement..."
                            defaultValue="To be the most trusted and leading dairy cooperative in India, ensuring quality dairy products reach every household while empowering farmers and supporting sustainable agriculture."
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Our Mission</label>
                        <div className={styles.richTextToolbar}>
                            <button className={styles.toolbarButton}><strong>B</strong></button>
                            <button className={styles.toolbarButton}><em>I</em></button>
                            <button className={styles.toolbarButton}><u>U</u></button>
                            <span className={styles.toolbarDivider}></span>
                            <button className={styles.toolbarButton}>•</button>
                            <button className={styles.toolbarButton}>1.</button>
                        </div>
                        <textarea
                            className={styles.formTextarea}
                            rows={4}
                            placeholder="Enter your organization's mission statement..."
                            defaultValue="To provide high-quality, affordable dairy products while ensuring fair returns to farmers, maintaining ethical business practices, and contributing to the socio-economic development of rural Kerala."
                        />
                    </div>
                </div>
            </div>

            {/* Leadership Profiles */}
            <div className={styles.cmsPanel}>
                <div className={styles.cmsPanelHeader}>
                    <h3 className={styles.cmsPanelTitle}>Leadership Team</h3>
                    <button className={styles.buttonPrimary} onClick={() => openProfileModal()}>
                        <Plus size={16} />
                        Add Leader
                    </button>
                </div>
                <div className={styles.cmsPanelBody}>
                    <p className={styles.helperText}>Manage leadership profiles including photos, positions, and biographies.</p>

                    <div className={styles.tableContainer}>
                        <table className={styles.dataTable}>
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Joined Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaders.map((leader) => (
                                    <tr key={leader.id}>
                                        <td>
                                            <div className={styles.profileImageCell}>
                                                <div className={styles.profileAvatar}>
                                                    <User size={24} color="#64748b" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={styles.leaderName}>{leader.name}</div>
                                        </td>
                                        <td>{leader.position}</td>
                                        <td>
                                            <span className={styles.dateText}>
                                                {new Date(leader.joinedDate).toLocaleDateString('en-IN', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </td>
                                        <td>
                                            <div className={styles.tableActions}>
                                                <button
                                                    className={styles.tableActionButton}
                                                    onClick={() => openProfileModal(leader)}
                                                >
                                                    <Edit size={16} />
                                                </button>
                                                <button
                                                    className={styles.tableActionButtonDanger}
                                                    onClick={() => deleteLeader(leader.id)}
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* History Timeline Editor */}
            <div className={styles.cmsPanel}>
                <div className={styles.cmsPanelHeader}>
                    <h3 className={styles.cmsPanelTitle}>History & Milestones</h3>
                    <button className={styles.buttonSecondary}>
                        <Plus size={16} />
                        Add Milestone
                    </button>
                </div>
                <div className={styles.cmsPanelBody}>
                    <p className={styles.helperText}>Add important dates and achievements in your organization's history.</p>

                    <div className={styles.timelineList}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>
                                <Calendar size={16} />
                                <span>1980</span>
                            </div>
                            <div className={styles.timelineContent}>
                                <input
                                    type="text"
                                    className={styles.timelineInput}
                                    defaultValue="Milma Founded"
                                    placeholder="Milestone title"
                                />
                                <textarea
                                    className={styles.timelineTextarea}
                                    rows={2}
                                    defaultValue="Kerala Cooperative Milk Marketing Federation (KCMMF) was established to market milk products under the Milma brand."
                                    placeholder="Milestone description"
                                />
                            </div>
                            <button className={styles.iconButtonDanger}>
                                <Trash2 size={16} />
                            </button>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>
                                <Calendar size={16} />
                                <span>1995</span>
                            </div>
                            <div className={styles.timelineContent}>
                                <input
                                    type="text"
                                    className={styles.timelineInput}
                                    defaultValue="Expansion to North Kerala"
                                    placeholder="Milestone title"
                                />
                                <textarea
                                    className={styles.timelineTextarea}
                                    rows={2}
                                    defaultValue="Opened major dairy processing plants in Kozhikode and Kannur districts."
                                    placeholder="Milestone description"
                                />
                            </div>
                            <button className={styles.iconButtonDanger}>
                                <Trash2 size={16} />
                            </button>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>
                                <Calendar size={16} />
                                <span>2020</span>
                            </div>
                            <div className={styles.timelineContent}>
                                <input
                                    type="text"
                                    className={styles.timelineInput}
                                    defaultValue="Quality Excellence Award"
                                    placeholder="Milestone title"
                                />
                                <textarea
                                    className={styles.timelineTextarea}
                                    rows={2}
                                    defaultValue="Received National Quality Award for maintaining highest standards in dairy production."
                                    placeholder="Milestone description"
                                />
                            </div>
                            <button className={styles.iconButtonDanger}>
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Policy Pages Editor */}
            <div className={styles.cmsPanel}>
                <div className={styles.cmsPanelHeader}>
                    <h3 className={styles.cmsPanelTitle}>Policies & Compliance</h3>
                    <button className={styles.buttonSecondary}>
                        <Plus size={16} />
                        Add Policy
                    </button>
                </div>
                <div className={styles.cmsPanelBody}>
                    <p className={styles.helperText}>Manage policy documents and compliance pages.</p>

                    <div className={styles.policyList}>
                        <div className={styles.policyItem}>
                            <FileText size={20} color="#3b82f6" />
                            <div className={styles.policyInfo}>
                                <div className={styles.policyTitle}>Privacy Policy</div>
                                <div className={styles.policyMeta}>Last updated: Jan 15, 2026</div>
                            </div>
                            <div className={styles.policyActions}>
                                <button className={styles.buttonSecondary}>Edit</button>
                                <button className={styles.iconButtonDanger}>
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>

                        <div className={styles.policyItem}>
                            <FileText size={20} color="#3b82f6" />
                            <div className={styles.policyInfo}>
                                <div className={styles.policyTitle}>Quality Standards</div>
                                <div className={styles.policyMeta}>Last updated: Dec 20, 2025</div>
                            </div>
                            <div className={styles.policyActions}>
                                <button className={styles.buttonSecondary}>Edit</button>
                                <button className={styles.iconButtonDanger}>
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>

                        <div className={styles.policyItem}>
                            <FileText size={20} color="#3b82f6" />
                            <div className={styles.policyInfo}>
                                <div className={styles.policyTitle}>Farmer Support Guidelines</div>
                                <div className={styles.policyMeta}>Last updated: Nov 10, 2025</div>
                            </div>
                            <div className={styles.policyActions}>
                                <button className={styles.buttonSecondary}>Edit</button>
                                <button className={styles.iconButtonDanger}>
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Locations List */}
            <div className={styles.cmsPanel}>
                <div className={styles.cmsPanelHeader}>
                    <h3 className={styles.cmsPanelTitle}>Office Locations</h3>
                    <button className={styles.buttonPrimary}>
                        <Plus size={16} />
                        Add Location
                    </button>
                </div>
                <div className={styles.cmsPanelBody}>
                    <p className={styles.helperText}>Manage office and facility locations with map coordinates.</p>

                    <div className={styles.locationsList}>
                        {locations.map((location) => (
                            <div key={location.id} className={styles.locationItem}>
                                <div className={styles.locationIcon}>
                                    <MapPin size={24} color="#3b82f6" />
                                </div>
                                <div className={styles.locationInfo}>
                                    <div className={styles.locationName}>{location.name}</div>
                                    <div className={styles.locationAddress}>{location.address}</div>
                                    <div className={styles.locationCoords}>
                                        <code>{location.coordinates}</code>
                                    </div>
                                </div>
                                <div className={styles.locationActions}>
                                    <button className={styles.buttonSecondary}>
                                        <MapPin size={14} />
                                        View Map
                                    </button>
                                    <button className={styles.iconButtonAction}>
                                        <Edit size={16} />
                                    </button>
                                    <button
                                        className={styles.iconButtonDanger}
                                        onClick={() => deleteLocation(location.id)}
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.mapPreview}>
                        <div className={styles.mapPlaceholder}>
                            <MapPin size={48} color="#94a3b8" />
                            <p>Map Preview</p>
                            <span className={styles.mapHint}>Select a location to view on map</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.stickyActionBar}>
                <div className={styles.actionBarContent}>
                    <button className={styles.buttonSecondary}>
                        Cancel
                    </button>
                    <div className={styles.actionBarRight}>
                        <button className={styles.buttonOutline}>
                            <Save size={16} />
                            Save Draft
                        </button>
                        <button className={styles.buttonSuccess}>
                            <CheckCircle size={16} />
                            Publish Changes
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Modal */}
            {showProfileModal && (
                <div className={styles.modalOverlay} onClick={closeProfileModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>
                                {editingProfile ? 'Edit Leader Profile' : 'Add New Leader'}
                            </h3>
                            <button className={styles.modalCloseButton} onClick={closeProfileModal}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Profile Photo</label>
                                <div className={styles.imageUploadArea}>
                                    <div className={styles.imagePreview}>
                                        <User size={48} color="#94a3b8" />
                                    </div>
                                    <button className={styles.buttonSecondary}>
                                        <Upload size={16} />
                                        Upload Photo
                                    </button>
                                    <span className={styles.uploadHint}>Recommended: 400x400px, Max 2MB</span>
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Full Name *</label>
                                    <input
                                        type="text"
                                        className={styles.formInput}
                                        defaultValue={editingProfile?.name || ''}
                                        placeholder="e.g., Dr. K. S. Mani"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Position *</label>
                                    <input
                                        type="text"
                                        className={styles.formInput}
                                        defaultValue={editingProfile?.position || ''}
                                        placeholder="e.g., Chairman"
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Joined Date</label>
                                <input
                                    type="date"
                                    className={styles.formInput}
                                    defaultValue={editingProfile?.joinedDate || ''}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Biography</label>
                                <textarea
                                    className={styles.formTextarea}
                                    rows={6}
                                    defaultValue={editingProfile?.bio || ''}
                                    placeholder="Enter a brief biography (qualifications, experience, achievements)"
                                />
                            </div>
                        </div>

                        <div className={styles.modalFooter}>
                            <button className={styles.buttonSecondary} onClick={closeProfileModal}>
                                Cancel
                            </button>
                            <button className={styles.buttonPrimary} onClick={closeProfileModal}>
                                {editingProfile ? 'Update Profile' : 'Add Profile'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminAboutUs;
