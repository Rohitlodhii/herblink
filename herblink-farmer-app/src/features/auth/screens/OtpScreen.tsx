import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { verifyOtp } from "../api/authApi";
import { useAuth } from "../hooks/useAuth";
import { isValidOtp } from "../utils/validators";

export const OtpScreen = () => {
  const router = useRouter();
  const { phoneNumber } = useLocalSearchParams<{ phoneNumber: string }>();
  const { saveToken } = useAuth();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!phoneNumber) {
      setError("Missing phone number. Please restart login.");
      return;
    }

    if (!isValidOtp(otp)) {
      setError("Enter the 4-6 digit OTP.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const result = await verifyOtp(phoneNumber, otp);
      await saveToken(result.token);
      router.replace("/main");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to verify OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Enter OTP</Text>
        <Text style={styles.subtitle}>
          We sent a code to {phoneNumber ?? "your number"}.
        </Text>

        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
          placeholder="123456"
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleVerify}
          disabled={loading}
          activeOpacity={0.9}
        >
          <Text style={styles.buttonText}>
            {loading ? "Verifying..." : "Verify OTP"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace("/login")}>
          <Text style={styles.secondaryText}>Change mobile number</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f5132",
  },
  subtitle: {
    fontSize: 15,
    color: "#6c757d",
    marginVertical: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 12,
    padding: 16,
    fontSize: 24,
    letterSpacing: 12,
    textAlign: "center",
    marginBottom: 12,
  },
  error: {
    color: "#d62828",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#1f8a53",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryText: {
    color: "#198754",
    fontSize: 14,
    textAlign: "center",
  },
});

