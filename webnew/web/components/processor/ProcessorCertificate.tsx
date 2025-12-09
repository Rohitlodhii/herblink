"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { FileCheck, Upload, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  foodLicense: z.any().optional(),
  pollutionClearance: z.any().optional(),
  fireSafety: z.any().optional(),
  qualityCertification: z.any().optional(),
  gstCertificate: z.any().optional(),
  additionalCerts: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ProcessorCertificatesFormProps {
  onSubmit: () => void;
}

export function ProcessorCertificatesForm({ onSubmit }: ProcessorCertificatesFormProps) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File>>({});

  const certificateTypes = [
    { key: "foodLicense", label: t("entities.processor.certificates.types.foodLicense"), required: true },
    { key: "pollutionClearance", label: t("entities.processor.certificates.types.pollutionClearance"), required: true },
    { key: "fireSafety", label: t("entities.processor.certificates.types.fireSafety"), required: false },
    { key: "qualityCertification", label: t("entities.processor.certificates.types.qualityCertification"), required: false },
    { key: "gstCertificate", label: t("entities.processor.certificates.types.gstCertificate"), required: true },
  ];

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      additionalCerts: "",
    },
  });

  const handleFileUpload = (certificateKey: string, file: File | null) => {
    if (file) {
      setUploadedFiles(prev => ({ ...prev, [certificateKey]: file }));
      alert(t("entities.processor.certificates.fileUploaded", { fileName: file.name }));
    } else {
      setUploadedFiles(prev => {
        const updated = { ...prev };
        delete updated[certificateKey];
        return updated;
      });
    }
  };

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    // Check if required certificates are uploaded
    const requiredCerts = certificateTypes.filter(cert => cert.required);
    const missingCerts = requiredCerts.filter(cert => !uploadedFiles[cert.key]);
    
    if (missingCerts.length > 0) {
      alert(t("entities.processor.certificates.missingCerts", { certs: missingCerts.map(cert => cert.label).join(", ") }));
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      console.log("Certificates form data:", { ...data, uploadedFiles });
      alert(t("entities.processor.certificates.saved"));
      onSubmit();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
            <FileCheck className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-xl font-bold text-foreground">{t("entities.processor.certificates.title")}</CardTitle>
            <CardDescription className="text-muted-foreground">
              {t("entities.processor.certificates.description")}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {certificateTypes.map((cert) => (
                <div key={cert.key} className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center space-x-2">
                    <FileCheck className="h-4 w-4" />
                    <span>{cert.label}</span>
                    {cert.required && <span className="text-destructive">*</span>}
                  </label>
                  
                  <div className="border-2 border-dashed border-border rounded-lg p-6 transition-colors hover:border-primary/50">
                    {uploadedFiles[cert.key] ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <FileCheck className="h-8 w-8 text-success" />
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {uploadedFiles[cert.key].name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {(uploadedFiles[cert.key].size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFileUpload(cert.key, null)}
                          className="text-destructive hover:text-destructive"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            {t("entities.processor.certificates.uploadHint")}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t("entities.processor.certificates.fileLimit")}
                          </p>
                        </div>
                        <Input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload(cert.key, file);
                          }}
                          className="mt-4"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <FormField
              control={form.control}
              name="additionalCerts"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("entities.processor.certificates.additionalCerts")}</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={t("forms.processor.certificatesPlaceholder")}
                      rows={3}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="bg-accent rounded-lg p-4">
              <h4 className="font-semibold text-accent-foreground mb-2">{t("entities.processor.certificates.importantNotes")}</h4>
              <ul className="text-sm text-accent-foreground/80 space-y-1">
                <li>• {t("entities.processor.certificates.notes.valid")}</li>
                <li>• {t("entities.processor.certificates.notes.clear")}</li>
                <li>• {t("entities.processor.certificates.notes.fileSize")}</li>
                <li>• {t("entities.processor.certificates.notes.formats")}</li>
              </ul>
            </div>

            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={isLoading}
                className=" hover:opacity-90 transition-opacity px-8"
              >
                {isLoading ? t("entities.processor.certificates.saving") : t("entities.processor.certificates.saveButton")}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}