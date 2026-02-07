import { Briefcase, MapPin, Clock, Users, Heart, TrendingUp, Award, Coffee, X, Upload } from 'lucide-react';
import { useState } from 'react';
import classes from './Career.module.css';

const Career = () => {
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
            title: 'Senior Quality Control Analyst',
            department: 'Quality Assurance',
            location: 'Thiruvananthapuram',
            type: 'Full-Time',
            experience: '3-5 years',
            description: 'Lead quality testing and compliance for dairy products. NABL certification experience preferred.'
        },
        {
            id: 'MILMA/HR/2026/002',
            title: 'Regional Marketing Manager',
            department: 'Marketing & Sales',
            location: 'Ernakulam',
            type: 'Full-Time',
            experience: '5-7 years',
            description: 'Drive brand strategy and market expansion across Kerala. Experience in FMCG sector required.'
        },
        {
            id: 'MILMA/HR/2026/003',
            title: 'Dairy Technology Engineer',
            department: 'Production',
            location: 'Kozhikode',
            type: 'Full-Time',
            experience: '2-4 years',
            description: 'Manage automated processing equipment and optimize production workflows.'
        },
        {
            id: 'MILMA/HR/2026/004',
            title: 'Supply Chain Coordinator',
            department: 'Logistics',
            location: 'Wayanad',
            type: 'Full-Time',
            experience: '1-3 years',
            description: 'Coordinate cold chain logistics and ensure timely distribution across the region.'
        }
    ];

    const benefits = [
        { icon: <Heart size={24} />, title: 'Health Insurance', desc: 'Comprehensive medical coverage for you and your family' },
        { icon: <TrendingUp size={24} />, title: 'Career Growth', desc: 'Continuous learning and advancement opportunities' },
        { icon: <Award size={24} />, title: 'Performance Bonus', desc: 'Annual incentives based on individual and team performance' },
        { icon: <Coffee size={24} />, title: 'Work-Life Balance', desc: 'Flexible schedules and supportive work environment' }
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
                    <h1>Build Your Future with <span className={classes.highlight}>Milma</span></h1>
                    <p>Join Kerala's most trusted dairy cooperative and make a meaningful impact on millions of lives. We're looking for passionate professionals to help us deliver excellence.</p>
                    <div className={classes.heroUnderline}></div>
                </div>
            </div>

            <div className={classes.container}>
                <div className={classes.whySection}>
                    <h2>Why Join Us?</h2>
                    <p>At Milma, we believe that exceptional products come from exceptional people. We're committed to creating a workplace where innovation, integrity, and collaboration thrive.</p>

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
                        <h2>Current Openings</h2>
                        <div className={classes.underline}></div>
                        <p>Explore opportunities across various departments and locations. Find the perfect role that matches your skills and aspirations.</p>
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

                                <button className={classes.applyBtn}>View Details</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={classes.ctaSection}>
                    <div className={classes.ctaContent}>
                        <Users size={32} />
                        <h3>Don't see a fit? Join our Talent Pool</h3>
                        <p>We're always looking for talented individuals. Submit your resume and we'll reach out when a suitable position opens up.</p>
                        <button className={classes.talentBtn} onClick={() => setIsModalOpen(true)}>
                            Submit Your Resume
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

                        <h2>Join Our Talent Pool</h2>
                        <p className={classes.modalDesc}>Fill in your details and upload your resume. We'll contact you when a suitable position becomes available.</p>

                        <form onSubmit={handleSubmit} className={classes.form}>
                            <div className={classes.formGroup}>
                                <label htmlFor="fullName">FULL NAME</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className={classes.formGroup}>
                                <label htmlFor="email">EMAIL ADDRESS</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className={classes.formGroup}>
                                <label htmlFor="phone">PHONE NUMBER</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+91 98765 43210"
                                    required
                                />
                            </div>

                            <div className={classes.formGroup}>
                                <label htmlFor="department">AREA OF INTEREST</label>
                                <select
                                    id="department"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Department</option>
                                    {departments.map((dept, idx) => (
                                        <option key={idx} value={dept}>{dept}</option>
                                    ))}
                                </select>
                            </div>

                            <div className={classes.formGroup}>
                                <label>UPLOAD RESUME</label>
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
                                            {formData.resume ? formData.resume.name : 'Click to upload your resume'}
                                        </span>
                                        <small>PDF, DOC (Max 5MB)</small>
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className={classes.submitBtn}>
                                SUBMIT APPLICATION
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Career;
