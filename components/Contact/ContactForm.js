function ContactForm() {
    return ( 
   
        <>
    <div className="top_page_gap"></div>

    <section className="contact_us">
    <div className="container min_content">
        <div className="row">
            <div className="col-12 col-md-4">
                <div className="contact_left">
                    <h2 className="heading_2">Contact us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut arcu maecenas erat 
                        scelerisque gravida arcu.</p>
                     <a href="">companymail@gmail.com</a>   
                </div>

                <div className="gap"></div>

                <div className="contact_left">
                  <h2 className="heading_2">Support</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut arcu maecenas erat 
                      scelerisque gravida arcu.</p>
                   <a href="">Go to support</a>   
              </div>

            </div>
            <div className="col-12 col-md-8">
              <div className="contact_right">
                <h2 className="heading_2">Get in touch with us</h2>

                <form method="post" action="/">
                  <div className="input-group mb-3">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                        <path d="M12.4028 15.375C14.681 15.375 16.5278 13.5282 16.5278 11.25C16.5278 8.97183 14.681 7.125 12.4028 7.125C10.1247 7.125 8.27783 8.97183 8.27783 11.25C8.27783 13.5282 10.1247 15.375 12.4028 15.375Z" fill="#312E49"/>
                        <path d="M12.4028 2.25C10.4745 2.25 8.58941 2.82183 6.98603 3.89317C5.38265 4.96452 4.13297 6.48726 3.39501 8.26884C2.65706 10.0504 2.46397 12.0108 2.84018 13.9021C3.21639 15.7934 4.14498 17.5307 5.50855 18.8943C6.87211 20.2579 8.60939 21.1865 10.5007 21.5627C12.392 21.9389 14.3524 21.7458 16.134 21.0078C17.9156 20.2699 19.4383 19.0202 20.5097 17.4168C21.581 15.8134 22.1528 13.9284 22.1528 12C22.1479 9.41566 21.1191 6.93859 19.2917 5.11118C17.4642 3.28378 14.9872 2.25496 12.4028 2.25ZM18.5716 17.475C17.9645 16.6041 17.1821 15.8697 16.2747 15.3187C15.2328 16.3169 13.8457 16.8741 12.4028 16.8741C10.96 16.8741 9.57285 16.3169 8.53096 15.3187C7.62353 15.8697 6.84119 16.6041 6.23409 17.475C5.17825 16.286 4.48851 14.8173 4.24786 13.2455C4.00722 11.6737 4.22592 10.0659 4.87767 8.61549C5.52941 7.16509 6.58641 5.93394 7.92146 5.07021C9.25652 4.20647 10.8127 3.74695 12.4028 3.74695C13.9929 3.74695 15.5492 4.20647 16.8842 5.07021C18.2193 5.93394 19.2763 7.16509 19.928 8.61549C20.5797 10.0659 20.7985 11.6737 20.5578 13.2455C20.3172 14.8173 19.6274 16.286 18.5716 17.475Z" fill="#312E49"/>
                        </g>
                      </svg>
                        
                    <input required type="text" className="form-control" placeholder="Your Name" aria-label="Your Name" aria-describedby="basic-addon1"/>
                  </div>



                  <div className="input-group mb-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.5">
                      <path d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM20.25 18H3.75V6.95625L11.4937 14.0531C11.632 14.1796 11.8126 14.2498 12 14.2498C12.1874 14.2498 12.368 14.1796 12.5062 14.0531L20.25 6.95625V18Z" fill="#312E49"/>
                      </g>
                    </svg>
                      
                        
                    <input required type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>





                  <div className="input-group mb-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.5">
                      <path d="M20.8125 14.8492L16.4156 12.9742C16.1888 12.8725 15.9397 12.8303 15.692 12.8516C15.4443 12.8729 15.2061 12.9571 15 13.096L12.6469 14.6617C11.2127 13.9651 10.0516 12.8106 9.34687 11.3804L10.9031 8.99915C11.0412 8.79279 11.1255 8.55521 11.1484 8.308C11.1713 8.06078 11.1321 7.81175 11.0344 7.58353L9.15 3.18665C9.01851 2.88976 8.79586 2.64247 8.51435 2.48064C8.23284 2.31882 7.90711 2.25087 7.58437 2.28665C6.31837 2.4525 5.15566 3.07244 4.31243 4.03121C3.46919 4.98998 3.00281 6.22233 3 7.49915C3 14.9429 9.05625 20.9992 16.5 20.9992C17.7768 20.9963 19.0092 20.53 19.9679 19.6867C20.9267 18.8435 21.5467 17.6808 21.7125 16.4148C21.7483 16.092 21.6803 15.7663 21.5185 15.4848C21.3567 15.2033 21.1094 14.9806 20.8125 14.8492Z" fill="#312E49"/>
                      </g>
                    </svg>
                      
                        
                    <input required type="number" className="form-control" placeholder="Phone number" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>



                  <div className="input-group mb-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.5">
                      <path d="M21 11.2503V19.5003C21 19.8981 20.842 20.2797 20.5607 20.561C20.2794 20.8423 19.8978 21.0003 19.5 21.0003H4.5C4.10218 21.0003 3.72064 20.8423 3.43934 20.561C3.15804 20.2797 3 19.8981 3 19.5003V4.50031C3 4.10249 3.15804 3.72096 3.43934 3.43965C3.72064 3.15835 4.10218 3.00031 4.5 3.00031H12.75C12.9489 3.00031 13.1397 3.07933 13.2803 3.21998C13.421 3.36064 13.5 3.5514 13.5 3.75031C13.5 3.94923 13.421 4.13999 13.2803 4.28064C13.1397 4.42129 12.9489 4.50031 12.75 4.50031H4.5V19.5003H19.5V11.2503C19.5 11.0514 19.579 10.8606 19.7197 10.72C19.8603 10.5793 20.0511 10.5003 20.25 10.5003C20.4489 10.5003 20.6397 10.5793 20.7803 10.72C20.921 10.8606 21 11.0514 21 11.2503V11.2503ZM21.5344 6.53469L12.5344 15.5347C12.3915 15.674 12.1995 15.7514 12 15.7503H9C8.80109 15.7503 8.61032 15.6713 8.46967 15.5306C8.32902 15.39 8.25 15.1992 8.25 15.0003V12.0003C8.24888 11.8008 8.32633 11.6088 8.46563 11.4659L17.4656 2.46594C17.6078 2.3251 17.7999 2.24609 18 2.24609C18.2001 2.24609 18.3922 2.3251 18.5344 2.46594L21.5344 5.46594C21.6752 5.60813 21.7542 5.80018 21.7542 6.00031C21.7542 6.20045 21.6752 6.39249 21.5344 6.53469V6.53469ZM19.9406 6.00031L18 4.05969L16.8094 5.25031L18.75 7.19094L19.9406 6.00031Z" fill="#312E49"/>
                      </g>
                    </svg>
                      
                        <textarea required type="number" className="form-control" placeholder="Enter details" aria-label="Enter details" aria-describedby="basic-addon1"></textarea>

                  </div>

                  <button className="blue_btn" type="submit" > SEND </button>

                </form>
              </div>
            </div>
        </div>
    </div>
</section>

<div className="gap"></div>
        </>
     );
}

export default ContactForm;