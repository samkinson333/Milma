import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Services.module.css';
import { Truck, Users, Store, ShoppingBasket, ArrowRight } from 'lucide-react';

// Local assets
const IMAGES = {
    farmers: "/assets/services/farmers.jpg",
    society: "/assets/services/society.jpg",
    dealers: "/assets/services/dealers.jpg",
    consumers: "/assets/services/consumers.jpg"
};

// Simple CountUp Component
const CountUp = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
    const [count, setCount] = React.useState(0);
    const [hasStarted, setHasStarted] = React.useState(false);
    const ref = React.useRef<HTMLSpanElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.1 } // Trigger as soon as 10% is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    React.useEffect(() => {
        if (!hasStarted) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (progress < duration) {
                setCount(Math.min(end, Math.floor((progress / duration) * end)));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [hasStarted, end, duration]);

    return <span ref={ref}>{count}</span>;
}

const Services = () => {
    const services = [
        {
            id: "farmers",
            title: "Services to farmers and Primary Dairy Co operatives",
            path: "/services/farmers-coops",
            description: "The Union is committed to provide technical and financial assistances for the welfare and development of primary Dairy co operatives and Dairy farmers...",
            icon: <Truck size={32} />,
            image: IMAGES.farmers
        },
        {
            id: "society",
            title: "Society Level",
            path: "/services/society-level",
            description: "Union Conduct various socio economic development programs for milk producers and the Dairy Co-operative Societies including artificial insemination pr...",
            icon: <Users size={32} />,
            image: IMAGES.society
        },
        {
            id: "dealers",
            title: "Dealers Level",
            path: "/services/dealers-level",
            description: "Ready to collaborate with Milma as a Franchisee? Set up your own Milma Franchise and be a part of the fastest growing and most profitable dairy brand...",
            icon: <Store size={32} />,
            image: IMAGES.dealers
        },
        {
            id: "consumers",
            title: "Consumer Level",
            path: "/services/consumer-level",
            description: "Union has more than 5000 agents for milk. The Dairies offer round the clock customer care support for its agents and consumers. Union supply milk dail...",
            icon: <ShoppingBasket size={32} />,
            image: IMAGES.consumers
        }
    ];

    const stats = [
        { number: 687, label: "Dairy Products", doodle: "/assets/services/DAIRY.png" },
        { number: 655, label: "Expert Farmers", doodle: "/assets/services/Gemini_Generated_Image_dco798dco798dco7-removebg-preview.png" },
        { number: 450, label: "Units Of Cattle", doodle: "/assets/services/Gemini_Generated_Image_m3046am3046am304-removebg-preview.png" },
        { number: 1200, label: "Hectares Of Farm", doodle: "/assets/services/FARM.png" }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    // Scroll Animation Logic
    const [scrollProgress, setScrollProgress] = React.useState(0);
    const [activeIndex, setActiveIndex] = React.useState<number>(-1);
    const timelineRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleScroll = () => {
            if (timelineRef.current) {
                const timeline = timelineRef.current;
                const rect = timeline.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const totalHeight = rect.height;

                // Calculate progress based on how much of the timeline has been scrolled past
                const startOffset = windowHeight / 2;
                const scrolled = Math.max(0, startOffset - rect.top);
                const progress = Math.min(100, (scrolled / totalHeight) * 100);

                setScrollProgress(progress);

                // Find the item closest to the center of the viewport
                const items = timeline.querySelectorAll(`.${classes.timelineItem}`);
                let closestIndex = -1;
                let minDistance = Infinity;
                const centerPoint = windowHeight / 2;

                items.forEach((item, index) => {
                    const itemRect = item.getBoundingClientRect();
                    const itemCenter = itemRect.top + (itemRect.height / 2);
                    const distance = Math.abs(itemCenter - centerPoint);

                    if (distance < minDistance) {
                        minDistance = distance;
                        closestIndex = index;
                    }
                });

                // Always activate the closest item
                setActiveIndex(closestIndex);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={classes.pageContainer}>
            {/* Intro Section - Moved First */}
            <section className={classes.intro}>
                <div className={classes.introContent}>
                    <div className={classes.introImageWrapper}>
                        <img src="/assets/services/servicesh.jpg" alt="Services Overview" className={classes.introImage} />
                    </div>
                    <div className={classes.introTextWrapper}>
                        <h3>WHAT WE DO</h3>
                        <h2>Services We Provide</h2>
                        <p>
                            To carryout activities for promoting Production, Procurement, Processing and Marketing of milk and milk products for economic development of the farming community. To provide assured year round market and stable price to the dairy farmers for their produce.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sticky Navigation */}
            <div className={classes.stickyNav}>
                <div className={classes.navContainer}>
                    {services.map((service, index) => (
                        <button
                            key={service.id}
                            onClick={() => scrollToSection(service.id)}
                            className={`${classes.navButton} ${index === activeIndex ? classes.activeNavBtn : ''}`}
                        >
                            {service.title.split(' ')[0]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Services Timeline (Route Map) */}
            <section className={classes.timelineSection} ref={timelineRef}>
                {/* Base Line */}
                <div className={classes.timelineLine}></div>

                {/* Progress Fill Line */}
                <div
                    className={classes.timelineLineFill}
                    style={{ height: `${scrollProgress}%` }}
                ></div>

                <div className={classes.timelineContainer}>
                    {services.map((service, index) => {
                        const doodleClassNames = [classes.doodleDairy, classes.doodleFarmer, classes.doodleCattle, classes.doodleFarm];

                        return (
                            <div key={index} id={service.id} className={classes.timelineItem}>
                                {/* Left Side Content */}
                                <div className={`${classes.timelineSide} ${classes.leftSide}`}>
                                    {index % 2 === 0 ? (
                                        <Link to={service.path} className={classes.contentWrapper}>
                                            <div className={classes.serviceCard}>
                                                <div className={classes.imageContainer}>
                                                    <img src={service.image} alt={service.title} className={classes.cardImage} />
                                                    <div className={classes.iconBox}>
                                                        {service.icon}
                                                    </div>
                                                </div>
                                                <div className={classes.cardContent}>
                                                    <h3 className={classes.cardTitle}>{service.title}</h3>
                                                    <p className={classes.cardDesc}>{service.description}</p>
                                                    <div className={classes.learnMore}>
                                                        <span>Know More</span>
                                                        <ArrowRight size={16} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className={classes.statWrapper}>
                                            {/* Background Doodle - Now Side Logic */}
                                            <div className={`${classes.doodleContainer} ${doodleClassNames[index]}`}>
                                                <img src={stats[index]?.doodle} alt="Background Art" className={classes.doodleImage} />
                                            </div>

                                            <div className={classes.statText}>
                                                <span className={classes.statNumber}>
                                                    <CountUp end={stats[index]?.number} />
                                                </span>
                                                <span className={classes.statLabel}>{stats[index]?.label}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Center Dot */}
                                <div className={`${classes.timelineDot} ${index === activeIndex ? classes.activeDot : ''}`}></div>

                                {/* Right Side Content */}
                                <div className={`${classes.timelineSide} ${classes.rightSide}`}>
                                    {index % 2 !== 0 ? (
                                        <Link to={service.path} className={classes.contentWrapper}>
                                            <div className={classes.serviceCard}>
                                                <div className={classes.imageContainer}>
                                                    <img src={service.image} alt={service.title} className={classes.cardImage} />
                                                    <div className={classes.iconBox}>
                                                        {service.icon}
                                                    </div>
                                                </div>
                                                <div className={classes.cardContent}>
                                                    <h3 className={classes.cardTitle}>{service.title}</h3>
                                                    <p className={classes.cardDesc}>{service.description}</p>
                                                    <div className={classes.learnMore}>
                                                        <span>Know More</span>
                                                        <ArrowRight size={16} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className={classes.statWrapper}>
                                            {/* Background Doodle - Now Side Logic */}
                                            <div className={`${classes.doodleContainer} ${doodleClassNames[index]}`}>
                                                <img src={stats[index]?.doodle} alt="Background Art" className={classes.doodleImage} />
                                            </div>

                                            <div className={classes.statText}>
                                                <span className={classes.statNumber}>
                                                    <CountUp end={stats[index]?.number} />
                                                </span>
                                                <span className={classes.statLabel}>{stats[index]?.label}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

        </div>
    );
};

export default Services;
