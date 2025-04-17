plugins {
    alias(libs.plugins.google.services) apply false
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.android) apply false
    alias(libs.plugins.kotlin.compose) apply false
}

// ✅ This satisfies the plugin warning in a Kotlin DSL project
val compileSdk = 35
