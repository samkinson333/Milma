import {
    Phone,
    Mail,
    ShoppingCart,
    Headset,
    Building2,
    Search,
    ArrowRight,
    Store,
    Navigation2,
    MessageCircle,
    ChevronRight,
    Map,
    Send
} from 'lucide-react';
import classes from './Contact.module.css';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';

const Contact = () => {
    const { t } = useTranslation();
    const { colors } = useTheme();

    // Updated with real data from https://milmatrcmpu.com/contact
    const contactCards = [
        {
            icon: <ShoppingCart size={24} />,
            title: t('contact.cards.sales.title'),
            description: t('contact.cards.sales.description'),
            action: 'trcmpu@gmail.com',
            isLink: true
        },
        {
            icon: <Headset size={24} />,
            title: t('contact.cards.support.title'),
            description: t('contact.cards.support.description'),
            action: '0471-2447109',
            isLink: false
        },
        {
            icon: <Building2 size={24} />,
            title: t('contact.cards.office.title'),
            description: t('contact.cards.office.description'),
            action: 'View on Map',
            isLink: false
        }
    ];

    const dairyUnits = [
        {
            name: 'Thiruvananthapuram Dairy',
            address: 'Ambalathara, Poonthura.P.O, Thiruvananthapuram - 26',
            phone: '0471-2382562',
            email: 'milmatd@gmail.com',
            image: '/images/contact/Gemini_Generated_Image_6x1qrh6x1qrh6x1q.png',
            isMain: true
        },
        {
            name: 'Kollam Dairy',
            address: 'Thevally, Thevally.P.O, Kollam - 09',
            phone: '0474-2794556',
            email: 'milmaklm@gmail.com',
            image: '/images/contact/Gemini_Generated_Image_6x1qrh6x1qrh6x1q (1).png',
            isMain: false
        },
        {
            name: 'Pathanamthitta Dairy',
            address: 'Mamoodu Junction, Nariyapuram.P.O, Pathanamthitta',
            phone: '0468-2350089',
            email: 'milmadairypta@yahoo.co.in',
            image: '/images/contact/Gemini_Generated_Image_6x1qrh6x1qrh6x1q (2).png',
            isMain: false
        },
        {
            name: 'Alappuzha Dairy',
            address: 'Marketing Cell, Punnappara, Alappuzha-688004',
            phone: '0477-2286925',
            email: 'alpymcellmangr@gmail.com',
            image: '/images/contact/Gemini_Generated_Image_6x1qrh6x1qrh6x1q (3).png',
            isMain: false
        },
        {
            name: 'P & I Unit Mannar',
            address: 'Kuttiyil Junction, Mannar.P.O Alappuzha- 689622',
            phone: '0479-2312562',
            email: 'milmamnr@gmail.com',
            image: '/images/contact/Gemini_Generated_Image_6x1qrh6x1qrh6x1q (4).png',
            isMain: false
        }
    ];

    const stalls = [
        { name: 'Veli', link: 'https://goo.gl/maps/D1ubtwo1bo6dhV956' },
        { name: 'Shasthamangalam', link: 'https://goo.gl/maps/yBKLxLTdr47v4JbX7' },
        { name: 'Poojappura', link: 'https://goo.gl/maps/Nj8TqyXy41eSCgLE9' },
        { name: 'Kandala', link: 'https://goo.gl/maps/dXYpNpZn2DtNPEiG9' },
        { name: 'DIP', link: 'https://goo.gl/maps/SjPeaTrG178DjMFN8' },
        { name: 'South Fort', link: 'https://goo.gl/maps/q4nsz5ESydSkuVFC7' },
        { name: 'Statue', link: 'https://goo.gl/maps/tDor5wgDLWaDDXYKA' },
        { name: 'Nanthancode', link: 'https://goo.gl/maps/V6WKkqUBtx3CtUDh7' },
        { name: 'Museum', link: 'https://goo.gl/maps/Azkg1FU3FDDCSpPaA' },
        { name: 'Kowdiar', link: 'https://goo.gl/maps/pv8BAE8MqmDt4TTVA' },
        { name: 'Pattom', link: 'https://goo.gl/maps/G968wMYqX9UX7rUZ8' },
    ];

    return (
        <div className={classes.pageContainer}>
            {/* Hero Section */}
            <div className={classes.hero}>
                <div className={classes.heroContent}>
                    <h1>{t('contact.hero.title')}</h1>
                    <p>{t('contact.hero.description')}</p>
                </div>
            </div>

            {/* Overlapping Contact Cards */}
            <div className={classes.contactCardsContainer}>
                {contactCards.map((card, index) => (
                    <div key={index} className={classes.contactCard}>
                        <div className={classes.iconCircle}>
                            {card.icon}
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        {card.isLink ? (
                            <a href={`mailto:${card.action}`} className={classes.contactLink}>
                                {card.action} <ArrowRight size={16} />
                            </a>
                        ) : (
                            <span className={classes.contactLink} style={{ cursor: 'default', textDecoration: 'none' }}>
                                {card.action}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/* Message Form Section */}
            <div className={classes.formSection}>
                <div className={classes.formGrid}>
                    {/* Left Side Info */}
                    <div className={classes.formInfo}>
                        <h2>{t('contact.form.title')}</h2>
                        <p>{t('contact.form.subtitle')}</p>

                        <div className={classes.infoBlock}>
                            <h4>Head Office</h4>
                            <div className={classes.infoItem}>
                                <Building2 size={20} color={colors.primary} style={{ marginTop: '4px' }} />
                                <span style={{ whiteSpace: 'pre-line' }}>{t('contact.cards.office.description')}</span>
                            </div>
                        </div>

                        <div className={classes.infoBlock}>
                            <h4>Phone</h4>
                            <div className={classes.infoItem}>
                                <Phone size={20} color={colors.primary} />
                                <span>0471-2447109, 0471-2446845</span>
                            </div>
                        </div>

                        <div className={classes.infoBlock}>
                            <h4>Email</h4>
                            <div className={classes.infoItem}>
                                <Mail size={20} color={colors.primary} />
                                <span>trcmpu@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className={classes.formContainer}>
                        <h3>{t('contact.form.leaveMessage')}</h3>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className={classes.inputGroup}>
                                <label>{t('contact.form.name')}</label>
                                <input type="text" className={classes.formInput} placeholder={t('contact.form.placeholderName')} required />
                            </div>

                            <div className={classes.inputGroup}>
                                <label>{t('contact.form.email')}</label>
                                <input type="email" className={classes.formInput} placeholder={t('contact.form.placeholderEmail')} required />
                            </div>

                            <div className={classes.inputGroup}>
                                <label>{t('contact.form.phone')}</label>
                                <input type="tel" className={classes.formInput} placeholder={t('contact.form.placeholderPhone')} required />
                            </div>

                            <div className={classes.inputGroup}>
                                <label>{t('contact.form.message')}</label>
                                <textarea className={classes.formTextarea} placeholder={t('contact.form.placeholderMessage')} required></textarea>
                            </div>

                            <button type="submit" className={classes.submitBtn}>
                                {t('contact.form.send')} <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Dairy Units */}
            <div className={classes.sectionContainer}>
                <div className={classes.sectionHeader}>
                    <h2>{t('contact.dairyUnits.title')}</h2>
                    <p>{t('contact.dairyUnits.subtitle')}</p>
                </div>

                <div className={classes.dairyGrid}>
                    {dairyUnits.map((dairy, index) => (
                        <div key={index} className={classes.dairyCard}>
                            <div className={classes.dairyImage}>
                                <img src={dairy.image} alt={dairy.name} />
                            </div>
                            <div className={classes.dairyContent}>
                                {dairy.isMain && <span className={classes.mainPlantBadge}>{t('contact.dairyUnits.mainPlant')}</span>}
                                <h3>{dairy.name}</h3>
                                <p className={classes.dairyAddress}>{dairy.address}</p>

                                <div className={classes.dairyContactInfo}>
                                    <div className={classes.infoItem}>
                                        <Phone size={16} color={colors.primary} />
                                        <span>{dairy.phone}</span>
                                    </div>
                                    <div className={classes.infoItem}>
                                        <Mail size={16} color={colors.primary} />
                                        <span>{dairy.email}</span>
                                    </div>
                                </div>

                                <button className={classes.viewDetailsBtn}>{t('contact.dairyUnits.viewDetails')}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enhanced Stall Locations */}
            <div className={classes.stallLocationsSection}>
                <div className={classes.sectionHeader}>
                    <h2>Find a Milma Stall Near You</h2>
                    <p>Locate our exclusive stalls across the city for fresh milk and products.</p>
                </div>

                <div className={classes.searchContainer}>
                    <div className={classes.searchInputWrapper}>
                        <Search className={classes.searchIcon} size={20} />
                        <input
                            type="text"
                            className={classes.searchInput}
                            placeholder="Search by area, city or pincode..."
                        />
                    </div>
                    <button className={classes.findBtn}>
                        <Navigation2 size={18} /> Locate Me
                    </button>
                </div>

                <div className={classes.locationsGrid}>
                    {stalls.map((stall, index) => (
                        <a
                            key={index}
                            href={stall.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.locationCard}
                            style={{ textDecoration: 'none' }}
                        >
                            <div className={classes.locationIconBox}>
                                <Store size={24} strokeWidth={1.5} />
                            </div>
                            <div className={classes.locationInfo}>
                                <h4>{stall.name}</h4>
                                <div className={classes.locationStatus}>
                                    View Location
                                </div>
                            </div>
                            <div className={classes.arrowIcon}>
                                <ChevronRight size={20} />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Map View Integration */}
                <div className={classes.mapContainer} style={{ marginBottom: '3rem' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126422.3736735626!2d76.87785312759972!3d8.51330953406526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smilma%20stall%20trivandrum!5e0!3m2!1sen!2sin!4v1707327341239!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className={classes.seeAllContainer}>
                    <a href="https://www.google.com/maps/search/milma+stall+trivandrum/" target="_blank" className={classes.seeAllBtn}>
                        <Map size={18} /> View Larger Map
                    </a>
                </div>
            </div>

            {/* Floating Support Button */}
            <div className={classes.supportFab}>
                <MessageCircle size={28} />
            </div>
        </div>
    );
};

export default Contact;
