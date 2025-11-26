import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const steps = [
  "Monitor crop health insights",
  "Get real-time market updates",
  "Manage deliveries with ease",
];

export const OnboardingScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Welcome to</Text>
      <Text style={styles.title}>HerbLink Farmer</Text>
      <Text style={styles.subtitle}>
        Grow smarter with a dashboard built for farmers.
      </Text>

      <View style={styles.card}>
        {steps.map((step) => (
          <View key={step} style={styles.stepRow}>
            <View style={styles.bullet} />
            <Text style={styles.stepText}>{step}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        onPress={() => router.push("/login")}
        style={styles.ctaButton}
        activeOpacity={0.85}
      >
        <Text style={styles.ctaText}>Continue with mobile number</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    color: "#6c757d",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
    color: "#0f5132",
  },
  subtitle: {
    fontSize: 16,
    color: "#495057",
    marginTop: 12,
    marginBottom: 32,
  },
  card: {
    borderRadius: 16,
    backgroundColor: "#f8f9fa",
    padding: 24,
    marginBottom: 48,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  bullet: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#20c997",
    marginRight: 12,
  },
  stepText: {
    fontSize: 16,
    color: "#212529",
    flex: 1,
  },
  ctaButton: {
    backgroundColor: "#1f8a53",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  ctaText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

