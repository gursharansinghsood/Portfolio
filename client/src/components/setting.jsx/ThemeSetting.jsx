
import ThemeToggleButton from '../ui/ThemeToggleButton'

const ThemeSetting = () => {
  return (
      <div className='flex justify-between items-center'>
          <p className='text-xl font-bold'>Theme</p>
          <ThemeToggleButton />
      </div>
  )
}

export default ThemeSetting