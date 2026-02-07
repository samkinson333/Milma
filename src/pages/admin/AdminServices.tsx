import { useState } from 'react';
import styles from './Admin.module.css';
import { Plus, Edit, Trash2, Upload, X, Eye, FileText, Download, CheckCircle } from 'lucide-react';

interface Service {
    id: number;
    name: string;
    description: string;
    icon: string;
    category: string;
}

interface ServiceRequest {
    id: number;
    requesterName: string;
    serviceType: string;
    status: 'pending' | 'in-progress' | 'completed' | 'rejected';
    submissionDate: string;
    email: string;
    phone: string;
    description: string;
    attachments: string[];
}

const AdminServices = () => {
    const [activeTab, setActiveTab] = useState<'services' | 'requests'>('services');
    const [showServiceModal, setShowServiceModal] = useState(false);
    const [showRequestDetail, setShowRequestDetail] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(null);

    const [services, setServices] = useState<Service[]>([
        { id: 1, name: 'Milk Collection Service', description: 'Doorstep milk collection from farmers', icon: '🥛', category: 'Farmer Services' },
        { id: 2, name: 'Veterinary Consultation', description: 'Expert veterinary services for dairy cattle', icon: '🐄', category: 'Farmer Services' },
        { id: 3, name: 'Home Delivery', description: 'Fresh dairy products delivered to your doorstep', icon: '🚚', category: 'Customer Services' },
        { id: 4, name: 'Bulk Orders', description: 'Special pricing for bulk purchases', icon: '📦', category: 'Customer Services' },
        { id: 5, name: 'Quality Testing', description: 'Free milk quality testing service', icon: '🔬', category: 'Farmer Services' },
    ]);

    const [requests, setRequests] = useState<ServiceRequest[]>([
        {
            id: 1,
            requesterName: 'Rajesh Kumar',
            serviceType: 'Milk Collection Service',
            status: 'pending',
            submissionDate: '2026-02-05',
            email: 'rajesh.kumar@example.com',
            phone: '+91 98765 43210',
            description: 'I am a dairy farmer from Wayanad with 15 cattle. I need daily milk collection service.',
            attachments: ['farm_photos.pdf', 'registration_docs.pdf']
        },
        {
            id: 2,
            requesterName: 'Priya Menon',
            serviceType: 'Home Delivery',
            status: 'in-progress',
            submissionDate: '2026-02-04',
            email: 'priya.m@example.com',
            phone: '+91 87654 32109',
            description: 'Request for daily home delivery of 2L milk and 500g curd in Kochi area.',
            attachments: []
        },
        {
            id: 3,
            requesterName: 'Suresh Nair',
            serviceType: 'Bulk Orders',
            status: 'completed',
            submissionDate: '2026-02-01',
            email: 'suresh.nair@restaurant.com',
            phone: '+91 76543 21098',
            description: 'Weekly bulk order of dairy products for restaurant chain.',
            attachments: ['order_list.xlsx']
        },
        {
            id: 4,
            requesterName: 'Lakshmi S.',
            serviceType: 'Veterinary Consultation',
            status: 'rejected',
            submissionDate: '2026-01-28',
            email: 'lakshmi.s@example.com',
            phone: '+91 65432 10987',
            description: 'Need veterinary consultation for sick cattle.',
            attachments: []
        },
    ]);

    const deleteService = (id: number) => {
        if (confirm('Are you sure you want to delete this service?')) {
            setServices(services.filter(s => s.id !== id));
        }
    };

    const viewRequestDetail = (request: ServiceRequest) => {
        setSelectedRequest(request);
        setShowRequestDetail(true);
    };

    const updateRequestStatus = (newStatus: ServiceRequest['status']) => {
        if (selectedRequest) {
            setRequests(requests.map(r =>
                r.id === selectedRequest.id ? { ...r, status: newStatus } : r
            ));
            setSelectedRequest({ ...selectedRequest, status: newStatus });
        }
    };

    const getStatusBadgeClass = (status: string) => {
        switch (status) {
            case 'completed':
                return `${styles.statusBadge} ${styles.statusSuccess}`;
            case 'in-progress':
                return `${styles.statusBadge} ${styles.statusInfo}`;
            case 'pending':
                return `${styles.statusBadge} ${styles.statusWarning}`;
            case 'rejected':
                return `${styles.statusBadge} ${styles.statusError}`;
            default:
                return styles.statusBadge;
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'completed':
                return 'Completed';
            case 'in-progress':
                return 'In Progress';
            case 'pending':
                return 'Pending';
            case 'rejected':
                return 'Rejected';
            default:
                return status;
        }
    };

    return (
        <div>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Services Management</h1>
                <p className={styles.pageSubtitle}>Manage available services and handle service requests from users.</p>
            </div>

            {/* Tabs */}
            <div className={styles.tabsContainer}>
                <div className={styles.tabsList}>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'services' ? styles.tabButtonActive : ''}`}
                        onClick={() => setActiveTab('services')}
                    >
                        Services Management
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'requests' ? styles.tabButtonActive : ''}`}
                        onClick={() => setActiveTab('requests')}
                    >
                        Service Requests
                        <span className={styles.tabBadge}>{requests.filter(r => r.status === 'pending').length}</span>
                    </button>
                </div>
            </div>

            {/* Services Management Tab */}
            {activeTab === 'services' && (
                <div className={styles.tableContainer}>
                    <div className={styles.tableHeader}>
                        <h3 className={styles.tableTitle}>Available Services</h3>
                        <button className={styles.buttonPrimary} onClick={() => setShowServiceModal(true)}>
                            <Plus size={16} />
                            Add New Service
                        </button>
                    </div>

                    <div className={styles.servicesGrid}>
                        {services.map((service) => (
                            <div key={service.id} className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>{service.icon}</div>
                                <div className={styles.serviceInfo}>
                                    <h4 className={styles.serviceName}>{service.name}</h4>
                                    <p className={styles.serviceCategory}>{service.category}</p>
                                    <p className={styles.serviceDescription}>{service.description}</p>
                                </div>
                                <div className={styles.serviceActions}>
                                    <button className={styles.iconButtonAction}>
                                        <Edit size={16} />
                                    </button>
                                    <button
                                        className={styles.iconButtonDanger}
                                        onClick={() => deleteService(service.id)}
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Service Requests Tab */}
            {activeTab === 'requests' && (
                <div className={styles.tableContainer}>
                    <div className={styles.tableHeader}>
                        <h3 className={styles.tableTitle}>Service Requests</h3>
                    </div>

                    <table className={styles.dataTable}>
                        <thead>
                            <tr>
                                <th>Requester Name</th>
                                <th>Service Type</th>
                                <th>Status</th>
                                <th>Submission Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((request) => (
                                <tr key={request.id}>
                                    <td>
                                        <div className={styles.requesterCell}>
                                            <strong>{request.requesterName}</strong>
                                            <span className={styles.requesterEmail}>{request.email}</span>
                                        </div>
                                    </td>
                                    <td>{request.serviceType}</td>
                                    <td>
                                        <span className={getStatusBadgeClass(request.status)}>
                                            {getStatusLabel(request.status)}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={styles.dateText}>
                                            {new Date(request.submissionDate).toLocaleDateString('en-IN', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className={styles.buttonSecondary}
                                            onClick={() => viewRequestDetail(request)}
                                        >
                                            <Eye size={14} />
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Add Service Modal */}
            {showServiceModal && (
                <div className={styles.modalOverlay} onClick={() => setShowServiceModal(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>Add New Service</h3>
                            <button className={styles.modalCloseButton} onClick={() => setShowServiceModal(false)}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Service Icon/Image</label>
                                <div className={styles.iconUploadArea}>
                                    <div className={styles.iconPreview}>
                                        📋
                                    </div>
                                    <button className={styles.buttonSecondary}>
                                        <Upload size={16} />
                                        Choose Icon/Image
                                    </button>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Service Name *</label>
                                <input
                                    type="text"
                                    className={styles.formInput}
                                    placeholder="e.g., Milk Collection Service"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Category *</label>
                                <select className={styles.formSelect}>
                                    <option value="">Select Category</option>
                                    <option value="Farmer Services">Farmer Services</option>
                                    <option value="Customer Services">Customer Services</option>
                                    <option value="Agency Services">Agency Services</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Description</label>
                                <textarea
                                    className={styles.formTextarea}
                                    rows={4}
                                    placeholder="Enter service description..."
                                />
                            </div>
                        </div>

                        <div className={styles.modalFooter}>
                            <button className={styles.buttonSecondary} onClick={() => setShowServiceModal(false)}>
                                Cancel
                            </button>
                            <button className={styles.buttonPrimary} onClick={() => setShowServiceModal(false)}>
                                Add Service
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Request Detail Modal */}
            {showRequestDetail && selectedRequest && (
                <div className={styles.modalOverlay} onClick={() => setShowRequestDetail(false)}>
                    <div className={styles.modalContentLarge} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>Service Request Details</h3>
                            <button className={styles.modalCloseButton} onClick={() => setShowRequestDetail(false)}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className={styles.modalBody}>
                            {/* User Info Section */}
                            <div className={styles.detailSection}>
                                <h4 className={styles.detailSectionTitle}>Requester Information</h4>
                                <div className={styles.detailGrid}>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>Name:</span>
                                        <span className={styles.detailValue}>{selectedRequest.requesterName}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>Email:</span>
                                        <span className={styles.detailValue}>{selectedRequest.email}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>Phone:</span>
                                        <span className={styles.detailValue}>{selectedRequest.phone}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>Submission Date:</span>
                                        <span className={styles.detailValue}>
                                            {new Date(selectedRequest.submissionDate).toLocaleDateString('en-IN', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Request Details */}
                            <div className={styles.detailSection}>
                                <h4 className={styles.detailSectionTitle}>Request Details</h4>
                                <div className={styles.detailItem}>
                                    <span className={styles.detailLabel}>Service Type:</span>
                                    <span className={styles.detailValue}>{selectedRequest.serviceType}</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.detailLabel}>Description:</span>
                                    <p className={styles.detailDescription}>{selectedRequest.description}</p>
                                </div>
                            </div>

                            {/* Attachments */}
                            {selectedRequest.attachments.length > 0 && (
                                <div className={styles.detailSection}>
                                    <h4 className={styles.detailSectionTitle}>Attachments</h4>
                                    <div className={styles.attachmentsList}>
                                        {selectedRequest.attachments.map((file, index) => (
                                            <div key={index} className={styles.attachmentItem}>
                                                <FileText size={20} color="#3b82f6" />
                                                <span className={styles.attachmentName}>{file}</span>
                                                <button className={styles.iconButtonAction}>
                                                    <Download size={16} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Status Management */}
                            <div className={styles.detailSection}>
                                <h4 className={styles.detailSectionTitle}>Status Management</h4>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Current Status</label>
                                    <select
                                        className={styles.formSelect}
                                        value={selectedRequest.status}
                                        onChange={(e) => updateRequestStatus(e.target.value as ServiceRequest['status'])}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="in-progress">In Progress</option>
                                        <option value="completed">Completed</option>
                                        <option value="rejected">Rejected</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className={styles.modalFooter}>
                            <button className={styles.buttonSecondary} onClick={() => setShowRequestDetail(false)}>
                                Close
                            </button>
                            <button className={styles.buttonSuccess}>
                                <CheckCircle size={16} />
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminServices;
