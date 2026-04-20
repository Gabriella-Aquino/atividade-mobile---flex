import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Text } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        sceneStyle: { backgroundColor: '#b4bad4' },
        tabBarStyle: { backgroundColor: '#b4bad4' },
      }}>
      <Tabs.Screen
        name="q1"
        options={{
          title: 'q1',
          tabBarIcon: ({ color }) => <Text style={{ color }}>q1</Text>,
        }}
      />
      <Tabs.Screen
        name="q2"
        options={{
          title: 'q2',
          tabBarIcon: ({ color }) => <Text style={{ color }}>q2</Text>,
        }}
      />
      <Tabs.Screen
        name="q3"
        options={{
          title: 'q3',
          tabBarIcon: ({ color }) => <Text style={{ color }}>q3</Text>,
        }}
      />
      <Tabs.Screen
        name="q4"
        options={{
          title: 'q4',
          tabBarIcon: ({ color }) => <Text style={{ color }}>q4</Text>,
        }}
      />
      <Tabs.Screen
        name="q5"
        options={{
          title: 'q5',
          tabBarIcon: ({ color }) => <Text style={{ color }}>q5</Text>,
        }}
      />
      <Tabs.Screen
        name="q6"
        options={{
          title: 'q6',
          tabBarIcon: ({ color }) => <Text style={{ color }}>q6</Text>,
        }}
      />
    </Tabs>
  );
}
