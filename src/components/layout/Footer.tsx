import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.content}>
                <div className={classes.column}>
                    <h3>MILMA</h3>
                    <p>Thiruvananthapuram Regional Co-operative Milk Producers Union Ltd.</p>
                </div>
                <div className={classes.column}>
                    <h4>Shop</h4>
                    <a href="#">Milk</a>
                    <a href="#">Ghee</a>
                    <a href="#">Ice Cream</a>
                </div>
                <div className={classes.column}>
                    <h4>Company</h4>
                    <a href="#">About Us</a>
                    <a href="#">Leadership</a>
                    <a href="#">Careers</a>
                </div>
                <div className={classes.column}>
                    <h4>Support</h4>
                    <a href="#">Contact</a>
                    <a href="#">FAQ</a>
                </div>
            </div>
            <div className={classes.bottom}>
                <p>&copy; 2026 Milma TRCMPU. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
