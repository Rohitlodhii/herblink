"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Building, MapPin, Hash, Package } from "lucide-react";
 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

interface OrganizationData {
  organizationName: string;
  address: string;
  manufacturerId: string;
  productsMade: string;
  establishedYear: string;
  annualTurnover: string;
  certificationLevel: string;
  description: string;
}

interface OrganizationFormProps {
  onComplete: (data: OrganizationData) => void;
  initialData?: Partial<OrganizationData>;
}

export function OrganizationForm({ onComplete, initialData = {} }: OrganizationFormProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<OrganizationData>({
    organizationName: initialData.organizationName || "",
    address: initialData.address || "",
    manufacturerId: initialData.manufacturerId || "",
    productsMade: initialData.productsMade || "",
    establishedYear: initialData.establishedYear || "",
    annualTurnover: initialData.annualTurnover || "",
    certificationLevel: initialData.certificationLevel || "",
    description: initialData.description || "",
  });

  const [isLoading, setIsLoading] = useState(false);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.organizationName || !formData.address || !formData.manufacturerId || !formData.productsMade) {
      alert(t("entities.manufacturer.organization.missingInfo"));
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(t("entities.manufacturer.organization.saved"));
      onComplete(formData);
    }, 1000);
  };

  const handleChange = (field: keyof OrganizationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card >
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Building className="h-5 w-5 text-primary" />
          <span>{t("entities.manufacturer.organization.title")}</span>
        </CardTitle>
        <CardDescription>
          {t("entities.manufacturer.organization.description")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="organizationName">{t("entities.manufacturer.organization.name")}</Label>
              <Input
                id="organizationName"
                value={formData.organizationName}
                onChange={(e) => handleChange("organizationName", e.target.value)}
                placeholder={t("forms.organization.namePlaceholder")}
                className="transition-smooth focus:shadow-hover"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="manufacturerId">{t("entities.manufacturer.organization.manufacturerId")}</Label>
              <div className="relative">
                <Hash className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="manufacturerId"
                  value={formData.manufacturerId}
                  onChange={(e) => handleChange("manufacturerId", e.target.value)}
                  placeholder={t("forms.organization.registrationPlaceholder")}
                  className="pl-10 transition-smooth focus:shadow-hover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">{t("entities.manufacturer.organization.address")}</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder={t("forms.organization.addressPlaceholder")}
                className="pl-10 min-h-[80px] transition-smooth focus:shadow-hover"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="productsMade">{t("entities.manufacturer.organization.productsMade")}</Label>
            <div className="relative">
              <Package className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Textarea
                id="productsMade"
                value={formData.productsMade}
                onChange={(e) => handleChange("productsMade", e.target.value)}
                placeholder={t("forms.organization.productsPlaceholder")}
                className="pl-10 min-h-[80px] transition-smooth focus:shadow-hover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="establishedYear">{t("entities.manufacturer.organization.establishedYear")}</Label>
              <Select value={formData.establishedYear} onValueChange={(value) => handleChange("establishedYear", value)}>
                <SelectTrigger className="transition-smooth focus:shadow-hover">
                  <SelectValue placeholder={t("forms.organization.yearPlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  {(() => {
                    const currentYear = new Date().getFullYear();
                    return Array.from({ length: 50 }, (_, i) => currentYear - i).map(year => (
                      <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                    ));
                  })()}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="annualTurnover">{t("entities.manufacturer.organization.annualTurnover")}</Label>
              <Select value={formData.annualTurnover} onValueChange={(value) => handleChange("annualTurnover", value)}>
                <SelectTrigger className="transition-smooth focus:shadow-hover">
                  <SelectValue placeholder={t("forms.organization.rangePlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1cr">{t("entities.manufacturer.organization.turnover.0-1cr")}</SelectItem>
                  <SelectItem value="1-5cr">{t("entities.manufacturer.organization.turnover.1-5cr")}</SelectItem>
                  <SelectItem value="5-10cr">{t("entities.manufacturer.organization.turnover.5-10cr")}</SelectItem>
                  <SelectItem value="10-50cr">{t("entities.manufacturer.organization.turnover.10-50cr")}</SelectItem>
                  <SelectItem value="50cr+">{t("entities.manufacturer.organization.turnover.50cr+")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="certificationLevel">{t("entities.manufacturer.organization.certificationLevel")}</Label>
            <Select value={formData.certificationLevel} onValueChange={(value) => handleChange("certificationLevel", value)}>
              <SelectTrigger className="transition-smooth focus:shadow-hover">
                <SelectValue placeholder={t("forms.organization.certificationPlaceholder")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="iso-9001">{t("entities.manufacturer.organization.certification.iso-9001")}</SelectItem>
                <SelectItem value="iso-14001">{t("entities.manufacturer.organization.certification.iso-14001")}</SelectItem>
                <SelectItem value="iso-45001">{t("entities.manufacturer.organization.certification.iso-45001")}</SelectItem>
                <SelectItem value="bis">{t("entities.manufacturer.organization.certification.bis")}</SelectItem>
                <SelectItem value="other">{t("entities.manufacturer.organization.certification.other")}</SelectItem>
                <SelectItem value="none">{t("entities.manufacturer.organization.certification.none")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">{t("entities.manufacturer.organization.additionalInfo")}</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder={t("forms.organization.additionalInfoPlaceholder")}
              className="min-h-[100px] transition-smooth focus:shadow-hover"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full  hover:shadow-hover transition-smooth"
            disabled={isLoading}
          >
            {isLoading ? t("entities.manufacturer.organization.saving") : t("entities.manufacturer.organization.saveButton")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}