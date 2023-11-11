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
      Profiles: {
        Row: {
          id: string
          username: string | null
        }
        Insert: {
          id: string
          username?: string | null
        }
        Update: {
          id?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      SheetModels: {
        Row: {
          created_at: string
          creator_id: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          creator_id?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          creator_id?: string | null
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "SheetModels_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      SheetModuleModels: {
        Row: {
          created_at: string
          fields: Json[] | null
          fields_count: number | null
          id: string
          sheet_model_id: string
          title: string | null
          type: Database["public"]["Enums"]["EFieldType"]
        }
        Insert: {
          created_at?: string
          fields?: Json[] | null
          fields_count?: number | null
          id?: string
          sheet_model_id: string
          title?: string | null
          type?: Database["public"]["Enums"]["EFieldType"]
        }
        Update: {
          created_at?: string
          fields?: Json[] | null
          fields_count?: number | null
          id?: string
          sheet_model_id?: string
          title?: string | null
          type?: Database["public"]["Enums"]["EFieldType"]
        }
        Relationships: [
          {
            foreignKeyName: "SheetModuleModels_sheet_model_id_fkey"
            columns: ["sheet_model_id"]
            isOneToOne: false
            referencedRelation: "SheetModels"
            referencedColumns: ["id"]
          }
        ]
      }
      StatFieldModels: {
        Row: {
          created_at: string
          id: string
          max_value: number | null
          min_value: number | null
          name: string
          sheet_module_model_id: string
          value: number
        }
        Insert: {
          created_at?: string
          id?: string
          max_value?: number | null
          min_value?: number | null
          name?: string
          sheet_module_model_id: string
          value?: number
        }
        Update: {
          created_at?: string
          id?: string
          max_value?: number | null
          min_value?: number | null
          name?: string
          sheet_module_model_id?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "StatFieldModels_sheet_module_model_id_fkey"
            columns: ["sheet_module_model_id"]
            isOneToOne: false
            referencedRelation: "SheetModuleModels"
            referencedColumns: ["id"]
          }
        ]
      }
      StringFieldModels: {
        Row: {
          created_at: string
          editable: boolean
          id: string
          name: string
          sheet_module_model_id: string
        }
        Insert: {
          created_at?: string
          editable?: boolean
          id?: string
          name?: string
          sheet_module_model_id: string
        }
        Update: {
          created_at?: string
          editable?: boolean
          id?: string
          name?: string
          sheet_module_model_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "StringFieldModels_sheet_module_model_id_fkey"
            columns: ["sheet_module_model_id"]
            isOneToOne: false
            referencedRelation: "SheetModuleModels"
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
      EFieldType: "String" | "Stats" | "Inventory"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
