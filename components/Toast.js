import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Toast, Theme } from 'teaset';

let customKey = null;

Toast.showLoading = (text) => {
  if (customKey) return;
  console.log('执行了')
  customKey = Toast.show({
    text,
    icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
    position: 'center',
    duration:30000,
  });
}

Toast.hideLoading = () => {
  if (!customKey) return;
  Toast.hide(customKey);
  customKey = null;
}

export default Toast;