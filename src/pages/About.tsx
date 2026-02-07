import classes from './About.module.css';

const About = () => {
    return (
        <div className={classes.container}>
            <div className={classes.hero}>
                <h1>Our Story</h1>
                <p>A legacy of purity and co-operation.</p>
            </div>

            <div className={classes.content}>
                <section className={classes.section}>
                    <h2>Organization Profile</h2>
                    <p>
                        The Thiruvananthapuram Regional Co-operative Milk Producers' Union Ltd (TRCMPU)
                        is a leading force in Kerala's dairy sector. Located in the capital city, it
                        operates with a diverse talent pool and decades of experience.
                    </p>
                    <p>
                        In 1985, the Union started operations from the old Thiruvananthapuram Dairy,
                        initially handling 40,000 LPD. Since then, it has expanded significantly
                        to meet the growing demand for quality milk and milk products in
                        Thiruvananthapuram and Kollam districts.
                    </p>
                </section>

                <section className={classes.section}>
                    <h2>Our Mission</h2>
                    <p>
                        To carry out activities for promoting Production, Procurement, Processing, and
                        Marketing of milk and milk products for the economic development of the
                        farming community. To provide assured year-round market and stable prices to
                        the dairy farmers for their produce.
                    </p>
                </section>

                <section className={classes.section}>
                    <h2>Key Milestones</h2>
                    <ul className={classes.historyList}>
                        <li><strong>1985:</strong> Union started operation from old Thiruvananthapuram Dairy.</li>
                        <li><strong>1986:</strong> Commissioned the first Dairy plant at Kollam (60,000 LPD) and Chilling Plants at Mannar & Pathanamthitta.</li>
                        <li><strong>1989:</strong> New Dairy Plant at Alappuzha commissioned (60,000 LPD).</li>
                        <li><strong>1992:</strong> New Dairy Plant with 1 Lakh LPD capacity commissioned at Thiruvananthapuram.</li>
                    </ul>
                </section>

                <section className={classes.section}>
                    <h2>What Customers Say</h2>
                    <div className={classes.testimonials}>
                        <div className={classes.testimonialCard}>
                            <p>"My family has been using Milma products for decades. Milma has always symbolized health."</p>
                            <span>- Lekshmi</span>
                        </div>
                        <div className={classes.testimonialCard}>
                            <p>"Milma is a household name in Kerala. 100% original. Go for it."</p>
                            <span>- Jeeva</span>
                        </div>
                        <div className={classes.testimonialCard}>
                            <p>"Excellent quality milk and dairy products made Milma the best dairy brand in Kerala."</p>
                            <span>- Chippi</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
