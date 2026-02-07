import classes from './Contact.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h1>Get in Touch</h1>
                <p>Questions? Feedback? We'd love to hear from you.</p>
            </div>

            <div className={classes.content}>
                <div className={classes.info}>
                    <div className={classes.item}>
                        <MapPin className={classes.icon} />
                        <div>
                            <h3>Head Office</h3>
                            <p>Thiruvananthapuram Regional Co-operative Milk Producers' Union Ltd</p>
                            <p>Pattom, Thiruvananthapuram - 695004, Kerala</p>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <Phone className={classes.icon} />
                        <div>
                            <h3>Call Us</h3>
                            <p>Toll Free: 1800 889 0230</p>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <Mail className={classes.icon} />
                        <div>
                            <h3>Email Us</h3>
                            <p>trcmpu@gmail.com</p>
                        </div>
                    </div>
                </div>

                <form className={classes.form}>
                    <div className={classes.field}>
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className={classes.field}>
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <div className={classes.field}>
                        <label>Message</label>
                        <textarea placeholder="Your Message" rows={5}></textarea>
                    </div>
                    <button type="submit" className={classes.submitBtn}>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
