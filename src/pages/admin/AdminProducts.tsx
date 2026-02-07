import { useState } from 'react';
import styles from './Admin.module.css';
import { Plus, Edit, Trash2, Search, Upload, X, Save, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    status: 'active' | 'inactive' | 'low-stock';
    image: string;
    description: string;
}

const AdminProducts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const itemsPerPage = 10;

    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: 'Milma Rich Milk 500ml', category: 'Milk', price: 29, stock: 150, status: 'active', image: '', description: 'Fresh full cream milk' },
        { id: 2, name: 'Milma Ghee 200ml', category: 'Ghee', price: 185, stock: 25, status: 'low-stock', image: '', description: 'Pure cow ghee' },
        { id: 3, name: 'Milma Pedha', category: 'Sweets', price: 120, stock: 0, status: 'inactive', image: '', description: 'Traditional milk sweet' },
        { id: 4, name: 'Milma Curd 500g', category: 'Curd', price: 35, stock: 200, status: 'active', image: '', description: 'Fresh thick curd' },
        { id: 5, name: 'Milma Paneer 200g', category: 'Cheese', price: 75, stock: 80, status: 'active', image: '', description: 'Fresh cottage cheese' },
        { id: 6, name: 'Milma Butter 100g', category: 'Butter', price: 55, stock: 120, status: 'active', image: '', description: 'Salted table butter' },
        { id: 7, name: 'Milma Lassi 200ml', category: 'Beverages', price: 20, stock: 95, status: 'active', image: '', description: 'Traditional buttermilk' },
        { id: 8, name: 'Milma Ice Cream 1L', category: 'Ice Cream', price: 180, stock: 15, status: 'low-stock', image: '', description: 'Vanilla ice cream' },
        { id: 9, name: 'Milma Cheese Slices', category: 'Cheese', price: 95, stock: 60, status: 'active', image: '', description: 'Processed cheese slices' },
        { id: 10, name: 'Milma Flavored Milk 200ml', category: 'Beverages', price: 25, stock: 180, status: 'active', image: '', description: 'Chocolate flavored milk' },
    ]);

    const categories = ['all', 'Milk', 'Ghee', 'Sweets', 'Curd', 'Cheese', 'Butter', 'Beverages', 'Ice Cream'];

    // Filter and search logic
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    const openEditModal = (product?: Product) => {
        setEditingProduct(product || null);
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
        setEditingProduct(null);
    };

    const deleteProduct = (id: number) => {
        if (confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const getStatusBadgeClass = (status: string) => {
        switch (status) {
            case 'active':
                return `${styles.statusBadge} ${styles.statusSuccess}`;
            case 'low-stock':
                return `${styles.statusBadge} ${styles.statusWarning}`;
            case 'inactive':
                return `${styles.statusBadge} ${styles.statusError}`;
            default:
                return styles.statusBadge;
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'active':
                return 'Active';
            case 'low-stock':
                return 'Low Stock';
            case 'inactive':
                return 'Inactive';
            default:
                return status;
        }
    };

    return (
        <div>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Product Management</h1>
                <p className={styles.pageSubtitle}>Manage your product catalog, pricing, and inventory.</p>
            </div>

            {/* Filters and Actions */}
            <div className={styles.tableContainer}>
                <div className={styles.tableHeader}>
                    <h3 className={styles.tableTitle}>Product List</h3>
                    <button className={styles.buttonPrimary} onClick={() => openEditModal()}>
                        <Plus size={16} />
                        Add New Product
                    </button>
                </div>

                <div className={styles.filterBar}>
                    <div className={styles.searchBox}>
                        <Search size={18} color="#64748b" />
                        <input
                            type="text"
                            className={styles.searchInput}
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Category:</label>
                        <select
                            className={styles.filterSelect}
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>
                                    {cat === 'all' ? 'All Categories' : cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.resultCount}>
                        Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProducts.length)} of {filteredProducts.length}
                    </div>
                </div>

                {/* Product Table */}
                <table className={styles.dataTable}>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedProducts.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <div className={styles.productNameCell}>
                                        <strong>{product.name}</strong>
                                    </div>
                                </td>
                                <td>{product.category}</td>
                                <td className={styles.priceCell}>₹{product.price.toFixed(2)}</td>
                                <td>{product.stock} units</td>
                                <td>
                                    <span className={getStatusBadgeClass(product.status)}>
                                        {getStatusLabel(product.status)}
                                    </span>
                                </td>
                                <td>
                                    <div className={styles.tableActions}>
                                        <button
                                            className={styles.tableActionButton}
                                            onClick={() => openEditModal(product)}
                                        >
                                            <Edit size={16} />
                                        </button>
                                        <button
                                            className={styles.tableActionButtonDanger}
                                            onClick={() => deleteProduct(product.id)}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className={styles.pagination}>
                    <button
                        className={styles.paginationButton}
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        <ChevronLeft size={16} />
                        Previous
                    </button>

                    <div className={styles.paginationPages}>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                className={`${styles.paginationPage} ${page === currentPage ? styles.paginationPageActive : ''}`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        className={styles.paginationButton}
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        Next
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            {/* Edit/Create Product Modal */}
            {showEditModal && (
                <div className={styles.modalOverlay} onClick={closeEditModal}>
                    <div className={styles.modalContentLarge} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>
                                {editingProduct ? 'Edit Product' : 'Add New Product'}
                            </h3>
                            <button className={styles.modalCloseButton} onClick={closeEditModal}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Product Image</label>
                                <div className={styles.imageUploadArea}>
                                    <div className={styles.productImagePreview}>
                                        <Upload size={32} color="#94a3b8" />
                                    </div>
                                    <button className={styles.buttonSecondary}>
                                        <Upload size={16} />
                                        Upload Image
                                    </button>
                                    <span className={styles.uploadHint}>Recommended: 800x800px, Max 5MB</span>
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Product Name *</label>
                                    <input
                                        type="text"
                                        className={styles.formInput}
                                        defaultValue={editingProduct?.name || ''}
                                        placeholder="e.g., Milma Rich Milk 500ml"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Category *</label>
                                    <select
                                        className={styles.formSelect}
                                        defaultValue={editingProduct?.category || ''}
                                    >
                                        <option value="">Select Category</option>
                                        {categories.filter(c => c !== 'all').map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Price (₹) *</label>
                                    <input
                                        type="number"
                                        className={styles.formInput}
                                        defaultValue={editingProduct?.price || ''}
                                        placeholder="0.00"
                                        step="0.01"
                                        min="0"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Stock Quantity *</label>
                                    <input
                                        type="number"
                                        className={styles.formInput}
                                        defaultValue={editingProduct?.stock || ''}
                                        placeholder="0"
                                        min="0"
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Status</label>
                                <select
                                    className={styles.formSelect}
                                    defaultValue={editingProduct?.status || 'active'}
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="low-stock">Low Stock</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Description</label>
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
                                    rows={6}
                                    defaultValue={editingProduct?.description || ''}
                                    placeholder="Enter product description, ingredients, benefits, etc."
                                />
                            </div>
                        </div>

                        <div className={styles.modalFooter}>
                            <button className={styles.buttonSecondary} onClick={closeEditModal}>
                                Cancel
                            </button>
                            <button className={styles.buttonOutline}>
                                <Save size={16} />
                                Save Draft
                            </button>
                            <button className={styles.buttonSuccess} onClick={closeEditModal}>
                                <CheckCircle size={16} />
                                {editingProduct ? 'Update Product' : 'Add Product'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminProducts;
