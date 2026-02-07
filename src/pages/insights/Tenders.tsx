import { Search, ChevronRight, FileText, ArrowLeft, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import classes from './Tenders.module.css';

const Tenders = () => {
    const tenders = [
        {
            id: 'MILMA/WWM/EQ-24/102',
            title: 'Supply of Dairy Processing Equipment',
            desc: 'Procurement and installation of automated milk pasteurization units for the upcoming regional processing plant.',
            date: '25 Jan 2026',
            status: 'Phase In-Take'
        },
        {
            id: 'MILMA/BMU/R-24/220',
            title: 'Annual Maintenance Contract for Chilling Plants',
            desc: 'Maintenance contract for bulk milk chilling centers located across the Thiruvananthapuram district region.',
            date: '02 Feb 2026',
            status: 'Review Priority'
        },
        {
            id: 'MILMA/TPA/LOG-24/045',
            title: 'Fleet Management and Logistics Services',
            desc: 'Hiring of temperature-controlled vehicles for secondary distribution of milk and milk products.',
            date: '15 Feb 2026',
            status: 'Panning soon'
        },
        {
            id: 'MILMA/IT/S-24/008',
            title: 'Upgradation of ERP Software Infrastructure',
            desc: 'Tenders invited for the license renewal and cloud migration of existing ERP systems.',
            date: '10 Mar 2026',
            status: 'Urgent'
        }
    ];

    return (
        <div className={classes.page}>
            <div className={classes.hero}>
                <div className={classes.heroHeader}>
                    <Link to="/insights" className={classes.backLink}>
                        <ArrowLeft size={16} /> Back to Insights
                    </Link>
                    <h1>Tenders</h1>
                    <div className={classes.heroBreadcrumb}>HOME / INSIGHTS / <span>TENDERS</span></div>
                </div>
            </div>

            <div className={classes.container}>
                <div className={classes.sectionTitle}>
                    <h2>Tenders List</h2>
                    <div className={classes.underline}></div>
                </div>

                <div className={classes.toolbar}>
                    <div className={classes.searchBox}>
                        <Search size={18} className={classes.searchIcon} />
                        <input type="text" placeholder="Search tenders by ID or description..." />
                    </div>
                    <div className={classes.filterBox}>
                        <span>Status:</span>
                        <select>
                            <option>Active Tenders</option>
                            <option>Closed Tenders</option>
                        </select>
                    </div>
                </div>

                <div className={classes.tableContainer}>
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th>TENDER ID</th>
                                <th>DESCRIPTION</th>
                                <th>CLOSING DATE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tenders.map((tender, index) => (
                                <tr key={index}>
                                    <td className={classes.idCol}>{tender.id}</td>
                                    <td className={classes.descCol}>
                                        <strong>{tender.title}</strong>
                                        <p>{tender.desc}</p>
                                    </td>
                                    <td className={classes.dateCol}>
                                        {tender.date}
                                        <span className={classes.statusTag}>{tender.status}</span>
                                    </td>
                                    <td className={classes.actionCol}>
                                        <button className={classes.pdfBtn}>
                                            <FileText size={16} /> PDF
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={classes.pagination}>
                    <span>Showing 1 to 4 of 24 tenders</span>
                    <div className={classes.pageButtons}>
                        <button className={classes.pageBtnActive}>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button><ChevronRight size={16} /></button>
                    </div>
                </div>

                <div className={classes.helpBox}>
                    <div className={classes.helpContent}>
                        <div className={classes.helpIcon}>
                            <Users size={24} />
                        </div>
                        <div>
                            <h3>Need assistance with Tenders?</h3>
                            <p>Our procurement team is here to help you with the process.</p>
                        </div>
                    </div>
                    <button className={classes.contactBtn}>Contact Procurement Team</button>
                </div>
            </div>
        </div>
    );
};

export default Tenders;
