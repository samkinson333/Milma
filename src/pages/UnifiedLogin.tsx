import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './UnifiedLogin.module.css';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ArrowRight, AlertCircle, Loader2, User, ShieldCheck } from 'lucide-react';

const UnifiedLogin = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate network delay for premium feel
        setTimeout(() => {
            const u = username.trim().toLowerCase();
            const p = password.trim();

            // Credentials check
            if (u === 'agency_admin' && p === 'AGENCY_2026') {
                navigate('/portals/agency');
            } else if (u === 'intern_user' && p === 'INTERN_2026') {
                navigate('/portals/internship');
            } else if (u === 'hr_manager' && p === 'HR_ADMIN_2026') {
                navigate('/portals/hr');
            } else if (u === 'visit_coord' && p === 'VISIT_2026') {
                navigate('/portals/dairy-visit');
            } else {
                setError("Invalid username or password. Please check your credentials.");
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <div className={classes.pageWrapper}>
            <div className={classes.backgroundEffects}>
                <div className={classes.glow1}></div>
                <div className={classes.glow2}></div>
                <div className={classes.glow3}></div>
            </div>

            <motion.div
                className={classes.loginCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className={classes.cardHeader}>
                    <div className={classes.logoWrapper}>
                        <img src="/logo.png" alt="Milma" className={classes.logo} />
                    </div>
                    <h1>Unified Access Portal</h1>
                    <p>Enter your professional credentials to continue</p>
                </div>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <div className={classes.inputGroup}>
                        <label className={classes.label}>Username</label>
                        <div className={classes.inputWrapper}>
                            <User className={classes.inputIcon} size={18} />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter Username"
                                className={`${classes.input} ${error ? classes.inputError : ''}`}
                                disabled={isLoading}
                                autoFocus
                            />
                        </div>
                    </div>

                    <div className={classes.inputGroup}>
                        <label className={classes.label}>Secure Password</label>
                        <div className={classes.inputWrapper}>
                            <Lock className={classes.inputIcon} size={18} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className={`${classes.input} ${error ? classes.inputError : ''}`}
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <AnimatePresence>
                        {error && (
                            <motion.div
                                className={classes.errorBox}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                            >
                                <AlertCircle size={16} />
                                <span>{error}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        type="submit"
                        className={classes.mainSubmitBtn}
                        disabled={isLoading || !username || !password}
                    >
                        {isLoading ? (
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                                <Loader2 className={classes.spin} size={20} /> Authenticating...
                            </span>
                        ) : (
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                                Access Portal <ArrowRight size={18} />
                            </span>
                        )}
                    </button>
                </form>

                <div className={classes.cardFooter}>
                    <div className={classes.securityBadge}>
                        <ShieldCheck size={14} /> Encrypted Session
                    </div>
                    <p>Federal Dairy Management System &copy; 2026</p>
                </div>
            </motion.div>
        </div>
    );
};

export default UnifiedLogin;
