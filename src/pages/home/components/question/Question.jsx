import React,{useState} from 'react'

const Question = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };    
  return (
    <>
        <div className='frequently-asked-questions fadeInUp-scroll visible'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 offset-lg-3'>
                        <div className='frequently-asked-questions-title fadeInUp-scroll visible'>
                            <h3>Sıkça Sorulan Sorular</h3>
                            <p>Aklına Takılan Soruları Cevaplamak için Buradayız!</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                        <div className='col-lg-10 offset-lg-1 col-xl-8 offset-xl-2'>
                            <div className='accordion'>
                                <div className='card fadeInUp-scroll visible'>
                                    <div className={`card-header ${isCollapsed ? 'collapsed' : ''}`} aria-expanded={!isCollapsed} onClick={toggleCollapse}>
                                        <span>Midas'ı Güvenilir Kılan Yasal Sorumlulukları Neler?</span>
                                    </div>
                                    <div className={`collapse ${!isCollapsed ? 'show' : ''}`}>
                                        <div className='card-body'>
                                            <p>Midas Menkul Değerler A.Ş., Sermaye Piyasası Kurulu (SPK) tarafından yetkilendirilen ve denetlenen bir aracı kurum; Midas uygulaması ise Midas Menkul Değerler A.Ş. partnerliğinde hizmet sunan bir yatırım uygulamasıdır. Yani yatırım işlemleri Midas Menkul Değerler A.Ş. tarafından yapılır. Diğer yatırım kuruluşlarında olduğu gibi düzenli olarak denetlenir ve belli regülasyonlar çerçevesinde hareket eder.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>  
    </>
  )
}

export default Question
