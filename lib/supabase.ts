export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      SheetModels: {
        Row: {
          created_at: string
          id: string
          name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "SheetModels_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      SheetModeModules: {
        Row: {
          created_at: string
          id: string
          sheet_model: string
          title: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          sheet_model: string
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          sheet_model?: string
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "SheetModeModules_sheet_model_fkey"
            columns: ["sheet_model"]
            isOneToOne: false
            referencedRelation: "SheetModels"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
