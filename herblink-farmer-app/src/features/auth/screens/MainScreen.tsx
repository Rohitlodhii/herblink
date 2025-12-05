import * as Location from "expo-location";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { addHerb, type HerbPayload } from "../api/herbApi";
import { useAuth } from "../hooks/useAuth";

export const MainScreen = () => {
  const router = useRouter();
  const { clearToken, token } = useAuth();
  const [form, setForm] = useState<HerbPayload>({
    herbname: "",
    harvestDate: "",
    coordinates: "",
    pesticidesUsed: false,
    quantity: "",
    desc: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [locating, setLocating] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [createdHerbId, setCreatedHerbId] = useState<string | null>(null);

  const handleSignOut = async () => {
    await clearToken();
    router.replace("/onboarding");
  };

  const updateField = <K extends keyof HerbPayload>(key: K, value: HerbPayload[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const grabCoordinates = async () => {
    setErrorMessage(null);
    setSuccessMessage(null);
    setCreatedHerbId(null);
    try {
      setLocating(true);

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        throw new Error("Location permission denied. Please enable it to grab coordinates.");
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      const coords = `${location.coords.latitude.toFixed(6)}, ${location.coords.longitude.toFixed(6)}`;
      updateField("coordinates", coords);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to grab location.";
      setErrorMessage(message);
    } finally {
      setLocating(false);
    }
  };

  const handleSubmit = async () => {
    setErrorMessage(null);
    setSuccessMessage(null);
    setCreatedHerbId(null);

    if (!form.herbname || !form.harvestDate || !form.quantity || !form.desc) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!form.coordinates) {
      setErrorMessage("Please grab your location to fill the coordinates.");
      return;
    }

    try {
      setSubmitting(true);
      const response = await addHerb(form, token);
      setSuccessMessage(response.msg || "Herb added successfully.");
      setCreatedHerbId(response.data.id);
      setForm({
        herbname: "",
        harvestDate: "",
        coordinates: "",
        pesticidesUsed: false,
        quantity: "",
        desc: "",
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to add herb.";
      setErrorMessage(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.greeting}>Farmer Dashboard</Text>
        <Text style={styles.caption}>
          Log your herbs, track coordinates, and keep pesticide usage documented.
        </Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Add Herb</Text>

          <TextInput
            style={styles.input}
            placeholder="Herb name"
            value={form.herbname}
            onChangeText={(text) => updateField("herbname", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Harvest date (YYYY-MM-DD)"
            value={form.harvestDate}
            onChangeText={(text) => updateField("harvestDate", text)}
          />

          <View style={styles.coordinatesRow}>
            <TextInput
              style={[styles.input, styles.coordinatesInput]}
              placeholder="Coordinates"
              value={form.coordinates}
              editable={false}
            />
            <TouchableOpacity
              style={[styles.secondaryButton, locating && styles.disabledButton]}
              onPress={grabCoordinates}
              disabled={locating}
            >
              {locating ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.secondaryButtonText}>Grab location</Text>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Pesticides used?</Text>
            <Switch
              value={form.pesticidesUsed}
              onValueChange={(value) => updateField("pesticidesUsed", value)}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Quantity (e.g. 5kg)"
            value={form.quantity}
            onChangeText={(text) => updateField("quantity", text)}
          />

          <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder="Notes / description"
            value={form.desc}
            onChangeText={(text) => updateField("desc", text)}
            multiline
            textAlignVertical="top"
          />

          {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
          {successMessage && <Text style={styles.successText}>{successMessage}</Text>}
          {createdHerbId && (
            <View style={styles.herbIdPill}>
              <Text style={styles.herbIdLabel}>Herb ID</Text>
              <Text style={styles.herbIdValue}>{createdHerbId}</Text>
            </View>
          )}

          <TouchableOpacity
            style={[styles.primaryButton, (submitting || locating) && styles.disabledButton]}
            onPress={handleSubmit}
            disabled={submitting || locating}
          >
            {submitting ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.primaryButtonText}>Add herb</Text>
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fff9",
  },
  scrollContent: {
    padding: 24,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f5132",
  },
  caption: {
    fontSize: 16,
    color: "#495057",
    marginTop: 8,
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
    color: "#0f5132",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1e7dd",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: "#fbfffb",
  },
  coordinatesRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  coordinatesInput: {
    flex: 1,
    marginBottom: 0,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    marginBottom: 12,
  },
  switchLabel: {
    fontSize: 16,
    color: "#0f5132",
  },
  multilineInput: {
    minHeight: 90,
  },
  primaryButton: {
    backgroundColor: "#198754",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#0d6efd",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  disabledButton: {
    opacity: 0.6,
  },
  successText: {
    color: "#0f5132",
    marginBottom: 4,
    fontWeight: "500",
  },
  errorText: {
    color: "#dc3545",
    marginBottom: 4,
    fontWeight: "500",
  },
  herbIdPill: {
    borderWidth: 1,
    borderColor: "#badbcc",
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 18,
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  herbIdLabel: {
    fontSize: 12,
    color: "#6c757d",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  herbIdValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f5132",
    marginTop: 2,
  },
  signOutButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 24,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

