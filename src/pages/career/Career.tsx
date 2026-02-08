import { Briefcase, MapPin, Clock, Users, Heart, TrendingUp, Award, Coffee, X, Upload } from 'lucide-react';
import { useState } from 'react';
import classes from './Career.module.css';
import { useTranslation } from 'react-i18next';

const Career = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        department: '',
        resume: null as File | null
    });

    const openings = [
        {
            id: 'MILMA/HR/2026/001',
            title: t('career.openings.roles.qc.title'),
            department: 'Quality Assurance',
            location: 'Thiruvananthapuram',
            type: 'Full-Time',
            experience: '3-5 years',
            description: t('career.openings.roles.qc.desc')
        },
        {
            id: 'MILMA/HR/2026/002',
            title: t('career.openings.roles.marketing.title'),
            department: 'Marketing & Sales',
            location: 'Ernakulam',
            type: 'Full-Time',
            experience: '5-7 years',
            description: t('career.openings.roles.marketing.desc')
        },
        {
            id: 'MILMA/HR/2026/003',
            title: t('career.openings.roles.production.title'),
            department: 'Production',
            location: 'Kozhikode',
            type: 'Full-Time',
            experience: '2-4 years',
            description: t('career.openings.roles.production.desc')
        },
        {
            id: 'MILMA/HR/2026/004',
            title: t('career.openings.roles.logistics.title'),
            department: 'Logistics',
            location: 'Wayanad',
            type: 'Full-Time',
            experience: '1-3 years',
            description: t('career.openings.roles.logistics.desc')
        }
    ];

    const benefits = [
        { icon: <Heart size={24} />, title: t('career.benefits.health.title'), desc: t('career.benefits.health.desc') },
        { icon: <TrendingUp size={24} />, title: t('career.benefits.growth.title'), desc: t('career.benefits.growth.desc') },
        { icon: <Award size={24} />, title: t('career.benefits.bonus.title'), desc: t('career.benefits.bonus.desc') },
        { icon: <Coffee size={24} />, title: t('career.benefits.balance.title'), desc: t('career.benefits.balance.desc') }
    ];

    const departments = [
        'Quality Assurance',
        'Marketing & Sales',
        'Production',
        'Logistics',
        'Finance & Accounts',
        'Human Resources',
        'IT & Technology',
        'Research & Development'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your application! We will review your resume and get back to you soon.');
        setIsModalOpen(false);
        setFormData({ fullName: '', email: '', phone: '', department: '', resume: null });
    };

    return (
        <div className={classes.careerPage}>
            <div className={classes.hero}>
                <div className={classes.heroContent}>
                    <h1>{t('career.hero.title')} <span className={classes.highlight}>{t('career.hero.milma')}</span></h1>
                    <p>{t('career.hero.description')}</p>
                    <div className={classes.heroUnderline}></div>
                </div>
            </div>

            <div className={classes.container}>
                <div className={classes.whySection}>
                    <h2>{t('career.whyJoin.title')}</h2>
                    <p>{t('career.whyJoin.description')}</p>

                    <div className={classes.benefitsGrid}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className={classes.benefitCard}>
                                <div className={classes.benefitIcon}>{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={classes.openingsSection}>
                    <div className={classes.sectionHeader}>
                        <h2>{t('career.openings.title')}</h2>
                        <div className={classes.underline}></div>
                        <p>{t('career.openings.description')}</p>
                    </div>

                    <div className={classes.jobsList}>
                        {openings.map((job, index) => (
                            <div key={index} className={classes.jobCard}>
                                <div className={classes.jobHeader}>
                                    <div>
                                        <h3>{job.title}</h3>
                                        <span className={classes.jobId}>{job.id}</span>
                                    </div>
                                    <span className={classes.jobType}>{job.type}</span>
                                </div>

                                <p className={classes.jobDesc}>{job.description}</p>

                                <div className={classes.jobMeta}>
                                    <div className={classes.metaItem}>
                                        <Briefcase size={16} />
                                        <span>{job.department}</span>
                                    </div>
                                    <div className={classes.metaItem}>
                                        <MapPin size={16} />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className={classes.metaItem}>
                                        <Clock size={16} />
                                        <span>{job.experience}</span>
                                    </div>
                                </div>

                                <button className={classes.applyBtn}>{t('career.openings.viewDetails')}</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={classes.ctaSection}>
                    <div className={classes.ctaContent}>
                        <Users size={32} />
                        <h3>{t('career.cta.title')}</h3>
                        <p>{t('career.cta.description')}</p>
                        <button className={classes.talentBtn} onClick={() => setIsModalOpen(true)}>
                            {t('career.cta.button')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Resume Submission Modal */}
            {isModalOpen && (
                <div className={classes.modalOverlay} onClick={() => setIsModalOpen(false)}>
                    <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={classes.closeBtn} onClick={() => setIsModalOpen(false)}>
                            <X size={24} />
                        </button>

                        <h2>{t('career.form.title')}</h2>
                        <p className={classes.modalDesc}>{t('career.form.description')}</p>

                        <form onSubmit={handleSubmit} className={classes.form}>
                            <div className={classes.formGroup}>
                                <label htmlFor="fullName">{t('career.form.fullName')}</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder={t('career.form.placeholders.name')}
                                    required
                                />
                            </div>

                            <div className={classes.formGroup}>
                                <label htmlFor="email">{t('career.form.email')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder={t('career.form.placeholders.email')}
                                    required
                                />
                            </div>

                            <div className={classes.formGroup}>
                                <label htmlFor="phone">{t('career.form.phone')}</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder={t('career.form.placeholders.phone')}
                                    required
                                />
                            </div>

                            <div className={classes.formGroup}>
                                <label htmlFor="department">{t('career.form.department')}</label>
                                <select
                                    id="department"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">{t('career.form.placeholders.selectDept')}</option>
                                    {departments.map((dept, idx) => (
                                        <option key={idx} value={dept}>{dept}</option>
                                    ))}
                                </select>
                            </div>

                            <div className={classes.formGroup}>
                                <label>{t('career.form.resume')}</label>
                                <div className={classes.fileUpload}>
                                    <input
                                        type="file"
                                        id="resume"
                                        name="resume"
                                        onChange={handleFileChange}
                                        accept=".pdf,.doc,.docx"
                                        required
                                    />
                                    <label htmlFor="resume" className={classes.fileLabel}>
                                        <Upload size={24} />
                                        <span>
                                            {formData.resume ? formData.resume.name : t('career.form.placeholders.upload')}
                                        </span>
                                        <small>PDF, DOC (Max 5MB)</small>
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className={classes.submitBtn}>
                                {t('career.form.submit')}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Career;
