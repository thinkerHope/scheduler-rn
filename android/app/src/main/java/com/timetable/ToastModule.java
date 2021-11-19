package com.timetable;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class ToastModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  public ToastModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }
  // ReactContextBaseJavaModule要求派生类实现getName方法。
  // 这个函数用于返回一个字符串名字，这个名字在 JavaScript 端标记这个模块。
  // 这里我们把这个模块叫做ToastExample，
  // 这样就可以在 JavaScript 中通过NativeModules.ToastExample访问到这个模块。
  @Override
  public String getName() {
    return "ToastExample";
  }
  // 一个可选的方法getContants返回了需要导出给 JavaScript 使用的常量。
  // 它并不一定需要实现，但在定义一些可以被 JavaScript 同步访问到的预定义的值时非常有用。
  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
    constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
    return constants;
  }
  // 要导出一个方法给 JavaScript 使用，Java 方法需要使用注解@ReactMethod。
  // 方法的返回类型必须为void。
  @ReactMethod
  public void show(String message, int duration) {
    Toast.makeText(getReactApplicationContext(), message, duration).show();
  }
}
