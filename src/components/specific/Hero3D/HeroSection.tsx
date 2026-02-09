import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import classes from './HeroSection.module.css';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const totalFrames = 80;
const framePaths = Array.from({ length: totalFrames }, (_, i) => {
    const frameNum = i.toString().padStart(2, '0');
    return `/frames/frame_${frameNum}_delay-0.1s.gif`;
});

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);
    const { t } = useTranslation();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Buttery smooth frame transitions using useSpring
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 120, // Faster catch-up
        damping: 35,    // Enough damping to prevent overshoot but feel controlled
        restDelta: 0.001
    });

    const frameIndex = useTransform(smoothProgress, [0, 1], [0, totalFrames - 1]);

    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        framePaths.forEach((path, index) => {
            const img = new Image();
            img.src = path;
            img.onload = () => {
                loadedCount++;
                setLoadProgress(Math.floor((loadedCount / totalFrames) * 100));
                if (loadedCount === totalFrames) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            img.onerror = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            loadedImages[index] = img;
        });
    }, []);

    const renderFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const activeIndex = Math.floor(index);
        const img = images[Math.max(0, Math.min(totalFrames - 1, activeIndex))];
        if (!img || !img.complete) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        const displayWidth = window.innerWidth;
        const displayHeight = window.innerHeight;

        const dpr = window.devicePixelRatio || 1;
        if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
            canvas.width = displayWidth * dpr;
            canvas.height = displayHeight * dpr;
            ctx.scale(dpr, dpr);
        }

        const imgRatio = img.width / img.height;
        const canvasRatio = displayWidth / displayHeight;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgRatio > canvasRatio) {
            drawHeight = displayHeight;
            drawWidth = displayHeight * imgRatio;
            offsetX = (displayWidth - drawWidth) / 2;
            offsetY = 0;
        } else {
            drawWidth = displayWidth;
            drawHeight = displayWidth / imgRatio;
            offsetX = 0;
            offsetY = (displayHeight - drawHeight) / 2;
        }

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, displayWidth, displayHeight);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }, [images]);

    useMotionValueEvent(frameIndex, "change", (latest) => {
        renderFrame(Math.round(latest));
    });

    useEffect(() => {
        if (isLoaded) {
            renderFrame(Math.round(frameIndex.get()));
            const handleResize = () => renderFrame(Math.round(frameIndex.get()));
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [isLoaded, renderFrame, frameIndex]);

    return (
        <div ref={containerRef} className={classes.container}>
            <div className={classes.stickyWrapper}>
                <canvas ref={canvasRef} className={classes.canvas} />

                {!isLoaded && (
                    <div className={classes.loader}>
                        <div className={classes.spinner}></div>
                        <p>{t('common.loading')} {loadProgress}%</p>
                    </div>
                )}

                <div className={classes.overlay}>
                    <motion.div
                        className={classes.content}
                        style={{
                            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
                            y: useTransform(scrollYProgress, [0, 0.2], [0, -50])
                        }}
                    >
                        <h1 className={classes.title}>{t('hero.title')}</h1>
                        <p className={classes.subtitle}>{t('hero.subtitle')}</p>
                    </motion.div>

                    <motion.div
                        className={classes.scrollHint}
                        style={{
                            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0])
                        }}
                    >
                        <span>{t('hero.scroll')}</span>
                        <ArrowDown size={20} className={classes.bounce} />
                    </motion.div>

                    <motion.div
                        className={classes.finalContent}
                        style={{
                            opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
                            y: useTransform(scrollYProgress, [0.8, 1], [50, 0])
                        }}
                    >
                        <h2>{t('hero.finalTitle')}</h2>
                        <p>{t('hero.finalSubtitle')}</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
