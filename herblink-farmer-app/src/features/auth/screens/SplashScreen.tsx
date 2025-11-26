import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../hooks/useAuth";

export const SplashScreen = () => {
  const router = useRouter();
  const { token, initializing } = useAuth();

  useEffect(() => {
    if (initializing) {
      return;
    }

    const timeout = setTimeout(() => {
      if (token) {
        router.replace("/main");
      } else {
        router.replace("/onboarding");
      }
    }, 1200);

    return () => clearTimeout(timeout);
  }, [initializing, token, router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HerbLink Farmer</Text>
      <ActivityIndicator size="large" color="#1f8a53" />
      <Text style={styles.caption}>Preparing your farm insights...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecfdf3",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 24,
    color: "#0f5132",
  },
  caption: {
    marginTop: 16,
    fontSize: 14,
    color: "#198754",
  },
});

