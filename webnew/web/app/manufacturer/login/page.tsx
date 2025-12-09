\"use client\";

import { useState } from \"react\";
import { useTranslation } from \"react-i18next\";
import { Factory, Shield, CheckCircle } from \"lucide-react\";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useRouter } from \"next/navigation\";
import \"@/i18n/index\";

export default function ManufacturerLogin() {
  const { t } = useTranslation();
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mobile || !email) {
      alert(t("entities.manufacturer.organization.missingInfo", "Missing Information\nPlease enter both mobile number and email address."));
      return;
    }

    if (mobile.length !== 10) {
      alert(t("entities.manufacturer.manager.invalidMobile", "Invalid Mobile Number\nPlease enter a valid 10-digit mobile number."));
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("userMobile", mobile);
      localStorage.setItem("userEmail", email);
      router.push("/manufacturer/verify-otp")
    }, 1000);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl shadow-elegant mb-4">
            <Factory className="h-8 w-8 " />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{t("entities.manufacturer.title", "Manufacturer Portal")}</h1>
          <p className="text-muted-foreground">{t("common.signInToContinue", "Sign in to register your manufacturing unit")}</p>
        </div>

        <Card>
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl">{t("common.welcomeBack", "Welcome Back")}</CardTitle>
            <CardDescription>{t("common.enterDetailsForRegistration", "Enter your details to continue with registration")}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mobile">{t("chain.details", "Mobile Number")}</Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder={t("forms.organization.namePlaceholder", "Enter your 10-digit mobile number")}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">{t("entities.manufacturer.email", "Email Address")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("entities.manufacturer.manager.emailPlaceholder", "Enter your email address")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="transition-smooth focus:shadow-hover"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full cursor-pointer hover:shadow-hover transition-smooth"
                disabled={isLoading}
              >
                {isLoading ? t("kisanlogincard.loading", "Sending OTP...") : t("kisanlogincard.submitbtn", "Send OTP")}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-success" />
            <span>{t("common.secure", "Secure")}</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-success" />
            <span>{t("common.verified", "Verified")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

