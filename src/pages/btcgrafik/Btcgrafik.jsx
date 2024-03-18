import React, { useEffect, useRef, memo,useState } from 'react';
import './style.css'
import styles from './search.module.css'
import { Link } from 'react-router-dom';

const Btcgrafik = () => {
  const container = useRef();

  useEffect(() => {
    if (!container.current) return; // Eğer container.current boşsa, işlemi atla

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
          "height": "100%",
          "symbol": "NASDAQ:AAPL",
          "interval": "W",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "tr",
          "enable_publishing": false,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);

    return () => {
      container.current.innerHTML = '';
    };
  }, []);

  const [selectedOption, setSelectedOption] = useState("Yatirim Yapmak Istediginiz Valyutani Secin");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([
    "BTC", "ETH", "THT", "AMZ", "APL", "SLN", "BNB", "XRP","USDC", "CD", "DGC", "AVE", "TC", "PD", "TR", "CL",
    "PL", "NP", "BTC CASH", "USW", "LTC", "INT COM", "AS",'SOL','IMX','GRT','STX','INJ','OKB','HBAR','XLM','CRO','OP','FTM','AR'
  ]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsDropdownOpen(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchValue)
  );

  const [price, setPrice] = useState('');

  const handlePriceChange = (e) => {
    let newPrice = e.target.value;
    if (newPrice !== '' && (parseInt(newPrice) > 50000 || parseInt(newPrice) < 0)) {
      newPrice = price; // Eğer girilen değer sınır dışında ise, önceki değeri kullan
    }
    setPrice(newPrice);
  };


  return (
    <div className='fulls-diy'>
      <div className='hep' ref={container}>
        <div className="tradingview-widget-container" id="btc-chart">
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
        <span style={{marginBottom:'1rem',fontWeight:'bold'}}>Bakiye:</span> <span style={{marginBottom:'1rem',fontWeight:'bold',color:'green'}}>500$</span>
          <form style={{marginTop:'2rem'}} name="countries" className={styles.form} id="form">
            <div className={styles.fg}>
              <span className={styles.fa}><i className="fa-solid fa-angle-down"></i></span>
              <select name="country" id="country" className="dropdown" style={{ display: 'none' }}>
                <option disabled>Yatirim Yapmak Istediginiz Valyutani Secin</option>
                {options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <div className={styles.dropdown}>
                <div className={styles.drsl} onClick={handleDropdownToggle}>{selectedOption}</div>
                <div className={isDropdownOpen ? styles.drmenOpen : styles.drmen}>
                  <input type="text" placeholder='Ara' value={searchValue} onChange={handleSearchInputChange} className={styles.drsar} />
                  <div className={styles.dmi}>
                    {filteredOptions.map(option => (
                      <div
                        key={option}
                        className={`sele ${option === selectedOption ? "selected" : ""}`}
                        data-value={option}
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </form>
          <form action="">
          <input onChange={handlePriceChange} value={price} className={styles.prce} type="number" name="price" id="" placeholder='Para Miktarini Giriniz Min: 100 , Max: 50000' />
          <a href='/payment' className='btn btn-text-blue'>Alim Yap</a>
          </form>
        </div>
      </section>
    </div>

  );
}

export default memo(Btcgrafik);
