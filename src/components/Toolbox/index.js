import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'

import { COLORS, MENU_ITEMS } from '@/constants'
import styles from './index.module.css'
import { changeBrushSize, changeColor } from '@/slice/toolBoxSlice';
import { socket } from '@/socket';

const Toolbox = () => {
  const dispatch = useDispatch();

  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);
  const showPencilToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption = activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.ERASER;

  const updateColor = (newColor) => {
    dispatch(changeColor({ item: activeMenuItem, color: newColor }))
    socket.emit('changeConfig', { color: newColor, size });
  }

  const updateBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }))
    socket.emit('changeConfig', { color, size: e.target.value });
  }

  return (
    <div className={styles.toolboxContainer}>
      {
        showPencilToolOption &&

        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>
            Stroke color
          </h4>

          <div className={styles.itemContainer}>
            {/* This active is not working hence added other fix below */}
            {/* <div className={cx(styles.colorBox, { [styles.active]: color === COLORS.BLACK })} style={{ backgroundColor: COLORS.BLACK }} onClick={() => updateColor(COLORS.BLACK)} /> */}

            {/* Added fix for active here  */}
            <div className={color === COLORS.BLACK ? styles.colorBoxActive : styles.colorBox} style={{ backgroundColor: COLORS.BLACK }} onClick={() => updateColor(COLORS.BLACK)} />
            <div className={color === COLORS.RED ? styles.colorBoxActive : styles.colorBox} style={{ backgroundColor: COLORS.RED }} onClick={() => updateColor(COLORS.RED)} />
            <div className={color === COLORS.GREEN ? styles.colorBoxActive : styles.colorBox} style={{ backgroundColor: COLORS.GREEN }} onClick={() => updateColor(COLORS.GREEN)} />
            <div className={color === COLORS.BLUE ? styles.colorBoxActive : styles.colorBox} style={{ backgroundColor: COLORS.BLUE }} onClick={() => updateColor(COLORS.BLUE)} />
            <div className={color === COLORS.YELLOW ? styles.colorBoxActive : styles.colorBox} style={{ backgroundColor: COLORS.YELLOW }} onClick={() => updateColor(COLORS.YELLOW)} />
            <div className={color === COLORS.ORANGE ? styles.colorBoxActive : styles.colorBox} style={{ backgroundColor: COLORS.ORANGE }} onClick={() => updateColor(COLORS.ORANGE)} />
          </div>
        </div>
      }

      {
        showBrushToolOption &&

        <div className={styles.toolItem}>
          <div className={styles.toolText}>Brush Size</div>

          <div className={styles.itemContainer}>
            <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} value={size} />
          </div>
        </div>
      }
    </div>
  )
}

export default Toolbox