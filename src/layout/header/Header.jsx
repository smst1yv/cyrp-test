import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import '../../style/global.css'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className={`.header-bist ${isOpen ? 'is-open' : ''}` } style={{ background: 'transparent' }}>
        <div className='container'>
          <div className='header-contain'>
            <div className='row'>

              <div className='col-lg-2 pr-lg-0'>
                <div className='header-contain-item item-first'>

                  <div className='header-contain-item-logo'>
                    <a href='/'>
                      <svg xmlns="http://www.w3.org/2000/svg" width={60} viewBox="0 0 512 512" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
                        <path style={{fill:'#ff0000'}} d="M109.292 267.918l159.49-159.321c22.282-22.163 58.821-22.163 81.104 0l12.394 12.395 24.847-24.846-12.395-12.452c-35.945-35.87-95.02-35.87-130.966 0L84.39 243.071l24.903 24.847z" fillRule="nonzero" />
                        <path style={{fill:'#ff0000'}} d="M322.21 161.062l-24.846-24.846-159.547 159.547a57.481 57.481 0 01-40.609 16.815c-31.513 0-57.451-25.938-57.451-57.451A57.483 57.483 0 0156.6 214.49L194.244 76.846 169.398 52 31.754 189.644a92.624 92.624 0 00-27.891 66.235c0 50.796 41.797 92.593 92.593 92.593a92.63 92.63 0 0066.207-27.863L322.21 161.062zm158.811 28.582c-35.962-35.837-95.004-35.837-130.965 0L190.509 349.19l24.846 24.846L374.902 214.49a57.48 57.48 0 0140.58-16.787c31.507 0 57.434 25.916 57.446 57.424a56.615 56.615 0 01-16.98 40.636L318.474 433.407l24.903 24.846L481.021 320.61c35.871-35.944 35.871-95.02 0-130.965z" fillRule="nonzero" />
                        <path style={{fill:'#ff0000'}} d="M403.483 242.336l-159.547 159.49c-22.316 22.243-58.957 22.243-81.273 0l-12.395-12.451-24.846 24.846 12.395 12.451c35.961 35.837 95.003 35.837 130.965 0L428.33 267.07l-24.846-24.733z" fillRule="nonzero" />
                      </svg>
                    </a>
                  </div>

                  <div className='header-contain-item-mobile-button'>
                      <ul>
                        <li>
                          <a href='/login' className='btn btn-text-blue'>Giris Yap</a>
                        </li>
                      </ul>
                  </div>

                  <div className='header-contain-item-mobile-actions'>
                    <ul>
                      <li>
                        <button type='button' onClick={handleButtonClick}>
                          <span></span>
                          <span></span>
                        </button>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              <div className='col-lg-8 pl-lg-0'>
                <div className='header-contain-item item-second'>
                  <div className='header-contain-item-nav desktop-menu'>
                    <ul id='menu-header' className='menu'>
                      <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-12967'><a href='/borsa'>Borsa</a></li>
                      <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-12967'><a href='/grafik'>Canli Borsa</a></li>
                      <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-12967'><a href='/about'>Hakkimizda</a></li>
                      <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-12967'><a href='/contact'>Destek Merkezi</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='col-lg-2 p-control'>
                <div className='header-contain-item-actions'>
                  <ul>
                    <li><Link to='/login' className='btn btn-text-blue'>Giris Yap</Link></li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
