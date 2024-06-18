import React from 'react'
import './footerCss.css'
import img1 from './photos/amazon_logo.png'

const footer=()=> {
    const capitalizeFirstLetter=(string)=> 
        {
           return string.charAt(0).toUpperCase() + string.slice(1)
        }
  return (
    <>
    
   
    <div className="footer">
    <div className="foot1" style={{width:'100%',height:'4rem',backgroundColor:'#37475A',color:'#FFF',marginTop:'4rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
        {capitalizeFirstLetter("back to top")}

    </div>

    <div className="foot2" style={{height:'100%',width:'100%',backgroundColor:'#232F3E'}}>
    <div className="list" style={{display:'flex',justifyContent:'space-evenly',color:'#FFFFFF',paddingTop:'3rem',paddingBottom:'2rem',borderBottom:'1px solid grey'}}>
        <ul style={{listStyleType:'none'}}> <h5>{capitalizeFirstLetter("get to know us")}</h5>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("About Us")}</a></li>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Careers")}</a></li>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Press Releases")}</a></li>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Amazon Science")}</a></li>
        </ul>
        <ul style={{listStyleType:'none'}}> <h5>{capitalizeFirstLetter("contact with us")}</h5>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Facebook")}</a></li>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Twitter")}</a></li>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Instagram")}</a></li>
        </ul>
        <ul style={{listStyleType:'none'}}> <h5>{capitalizeFirstLetter("make money with us")}</h5>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Sell on Amazon")}</a></li>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Amazon Pay on Merchants")}</a></li>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Protect and Build Your Brand")}</a></li>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Sell under Amazon Accelerator")}</a></li>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Become an Affiliate")}</a></li>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Fulfilment by Amazon")}</a></li>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Advertise Your Products")}</a></li>
        </ul>
        <ul style={{listStyleType:'none'}}> <h5>{capitalizeFirstLetter("let us help you")}</h5>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("COVID-19 and Amazon")}</a></li>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Your Account")}</a></li>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Returns Centre")}</a></li>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("100% Purchase Protection")}</a></li>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Amazon App Download")}</a></li>
            <li style={{paddingTop:'10px'}}><a href="/" style={{textDecoration:'none',color:'#D7D7D7'}}>{capitalizeFirstLetter("Help")}</a></li>
        </ul>
        
    </div>

    <div className="region" style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'20px'}}>
        <img  className='mx-4' src={img1} alt="img1" style={{height: '60px',width: '100px'}}/>
        <div className="btn-group">
            <button className="btn btn-transparent btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#D7D7D7',border:'1px solid #D7D7D7'}}>
                {capitalizeFirstLetter("english")}
            </button>
            <ul className="dropdown-menu" style={{textAlign:'center'}}>
                <li><a href="/" style={{textDecoration:'none',color:'black'}}>{capitalizeFirstLetter("hindi")}</a></li>
                <li><a href="/" style={{textDecoration:'none',color:'black'}}>{capitalizeFirstLetter("tamil")}</a></li>
                <li><a href="/" style={{textDecoration:'none',color:'black'}}>{capitalizeFirstLetter("russian")}</a></li>
                <li><a href="/" style={{textDecoration:'none',color:'black'}}>{capitalizeFirstLetter("telegu")}</a></li>
                <li><a href="/" style={{textDecoration:'none',color:'black'}}>{capitalizeFirstLetter("french")}</a></li>
            </ul>
            </div>
            <div className="btn-group mx-3">
            <button className="btn btn-transparent btn-sm" type="button" style={{padding:'5px 20px 5px 20px',color:'#D7D7D7',border:'1px solid #D7D7D7'}}>
                India
            </button>
            
        </div>
    </div>

            <div className="last" style={{height:'100%',width:'100%',backgroundColor:'#131A22'}}>
                <div className="container">
                        <div className="row" style={{paddingTop:'2rem'}}>
                            <div className="col-md-3">
                                <ul><a href="/" style={{textDecoration:'none',color:'white',fontSize:'12px',fontWeight:'bold'}}>{capitalizeFirstLetter("abebooks")}
                                <br />
                                </a>
                                    <p style={{textDecoration:'none',color:'#bababa',fontSize:'10px',width:'60px',fontWeight:'500'}}>{capitalizeFirstLetter("books arts & collection")}</p>
                                    
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul><a href="/" style={{textDecoration:'none',color:'white',fontSize:'12px',fontWeight:'bold'}}>{capitalizeFirstLetter("amazon web service")}
                                <br />
                                </a>
                                    <p style={{textDecoration:'none',color:'#bababa',fontSize:'10px',width:'150px',fontWeight:'500'}}>{capitalizeFirstLetter("Scalable Cloud Computing Services")}</p>
                                    
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul><a href="/" style={{textDecoration:'none',color:'white',fontSize:'12px',fontWeight:'bold'}}>{capitalizeFirstLetter("Audible")}
                                <br />
                                </a>
                                    <p style={{textDecoration:'none',color:'#bababa',fontSize:'10px',width:'80px',fontWeight:'500'}}>{capitalizeFirstLetter("download audio books")}</p>
                                    
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul><a href="/" style={{textDecoration:'none',color:'white',fontSize:'12px',fontWeight:'bold'}}>{capitalizeFirstLetter("shopbop")}
                                <br />
                                </a>
                                    <p style={{textDecoration:'none',color:'#bababa',fontSize:'10px',width:'100px',fontWeight:'500'}}>{capitalizeFirstLetter("designer fashion brands")}</p>
                                    
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul><a href="/" style={{textDecoration:'none',color:'white',fontSize:'12px',fontWeight:'bold'}}>{capitalizeFirstLetter("amazon buisness")}
                                <br />
                                </a>
                                    <p style={{textDecoration:'none',color:'#bababa',fontSize:'10px',width:'100px',fontWeight:'500'}}>{capitalizeFirstLetter("everything for your buisness")}</p>
                                    
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul><a href="/" style={{textDecoration:'none',color:'white',fontSize:'12px',fontWeight:'bold'}}>{capitalizeFirstLetter("prime now")}
                                <br />
                                </a>
                                    <p style={{textDecoration:'none',color:'#bababa',fontSize:'10px',width:'100px',fontWeight:'500'}}>{capitalizeFirstLetter("2-hour delivery on everyday items")}</p>
                                    
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul><a href="/" style={{textDecoration:'none',color:'white',fontSize:'12px',fontWeight:'bold'}}>{capitalizeFirstLetter("IMDB")}
                                <br />
                                </a>
                                    <p style={{textDecoration:'none',color:'#bababa',fontSize:'10px',width:'60px',fontWeight:'500'}}>{capitalizeFirstLetter("movies tv & celebrites")}</p>
                                    
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul><a href="/" style={{textDecoration:'none',color:'white',fontSize:'12px',fontWeight:'bold'}}>{capitalizeFirstLetter("amazon prime music")}
                                <br />
                                </a>
                                    <p style={{textDecoration:'none',color:'#bababa',fontSize:'10px',width:'200px',fontWeight:'500'}}>{capitalizeFirstLetter("100 millions songs,ad-free over 15 millions podcast episode")}</p>
                                    
                                </ul>
                            </div>
                        </div>

                </div>
                        <div className="terms" style={{paddingBottom:'2rem'}}>
                            <div className="conditions" style={{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'2rem'}}>
                                <a className='mx-3' href="/"style={{textDecoration:'none',color:'#DDD',fontSize:'14px'}}>{capitalizeFirstLetter("condition of use & sale")}</a>
                                <a className='mx-3' href="/"style={{textDecoration:'none',color:'#DDD',fontSize:'14px'}}>{capitalizeFirstLetter("privacy policy")}</a>
                                <a className='mx-3' href="/"style={{textDecoration:'none',color:'#DDD',fontSize:'14px'}}>{capitalizeFirstLetter("intrest-based Ads")}</a>
                                </div>
                            <p style={{color:'#DDD',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'14px'}}>
                            <i className="fa-solid fa-c mx-2"></i>
                            1996-2024, Amazon.com, Inc. or its affiliates</p>
                            
                        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default footer