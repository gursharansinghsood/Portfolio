import React from 'react'

const GlassCard = ({ className = '', children, ...props }) => {
    return (
        <div
            className={`${className} backdrop-blur-xs bg-surface/20 border border-border text-text rounded-xl shadow-[0_8px_32px_rgba(15,23,42,0.08)]`}
            {...props}
        >
            {children}
        </div>
    )
}

export default React.memo(GlassCard);