
import { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface WithdrawalNotificationProps {
  isVisible: boolean;
  onClose: () => void;
  name: string;
  amount: number;
}

const WithdrawalNotification = ({ isVisible, onClose, name, amount }: WithdrawalNotificationProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm animate-in slide-in-from-right duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">
              Saque realizado
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-semibold">{name}</span> acabou de sacar{' '}
              <span className="font-semibold text-green-600">R$ {amount.toFixed(2)}</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Agora mesmo
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default WithdrawalNotification;
