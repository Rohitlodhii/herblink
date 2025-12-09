"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Factory, CheckCircle, Mail, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { OrganizationForm } from '@/components/form/Organisation';
import { CertificatesForm } from '@/components/form/CertificatesForm';
import { WorkersForm } from '@/components/form/Workers';
import { ManagerForm } from '@/components/form/Manager';
import { RegistrationSidebar } from '@/components/custom/RegisterSidebar';
import { useRouter } from "next/navigation";

interface FormData {
  organization?: any;
  certificates?: any;
  workers?: any;
  manager?: any;
}

export default function ManufacturerDashboard() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState<FormData>({});
  const [showCredentials, setShowCredentials] = useState(false);
  const router = useRouter();

  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const email = localStorage.getItem("userEmail") || "";
      setUserEmail(email);
    }
  }, []);

  const handleStepComplete = (step: number, data: any) => {
    setFormData(prev => ({ ...prev, [getStepKey(step)]: data }));
    
    if (!completedSteps.includes(step)) {
      setCompletedSteps(prev => [...prev, step].sort());
    }

    // Auto-advance to next step if not completed
    if (step < 4 && !completedSteps.includes(step + 1)) {
      setCurrentStep(step + 1);
    }
  };

  const getStepKey = (step: number) => {
    switch (step) {
      case 1: return "organization";
      case 2: return "certificates";
      case 3: return "workers";
      case 4: return "manager";
      default: return "";
    }
  };

  const handleSubmitRegistration = () => {
    if (completedSteps.length === 4) {
      alert(t("entities.manufacturer.registrationSuccess"));
      setShowCredentials(true);
    } else {
      alert(t("entities.manufacturer.registrationIncomplete"));
    }
  };

  const handleLogout = () => {
    // Removed logout functionality - registration only
  };

  const renderCurrentForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <OrganizationForm
            onComplete={(data) => handleStepComplete(1, data)}
            initialData={formData.organization}
          />
        );
      case 2:
        return (
          <CertificatesForm
            onComplete={(data) => handleStepComplete(2, data)}
            initialData={formData.certificates}
          />
        );
      case 3:
        return (
          <WorkersForm
            onComplete={(data) => handleStepComplete(3, data)}
            initialData={formData.workers}
          />
        );
      case 4:
        return (
          <ManagerForm
            onComplete={(data) => handleStepComplete(4, data)}
            initialData={formData.manager}
          />
        );
      default:
        return null;
    }
  };

  if (showCredentials) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-card border-0 bg-gradient-card">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-success rounded-2xl flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-success-foreground" />
            </div>
            <CardTitle className="text-2xl text-success">{t("entities.manufacturer.registrationComplete")}</CardTitle>
            <CardDescription>
              {t("entities.manufacturer.registrationApproved")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-accent rounded-lg">
              <h3 className="font-semibold mb-3 text-accent-foreground">{t("entities.manufacturer.desktopCredentials")}</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-accent-foreground" />
                  <div>
                    <p className="text-sm text-accent-foreground/70">{t("entities.manufacturer.email")}</p>
                    <p className="font-mono text-sm font-semibold">{userEmail}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="h-4 w-4 text-accent-foreground" />
                  <div>
                    <p className="text-sm text-accent-foreground/70">{t("entities.manufacturer.password")}</p>
                    <p className="font-mono text-sm font-semibold">MFG@2024$ecure</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
              <p className="text-sm text-warning-foreground">
                <strong>{t("entities.manufacturer.important")}:</strong> {t("entities.manufacturer.saveCredentials")}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-gradient-card shadow-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Factory className="h-6 w-6 " />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">{t("entities.manufacturer.title")}</h1>
                <p className="text-sm text-muted-foreground">{userEmail}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-sm">
                {t("entities.manufacturer.step")} {currentStep} {t("entities.manufacturer.of")} 4
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <RegistrationSidebar
            currentStep={currentStep}
            completedSteps={completedSteps}
            onStepClick={setCurrentStep}
          />

          {/* Main Form Area */}
          <div className="flex-1">
            {renderCurrentForm()}
            
            {/* Submit Registration Button */}
            {completedSteps.length === 4 && (
              <div className="mt-6">
                <Card >
                  <CardContent className="p-6">
                    <div className="text-center">
                      <CheckCircle className="h-12 w-12 mx-auto mb-4 " />
                      <h3 className="text-xl font-bold mb-2">{t("entities.manufacturer.readyToSubmit")}</h3>
                      <p className="mb-6 ">
                        {t("entities.manufacturer.allFormsCompleted")}
                      </p>
                      <Button
                        onClick={handleSubmitRegistration}
                        variant="secondary"
                        size="lg"
                       
                      >
                        {t("entities.manufacturer.submitRegistration")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

