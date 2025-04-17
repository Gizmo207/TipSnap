package tip.snap.ui

import android.util.Log
import android.widget.Toast
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import com.google.firebase.auth.FirebaseAuth

@Composable
fun AuthScreen() {
    val auth = FirebaseAuth.getInstance()
    val context = LocalContext.current

    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(24.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        TextField(
            value = email,
            onValueChange = { email = it },
            label = { Text("Email") },
            modifier = Modifier.fillMaxWidth()
        )
        Spacer(modifier = Modifier.height(12.dp))
        TextField(
            value = password,
            onValueChange = { password = it },
            label = { Text("Password") },
            modifier = Modifier.fillMaxWidth()
        )
        Spacer(modifier = Modifier.height(24.dp))

        Button(
            onClick = {
                auth.signInWithEmailAndPassword(email, password)
                    .addOnCompleteListener { task ->
                        if (task.isSuccessful) {
                            Toast.makeText(context, "Login success!", Toast.LENGTH_SHORT).show()
                        } else {
                            // Try to create a new account
                            auth.createUserWithEmailAndPassword(email, password)
                                .addOnCompleteListener { signUpTask ->
                                    if (signUpTask.isSuccessful) {
                                        Toast.makeText(context, "Account created!", Toast.LENGTH_SHORT).show()
                                    } else {
                                        Toast.makeText(context, "Auth failed.", Toast.LENGTH_SHORT).show()
                                        Log.e("Auth", signUpTask.exception?.message ?: "Error")
                                    }
                                }
                        }
                    }
            }
        ) {
            Text("Sign In / Sign Up")
        }
    }
}
