import Link from "next/link";

function Footer() {
    return ( 
        <>
        <section id="footer">
        <div className="gap"></div>
        <div className="container">
          <div className="footer_content">
            <div className="row">
              <div className=" col-md-4 col-lg-4">
                <div className="logo_social">
                  <picture>
                  <img src="images/logo/light_logo.svg" alt=""/>
                  </picture>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut ac nisl, id pellentesque. Elit quis a eget pellentesque etiam.</p>
                  <div className="social_btns">
                    <Link href="">
                      <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22" cy="22.0646" r="21.5" stroke="white"/>
                        <path d="M17.92 30.9414C19.6091 30.952 21.2836 30.6272 22.8462 29.9857C24.4088 29.3442 25.8285 28.3988 27.0229 27.2043C28.2174 26.0099 29.1627 24.5902 29.8043 23.0276C30.4458 21.465 30.7706 19.7905 30.76 18.1014V17.5114C31.6356 16.8699 32.3935 16.0816 33 15.1814C32.1755 15.542 31.3031 15.7812 30.41 15.8914C31.3569 15.3272 32.0674 14.4391 32.41 13.3914C31.5275 13.9208 30.5598 14.293 29.55 14.4914C28.8699 13.7668 27.97 13.2865 26.9895 13.1248C26.0089 12.9631 25.0024 13.1291 24.1257 13.5971C23.249 14.065 22.551 14.8089 22.1396 15.7135C21.7282 16.6181 21.6264 17.6331 21.85 18.6014C20.056 18.5134 18.3007 18.0484 16.6984 17.2369C15.096 16.4254 13.6825 15.2855 12.55 13.8914C11.9789 14.8826 11.8058 16.0537 12.0658 17.1677C12.3257 18.2817 12.9992 19.2553 13.95 19.8914C13.2486 19.8644 12.5635 19.6725 11.95 19.3314V19.3814C11.9438 20.4172 12.2927 21.4239 12.9387 22.2337C13.5847 23.0434 14.4887 23.6073 15.5 23.8314C14.8476 24.0069 14.1643 24.0342 13.5 23.9114C13.7928 24.7948 14.3517 25.566 15.1 26.1192C15.8484 26.6724 16.7496 26.9806 17.68 27.0014C16.0892 28.2819 14.1121 28.9868 12.07 29.0014C11.712 28.991 11.3547 28.961 11 28.9114C13.067 30.2283 15.4692 30.9226 17.92 30.9114" fill="white"/>
                        </svg>
                    </Link>


                    <Link href="" target="_blank" >
                      <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.065 31.0617V22.8657H25.83L26.241 19.6567H23.065V17.6127C23.065 16.6867 23.323 16.0527 24.652 16.0527H26.336V13.1917C25.5166 13.1039 24.693 13.0615 23.869 13.0647C21.425 13.0647 19.747 14.5567 19.747 17.2957V19.6507H17V22.8597H19.753V31.0617H23.065Z" fill="white"/>
                        <circle cx="22" cy="22.0646" r="21.5" stroke="white"/>
                        </svg>
                    </Link>


                    <Link href="" target="_blank" >
                      <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22" cy="22.0646" r="21.5" stroke="white"/>
                        <path d="M23 31.0646H19V19.0646H23V21.0646C23.4211 20.5288 23.9555 20.0929 24.565 19.7881C25.1744 19.4833 25.8438 19.3172 26.525 19.3016C27.7164 19.3082 28.8565 19.787 29.6954 20.633C30.5343 21.479 31.0035 22.6232 31 23.8146V31.0646H27V24.3146C26.9226 23.7741 26.6527 23.2798 26.2398 22.9227C25.8269 22.5655 25.2989 22.3694 24.753 22.3706C24.5087 22.3783 24.2684 22.4353 24.0466 22.5382C23.8249 22.641 23.6262 22.7876 23.4624 22.9692C23.2987 23.1507 23.1734 23.3635 23.0939 23.5947C23.0144 23.8259 22.9825 24.0707 23 24.3146V31.0646ZM17 31.0646H13V19.0646H17V31.0646ZM15 17.0646C14.4696 17.0646 13.9609 16.8539 13.5858 16.4788C13.2107 16.1037 13 15.595 13 15.0646C13 14.5341 13.2107 14.0254 13.5858 13.6504C13.9609 13.2753 14.4696 13.0646 15 13.0646C15.5304 13.0646 16.0391 13.2753 16.4142 13.6504C16.7893 14.0254 17 14.5341 17 15.0646C17 15.595 16.7893 16.1037 16.4142 16.4788C16.0391 16.8539 15.5304 17.0646 15 17.0646Z" fill="white"/>
                        </svg>
                    </Link>


                  </div>
                </div>
              </div>


              <div className="col-md-4  col-lg-3 offset-lg-1 d-none d-md-block">
                <h4 className="footer_heading heading_4">Service</h4>
                <div className="useful_links">
                  <ul>
                    <li><Link href="">IT Design</Link></li>
                    <li><Link href="">IT Management</Link></li>
                    <li><Link href="">Data Security</Link></li>
                    <li><Link href="">Infrastructure Plan</Link></li>
                    <li><Link href="">Firewall Advancement</Link></li>
                    <li><Link href="">Desktop Computing</Link></li>
                  </ul>
                </div>
              </div>





              <div className="col-md-4 col-lg-3 offset-lg-1 d-none d-md-block">
                <h4 className="footer_heading heading_4">COMPANY</h4>
                <div className="useful_links">
                  <ul>
                    <li><a href="pages/about_us.html">About Us</a></li>
                    <li><a href="">Privacy Notice</a></li>
                  </ul>
                </div>

                <div className="useful_links">
                  <h4 className="footer_heading heading_4">Contact Us</h4>

                  <ul>
                    <li><a href="tel:+009966789000">+009966789000</a></li>
                    <li><a href="mailto:companyemail@yahoo.com" style={{textTransform:'lowercase'}} >companyemail@yahoo.com</a></li>
                  </ul>
                </div>
              </div>

      

      <aside id="mob_footer_part" className="d-block d-md-none">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h4 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            SERVICE
              </button>
            </h4>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="useful_links">
                  <ul>
                    <li><Link href="">IT Design</Link></li>
                    <li><Link href="">IT Management</Link></li>
                    <li><Link href="">Data Security</Link></li>
                    <li><Link href="">Infrastructure Plan</Link></li>
                    <li><Link href="">Firewall Advancement</Link></li>
                    <li><Link href="">Desktop Computing</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h4 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                COMPANY
              </button>
            </h4>
            <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="useful_links">
                  <ul>
                    <li><Link href="">About us</Link></li>
                    <li><Link href="">Privacy notice</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

                    
      <div className="useful_links text-center contact">
        <h4 className="footer_heading heading_4">Contact Us</h4>

        <ul>
          <li><Link href="tel:+009966789000">+009966789000</Link></li>
          <li><Link href="mailto:companyemail@yahoo.com" style={{textTransform:'lowercase'}} >companyemail@yahoo.com</Link></li>
        </ul>
      </div>

      </aside>





              <div className="gap"></div>
              <div className="copy_write_text text-center">
                <p>©2022 Global Technology Group Limited. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
     );
}

export default Footer;