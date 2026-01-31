"use client";

/* "use client";

import { cn } from "../lib/utils";

import React, {
    createContext,
    useState,
    useContext,
    useRef,
    useEffect,
    useCallback,
} from "react";

const MouseEnterContext = createContext<
    [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
    children,
    className,
    containerClassName,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const { left, top, width, height } =
            containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseEnter = () => {
        setIsMouseEntered(true);
    };

    const handleMouseLeave = () => {
        if (!containerRef.current) return;
        setIsMouseEntered(false);
        containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <div
                className={cn(
                    "py-20 max-w-lg w-lg flex items-center justify-center",
                    containerClassName
                )}
                style={{
                    perspective: "1000px",
                }}
            >
                <div
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                        "flex items-center justify-center relative transition-all duration-200 ease-linear",
                        className
                    )}
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                >
                    {children}
                </div>
            </div>
        </MouseEnterContext.Provider>
    );
};

export const CardBody = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
                className
            )}
        >
            {children}
        </div>
    );
};

export const CardItem = ({
    as: Tag = "div",
    children,
    className,
    heading,
    text,
    textButton,
    imagen,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    ...rest
}: {
    as?: React.ElementType;
    children?: React.ReactNode;
    className?: string;
    heading?: string;
    text?: string;
    textButton?: string;
    imagen?: string;
    translateX?: number | string;
    translateY?: number | string;
    translateZ?: number | string;
    rotateX?: number | string;
    rotateY?: number | string;
    rotateZ?: number | string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isMouseEntered] = useMouseEnter();

    const handleAnimations = useCallback(() => {
        if (!ref.current) return;
        if (isMouseEntered) {
            ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
        } else {
            ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
        }
    }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

    useEffect(() => {
        handleAnimations();
    }, [handleAnimations]);

    // Renderizar contenido basado en las props
    const renderContent = () => {
        if (imagen) {
            return <img src={imagen} alt="card" className="w-full h-full object-cover rounded-xl" />;
        }
        if (heading) return heading;
        if (text) return text;
        if (textButton) return textButton;
        return children;
    };

    return (
        <Tag
            ref={ref}
            className={cn("w-fit transition duration-200 ease-linear", className)}
            {...rest}
        >
            {renderContent()}  
        </Tag>
    );
};

export const useMouseEnter = () => {
    const context = useContext(MouseEnterContext);
    if (context === undefined) {
        throw new Error("useMouseEnter must be used within a MouseEnterProvider");
    }
    return context;
}; */
"use client";

import React, {
    createContext,
    useState,
    useContext,
    useRef,
    useEffect,
    useCallback,
} from "react";

type MouseEnterContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined;

const MouseEnterContext = createContext<MouseEnterContextType>(undefined);

// --- Contenedor Principal ---
export const CardContainer = ({
    children,
    className,
    containerClassName,
    style,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    style?: React.CSSProperties;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const { left, top, width, height } =
            containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseEnter = () => {
        setIsMouseEntered(true);
    };

    const handleMouseLeave = () => {
        if (!containerRef.current) return;
        setIsMouseEntered(false);
        containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <div
                className={containerClassName}
                style={{
                    perspective: "1000px",
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                    maxWidth: "32rem",
                    width: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ...style,
                }}
            >
                <div
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={className}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        transition: "all 200ms linear",
                        transformStyle: "preserve-3d",
                    }}
                >
                    {children}
                </div>
            </div>
        </MouseEnterContext.Provider>
    );
};

// --- Cuerpo de la Card ---
export const CardBody = ({
    children,
    className,
    style,
}: {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}) => {
    return (
        <div
            className={className}
            style={{
                height: "auto",
                width: "100%",
                position: "relative",
                borderRadius: "0.75rem",
                padding: "0",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                gap: "2rem",
                display: "flex",
                flexDirection: "column",
                transformStyle: "preserve-3d",
                ...style,
            }}
        >
            {children}
        </div>
    );
};

// --- Ítems con efecto 3D ---
export const CardItem = ({
    as: Tag = "div",
    children,
    className,
    heading,
    text,
    textButton,
    imagen, 
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    style,
    ...rest
}: {
    as?: React.ElementType;
    children?: React.ReactNode;
    className?: string;
    heading?: string;
    text?: string;
    textButton?: string;
    imagen?: { src: string; alt?: string } | string; 
    translateX?: number | string;
    translateY?: number | string;
    translateZ?: number | string;
    rotateX?: number | string;
    rotateY?: number | string;
    rotateZ?: number | string;
    style?: React.CSSProperties;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isMouseEntered] = useMouseEnter();

    const handleAnimations = useCallback(() => {
        if (!ref.current) return;
        const transformValue = isMouseEntered
            ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
            : `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
        
        ref.current.style.transform = transformValue;
    }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

    useEffect(() => {
        handleAnimations();
    }, [handleAnimations]);

    const getImageSource = () => {
        if (!imagen) return null;
        if (typeof imagen === 'string') return imagen;
        return imagen.src;
    };

    const imgSrc = getImageSource();

    return (
        <Tag
            ref={ref}
            className={className}
            style={{
                width: "fit-content",
                transition: "transform 200ms linear",
                ...style,
            }}
            {...rest}
        >
            {/* 🏎️ El slider irá aquí si pasamos children */}
            {children}

            {/* Solo mostramos la imagen fija si NO hay un slider (children) */}
            {imgSrc && !children && (
                <img 
                    src={imgSrc} 
                    alt={typeof imagen === 'object' ? imagen.alt : "card image"} 
                    style={{
                        width: "100%",
                        display: "block",
                        borderRadius: "0.75rem",
                        marginBottom: "1rem"
                    }}
                />
            )}

            {heading && <h3>{heading}</h3>}
            {text && <p>{text}</p>}
            {textButton && <button>{textButton}</button>}
        </Tag>
    );
};

// --- Hook Interno ---
export const useMouseEnter = () => {
    const context = useContext(MouseEnterContext);
    if (context === undefined) {
        throw new Error("useMouseEnter must be used within a MouseEnterProvider");
    }
    return context;
};