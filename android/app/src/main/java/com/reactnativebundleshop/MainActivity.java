package com.reactnativebundleshop;

import android.os.Bundle;
import android.util.Log;

import androidx.appcompat.app.AppCompatActivity;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.CatalystInstance;
import com.facebook.react.bridge.CatalystInstanceImpl;
import com.facebook.react.bridge.ReactContext;
import com.facebook.soloader.SoLoader;

public class MainActivity extends AppCompatActivity {
    ReactRootView reactRootView;
    ReactInstanceManager reactInstanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        bootCommonRnBundle();
        delayToLoadReactNativeApp();
    }

    private void delayToLoadReactNativeApp() {
        new Thread(() -> {
            try {
                Thread.sleep(1500);
                runOnUiThread(() -> {
                    loadReactNativeApp();
                });
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }).start();
    }

    private void bootCommonRnBundle() {
        ReactInstanceManager reactInstanceManager = SingletonReactInstanceManager.getReactInstanceManager(this);
        reactInstanceManager.createReactContextInBackground();
    }

    private void loadReactNativeApp() {
        SoLoader.init(this, false);
        reactInstanceManager = SingletonReactInstanceManager.getReactInstanceManager(this);
        reactRootView = new ReactRootView(this);
        Log.e(this.getPackageName(), "in loadReactNativeApp() to check react-context");
        if (reactInstanceManager.hasStartedCreatingInitialContext()) {
            ReactContext reactContext = reactInstanceManager.getCurrentReactContext();
            CatalystInstance catalystInstance = reactContext.getCatalystInstance();
            ((CatalystInstanceImpl) catalystInstance).loadScriptFromAssets(reactContext.getAssets(), "assets://business.android.bundle", true);
            reactRootView.startReactApplication(reactInstanceManager, "ReactNativeBundleShop", null);
            Log.e(this.getPackageName(), "in loadReactNativeApp() to setContentView");
            setContentView(reactRootView);
        }
    }
}
