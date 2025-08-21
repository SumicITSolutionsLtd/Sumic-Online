import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Mock credentials for authentication
  const mockCredentials = {
    email: 'john.smith@company.com',
    password: 'Business123!'
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target || {};
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Clear general error when user modifies credentials
    if (errors?.general && (name === 'email' || name === 'password')) {
      setErrors(prev => ({
        ...prev,
        general: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.email) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.password) {
      newErrors.password = 'Password is required';
    } else if (formData?.password?.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({}); // Clear any existing errors

    // Simulate API call with proper credential checking
    setTimeout(() => {
      const emailMatch = formData?.email?.trim()?.toLowerCase() === mockCredentials?.email?.toLowerCase();
      const passwordMatch = formData?.password === mockCredentials?.password;

      if (emailMatch && passwordMatch) {
        // Successful login
        const authData = {
          user: {
            email: formData?.email,
            name: 'John Smith',
            company: 'Smith Manufacturing Co.',
            loginTime: new Date()?.toISOString()
          },
          token: 'mock-jwt-token-' + Date.now(),
          rememberMe: formData?.rememberMe
        };

        localStorage.setItem('greentrade-auth', JSON.stringify(authData));
        
        // Add success feedback
        console.log('Authentication successful for:', formData?.email);
        navigate('/dashboard');
      } else {
        // Failed login with detailed error message
        let errorMessage = 'Authentication Failed. ';
        
        if (!emailMatch && !passwordMatch) {
          errorMessage += 'Incorrect email and password. ';
        } else if (!emailMatch) {
          errorMessage += 'Incorrect email address. ';
        } else if (!passwordMatch) {
          errorMessage += 'Incorrect password. ';
        }
        
        errorMessage += `Please use email: ${mockCredentials?.email} and password: ${mockCredentials?.password}`;
        
        setErrors({
          general: errorMessage
        });
      }
      setIsLoading(false);
    }, 1000); // Reduced from 1500ms for better UX
  };

  // Helper function to auto-fill credentials for testing
  const handleAutoFill = (e) => {
    e?.preventDefault();
    setFormData({
      email: mockCredentials?.email,
      password: mockCredentials?.password,
      rememberMe: false
    });
    setErrors({});
  };

  return (
    <div className="w-full max-w-md mx-auto bg-card rounded-lg shadow-card p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          Sign In to Your Account
        </h1>
        <p className="text-muted-foreground">
          Access your B2B marketplace dashboard
        </p>
      </div>

      {/* Demo Credentials Helper */}
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-blue-800 font-medium">Demo Credentials</p>
            <p className="text-sm text-blue-700 mt-1">
              Email: {mockCredentials?.email}<br />
              Password: {mockCredentials?.password}
            </p>
            <button
              type="button"
              onClick={handleAutoFill}
              className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium underline"
            >
              Auto-fill credentials
            </button>
          </div>
        </div>
      </div>

      {errors?.general && (
        <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="AlertCircle" size={20} className="text-destructive mt-0.5" />
            <div>
              <p className="text-sm text-destructive font-medium">Authentication Failed</p>
              <p className="text-sm text-destructive/80 mt-1">{errors?.general}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter your business email"
          value={formData?.email}
          onChange={handleInputChange}
          error={errors?.email}
          required
          autoComplete="email"
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData?.password}
          onChange={handleInputChange}
          error={errors?.password}
          required
          autoComplete="current-password"
        />

        <div className="flex items-center justify-between">
          <Checkbox
            label="Remember me"
            name="rememberMe"
            checked={formData?.rememberMe}
            onChange={handleInputChange}
          />
          
          <button
            type="button"
            className="text-sm text-primary hover:text-primary/80 transition-smooth"
            onClick={() => navigate('/forgot-password')}
          >
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isLoading}
          disabled={isLoading}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </Button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Don't have a business account?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-primary hover:text-primary/80 font-medium transition-smooth"
          >
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;