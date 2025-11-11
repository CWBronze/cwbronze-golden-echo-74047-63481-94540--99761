import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalInfoProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const ModalInfo = ({ isOpen, onClose, title, description }: ModalInfoProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-script text-3xl text-gold">
            {title}
          </DialogTitle>
          <DialogDescription className="text-foreground/80 pt-4">
            {description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalInfo;
