import { Search, Download as DownloadIcon, FileText, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import classes from './Downloads.module.css';

const Downloads = () => {
    const categories = ['All Files', 'Annual Reports', 'Certificates', 'Application Forms'];

    const documents = [
        {
            title: 'Annual Report 2023-24',
            desc: 'Comprehensive review of our operational highlights, financial performance, and future roadmap for the fiscal year.',
            type: 'PDF',
            size: '6.3 MB',
            icon: <FileText size={24} />,
            color: '#fee2e2'
        },
        {
            title: 'ISO 22000 Certificate',
            desc: 'Official quality certification for food safety management systems across all our processing facilities.',
            type: 'JPG',
            size: '1.2 MB',
            icon: <DownloadIcon size={24} />,
            color: '#e0f2fe'
        },
        {
            title: 'Dealer Application Form',
            desc: 'Standard application form for individuals and businesses interested in becoming authorized Milma distributors.',
            type: 'DOCX',
            size: '2.5 MB',
            icon: <FileText size={24} />,
            color: '#dcfce7'
        },
        {
            title: 'Bylaws & Regulations',
            desc: 'The constitutional framework and governing rules of the Milma Cooperative Federation.',
            type: 'PDF',
            size: '2.8 MB',
            icon: <FileText size={24} />,
            color: '#fef3c7'
        },
        {
            title: 'Product Catalogue 2025',
            desc: 'Detailed list of all entire dairy and non-dairy product range with nutritional specifications.',
            type: 'PDF',
            size: '8.5 MB',
            icon: <DownloadIcon size={24} />,
            color: '#f3e8ff'
        },
        {
            title: 'Farmers Welfare Guide',
            desc: 'Information booklet on various schemes and benefits available for our cooperative farmer members.',
            type: 'PDF',
            size: '3.4 MB',
            icon: <FileText size={24} />,
            color: '#ecfdf5'
        }
    ];

    return (
        <div className={classes.page}>
            <div className={classes.hero}>
                <div className={classes.heroHeader}>
                    <Link to="/insights" className={classes.backLink}>
                        <ArrowLeft size={16} /> Back to Insights
                    </Link>
                    <h1>Other Downloads</h1>
                    <div className={classes.heroBreadcrumb}>HOME / INSIGHTS / <span>OTHER DOWNLOADS</span></div>
                </div>
            </div>

            <div className={classes.container}>
                <div className={classes.searchWrapper}>
                    <div className={classes.searchBox}>
                        <Search size={20} className={classes.searchIcon} />
                        <input type="text" placeholder="Search documents, forms, reports..." />
                    </div>
                </div>

                <div className={classes.filterRow}>
                    {categories.map((cat, idx) => (
                        <button key={idx} className={idx === 0 ? classes.filterBtnActive : classes.filterBtn}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div className={classes.sectionTitle}>
                    <h2>Resource Library</h2>
                    <p>Access and download all official Milma documentation, including annual reports, quality standards, and statutory forms.</p>
                </div>

                <div className={classes.grid}>
                    {documents.map((doc, index) => (
                        <div key={index} className={classes.card}>
                            <div className={classes.cardIcon} style={{ backgroundColor: doc.color }}>
                                {doc.icon}
                            </div>
                            <h3 className={classes.cardTitle}>{doc.title}</h3>
                            <p className={classes.cardDesc}>{doc.desc}</p>

                            <div className={classes.cardFooter}>
                                <div className={classes.fileInfo}>
                                    <span>{doc.type} • {doc.size}</span>
                                </div>
                                <button className={classes.downloadBtn}>
                                    Download <DownloadIcon size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={classes.pagination}>
                    <button className={classes.pageNavBtn}><ChevronRight size={18} style={{ transform: 'rotate(180deg)' }} /></button>
                    <button className={classes.pageBtnActive}>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className={classes.pageNavBtn}><ChevronRight size={18} /></button>
                </div>
            </div>
        </div>
    );
};

export default Downloads;
