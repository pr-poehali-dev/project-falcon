import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '@/components/extensions/auth-email/LoginForm';
import RegisterForm from '@/components/extensions/auth-email/RegisterForm';
import UserProfile from '@/components/extensions/auth-email/UserProfile';
import useAuth from '@/components/extensions/auth-email/useAuth';

const AUTH_URL = 'https://functions.poehali.dev/69683eae-44a5-4547-835a-5e3431cb8c17';

export default function Auth() {
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const auth = useAuth({
    apiUrls: {
      login: `${AUTH_URL}?action=login`,
      register: `${AUTH_URL}?action=register`,
      verifyEmail: `${AUTH_URL}?action=verify-email`,
      refresh: `${AUTH_URL}?action=refresh`,
      logout: `${AUTH_URL}?action=logout`,
      resetPassword: `${AUTH_URL}?action=reset-password`,
    },
  });

  if (auth.isAuthenticated && auth.user) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-12">
          <button
            onClick={() => navigate('/')}
            className="mb-6 text-primary hover:underline"
          >
            ← На главную
          </button>
          <UserProfile user={auth.user} onLogout={auth.logout} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={() => navigate('/')}
          className="mb-6 text-primary hover:underline"
        >
          ← На главную
        </button>
        
        <div className="mx-auto max-w-md">
          {showRegister ? (
            <div>
              <RegisterForm
                onRegister={auth.register}
                onVerifyEmail={auth.verifyEmail}
              />
              <p className="mt-4 text-center text-muted-foreground">
                Уже есть аккаунт?{' '}
                <button
                  onClick={() => setShowRegister(false)}
                  className="text-primary hover:underline"
                >
                  Войти
                </button>
              </p>
            </div>
          ) : (
            <div>
              <LoginForm onLogin={auth.login} />
              <p className="mt-4 text-center text-muted-foreground">
                Нет аккаунта?{' '}
                <button
                  onClick={() => setShowRegister(true)}
                  className="text-primary hover:underline"
                >
                  Зарегистрироваться
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
