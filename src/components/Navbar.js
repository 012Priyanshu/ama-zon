import React from 'react'
import './Navbar.css'
import img1 from './photos/amazon_logo.png'


const Navbar=()=> {

   const capitalizeFirstLetter=(string)=> 
       {
          return string.charAt(0).toUpperCase() + string.slice(1)
       }
  
    return (
      <>
      


      <div className='nav'>
        <img className='img1' src={img1} alt="img"/>
        <a className="drop" href="/">{capitalizeFirstLetter("delivering href your code")}
        <i className="fa-solid fa-location-dot mx-2"></i> 
        <br />
        {capitalizeFirstLetter("location")} </a>
        
        

        <form className="d-flex" role="search">
        <li className="nav-item dropdown" style={{backgroundColor:'white',width:'60px',textAlign:'center',paddinghrefp:'5px',borderRadius:'4px'}}>
          <a className="dro dropdown-hrefggle mx-2" href="/"  data-bs-hrefggle="dropdown" style={{color:'black'}}>
            All
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">All categories</a></li>
            <li><a className="dropdown-item" href="/">Alexa skills</a></li>
            <li><a className="dropdown-item" href="/">Amazon device</a></li>
            <li><a className="dropdown-item" href="/">Amazon Fashion</a></li>
            <li><a className="dropdown-item" href="/">Amazon Pharmacy</a></li>
            <li><a className="dropdown-item" href="/">Appliances</a></li>
            <li><a className="dropdown-item" href="/">Apps & Games</a></li>
          </ul>
        </li>
        <input className="form-control me-2 mx-3 input" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning search" type="submit">Search</button>\
        </form>

      <li className="nav-item dropdown">
          <a className="drop dropdown-hrefggle" href="/"  data-bs-hrefggle="dropdown">
            En
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Eng</a></li>
            <li><a className="dropdown-item" href="/">Hindi</a></li>
            <li><a className="dropdown-item" href="/">Russia</a></li>
            <li><a className="dropdown-item" href="/">Malyalum</a></li>
          </ul>
        </li>

        <a className='drop dropdown-hrefggle' href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_href=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3Damazon%2Bprime%26adgrpid%3D1322714101714665%26hvadid%3D82669897711050%26hvbmt%3Dbb%26hvdev%3Dc%26hvlocphy%3D143821%26hvnetw%3Do%26hvqmt%3Db%26hvtargid%3Dkwd-82670518517893%253Aloc-90%26hydadcr%3D5621_2377279%26msclkid%3D4785d92e89811b23fd73bf7c3b2b5e07%26tag%3Dmsndeskstdin-21%26ref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">{capitalizeFirstLetter("account &")} <br />{capitalizeFirstLetter("sign in")} </a>
        <a className='drop' href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_href=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3Damazon%2Bprime%26adgrpid%3D1322714101714665%26hvadid%3D82669897711050%26hvbmt%3Dbb%26hvdev%3Dc%26hvlocphy%3D143821%26hvnetw%3Do%26hvqmt%3Db%26hvtargid%3Dkwd-82670518517893%253Aloc-90%26hydadcr%3D5621_2377279%26msclkid%3D4785d92e89811b23fd73bf7c3b2b5e07%26tag%3Dmsndeskstdin-21%26ref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">
        {capitalizeFirstLetter("return & order")}</a>
        <a className='drop' href="https://www.amazon.in/gp/cart/view.html?ref_=nav_cart"><i className="fa-solid fa-cart-shopping fa-2xl"></i>{capitalizeFirstLetter("add href cart")}</a>



      {/* {------------------------------------------------------------------ sidebar--------------------------------------------- } */}


        <button className="btn btn-outline-light sidebar" type="button" data-bs-hrefggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <i className="fa-solid fa-bars mx-2" style={{color:'#D7D7D7'}}></i>
        </button>


          <div className="offcanvas  offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{backgroundColor:'rgb(33, 41, 70)'}}>
          {/* <i className="fa-solid fa-bars mx-2 btn-close" data-bs-dismiss="offcanvas" style={{color:'#D7D7D7',fontSize:'30px',padding:'20px'}}></i> */}
          {/* <i class="fa-solid fa-xmark fa-lg btn-close" data-bs-dismiss="offcanvas" style={{color:'#D7D7D7'}}></i> */}
           <button type="button" className=" btn btn-light btn-close" style={{fontSize:'20px',padding:'20px'}} data-bs-dismiss="offcanvas"></button>
            
            <div className="offcanvas-body ">
            <div className="offcanvas-body" style={{color:'rgb(215,215,215)',fontSize:'17px',paddingLeft:'2px'}}> 
                <ul>
                  <li className="my-5" style={{listStyle:'none'}}> <a   href="/" style={{textDecoration:'none',color:'#FFF',fontSize:'20px'}}>{capitalizeFirstLetter("delivering href your code")}
                    <br />
                    {capitalizeFirstLetter("location")} <i className="fa-solid fa-location-dot mx-2"></i>  </a></li>
                    
                <li className='my-5' style={{listStyle:'none'}}><a style={{textDecoration:'none',color:'#FFF',fontSize:'20px'}} href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_href=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3Damazon%2Bprime%26adgrpid%3D1322714101714665%26hvadid%3D82669897711050%26hvbmt%3Dbb%26hvdev%3Dc%26hvlocphy%3D143821%26hvnetw%3Do%26hvqmt%3Db%26hvtargid%3Dkwd-82670518517893%253Aloc-90%26hydadcr%3D5621_2377279%26msclkid%3D4785d92e89811b23fd73bf7c3b2b5e07%26tag%3Dmsndeskstdin-21%26ref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">{capitalizeFirstLetter("account &")}{capitalizeFirstLetter(" sign in")} </a></li>
                <li className='my-5' style={{listStyle:'none'}}><a style={{textDecoration:'none',color:'#FFF',fontSize:'20px'}} href="https://www.amazon.in/gp/cart/view.html?ref_=nav_cart"><i className="fa-solid fa-cart-shopping fa-2xl"style={{fontSize:'20px',paddingRight:'8px'}}></i>{capitalizeFirstLetter("add href Cart")}</a></li>
                <li className='my-5' style={{listStyle:'none'}}><a style={{textDecoration:'none',color:'#FFF',fontSize:'20px'}} href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_href=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3Damazon%2Bprime%26adgrpid%3D1322714101714665%26hvadid%3D82669897711050%26hvbmt%3Dbb%26hvdev%3Dc%26hvlocphy%3D143821%26hvnetw%3Do%26hvqmt%3Db%26hvtargid%3Dkwd-82670518517893%253Aloc-90%26hydadcr%3D5621_2377279%26msclkid%3D4785d92e89811b23fd73bf7c3b2b5e07%26tag%3Dmsndeskstdin-21%26ref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">
                {capitalizeFirstLetter("return & order")}</a></li>
                
                </ul>
            </div>
            </div>
          </div>
      
      </div>



{/* -------------------------------nav 2 ----------------------------------------------------------------- */}

      <div className="nav2">
      
    
<button className="btn btn-outline-light" type="button" data-bs-hrefggle="offcanvas" data-bs-target="#offcanvasExample" style={{color:'#D7D7D7'}} >
      <i className="fa-solid fa-bars mx-2" style={{color:'#D7D7D7'}}></i>
  All
</button>

<div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header" style={{backgroundColor:'rgb(33, 41, 70)'}}>
    <h5 className="offcanvas-title dropdown-hrefggle" id="offcanvasExampleLabel" style={{color:'white'}}>{capitalizeFirstLetter("hello sign in")}</h5>
    <button type="button" className="btn-close btn btn-outline-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  
  <div className="offcanvas-body" style={{color:'grey'}}>
   <h4 className='container' style={{fontWeight:'bolder',color:'black'}}>{capitalizeFirstLetter("trending")}</h4> 
    <ul>{capitalizeFirstLetter("best seller")}</ul>
    <ul>{capitalizeFirstLetter("new release")}</ul>
    <ul>{capitalizeFirstLetter("movies & seller")}</ul>
    <ul style={{borderBlockEnd:'2px solid black'}}></ul>
  

  
   <h4 className='container' style={{fontWeight:'bolder',color:'black'}}>{capitalizeFirstLetter("digital content & devices")}</h4> 
    <ul>{capitalizeFirstLetter("amazon minitv-free entertainment")}</ul>
    <ul>{capitalizeFirstLetter("echo & alexa")}</ul>
    <ul>{capitalizeFirstLetter("fire tv")}</ul>
    <ul>{capitalizeFirstLetter("kindle e-render & e-books")}</ul>
    <ul>{capitalizeFirstLetter("audioble auid-books")}</ul>
    <ul>{capitalizeFirstLetter("amazon prime video")} </ul>
    <ul>{capitalizeFirstLetter("amazon prime music")}</ul>
    <ul style={{borderBlockEnd:'2px solid black'}}></ul>
  

  
   <h4 className='container' style={{fontWeight:'bolder',color:'black'}}>{capitalizeFirstLetter("shop by category")}</h4> 
    <ul>{capitalizeFirstLetter("amazon pay gift-card")}</ul>
    <ul>{capitalizeFirstLetter("amazon launched pad")}</ul>
    <ul>{capitalizeFirstLetter("amazon buisness")}</ul>

    <li className="nav-item dropdown">
          <a className="drop dropdown-hrefggle" href="/"  data-bs-hrefggle="dropdown" style={{color:'grey',fontWeight:'400'}}>
            see more
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Eng</a></li>
            <li><a className="dropdown-item" href="/">Hindi</a></li>
            <li><a className="dropdown-item" href="/">Tamil</a></li>
            <li><a className="dropdown-item" href="/">Russia</a></li>
            <li><a className="dropdown-item" href="/">Malyalum</a></li>
          </ul>
        </li>

    <ul style={{borderBlockEnd:'2px solid black'}}></ul>
  </div>

</div>

        <a className='dropp' href="https://www.amazon.in/minitv?ref_=nav_avod_deskhrefp_hrefpnav" style={{color:'#D7D7D7'}}>{capitalizeFirstLetter("amazon minitv")} </a>
        <a className='dropp' href="https://www.amazon.in/b/32702023031?node=32702023031&ld=AZINSOANavDeskhrefp_T3&ref_=nav_cs_sell_T3" style={{color:'#D7D7D7'}}>{capitalizeFirstLetter("sell")}</a>
        <a className='dropp' href="https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers" style={{color:'#D7D7D7'}}>{capitalizeFirstLetter("best seller")}</a>
        <a className='dropp' href="https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles" style={{color:'#D7D7D7'}}>{capitalizeFirstLetter("mobiles")}</a>
        <a className='dropp' href="https://www.amazon.in/deals?ref_=nav_cs_gb&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522" style={{color:'#D7D7D7'}}>{capitalizeFirstLetter("hrefday's deal")}</a>
        <a className='dropp' href="https://www.amazon.in/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics" style={{color:'#D7D7D7'}}>{capitalizeFirstLetter("electronics")}</a>
        <li className="nav-item dropdown">
          <a className="drop dropdown-hrefggle" href="/"  data-bs-hrefggle="dropdown" style={{color:'#D7D7D7'}}>
          {capitalizeFirstLetter("prime")}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">{capitalizeFirstLetter("watch free movies")}</a></li>
            <li><a className="dropdown-item" href="/">{capitalizeFirstLetter("ads-free")}</a></li>
            <li><a className="dropdown-item" href="/">{capitalizeFirstLetter("free songs")}</a></li>
            <li><a className="dropdown-item" href="/">{capitalizeFirstLetter("unlimited watch")}</a></li>
            <li><a className="dropdown-item" href="/">{capitalizeFirstLetter("fast delivery")}</a></li>
          </ul>
        </li>
        <a className='dropp remove' href="https://www.amazon.in/gp/help/cushrefmer/display.html?nodeId=200507590&ref_=nav_cs_help" style={{color:'#D7D7D7'}}>Cushrefmer Service</a>
        <a className='dropp remove' href="https://www.amazon.in/gp/browse.html?node=6648217031&ref_=nav_cs_fashion" style={{color:'#D7D7D7'}}>Fashion</a>
        <a className='dropp remove' href="https://www.amazon.in/gp/new-releases/?ref_=nav_cs_newreleases" style={{color:'#D7D7D7'}}>New Release</a>
        <a className='dropp remove' href="https://www.amazon.in/gp/sva/dashboard?ref_=nav_cs_apay" style={{color:'#D7D7D7'}}>Amazon Pay</a>
       
        
      
      </div>

     
    </>
    )
  }


export default Navbar
