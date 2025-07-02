
import { useState, useEffect } from 'react';

const brazilianNames = [
  'João Silva',
  'Maria Santos',
  'Carlos Oliveira',
  'Ana Costa',
  'Pedro Souza',
  'Lucia Ferreira',
  'Rafael Lima',
  'Fernanda Alves',
  'Bruno Pereira',
  'Camila Rodrigues',
  'Diego Martins',
  'Juliana Barbosa',
  'Thiago Ribeiro',
  'Beatriz Gomes',
  'Gabriel Carvalho',
  'Mariana Dias',
  'Lucas Nascimento',
  'Isabela Moreira',
  'Mateus Cardoso',
  'Larissa Mendes'
];

export const useWithdrawalNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState<{
    id: number;
    name: string;
    amount: number;
    isVisible: boolean;
  } | null>(null);

  const generateRandomNotification = () => {
    const randomName = brazilianNames[Math.floor(Math.random() * brazilianNames.length)];
    const randomAmount = Math.floor(Math.random() * (500 - 200 + 1)) + 200;
    
    return {
      id: Date.now(),
      name: randomName,
      amount: randomAmount,
      isVisible: true
    };
  };

  const closeNotification = () => {
    setCurrentNotification(prev => prev ? { ...prev, isVisible: false } : null);
  };

  useEffect(() => {
    // Show first notification after 15 seconds
    const initialTimer = setTimeout(() => {
      setCurrentNotification(generateRandomNotification());
    }, 15000);

    // Then show every 15 seconds
    const interval = setInterval(() => {
      setCurrentNotification(generateRandomNotification());
    }, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    if (currentNotification?.isVisible) {
      const hideTimer = setTimeout(() => {
        closeNotification();
      }, 5000);

      return () => clearTimeout(hideTimer);
    }
  }, [currentNotification?.id]);

  return {
    currentNotification,
    closeNotification
  };
};
