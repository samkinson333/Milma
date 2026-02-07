import classes from './AboutSnippet.module.css';

const AboutSnippet = () => {
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.imageContent}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrV3ox0elTfuZ_8pEwmNc4rRTxv9JtvnMO6A&s"
                        alt="Kerala Farm"
                        className={classes.img}
                    />
                </div>
                <div className={classes.textContent}>
                    <h3 className={classes.subtitle}>WHO WE ARE</h3>
                    <h2 className={classes.title}>Nurturing Kerala Since 1980</h2>
                    <p className={classes.description}>
                        The Kerala Co-operative Milk Marketing Federation (KCMMF), typically known as Milma,
                        was established in April 1980. Our goal is to channelize marketable surplus milk
                        from the rural areas to urban consuming centers to ensure fairness to both producers and consumers.
                    </p>
                    <button className={classes.btn}>Read Our Story</button>
                </div>
            </div>
        </section>
    );
};

export default AboutSnippet;
