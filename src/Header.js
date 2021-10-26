import { default as circle } from './circle.svg';
import { default as triangle } from './triangle.svg';
import { default as square } from './square.svg';

function Header() {
  return (
    <div className="header-component animate__headShake animate__animated animate__delay-3s">
      <img src={circle} alt="" width="36px" height="36px" />
      <img src={triangle} alt="" width="38px" height="38px" />
      <img src={square} alt="" width="36px" height="36px" />
    </div>
  )
}
export default Header;