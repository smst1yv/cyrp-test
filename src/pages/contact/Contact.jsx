import React,{useState} from 'react'
import ReCAPTCHA from "react-google-recaptcha"


const Contact = () => {
    const [verfied,setVerfied] = useState(false)
    function onChange(){
     setVerfied(true)
    }
    return (
        <>
            <section className='additional-support'>
                <div className='container'>
                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <label style={{fontSize:'14px'}} htmlFor="">Ad</label>
                                <input style={{padding:'1.3rem'}} type="text" className="form-control" placeholder="Ad" />
                            </div>
                            <div className="col-lg-6">
                                <label style={{fontSize:'14px'}} htmlFor="">Soyad</label>
                                <input style={{padding:'1.3rem'}} type="text" className="form-control" placeholder="Soyad" />
                            </div>
                            <div className="col-lg-6">
                                <label style={{fontSize:'14px'}} htmlFor="">Email</label>
                                <input style={{padding:'1.3rem'}} type="text" className="form-control" placeholder="test@example.com" />
                            </div>
                            <div className="col-lg-6">
                                <label style={{fontSize:'14px'}} htmlFor="">Numara</label>
                                <input style={{padding:'1.3rem'}} type="text" className="form-control" placeholder="+123 45 67 89" />
                            </div>
                            <div className='col-lg-12'>
                                <ReCAPTCHA sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' onChange={onChange} style={{marginBottom:'20px'}}/>
                                <input  disabled={!verfied} type='submit' name='submit' value='Gonder' className='btn' style={{cursor:'pointer',border:'none',height:'3rem',width:'7rem'}} />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact
