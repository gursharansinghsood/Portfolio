import { useEffect, useState } from 'react'

const Time = ({className=''}) => {
    const [time, SetTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => SetTime(new Date()), 1000)
        return () => clearInterval(interval)
    }, [time])

    return (
        <div className={className}>
            {time.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            })}
        </div>
    )
}

export default Time