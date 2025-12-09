"use client";

import { ArrowLeft, Factory, FlaskConical, Leaf, Package, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export default function Working() {
  const { t } = useTranslation();
  
  const steps = [
    {
      id: 1,
      title: t("working.steps.farmer.title"),
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      emoji: '🌱',
      description: t("working.steps.farmer.description"),
      details: [
        t("working.steps.farmer.details.herbName"),
        t("working.steps.farmer.details.cultivationDate"),
        t("working.steps.farmer.details.pesticidesUsed"),
        t("working.steps.farmer.details.waterUsage"),
        t("working.steps.farmer.details.climateConditions"),
        t("working.steps.farmer.details.location"),
        t("working.steps.farmer.details.fieldImages")
      ],
      outcome: t("working.steps.farmer.outcome")
    },
    {
      id: 2,
      title: t("working.steps.processor.title"),
      icon: <Factory className="w-8 h-8 text-blue-600" />,
      emoji: '🏭',
      description: t("working.steps.processor.description"),
      details: [
        t("working.steps.processor.details.timeOfProcessing"),
        t("working.steps.processor.details.methodsUsed"),
        t("working.steps.processor.details.quantityBeforeAfter")
      ],
      verification: {
        correct: t("working.steps.processor.verificationCorrect"),
        incorrect: t("working.steps.processor.verificationIncorrect")
      },
      outcome: t("working.steps.processor.outcome")
    },
    {
      id: 3,
      title: t("working.steps.laboratory.title"),
      icon: <FlaskConical className="w-8 h-8 text-purple-600" />,
      emoji: '🔬',
      description: t("working.steps.laboratory.description"),
      details: [
        t("working.steps.laboratory.details.qualityTestReports"),
        t("working.steps.laboratory.details.certificates"),
        t("working.steps.laboratory.details.safetyApprovals")
      ],
      verification: {
        correct: t("working.steps.laboratory.verificationCorrect"),
        incorrect: t("working.steps.laboratory.verificationIncorrect")
      },
      outcome: t("working.steps.laboratory.outcome")
    },
    {
      id: 4,
      title: t("working.steps.manufacturer.title"),
      icon: <Package className="w-8 h-8 text-orange-600" />,
      emoji: '🧪 / 🧴',
      description: t("working.steps.manufacturer.description"),
      details: [
        t("working.steps.manufacturer.details.productionDetails"),
        t("working.steps.manufacturer.details.packagingInformation"),
        t("working.steps.manufacturer.details.expiryBatchData")
      ],
      outcome: t("working.steps.manufacturer.outcome")
    },
    {
      id: 5,
      title: t("working.steps.consumer.title"),
      icon: <User className="w-8 h-8 text-indigo-600" />,
      emoji: '👩‍⚕️',
      description: t("working.steps.consumer.description"),
      viewable: [
        t("working.steps.consumer.viewable.farmOrigin"),
        t("working.steps.consumer.viewable.processingDetails"),
        t("working.steps.consumer.viewable.labTestReports"),
        t("working.steps.consumer.viewable.manufacturingData")
      ],
      outcome: t("working.steps.consumer.outcome")
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
        
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t("working.title")}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("working.subtitle")}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              {/* Step Header */}
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full mr-4">
                  <span className="text-xl font-bold text-blue-500">{step.id}</span>
                </div>
                <div className="flex items-center">
                  {step.icon}
                  <h2 className="text-2xl font-semibold text-gray-900 ml-3">
                    {step.title} <span className="text-2xl">{step.emoji}</span>
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {step.description}
              </p>

              {/* Details/Viewable Items */}
              {(step.details || step.viewable) && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {step.viewable ? t("working.steps.consumer.viewableLabel") : t("working.steps.processor.detailsLabel")}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {(step.details || step.viewable)?.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Verification Process */}
              {step.verification && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">{t("working.steps.processor.verificationProcess")}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-green-800">{step.verification.correct}</span>
                    </div>
                    <div className="flex items-center p-3 bg-red-50 rounded-lg">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-red-800">{step.verification.incorrect}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Outcome */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-blue-900 mb-2">{t("working.outcome")}</h3>
                <p className="text-blue-800">{step.outcome}</p>
              </div>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-blue-500"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final Summary */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("working.summaryTitle")}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("working.summaryText")}
          </p>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
}

