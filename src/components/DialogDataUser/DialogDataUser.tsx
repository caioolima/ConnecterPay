// src/components/DialogDataUser.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { SimulationData } from "@/services/types"; 

interface SummaryDialogDataUser {
  open: boolean;
  onClose: () => void;
  formData: SimulationData; 
}

const DialogDataUser = ({ open, onClose, formData }: SummaryDialogDataUser) => {

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="p-6 rounded-2xl shadow-2xl bg-white border border-gray-200 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <CheckCircle className="text-green-500" size={30} />
            Resumo do Cálculo
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Confira os detalhes do seu cálculo abaixo:
          </DialogDescription>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6 bg-gray-50 p-5 rounded-xl border border-gray-200"
        >
          <div className="flex flex-wrap gap-4 text-gray-800 text-sm">
            <p className="flex items-center gap-2">
              <span className="text-lg">💰</span>
              <strong>Valor total:</strong> {formData.valorTotalDivida}
            </p>
            <p className="flex items-center gap-2">
              <span className="text-lg">📆</span>
              <strong>Total de parcelas:</strong> {formData.numeroTotalParcelas}
            </p>
            <p className="flex items-center gap-2">
              <span className="text-lg">💸</span>
              <strong>Valor da parcela:</strong> {formData.valorParcelaDivida}
            </p>
            <p className="flex items-center gap-2">
              <span className="text-lg">✅</span>
              <strong>Parcelas pagas:</strong> {formData.numeroParcelasPagas}
            </p>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center p-5 bg-green-500 text-white font-bold text-lg sm:text-xl md:text-2xl rounded-lg shadow-lg"
          >
            <span className="block">
              🏆 Nova parcela:
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl inline-block">
              R${(formData.valorCalculado)}
            </span>
          </motion.div>

        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDataUser;
