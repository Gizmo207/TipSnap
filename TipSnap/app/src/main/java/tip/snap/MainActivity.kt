package tip.snap

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import tip.snap.ui.AuthScreen
import tip.snap.ui.theme.TipSnapTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            TipSnapTheme {
                AuthScreen()
            }
        }
    }
}
