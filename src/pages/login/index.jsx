import React from 'react';
import { Helmet } from 'react-helmet';
import LoginHeader from './components/LoginHeader';
import LoginForm from './components/LoginForm';
import TrustSignals from './components/TrustSignals';
import PlatformBenefits from './components/PlatformBenefits';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign In - GreenTrade B2B | Secure Business Login</title>
        <meta name="description" content="Sign in to your GreenTrade B2B account to access verified suppliers, secure payments, and global trade opportunities." />
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

        {/* Footer */}
        <footer className="bg-card border-t border-border mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">GT</span>
                  </div>
                  <span className="font-semibold text-foreground">GreenTrade B2B</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  The world's leading B2B marketplace connecting businesses with verified suppliers globally.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-muted-foreground">Secure payments by:</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-5 bg-muted rounded flex items-center justify-center">
                      <span className="text-xs font-bold">VISA</span>
                    </div>
                    <div className="w-8 h-5 bg-muted rounded flex items-center justify-center">
                      <span className="text-xs font-bold">MC</span>
                    </div>
                    <div className="w-8 h-5 bg-muted rounded flex items-center justify-center">
                      <span className="text-xs font-bold">PP</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-smooth">About Us</a></li>
                  <li><a href="#" className="hover:text-foreground transition-smooth">Careers</a></li>
                  <li><a href="#" className="hover:text-foreground transition-smooth">Press</a></li>
                  <li><a href="#" className="hover:text-foreground transition-smooth">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-smooth">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-foreground transition-smooth">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-foreground transition-smooth">Cookie Policy</a></li>
                  <li><a href="#" className="hover:text-foreground transition-smooth">GDPR</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-xs text-muted-foreground">
                © {new Date()?.getFullYear()} GreenTrade B2B. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <span className="text-xs text-muted-foreground">Follow us:</span>
                <div className="flex items-center space-x-2">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                    <span className="sr-only">LinkedIn</span>
                    <div className="w-5 h-5 bg-muted rounded"></div>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                    <span className="sr-only">Twitter</span>
                    <div className="w-5 h-5 bg-muted rounded"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LoginPage;