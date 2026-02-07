import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface CartItem {
    id: number;
    name: string;
    price: string;
    image: string;
    quantity: number;
    category: string;
}

interface CartContextType {
    cart: CartItem[];
    isCartOpen: boolean;
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, delta: number) => void;
    toggleCart: () => void;
    cartTotal: number;
    itemsCount: number;
    notification: string | null;
    clearNotification: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [notification, setNotification] = useState<string | null>(null);

    // Persist cart to localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('milma_cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('milma_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Omit<CartItem, 'quantity'>) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });

        // Show notification
        setNotification(`${product.name} added to cart`);
        setTimeout(() => setNotification(null), 3000);

        // Open cart automatically on add? Maybe not, just toast.
    };

    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: number, delta: number) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const clearNotification = () => setNotification(null);

    const itemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const cartTotal = cart.reduce((acc, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        return acc + (price * item.quantity);
    }, 0);

    return (
        <CartContext.Provider value={{
            cart,
            isCartOpen,
            addToCart,
            removeFromCart,
            updateQuantity,
            toggleCart,
            itemsCount,
            cartTotal,
            notification,
            clearNotification
        }}>
            {children}
            {/* We could place the global toast here if we want */}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
