'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { SessionUser } from '@/lib/definitions';

interface AuthContextType {
  user: SessionUser | null;
  loading: boolean;
  signOut: () => Promise<void>;
  refresh: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

async function fetchSession(): Promise<SessionUser | null> {
  try {
    const res = await fetch('/api/auth/me', { cache: 'no-store' });
    const data = await res.json();
    return (data && data.user) || null;
  } catch {
    return null;
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchSession().then((session) => {
      if (!cancelled) {
        setUser(session);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const signOut = async () => {
    try {
      await fetch('/api/auth/logout', { cache: 'no-store' });
    } catch {
    }
    setUser(null);
  };

  const refresh = useCallback(async () => {
    setUser(await fetchSession());
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signOut, refresh }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};