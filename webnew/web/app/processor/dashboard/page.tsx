"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Factory, CheckCircle, Copy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProcessorPersonalForm } from '@/components/processor/processorPersonal';
import { ProcessorCertificatesForm } from '@/components/processor/ProcessorCertificate';
import { ProcessorContractsForm } from '@/components/processor/processorContrat';
import { ProcessorRegistrationSidebar } from '@/components/custom/ProcessorSidebar';

export default function ProcessorDashboard() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showCredentials, setShowCredentials] = useState(false);

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  const handleFormSubmit = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
    
    alert(t("entities.processor.formSaved", { step: stepId }));

    // Move to next step if available
    if (stepId < 3) {
      setCurrentStep(stepId + 1);
    }
  };

  const handleFinalSubmit = () => {
    alert(t("entities.processor.registrationSubmitted"));
    setShowCredentials(true);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(t("entities.processor.copiedToClipboard"));
  };

  const renderCurrentForm = () => {
    switch (currentStep) {
      case 1:
        return <ProcessorPersonalForm onSubmit={() => handleFormSubmit(1)} />;
      case 2:
        return <ProcessorCertificatesForm onSubmit={() => handleFormSubmit(2)} />;
      case 3:
        return <ProcessorContractsForm onSubmit={() => handleFormSubmit(3)} />;
      default:
        return <ProcessorPersonalForm onSubmit={() => handleFormSubmit(1)} />;
    }
  };

  const isAllCompleted = completedSteps.length === 3;

  if (showCredentials) {
    return (
      <div className="min-h-screen bg-gradient-main p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{t("entities.processor.registrationComplete")}</h1>
            <p className="text-muted-foreground">{t("entities.processor.registrationSubmitted")}</p>
          </div>

          <Card className="max-w-md mx-auto bg-gradient-card shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-bold text-foreground">{t("entities.processor.desktopCredentials")}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {t("entities.processor.useCredentials")}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t("entities.processor.email")}</label>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 p-3 bg-muted rounded-lg font-mono text-sm">
                    processor@system.com
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard("processor@system.com")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t("entities.processor.password")}</label>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 p-3 bg-muted rounded-lg font-mono text-sm">
                    PROC@2024$ecure
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard("PROC@2024$ecure")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="p-4 bg-accent rounded-lg">
                <p className="text-sm text-accent-foreground">
                  <strong>{t("entities.processor.important")}:</strong> {t("entities.processor.saveCredentials")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-main">
      <header className="border-b border-border bg-card shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <Factory className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{t("entities.processor.title")}</h1>
              <p className="text-sm text-muted-foreground">{t("entities.processor.subtitle")}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="flex gap-8">
          <ProcessorRegistrationSidebar
            currentStep={currentStep}
            completedSteps={completedSteps}
            onStepClick={handleStepClick}
          />
          
          <div className="flex-1">
            <div className=" rounded-xl p-8">
              {renderCurrentForm()}
            </div>
            
            {isAllCompleted && (
              <div className="mt-6 text-center">
                <Card >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{t("entities.processor.readyToSubmit")}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t("entities.processor.allFormsCompleted")}
                    </p>
                    <Button
                      onClick={handleFinalSubmit}
                      className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity px-8 py-2"
                    >
                      {t("entities.processor.sendRegistration")}
                    </Button>
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

