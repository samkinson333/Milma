import classes from './Footer.module.css';
import { useTranslation } from 'react-i18next';
import { Facebook, Youtube, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={classes.footer}>
            <img src="/assets/services/milma_cow.png" alt="" className={classes.footerImage} />
            <div className={classes.content}>
                {/* Column 1: Subscribe & App */}
                <div className={classes.column}>
                    <div className={classes.logoContainer}>
                        <img src="/logo.png" alt="Milma" className={classes.logo} />
                        <span className={classes.logoText}>milma</span>
                    </div>
                    <p className={classes.subscribeText}>{t('footer.subscribeText')}</p>
                    <div className={classes.subscribeForm}>
                        <input
                            type="email"
                            placeholder={t('footer.emailPlaceholder')}
                            className={classes.emailInput}
                        />
                        <button className={classes.subscribeBtn}>{t('footer.subscribeButton')}</button>
                    </div>
                    <a
                        href="https://nanma.milma.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.nanmaBtn}
                        style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}
                    >
                        {t('footer.nanmaApp')}
                    </a>
                </div>

                {/* Column 2: Explore */}
                <div className={classes.column}>
                    <h3 className={classes.colTitle}>{t('footer.explore.title')}</h3>
                    <div className={classes.linkList}>
                        <Link to="/products" className={classes.link}>{t('footer.explore.products')}</Link>
                        <a href="http://202.88.241.224:8080/milmaTrc/index.jsp?p1=39" target="_blank" rel="noopener noreferrer" className={classes.link}>{t('footer.explore.bmccLogin')}</a>
                        <Link to="/career" className={classes.link}>{t('footer.explore.career')}</Link>
                        <Link to="/about" className={classes.link}>{t('footer.explore.units')}</Link>
                        <a href="#" className={classes.link}>{t('footer.explore.farmers')}</a>
                        <a href="#" className={classes.link}>{t('footer.explore.dairyVisitPublic')}</a>
                    </div>
                </div>

                {/* Column 3: Quick Links */}
                <div className={classes.column}>
                    <h3 className={classes.colTitle}>{t('footer.quickLinks.title')}</h3>
                    <div className={classes.linkList}>
                        <Link to="/notices" className={classes.link}>{t('footer.quickLinks.tenders')}</Link>
                        <Link to="/products" className={classes.link}>{t('footer.quickLinks.products')}</Link>
                        <a href="#" className={classes.link}>{t('footer.quickLinks.salesReport')}</a>
                        <a href="#" className={classes.link}>{t('footer.quickLinks.agencyEnquiry')}</a>
                        <a href="#" className={classes.link}>{t('footer.quickLinks.reportComplaint')}</a>
                        <a href="#" className={classes.link}>{t('footer.quickLinks.recipes')}</a>
                        <a href="#" className={classes.link}>{t('footer.quickLinks.faq')}</a>
                        <a href="#" className={classes.link}>{t('footer.quickLinks.feedback')}</a>
                    </div>
                </div>

                {/* Column 4: Login */}
                <div className={classes.column}>
                    <h3 className={classes.colTitle}>{t('footer.login.title')}</h3>
                    <div className={classes.linkList}>
                        <Link to="/portal-login" className={classes.link}>{t('footer.login.agency')}</Link>
                        <Link to="/portal-login" className={classes.link}>{t('footer.login.internship')}</Link>
                        <Link to="/portal-login" className={classes.link}>{t('footer.login.hr')}</Link>
                        <Link to="/portal-login" className={classes.link}>{t('footer.login.dairyVisit')}</Link>
                    </div>
                </div>

                {/* Column 5: Contact Info */}
                <div className={classes.column}>
                    <h3 className={classes.colTitle}>{t('footer.contactInfo.title')}</h3>
                    <div className={classes.contactDetails}>
                        <p>
                            <strong>{t('footer.contactInfo.addressLabel')}</strong> {t('footer.contactInfo.address')}
                        </p>
                        <p>
                            <strong>{t('footer.contactInfo.emailLabel')}</strong> <a href={`mailto:${t('footer.contactInfo.email')}`}>{t('footer.contactInfo.email')}</a>
                        </p>
                        <p>
                            <strong>{t('footer.contactInfo.phoneLabel')}</strong> {t('footer.contactInfo.phone')}
                        </p>
                        <p>
                            <strong>{t('footer.contactInfo.openHoursLabel')}</strong> {t('footer.contactInfo.openHours')}
                            <br />
                            <span style={{ display: 'block', marginTop: '0.2rem', opacity: 0.8 }}>{t('footer.contactInfo.closed')}</span>
                        </p>
                    </div>
                    <div className={classes.socialIcons}>
                        <a href="https://www.facebook.com/thiruvananthapurammilma" target="_blank" rel="noopener noreferrer" className={classes.socialIcon}><Facebook size={18} /></a>
                        <a href="https://www.youtube.com/channel/UCTSRFpI7510VK-ZSV_dylSA" target="_blank" rel="noopener noreferrer" className={classes.socialIcon}><Youtube size={18} /></a>
                        <a href="https://www.instagram.com/milmatrv?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" className={classes.socialIcon}><Instagram size={18} /></a>
                    </div>
                </div>
            </div>

            <div className={classes.bottom}>
                <div className={classes.bottomLeft}>
                    <p>{t('footer.developedBy')}</p>
                </div>
                <div className={classes.bottomRight}>
                    <a href="#">{t('footer.terms')}</a>
                    <a href="#">{t('footer.privacy')}</a>
                    <a href="#">{t('footer.support')}</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
