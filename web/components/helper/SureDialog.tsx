"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export interface SureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  title?: string;
  description?: string;

  onConfirm: () => Promise<void> | void;

  loading?: boolean;
  setLoading?: (val: boolean) => void;
}

const SureDialog: React.FC<SureDialogProps> = ({
  open,
  onOpenChange,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  onConfirm,
  loading = false,
  setLoading,
}) => {
  const handleConfirm = async () => {
    // If parent wants loading feedback
    if (setLoading) setLoading(true);

    try {
      await onConfirm(); // can be async
      onOpenChange(false); // close dialog after success
    } finally {
      if (setLoading) setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-4 w-full max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex gap-2 justify-end">
          <Button
            variant="secondary"
            disabled={loading}
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            disabled={loading}
            onClick={handleConfirm}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-t-transparent rounded-full"></span>
                Processing...
              </span>
            ) : (
              "Confirm"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SureDialog;
