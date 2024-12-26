import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from "@fortawesome/free-solid-svg-icons"

import Styles from './index.module.css'

const Menu = () => {
  return (
    <div className={Styles.menuContainer}>
      <div className={Styles.iconWrapper}>
        <FontAwesomeIcon icon={faPencil} className={Styles.icon} />
      </div>

      <div className={Styles.iconWrapper}>
        <FontAwesomeIcon icon={faEraser} className={Styles.icon} />
      </div>

      <div className={Styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateLeft} className={Styles.icon} />
      </div>


      <div className={Styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateRight} className={Styles.icon} />
      </div>


      <div className={Styles.iconWrapper}>
        <FontAwesomeIcon icon={faFileArrowDown} className={Styles.icon} />
      </div>
    </div>
  )
}

export default Menu