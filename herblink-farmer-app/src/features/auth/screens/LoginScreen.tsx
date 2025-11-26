import { useRouter } from "expo-router";
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
import { requestOtp } from "../api/authApi";
import { isValidPhoneNumber } from "../utils/validators";

export const LoginScreen = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRequestOtp = async () => {
    const normalized = "+91" + phoneNumber;

    if (!isValidPhoneNumber(normalized)) {
      setError("Enter a valid mobile number.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await requestOtp(normalized);
      router.push({ pathname: "/otp", params: { phoneNumber: normalized } });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to request OTP.");
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
        <Text style={styles.title}>Log in with mobile</Text>
        <Text style={styles.subtitle}>
          We will send a one-time password to confirm it is you.
        </Text>

        <TextInput
          placeholder="Enter mobile number"
          keyboardType="phone-pad"
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={13}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          disabled={loading}
          onPress={handleRequestOtp}
          activeOpacity={0.9}
        >
          <Text style={styles.buttonText}>
            {loading ? "Sending OTP..." : "Send OTP"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.secondaryText}>Back to onboarding</Text>
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
    fontSize: 16,
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

