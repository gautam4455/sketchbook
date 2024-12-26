import { COLORS } from '@/constants'
import Styles from './index.module.css'

const Toolbox = () => {
  const updateBrushSize = () => {

  }

  return (
    <div className={Styles.toolboxContainer}>
      <div className={Styles.toolItem}>
        <h4 className={Styles.toolText}>
          Stroke color
        </h4>

        <div className={Styles.itemContainer}>
          <div className={Styles.colorBox} style={{ backgroundColor: COLORS.BLACK }} />
          <div className={Styles.colorBox} style={{ backgroundColor: COLORS.RED }} />
          <div className={Styles.colorBox} style={{ backgroundColor: COLORS.GREEN }} />
          <div className={Styles.colorBox} style={{ backgroundColor: COLORS.BLUE }} />
          <div className={Styles.colorBox} style={{ backgroundColor: COLORS.YELLOW }} />
          <div className={Styles.colorBox} style={{ backgroundColor: COLORS.ORANGE }} />
        </div>
      </div>

      <div className={Styles.toolItem}>
        <div className={Styles.toolText}>Brush Size</div>

        <div className={Styles.itemContainer}>
          <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} />
        </div>
      </div>
    </div>
  )
}

export default Toolbox