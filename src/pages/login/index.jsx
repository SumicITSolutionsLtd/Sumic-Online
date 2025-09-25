import React from 'react';
import { Helmet } from 'react-helmet';
import LoginForm from './components/LoginForm';
import TrustSignals from './components/TrustSignals';
import PlatformBenefits from './components/PlatformBenefits';
import ScrollArrow from './components/ScrollArrow';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Image from "../../media/new_bg.png"
import "./login_page.css"
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign In - sumic-online | Secure Business Login</title>
        <meta name="description" content="Sign in to your sumic-online account to access verified suppliers, secure payments, and global trade opportunities." />
        <meta name="keywords" content="B2B login, business account, supplier access, secure signin" />
      </Helmet>
      <div style={{ backgroundColor: "#ffffff1a" }} className="login-screen min-h-screen">
        {/* <Header /> */}
        <main className="pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="login_form_section grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Login Form - Center Column */}
              <div style={{ height: "100vh", marginTop: "0rem" }} className="lg:col-start-2 lg:col-end-3 relative">

                {/* back home  */}
                <Link to="/">


                  <div className='backhome'>
                    <svg style={{ color: "white", fontSize: ".8rem" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                    <p>Back Home</p>
                  </div>
                </Link>
                <LoginForm />
                <ScrollArrow />
              </div>
            </div>
            {/* below form */}
            <div className='login_below_form' style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              {/* Trust Signals - Right Column (Desktop) / Below Form (Mobile) */}
              <div className="lg:col-start-3 lg:col-end-4 order-3 lg:order-2">
                <div className="sticky top-24">
                  <TrustSignals />
                </div>
              </div>

              {/* Platform Benefits - Left Column (Desktop) / Below Trust Signals (Mobile) */}
              <div className="lg:col-start-1 lg:col-end-2 order-2 lg:order-1">
                <div className="sticky top-24">
                  <PlatformBenefits />
                </div>
              </div>

            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LoginPage;