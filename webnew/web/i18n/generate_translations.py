import json
import os

# Base English translations (simplified for brevity - full version in en.json)
en_translations = {
    "Home": "Home",
    "navbar": {
        "accessBarHeaderLeft": "Government of India",
        "accessBarRightSkipButton": "Skip to main content",
        "NavLoginBtn": "Admin Login",
        "DDOrgs": "Organisations",
        "ddorgs1": "Farmers Portal",
        "ddorgs2": "Processor Portal",
        "ddorgs3": "Lab Portal",
        "ddorgs4": "Manufacturer Portal",
        "DDabout": "Search ID",
        "DDHelp": "See Chain",
        "DDScan": "Scan Product",
        "DDcomplain": "Complain"
    },
}

# Hindi translations
hi_translations = {
    "Home": "होम",
    "navbar": {
        "accessBarHeaderLeft": "भारत सरकार",
        "accessBarRightSkipButton": "मुख्य सामग्री पर जाएं",
        "NavLoginBtn": "लॉग इन करें",
        "DDOrgs": "संगठन",
        "ddorgs1": "किसान पोर्टल",
        "ddorgs2": "प्रोसेसर पोर्टल",
        "ddorgs3": "लैब पोर्टल",
        "ddorgs4": "विनिर्माता पोर्टल",
        "DDabout": "खोज आईडी",
        "DDHelp": "श्रृंखला देखें",
        "DDScan": "उत्पाद स्कैन करें",
        "DDcomplain": "शिकायत"
    },
}

# Tamil translations
ta_translations = {
    "Home": "முகப்பு",
    "navbar": {
        "accessBarHeaderLeft": "இந்திய அரசு",
        "accessBarRightSkipButton": "முக்கிய உள்ளடக்கத்திற்குத் செல்லவும்",
        "NavLoginBtn": "நிர்வாகம் உள்நுழைய",
        "DDOrgs": "நிறுவனங்கள்",
        "ddorgs1": "விவசாயிகள் போர்டல்",
        "ddorgs2": "செயலாக்கி போர்டல்",
        "ddorgs3": "ஆய்வக போர்டல்",
        "ddorgs4": "உற்பத்தியாளர் போர்டல்",
        "DDabout": "அடையாள் தேடல்",
        "DDHelp": "சங்கிலியைப் பார்",
        "DDScan": "தயாரிப்பை ஸ்கேன் செய்யவும்",
        "DDcomplain": "புகாரளி"
    },
}

# Telugu translations
te_translations = {
    "Home": "హోమ్",
    "navbar": {
        "accessBarHeaderLeft": "భారత ప్రభుత్వం",
        "accessBarRightSkipButton": "ప్రధాన విషయానికి చేరుకోండి",
        "NavLoginBtn": "నిర్వాహకుడు లాగిన్",
        "DDOrgs": "సంస్థలు",
        "ddorgs1": "రైతుల పోర్టల్",
        "ddorgs2": "ప్రోసెసర్ పోర్టల్",
        "ddorgs3": "ల్యాబ్ పోర్టల్",
        "ddorgs4": "తయారీదారు పోర్టల్",
        "DDabout": "ID ఖోజ చేయండి",
        "DDHelp": "చైన్ చూడండి",
        "DDScan": "ఉత్పత్తిని స్కాన్ చేయండి",
        "DDcomplain": "ఫిర్యాదు"
    },
}

# Kannada translations  
kn_translations = {
    "Home": "ಮುಖಪುಟ",
    "navbar": {
        "accessBarHeaderLeft": "ಭಾರತ ಸರ್ಕಾರ",
        "accessBarRightSkipButton": "ಮುಖ್ಯ ವಿಷಯಕ್ಕೆ ಹೋಗಿ",
        "NavLoginBtn": "ನಿರ್ವಾಹಕ ಲಾಗಿನ್",
        "DDOrgs": "ಸಂಸ್ಥೆಗಳು",
        "ddorgs1": "ರೈತರ ಪೋರ್ಟಲ್",
        "ddorgs2": "ಪ್ರೊಸೆಸರ್ ಪೋರ್ಟಲ್",
        "ddorgs3": "ಲ್ಯಾಬ್ ಪೋರ್ಟಲ್",
        "ddorgs4": "ಉತ್ಪಾದಕ ಪೋರ್ಟಲ್",
        "DDabout": "ID ಹುಡುಕಿ",
        "DDHelp": "ಸರಪಳಿಯನ್ನು ನೋಡಿ",
        "DDScan": "ಉತ್ಪನ್ನವನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
        "DDcomplain": "ಗೊಂದಲ"
    },
}

