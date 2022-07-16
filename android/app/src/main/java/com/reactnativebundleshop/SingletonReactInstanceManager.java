package com.reactnativebundleshop;

import android.app.Activity;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;

public class SingletonReactInstanceManager {
    private static ReactInstanceManager reactInstanceManager;

    private SingletonReactInstanceManager() { }

    public static ReactInstanceManager getReactInstanceManager(Activity activity) {
        if (reactInstanceManager == null) {
            reactInstanceManager = ReactInstanceManager
                    .builder()
                    .setApplication(activity.getApplication())
                    .setCurrentActivity(activity)
                    .setJSMainModulePath("common")
                    .setJSBundleFile("assets://common.android.bundle")
                    .addPackages(Arrays.<ReactPackage>asList(new MainReactPackage()))
                    .setUseDeveloperSupport(BuildConfig.DEBUG)
                    .setInitialLifecycleState(LifecycleState.RESUMED)
                    .build();
        }
        return reactInstanceManager;
    }
}
