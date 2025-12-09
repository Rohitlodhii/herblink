"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Users, Clock, IndianRupee } from "lucide-react";
 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

interface WorkersData {
  totalWorkers: string;
  maleWorkers: string;
  femaleWorkers: string;
  skilledWorkers: string;
  unskilledWorkers: string;
  workingHours: string;
  shiftsPerDay: string;
  workingDays: string;
  averageSalary: string;
  minimumWage: string;
  maximumWage: string;
  benefitsProvided: string;
  safetyTraining: string;
  workEnvironment: string;
}

interface WorkersFormProps {
  onComplete: (data: WorkersData) => void;
  initialData?: Partial<WorkersData>;
}

export function WorkersForm({ onComplete, initialData = {} }: WorkersFormProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<WorkersData>({
    totalWorkers: initialData.totalWorkers || "",
    maleWorkers: initialData.maleWorkers || "",
    femaleWorkers: initialData.femaleWorkers || "",
    skilledWorkers: initialData.skilledWorkers || "",
    unskilledWorkers: initialData.unskilledWorkers || "",
    workingHours: initialData.workingHours || "",
    shiftsPerDay: initialData.shiftsPerDay || "",
    workingDays: initialData.workingDays || "",
    averageSalary: initialData.averageSalary || "",
    minimumWage: initialData.minimumWage || "",
    maximumWage: initialData.maximumWage || "",
    benefitsProvided: initialData.benefitsProvided || "",
    safetyTraining: initialData.safetyTraining || "",
    workEnvironment: initialData.workEnvironment || "",
  });

  const [isLoading, setIsLoading] = useState(false);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const requiredFields = ['totalWorkers', 'workingHours', 'shiftsPerDay', 'workingDays', 'averageSalary'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof WorkersData]);
    
    if (missingFields.length > 0) {
      alert(t("entities.manufacturer.workers.missingInfo"));
      return;
    }

    const totalWorkers = parseInt(formData.totalWorkers);
    const maleWorkers = parseInt(formData.maleWorkers) || 0;
    const femaleWorkers = parseInt(formData.femaleWorkers) || 0;

    if (maleWorkers + femaleWorkers > totalWorkers) {
      alert(t("entities.manufacturer.workers.invalidData"));
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(t("entities.manufacturer.workers.saved"));
      onComplete(formData);
    }, 1000);
  };

  const handleChange = (field: keyof WorkersData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card >
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-primary" />
          <span>{t("entities.manufacturer.workers.title")}</span>
        </CardTitle>
        <CardDescription>
          {t("entities.manufacturer.workers.description")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Worker Count Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t("entities.manufacturer.workers.workforceComposition")}</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="totalWorkers">{t("entities.manufacturer.workers.totalWorkers")}</Label>
                <Input
                  id="totalWorkers"
                  type="number"
                  value={formData.totalWorkers}
                  onChange={(e) => handleChange("totalWorkers", e.target.value)}
                  placeholder={t("forms.workers.totalPlaceholder")}
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maleWorkers">{t("entities.manufacturer.workers.maleWorkers")}</Label>
                <Input
                  id="maleWorkers"
                  type="number"
                  value={formData.maleWorkers}
                  onChange={(e) => handleChange("maleWorkers", e.target.value)}
                  placeholder={t("forms.workers.malePlaceholder")}
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="femaleWorkers">{t("entities.manufacturer.workers.femaleWorkers")}</Label>
                <Input
                  id="femaleWorkers"
                  type="number"
                  value={formData.femaleWorkers}
                  onChange={(e) => handleChange("femaleWorkers", e.target.value)}
                  placeholder={t("forms.workers.femalePlaceholder")}
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="skilledWorkers">{t("entities.manufacturer.workers.skilledWorkers")}</Label>
                <Input
                  id="skilledWorkers"
                  type="number"
                  value={formData.skilledWorkers}
                  onChange={(e) => handleChange("skilledWorkers", e.target.value)}
                  placeholder={t("forms.workers.skilledPlaceholder")}
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="unskilledWorkers">{t("entities.manufacturer.workers.unskilledWorkers")}</Label>
                <Input
                  id="unskilledWorkers"
                  type="number"
                  value={formData.unskilledWorkers}
                  onChange={(e) => handleChange("unskilledWorkers", e.target.value)}
                  placeholder={t("forms.workers.unskilledPlaceholder")}
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
            </div>
          </div>

          {/* Working Hours Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>{t("entities.manufacturer.workers.workingHoursSchedule")}</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="workingHours">{t("entities.manufacturer.workers.workingHours")}</Label>
                <Select value={formData.workingHours} onValueChange={(value) => handleChange("workingHours", value)}>
                  <SelectTrigger className="transition-smooth focus:shadow-hover">
                    <SelectValue placeholder={t("forms.workers.hoursPlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="8">{t("entities.manufacturer.workers.hours.8")}</SelectItem>
                    <SelectItem value="9">{t("entities.manufacturer.workers.hours.9")}</SelectItem>
                    <SelectItem value="10">{t("entities.manufacturer.workers.hours.10")}</SelectItem>
                    <SelectItem value="12">{t("entities.manufacturer.workers.hours.12")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="shiftsPerDay">{t("entities.manufacturer.workers.shiftsPerDay")}</Label>
                <Select value={formData.shiftsPerDay} onValueChange={(value) => handleChange("shiftsPerDay", value)}>
                  <SelectTrigger className="transition-smooth focus:shadow-hover">
                    <SelectValue placeholder={t("forms.workers.shiftsPlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">{t("entities.manufacturer.workers.shifts.1")}</SelectItem>
                    <SelectItem value="2">{t("entities.manufacturer.workers.shifts.2")}</SelectItem>
                    <SelectItem value="3">{t("entities.manufacturer.workers.shifts.3")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="workingDays">{t("entities.manufacturer.workers.workingDays")}</Label>
                <Select value={formData.workingDays} onValueChange={(value) => handleChange("workingDays", value)}>
                  <SelectTrigger className="transition-smooth focus:shadow-hover">
                    <SelectValue placeholder={t("forms.workers.daysPlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">{t("entities.manufacturer.workers.days.5")}</SelectItem>
                    <SelectItem value="6">{t("entities.manufacturer.workers.days.6")}</SelectItem>
                    <SelectItem value="7">{t("entities.manufacturer.workers.days.7")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Salary Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
              <IndianRupee className="h-5 w-5" />
              <span>{t("entities.manufacturer.workers.salaryInformation")}</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="averageSalary">{t("entities.manufacturer.workers.averageSalary")}</Label>
                <Input
                  id="averageSalary"
                  type="number"
                  value={formData.averageSalary}
                  onChange={(e) => handleChange("averageSalary", e.target.value)}
                  placeholder={t("forms.workers.avgSalaryPlaceholder")}
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="minimumWage">{t("entities.manufacturer.workers.minimumWage")}</Label>
                <Input
                  id="minimumWage"
                  type="number"
                  value={formData.minimumWage}
                  onChange={(e) => handleChange("minimumWage", e.target.value)}
                  placeholder={t("forms.workers.minWagePlaceholder")}
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maximumWage">{t("entities.manufacturer.workers.maximumWage")}</Label>
                <Input
                  id="maximumWage"
                  type="number"
                  value={formData.maximumWage}
                  onChange={(e) => handleChange("maximumWage", e.target.value)}
                  placeholder={t("forms.workers.maxWagePlaceholder")}
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
            </div>
          </div>

          {/* Benefits and Environment */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="benefitsProvided">{t("entities.manufacturer.workers.benefitsProvided")}</Label>
              <Textarea
                id="benefitsProvided"
                value={formData.benefitsProvided}
                onChange={(e) => handleChange("benefitsProvided", e.target.value)}
                placeholder={t("forms.workers.benefitsPlaceholder")}
                className="min-h-[80px] transition-smooth focus:shadow-hover"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="safetyTraining">{t("entities.manufacturer.workers.safetyTraining")}</Label>
              <Textarea
                id="safetyTraining"
                value={formData.safetyTraining}
                onChange={(e) => handleChange("safetyTraining", e.target.value)}
                placeholder={t("forms.workers.safetyPlaceholder")}
                className="min-h-[80px] transition-smooth focus:shadow-hover"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="workEnvironment">{t("entities.manufacturer.workers.workEnvironment")}</Label>
              <Textarea
                id="workEnvironment"
                value={formData.workEnvironment}
                onChange={(e) => handleChange("workEnvironment", e.target.value)}
                placeholder={t("forms.workers.conditionsPlaceholder")}
                className="min-h-[80px] transition-smooth focus:shadow-hover"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full  hover:shadow-hover transition-smooth"
            disabled={isLoading}
          >
            {isLoading ? t("entities.manufacturer.workers.saving") : t("entities.manufacturer.workers.saveButton")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}