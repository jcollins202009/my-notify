import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.page}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.hero}>
          <View style={styles.heroContent}>
            <View style={styles.brandRow}>
              <View style={styles.brandMark}>
                <Text style={styles.brandInitial}>m</Text>
              </View>
              <Text style={styles.brandName}>MY NOTIFY</Text>
              <View style={styles.headerRule} />
              <Text style={styles.stepLabel}>REMINDER DETAILS</Text>
            </View>

            <View style={styles.intro}>
              <Text style={styles.eyebrow}>A NOTE FOR LATER</Text>
              <Text style={styles.heading}>A little note{ '\n' }for future you.</Text>
              <View style={styles.headingAccent} />
            </View>
          </View>
        </View>

        <View style={styles.formArea}>
          <View style={styles.form}>
            <View style={styles.fieldGroup}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>TITLE</Text>
                <Text style={styles.fieldNumber}>01</Text>
              </View>
              <TextInput
                accessibilityLabel="Reminder title"
                autoCapitalize="sentences"
                onChangeText={setTitle}
                placeholder="Call the dentist"
                placeholderTextColor={colors.muted}
                returnKeyType="next"
                selectionColor={colors.coral}
                style={styles.titleInput}
                value={title}
              />
              <View style={styles.inputRule} />
            </View>

            <View style={styles.fieldGroup}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>MESSAGE</Text>
                <Text style={styles.optionalLabel}>OPTIONAL <Text style={styles.fieldNumber}>02</Text></Text>
              </View>
              <TextInput
                accessibilityLabel="Optional reminder message"
                multiline
                onChangeText={setMessage}
                placeholder="Add a detail, a name, or leave it blank"
                placeholderTextColor={colors.muted}
                selectionColor={colors.coral}
                style={styles.messageInput}
                textAlignVertical="top"
                value={message}
              />
              <View style={styles.inputRule} />
            </View>
          </View>

          <View style={styles.footer}>
            <View style={styles.footerDot} />
            <Text style={styles.footerText}>MADE FOR THE MOMENTS AHEAD</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const colors = {
  background: '#F4F5F0',
  forest: '#173B35',
  ink: '#202B27',
  muted: '#89938D',
  coral: '#F08B68',
  acid: '#D2E177',
  line: '#CDD5CE',
  heroLine: '#416159',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  page: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: colors.background,
  },
  hero: {
    minHeight: 330,
    backgroundColor: colors.forest,
  },
  heroContent: {
    width: '100%',
    maxWidth: 620,
    alignSelf: 'center',
    paddingHorizontal: 28,
    paddingTop: 22,
    paddingBottom: 38,
  },
  brandRow: {
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandMark: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: colors.acid,
  },
  brandInitial: {
    color: colors.forest,
    fontFamily: 'Georgia',
    fontSize: 22,
    lineHeight: 26,
  },
  brandName: {
    marginLeft: 10,
    color: '#F4F5F0',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.4,
  },
  headerRule: {
    height: 1,
    flex: 1,
    marginHorizontal: 14,
    backgroundColor: colors.heroLine,
  },
  stepLabel: {
    color: colors.acid,
    fontFamily: 'Courier',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  intro: {
    marginTop: 67,
  },
  eyebrow: {
    marginBottom: 15,
    color: colors.coral,
    fontFamily: 'Courier',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.1,
  },
  heading: {
    maxWidth: 460,
    color: '#F4F5F0',
    fontFamily: 'Georgia',
    fontSize: 39,
    lineHeight: 45,
  },
  headingAccent: {
    width: 46,
    height: 4,
    marginTop: 22,
    borderRadius: 2,
    backgroundColor: colors.coral,
  },
  formArea: {
    flex: 1,
    width: '100%',
    maxWidth: 620,
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 28,
    paddingTop: 34,
    paddingBottom: 24,
  },
  form: {
    gap: 34,
  },
  fieldGroup: {
    gap: 11,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: colors.forest,
    fontFamily: 'Courier',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  optionalLabel: {
    color: colors.muted,
    fontFamily: 'Courier',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  titleInput: {
    minHeight: 49,
    paddingHorizontal: 0,
    paddingVertical: 7,
    color: colors.ink,
    fontFamily: 'Georgia',
    fontSize: 21,
  },
  messageInput: {
    minHeight: 112,
    paddingHorizontal: 0,
    paddingTop: 7,
    paddingBottom: 10,
    color: colors.ink,
    fontSize: 15,
    lineHeight: 22,
  },
  inputRule: {
    height: 1,
    backgroundColor: colors.line,
  },
  fieldNumber: {
    color: colors.muted,
    fontFamily: 'Courier',
    fontSize: 10,
    fontWeight: '400',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginTop: 34,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: colors.line,
  },
  footerDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.coral,
  },
  footerText: {
    color: colors.muted,
    fontFamily: 'Courier',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
});
