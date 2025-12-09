"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


import { User, Building, FileText, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

// Note: Zod validation messages will be translated via FormMessage component
// The actual error messages come from react-hook-form which uses the schema
const formSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  address: z.string().min(10),
  gstNumber: z.string().min(15).max(15),
  processingPlantNumber: z.string().min(1),
  plantCapacity: z.string().min(1),
  yearsInBusiness: z.string().min(1),
  businessType: z.string().min(1),
  description: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ProcessorPersonalFormProps {
  onSubmit: () => void;
}

export function ProcessorPersonalForm({ onSubmit }: ProcessorPersonalFormProps) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      gstNumber: "",
      processingPlantNumber: "",
      plantCapacity: "",
      yearsInBusiness: "",
      businessType: "",
      description: "",
    },
  });

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Personal form data:", data);
      alert(t("entities.processor.personal.saved"));
      onSubmit();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card >
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-xl font-bold text-foreground">{t("entities.processor.personal.title")}</CardTitle>
            <CardDescription className="text-muted-foreground">
              {t("entities.processor.personal.description")}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{t("entities.processor.personal.fullName")}</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={t("entities.processor.personal.fullNamePlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>{t("entities.processor.personal.email")}</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder={t("entities.processor.personal.emailPlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{t("entities.processor.personal.phone")}</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={t("entities.processor.personal.phonePlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gstNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>{t("entities.processor.personal.gstNumber")}</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={t("entities.processor.personal.gstNumberPlaceholder")} maxLength={15} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="processingPlantNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <Building className="h-4 w-4" />
                      <span>{t("entities.processor.personal.plantNumber")}</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={t("entities.processor.personal.plantNumberPlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="plantCapacity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("entities.processor.personal.plantCapacity")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("entities.processor.personal.plantCapacityPlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="yearsInBusiness"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("entities.processor.personal.yearsInBusiness")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("entities.processor.personal.yearsInBusinessPlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("entities.processor.personal.businessType")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("entities.processor.personal.businessTypePlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{t("entities.processor.personal.address")}</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder={t("entities.processor.personal.addressPlaceholder")} rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("entities.processor.personal.businessDescription")}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={t("entities.processor.personal.businessDescriptionPlaceholder")} rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="hover:opacity-90 transition-opacity px-8"
              >
                {isLoading ? t("entities.processor.personal.saving") : t("entities.processor.personal.saveButton")}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}