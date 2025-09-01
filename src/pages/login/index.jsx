import React from 'react';
import { Helmet } from 'react-helmet';
import LoginHeader from './components/LoginHeader';
import LoginForm from './components/LoginForm';
import TrustSignals from './components/TrustSignals';
import PlatformBenefits from './components/PlatformBenefits';
import Footer from '../../components/Footer';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign In - sumic-online | Secure Business Login</title>
        <meta name="description" content="Sign in to your sumic-online account to access verified suppliers, secure payments, and global trade opportunities." />
        <meta name="keywords" content="B2B login, business account, supplier access, secure signin" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <LoginHeader />
        
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Login Form - Center Column */}
              <div className="lg:col-start-2 lg:col-end-3">
                <LoginForm />
              </div>

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