# Bengali translations
bn_translations = {
    "Home": "হোম",
    "navbar": {
        "accessBarHeaderLeft": "ভারত সরকার",
        "accessBarRightSkipButton": "প্রধান বিষয়বস্তুতে যান",
        "NavLoginBtn": "প্রশাসক লগইন",
        "DDOrgs": "সংস্থাগুলি",
        "ddorgs1": "কৃষক পোর্টাল",
        "ddorgs2": "প্রসেসর পোর্টাল",
        "ddorgs3": "ল্যাব পোর্টাল",
        "ddorgs4": "নির্মাতা পোর্টাল",
        "DDabout": "আইডি অনুসন্ধান করুন",
        "DDHelp": "চেইন দেখুন",
        "DDScan": "পণ্য স্ক্যান করুন",
        "DDcomplain": "অভিযোগ"
    },
}

# Punjabi translations
pa_translations = {
    "Home": "ਘਰ",
    "navbar": {
        "accessBarHeaderLeft": "ਭਾਰਤ ਸਰਕਾਰ",
        "accessBarRightSkipButton": "ਮੁੱਖ ਸਮੱਗਰੀ ਤੱਕ ਜਾਓ",
        "NavLoginBtn": "ਪ್ਰਸ਼ਾਸਕ ਲਾਗਇਨ",
        "DDOrgs": "ਸੰਸਥਾਵਾਂ",
        "ddorgs1": "ਕਿਸਾਨ ਪੋਰਟਲ",
        "ddorgs2": "ਪ੍ਰੋਸੈਸਰ ਪੋਰਟਲ",
        "ddorgs3": "ਲੈਬ ਪੋਰਟਲ",
        "ddorgs4": "ਨਿਰਮਾਤਾ ਪੋਰਟਲ",
        "DDabout": "ਖੋਜ ID",
        "DDHelp": "ਲੜੀ ਵੇਖੋ",
        "DDScan": "ਉਤਪਾਦ ਸਕੈਨ ਕਰੋ",
        "DDcomplain": "ਸ਼ਿਕਾਇਤ"
    },
}

# Gujarati translations
gu_translations = {
    "Home": "હોમ",
    "navbar": {
        "accessBarHeaderLeft": "ભારત સરકાર",
        "accessBarRightSkipButton": "મુખ્ય સામગ્રી પર જાઓ",
        "NavLoginBtn": "વહીવટી લૉગઇન",
        "DDOrgs": "સંસ્થાઓ",
        "ddorgs1": "ખેડૂત પોર્ટલ",
        "ddorgs2": "પ્રોસેસર પોર્ટલ",
        "ddorgs3": "લેબ પોર્ટલ",
        "ddorgs4": "નિર્માતા પોર્ટલ",
        "DDabout": "ID શોધો",
        "DDHelp": "શૃંખલા જુઓ",
        "DDScan": "ઉત્પાદન સ્કેન કરો",
        "DDcomplain": "ફરિયાદ"
    },
}

languages = {
    "en": en_translations,
    "hi": hi_translations,
    "ta": ta_translations,
    "te": te_translations,
    "kn": kn_translations,
    "bn": bn_translations,
    "pa": pa_translations,
    "gu": gu_translations,
}

# Note: This is just a template showing structure.
# The complete i18n files with all keys need to be created manually
# or using a proper translation service for accuracy.

print("Language files template created. Run translation service to complete.")
