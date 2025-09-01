import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"
import { authTables } from "@convex-dev/auth/server"

export default defineSchema({
  ...authTables,
  users: defineTable({
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
    role: v.optional(v.string()), // "admin", "coach", "athlete"
    dateOfBirth: v.optional(v.string()),
    sport: v.optional(v.string()),
    team: v.optional(v.string()),
    position: v.optional(v.string()),
    createdAt: v.number(),
  }).index("email", ["email"]),
  
  teams: defineTable({
    name: v.string(),
    sport: v.string(),
    coach: v.optional(v.string()), // coach name
    contactEmail: v.string(),
    contactPhone: v.optional(v.string()),
    createdAt: v.number(),
    isActive: v.boolean(),
  }),
  
  appointments: defineTable({
    userId: v.id("users"),
    teamId: v.optional(v.id("teams")),
    type: v.string(), // "individual", "team"
    testTypes: v.array(v.string()), // ["sprint", "jump", "endurance"]
    scheduledDate: v.string(),
    scheduledTime: v.string(),
    status: v.string(), // "scheduled", "completed", "cancelled"
    notes: v.optional(v.string()),
    createdAt: v.number(),
  }).index("userId", ["userId"]).index("teamId", ["teamId"]),
  
  testResults: defineTable({
    userId: v.id("users"),
    appointmentId: v.id("appointments"),
    testType: v.string(), // "sprint_5m", "sprint_10m", "cmj", "drop_jump", "endurance"
    results: v.object({
      // Flexible structure for different test types
      value: v.number(),
      unit: v.string(),
      additionalData: v.optional(v.any()),
    }),
    testDate: v.string(),
    notes: v.optional(v.string()),
    createdAt: v.number(),
  }).index("userId", ["userId"]).index("appointmentId", ["appointmentId"]),
  
  spiderDiagrams: defineTable({
    userId: v.id("users"),
    name: v.string(),
    categories: v.array(v.object({
      name: v.string(),
      value: v.number(), // 0-100
      maxValue: v.number(),
    })),
    isPublic: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("userId", ["userId"]),
})