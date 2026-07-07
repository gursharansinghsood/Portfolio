
import IconChangeButton from '../ui/IconChangeButton'

const iconThemeList = [
    { className: 'rounded-none' },
    { className: 'rounded-xl' },
    { className: 'rounded-full' }
]

const IconSetting = () => {
    return (
        <div className='flex justify-between items-center'>
            <p className='text-xl font-bold'>App Icon</p>

            <div className='flex gap-2'>
                {iconThemeList.map((item) => (
                    <IconChangeButton item={item} key={item.className} />
                ))}
            </div>
        </div>
    )
}

export default IconSetting