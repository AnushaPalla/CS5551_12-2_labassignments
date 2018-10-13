package com.example.prane.aselab2;

import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;

import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class MainActivity extends AppCompatActivity {

    private FirebaseAuth auth;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        auth=FirebaseAuth.getInstance();
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    public void Login(View v)
    {
        EditText un=(EditText)findViewById(R.id.Username);
        String username=un.getText().toString();
        EditText pass=(EditText)findViewById(R.id.Password);
        String password=un.getText().toString();
            auth.signInWithEmailAndPassword(username, password)
                    .addOnCompleteListener(MainActivity.this, new OnCompleteListener<AuthResult>() {
                        @Override
                        public void onComplete(@NonNull Task<AuthResult> task) {
                            if (!task.isSuccessful()) {
                                Log.d("MYLogin", "Loginfail");
                            } else {
                                    Log.d("MYLogin", "Loginpass");
                                    Intent intent = new Intent(MainActivity.this, HomeActivity.class);
                                    startActivity(intent);
                            }
                        }
                    });
    }
    public void Register(View v)
    {
        EditText un=(EditText)findViewById(R.id.Username);
        String username=un.getText().toString();
        EditText pass=(EditText)findViewById(R.id.Password);
        String password=un.getText().toString();
        auth.createUserWithEmailAndPassword(username, password)
                .addOnCompleteListener(MainActivity.this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if (!task.isSuccessful()) {
                            Log.d("MYLogin", "Loginfail");
                        } else {
                            Log.d("MYLogin", "Loginpass");
                            Intent intent = new Intent(MainActivity.this, HomeActivity.class);
                            startActivity(intent);
                        }
                    }
                });
    }
}
