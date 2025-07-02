
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Lock, AlertTriangle, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SecurityValidationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onValidate: () => void;
  dollarRate: number;
}

const SecurityValidationModal = ({ isOpen, onClose, onValidate, dollarRate }: SecurityValidationModalProps) => {
  const navigate = useNavigate();

  const handleValidateClick = () => {
    onValidate();
    navigate('/vsl');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black border-gray-800 text-white max-w-md p-0">
        <DialogTitle className="sr-only">Validação de Segurança</DialogTitle>
        <DialogDescription className="sr-only">
          Modal para validação de segurança antes do saque
        </DialogDescription>
        
        <div className="p-6">
          {/* Header with dollar rate */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm">Cotação do dólar hoje:</p>
            <p className="text-green-400 font-bold text-lg">R${dollarRate.toFixed(2)}</p>
          </div>

          {/* Lock and Spotify connection visual */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center">
              {/* More realistic lock with gradient background */}
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-300/20 to-transparent"></div>
                <Lock className="w-7 h-7 text-black relative z-10" strokeWidth={2.5} />
              </div>
              
              {/* Connection line with better styling */}
              <div className="flex items-center mx-4">
                <div className="w-4 h-0.5 bg-green-500"></div>
                <div className="w-4 h-0.5 bg-green-400"></div>
                <div className="w-4 h-0.5 bg-green-300"></div>
                <div className="w-4 h-0.5 bg-green-200"></div>
              </div>
              
              {/* Spotify logo instead of circle with S */}
              <img 
                src="/lovable-uploads/1cc76a91-706e-4d83-b1ff-759f4dedabee.png" 
                alt="Spotify" 
                className="h-14 w-auto"
              />
            </div>
          </div>

          {/* Security Validation Title */}
          <h2 className="text-xl font-bold mb-4 text-center">Validação de Segurança</h2>

          {/* Warning message */}
          <div className="flex items-start mb-4">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-gray-300 text-sm">
              Para liberar seu saque, é necessário fazer uma validação de segurança.
            </p>
          </div>

          {/* Security info */}
          <div className="flex items-start mb-4">
            <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
              <Lock className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-gray-300 text-sm">
              Isso protege sua conta contra fraudes e garante que só você receba.
            </p>
          </div>

          {/* Benefits list */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-400 mr-3" />
              <span className="text-gray-300 text-sm">O valor da validação é 100% reembolsado.</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-400 mr-3" />
              <span className="text-gray-300 text-sm">Processo rápido e seguro.</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-400 mr-3" />
              <span className="text-gray-300 text-sm">Saque liberado na hora após validar.</span>
            </div>
          </div>

          {/* Warning at bottom */}
          <div className="flex items-start mb-6">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-gray-300 text-sm">
              Sem validar, o sistema bloqueia seu saque por segurança.
            </p>
          </div>

          {/* Validate button */}
          <Button
            onClick={handleValidateClick}
            className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-lg text-base"
          >
            VERIFICAR CONTA
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SecurityValidationModal;
