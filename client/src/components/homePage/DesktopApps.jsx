import { desktopApps } from '../../services/desktopApps'
import AppCard from '../cards/AppCard'

const DesktopApps = () => {
    return (
        <div className='max-w-5xl w-full mx-auto grid sm:grid-cols-6 grid-cols-4 gap-10 h-full md:p-10 p-5'>
            {desktopApps.map((item) => (
                <AppCard item={item} key={item.link} />
            ))}
        </div>
    )
}

export default DesktopApps