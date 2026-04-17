export interface Profile {
  id: string
  email: string | null
  full_name: string | null
  avatar_url: string | null
  is_admin: boolean
  preferred_language: 'fr' | 'en'
  theme: 'light' | 'dark' | 'system'
  created_at: string
  updated_at: string
}

export interface Device {
  id: string
  user_id: string
  device_name: string
  device_type: 'android' | 'iphone'
  brand: string | null
  model: string | null
  imei: string | null
  phone_number: string | null
  is_active: boolean
  last_seen: string | null
  last_latitude: number | null
  last_longitude: number | null
  last_address: string | null
  battery_level: number | null
  is_online: boolean
  created_at: string
  updated_at: string
}

export interface LocationHistory {
  id: string
  device_id: string
  user_id: string
  latitude: number
  longitude: number
  address: string | null
  accuracy: number | null
  recorded_at: string
}

export interface TheftReport {
  id: string
  user_id: string | null
  device_id: string | null
  email: string
  phone_number: string | null
  brand: string
  model: string
  imei: string | null
  description: string | null
  status: 'pending' | 'investigating' | 'found' | 'closed'
  reported_at: string
  updated_at: string
}

export interface Notification {
  id: string
  user_id: string
  device_id: string | null
  type: 'location_update' | 'device_online' | 'device_offline' | 'suspicious_activity' | 'theft_report_update'
  title: string
  message: string
  is_read: boolean
  created_at: string
}

export interface ChatMessage {
  id: string
  user_id: string
  role: 'user' | 'assistant'
  content: string
  created_at: string
}

export interface AdminLog {
  id: string
  admin_id: string
  action: string
  target_type: string | null
  target_id: string | null
  details: Record<string, unknown> | null
  created_at: string
}

export interface DashboardStats {
  totalDevices: number
  onlineDevices: number
  offlineDevices: number
  pendingReports: number
  recentActivity: number
}
