import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../hooks/useAuth";

export const MainScreen = () => {
  const router = useRouter();
  const { clearToken } = useAuth();

  const handleSignOut = async () => {
    await clearToken();
    router.replace("/onboarding");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Farmer Dashboard</Text>
      <Text style={styles.caption}>
        You are now authenticated. Build dashboard widgets here.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f1fff6",
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f5132",
  },
  caption: {
    fontSize: 16,
    color: "#495057",
    textAlign: "center",
    marginVertical: 16,
  },
  button: {
    backgroundColor: "#dc3545",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

