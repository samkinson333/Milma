import { Download, FileText, BookOpen, Info, Phone, Mail } from 'lucide-react';
import classes from './Recruitment.module.css';

const Recruitment = () => {
    const notifications = [
        {
            icon: <FileText size={24} />,
            title: 'English Notification',
            description: 'Complete notification with eligibility criteria regarding the current recruitment process for various positions.',
            file: 'english-notification.pdf',
            color: '#fee2e2'
        },
        {
            icon: <FileText size={24} />,
            title: 'Malayalam Notification',
            description: 'സമ്പൂർണ്ണ അറിയിപ്പ് യോഗ്യത മാനദണ്ഡങ്ങളും അപേക്ഷാ നടപടിക്രമങ്ങളും.',
            file: 'malayalam-notification.pdf',
            color: '#fef3c7'
        },
        {
            icon: <BookOpen size={24} />,
            title: 'Experience Formats',
            description: 'Standard format for experience certificates, employment certificates and eligibility documents.',
            file: 'experience-formats.pdf',
            color: '#dbeafe'
        },
        {
            icon: <Info size={24} />,
            title: 'Job Description',
            description: 'Comprehensive details about job roles, responsibilities, salary structure and growth opportunities.',
            file: 'job-description.pdf',
            color: '#dcfce7'
        },
        {
            icon: <BookOpen size={24} />,
            title: 'Examination Syllabus',
            description: 'Topic-wise breakdown for the upcoming written tests. Includes weightage for different subjects.',
            file: 'exam-syllabus.pdf',
            color: '#fef3c7'
        },
        {
            icon: <Info size={24} />,
            title: 'Weightage Instructions',
            description: 'Detailed guidelines on how weightage marks are calculated for previous experience and qualifications.',
            file: 'weightage-instructions.pdf',
            color: '#e0e7ff'
        }
    ];

    return (
        <div className={classes.recruitmentPage}>
            <div className={classes.hero}>
                <div className={classes.heroContent}>
                    <h1>Recruitment Portal</h1>
                    <p>Join our mission to empower the dairy community. Find all official notifications, syllabus, and job descriptions below.</p>
                </div>
            </div>

            <div className={classes.container}>
                <div className={classes.sectionHeader}>
                    <h2>Official Notifications</h2>
                    <div className={classes.underline}></div>
                    <p>Latest updates and downloadable documents for current openings</p>
                    <div className={classes.tabButtons}>
                        <button className={classes.tabActive}>All Notifications</button>
                        <button className={classes.tab}>Guidelines</button>
                    </div>
                </div>

                <div className={classes.notificationsGrid}>
                    {notifications.map((notification, index) => (
                        <div key={index} className={classes.notificationCard}>
                            <div className={classes.cardIcon} style={{ backgroundColor: notification.color }}>
                                {notification.icon}
                            </div>
                            <h3>{notification.title}</h3>
                            <p>{notification.description}</p>
                            <button className={classes.downloadBtn}>
                                <Download size={16} />
                                Download PDF
                            </button>
                        </div>
                    ))}
                </div>

                <div className={classes.supportSection}>
                    <div className={classes.supportContent}>
                        <h3>Having trouble downloading?</h3>
                        <p>Our support team is available from 10 AM to 5 PM (usual working days) to assist you with the application process.</p>
                        <div className={classes.supportButtons}>
                            <button className={classes.supportBtn}>
                                <Phone size={18} />
                                Call Support
                            </button>
                            <button className={classes.supportBtnSecondary}>
                                <Mail size={18} />
                                Email Us
                            </button>
                        </div>
                    </div>
                </div>

                <div className={classes.infoSection}>
                    <h3>Important Information</h3>
                    <ul className={classes.infoList}>
                        <li>All applications must be submitted online through the official portal</li>
                        <li>Ensure all documents are in PDF format and within the size limit</li>
                        <li>Keep your application reference number safe for future correspondence</li>
                        <li>Check your email regularly for updates on the recruitment process</li>
                        <li>Contact our support team if you face any technical difficulties</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Recruitment;
