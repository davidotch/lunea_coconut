import { motion as m } from 'framer-motion'

const transition = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            <m.div
                className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0, 1, 0.36, 1] }}
            />
            <m.div
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0, 1, 0.36, 1] }}
            />
        </>
    )
}

export default transition
