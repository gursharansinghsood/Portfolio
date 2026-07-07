import GlassCard from './GlassCard'
import { dockApps } from '../../services/dockApps'
import AppCard from './AppCard'

const DockAppsCard = () => {
    return (
        <GlassCard className='absolute bottom-5 right-5 left-5 w-fit mx-auto flex justify-center items-center md:gap-10 gap-5 px-5 py-3'>
            {dockApps.map((item) => (
                <AppCard item={item} key={item.link} />
            ))}
        </GlassCard>
    )
}

export default DockAppsCard